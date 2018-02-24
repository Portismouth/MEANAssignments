var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
    title: {
        type: String,
        required: [true, "A title is required"]
    },
    desc: {
        type: String,
        required: [true, "Please enter a description."],
        maxlength: [200, "You can't really have that much to say about this bicycle, can you?"]
    },
    price: {
        type: Number,
        required: [true, "Please enter a price."]
    },
    location: {
        type: String,
        required: [true, "Please enter a location."]
    },
    image: {
        //potentially change to buffer?
        type: String,
        required: [true, "Please enter an image URL"],
        validate: {
            validator: function (value) {
                return /(https?:\/\/.*\.(?:png|jpg))/i.test(value);
            },
            message: "Please enter a valid image url."
        }
    }

}, { timestamps: true });

mongoose.model("Listing", listingSchema);