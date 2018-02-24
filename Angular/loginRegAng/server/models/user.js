var mongoose = require("mongoose");
var bcrypt = require("bcrypt-as-promised");
var uniqueValidator = require("mongoose-unique-validator")

//Validators

//Schemas

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required."],
        unique: [true, "This user already exists!"],
        validate: {
            validator: function (value) {
                return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(value);
            },
            message: "Please enter a valid email address."
        }
    },
    firstName: {
        type: String,
        required: [true, "Please enter a first name!"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please enter a last name"],
        trim: true
    },
    birthday: {
        type: Date,
        required: [true, "A birthdate is required!"],
        validate: {
            validator: function (value) {
                if (value >= Date.now) {
                    return false;
                }
            },
            message: "You need to be at least born to register..."
        }
    },
    password: {
        type: String,
        required: [true, "Enter a password!"],
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password must contain at least 1 number, uppercase and special character."
        }
    }
}, { timestamps: true });

userSchema.pre("save", function (next) {
    console.log("============= user trying to save===============");

    //bcrypt password
    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            console.log("=============hashing=================");
            this.password = hashedPassword;
            next();
        }).catch(error => {
            next();
        });
});

// userSchema.methods.comparePassword = function (candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

userSchema.plugin(uniqueValidator, { message: "This email is already registered. Try logging in." });
mongoose.model("User", userSchema);
