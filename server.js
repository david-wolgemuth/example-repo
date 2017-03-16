/*
<*--SECTION(1.3)
title: "Server Setup"
description: "Create the main server file that will start up the app."
--*>
*/
// <*--CODE(1.3)
const express = require("express");
const app = express();

// <*--CODE(3.1)
// Use body-parser so `request.body` contains data sent from the user
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// --*>3.1

// <*--CODE(2.0)
require("./config/db");  // Load mongoose and register schemas
// --*>2.0
// <*--CODE(3.2)
app.use("/api", require("./config/routes"));  // Listen for routes starting with "/api"
// --*>3.2


const port = 3000;
app.listen(port, () => {
    console.log("Server Listening On Port", port);
});
// --*>
