/*
<*--SECTION(1.3)
title: "Server Setup"
description: "Create the main server file that will start up the app."
--*>
*/
// <*--CODE(1.3)
const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log("Server Listening On Port", port);
});
// --*>
