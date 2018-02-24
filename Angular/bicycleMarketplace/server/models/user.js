var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-as-promised");
var uniqueValidator = require("mongoose-unique-validator");

var user = new Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name."],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please enter a last name"],
        trim: true
    },
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
    }, 
    loginAttempts: {
        type: Number,
        required: true,
        default: 0
    },
    lockUntil: {
        type: Number
    }
}, { timestamps: true });

user.statics.failedLogin = {
    notFound: 0,
    passwordIncorrect: 1
}

user.pre("save", function (next) {
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

user.plugin(uniqueValidator, { message: "This email is already registered. Try logging in." });
mongoose.model("User", user);