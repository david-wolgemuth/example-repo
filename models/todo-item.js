/* 
<*--SECTION(2.2)
title: "Creating Models"
description: "Creating the mongoose model for our TodoItem.

An example TodoItem might look like this:
{
    title: "Do My Taxes",
    dueBy: "2017-04-15T05:00:00.000Z",
    completedAt: null
}

See http://mongoosejs.com/docs/guide.html for details on creating Schemas."
--*>
*/
// <*--CODE(2.2)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoItemSchema = new Schema({
    title: {
        type: String,
        // Read about custom messages for validations:  http://mongoosejs.com/docs/validation.html
        required: [true, "title is required for TodoItem"]
    },
    dueBy: {
        type: Date,
        validate: {
            // Read about custom validations:  http://mongoosejs.com/docs/validation.html
            validator: function (date) {
                return (new(date) < new Date())
            },
            message: "dueBy date must be in the future"
        }
    },
    completedAt: {
        type: Date
    }
}, {
    timestamps: true  // What does this option do? http://mongoosejs.com/docs/guide.html#timestamps
});
// See all available data type:  http://mongoosejs.com/docs/schematypes.html
