/*
<*--SECTION(3.1)
title: "Controller Methods"
description: "Create methods to handle requests for todo items.  They will just be placeholders for now.  See https://expressjs.com/en/api.html#req to learn more about the `request` parameter and https://expressjs.com/en/api.html#res to learn more about the `response` parameter."
--*>
*/
// <*--CODE(3.1)
// Return List Of All Todo Items
module.exports.index = function (request, response)
{
    console.log("INDEX:", request.method, request.url);

    response.json({ 
        message: "All Todo Items",
    });
};

// Create New User, Return Newly Created Item
module.exports.create = function (request, response)
{
    console.log("CREATE:", request.method, request.url, request.body);

    response.json({ 
        message: "Successfully Created Todo Item",
    });
};
// --*>3.1