const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    name: { type: String, 
            required: [true, "Name is required"],
            minlength: [3, "Name must be 3 characters"]},

    type: {type:String,
            required: [true, "Type is required"],
            minlength: [3, "Type must be 3 characters"]},

    description: {type:String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters"]
        },

    skillOne:{type:String},

    skillTwo:{type:String},
    
    skillThree: {type:String}

}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);