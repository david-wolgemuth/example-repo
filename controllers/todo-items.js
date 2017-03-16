/*
<*--SECTION(3.1)
title: "Controller Methods"
description: "Create methods to handle requests for todo items.  They will just be placeholders for now.  See https://expressjs.com/en/api.html#req to learn more about the `request` parameter and https://expressjs.com/en/api.html#res to learn more about the `response` parameter."
--*>
*/
/*
<*--SECTION(4.0)
title: "Using Mongoose Within Controller"
description: "Every mongoose query will take a callback as its last parameter.  See http://mongoosejs.com/docs/queries.html to learn more about how mongoose queries run callbacks."
--*>
*/
/*
<*--SECTION(4.1)
title: "Mongoose Documents"
description: "We can create a document by saying `new ModelName()` or retrieve existing documents by querying the db.  See http://mongoosejs.com/docs/documents.html to learn more about how mongoose documents work."
--*>
*/
// <*--CODE(4.0)
const mongoose = require("mongoose");
const TodoItem = mongoose.model("TodoItem");

// --*>4.0
// <*--CODE(3.1)
// Return List Of All Todo Items
module.exports.index = function (request, response)
{
    console.log("INDEX:", request.method, request.url);

    // <*--CODE(4.0)
    // First parameter of `find` is the filter.  `{}` indicates that we should select ALL items.
    TodoItem.find({}, (error, items) => {
        // The response must be within this inner callback function so it executes AFTER the items are found
    // --*>4.0
        response.json({ 
            message: "All Todo Items",
            // <*--CODE(4.0)
            items: items
            // --*>4.0
        });

    // <*--CODE(4.0)
    });
    // --*>4.0
};

// Create New User, Return Newly Created Item
module.exports.create = function (request, response)
{
    console.log("CREATE:", request.method, request.url, request.body);

    // <*--CODE(4.1)
    // Create a new item using data sent from the client
    const item = new TodoItem({
        title: request.body.title,
        dueBy: request.body.dueBy
    });
    // Save the item
    item.save((error) => {
        // There may be an error if the data didn't pass validations
        if (error) {
            response.json({
                message: "Error Creating User",
                error: error
            });
        } else {
    // --*>4.1
            response.json({ 
                message: "Successfully Created Todo Item",
                // <*--CODE(4.1)
                item: item  // Send the newly created item back to the client
                // --*>4.1
            });
        // <*--CODE(4.1)
        }
    });
    // --*>4.1
};
// --*>3.1