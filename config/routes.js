/*
<*--SECTION(3.2)
title: "Create Router"
description: "Create a router and map the routes to the controller methods.  See https://expressjs.com/en/guide/routing.html for more information on express routing."
--*>3.2
*/
// <*--CODE(3.2)
const express = require("express");
const router = express.Router();
const path = require("path");
const controllersPath = path.join("..", "controllers");
const todoItems = require(path.join(controllersPath, "todo-items"));

// Maps the routes to controller methods
router.get("/todo-items", todoItems.index);
router.post("/todo-items", todoItems.create);

module.exports = router;
// --*>3.2
