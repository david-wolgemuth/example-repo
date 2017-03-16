/*
<*--SECTION(2.1)
title: "Mongoose Setup"
description: "Connect to the database.  See http://mongoosejs.com/docs/connections.html for further details"
--*>
*/
/*
<*--SECTION(2.3)
title: "Load all models"
description: "See https://nodejs.org/api/path.html#path_path_join_paths for information of why we are using `path`"
--*>
*/
// <*--CODE(2.1)
const mongoose = require("mongoose");
// <*--CODE(2.3)
const path = require("path");
// --*>2.3 (this number doesn't need to be  here, but it's just to help )
mongoose.connect("mongodb://localhost/example-repo");
// --*>2.1

/*
<*--SECTION(2.3)
title: "Load Models"
--*>
*/
// <*--CODE(2.3)
const modelsDirectory = path.join("..", "models");
require(path.join(modelsDirectory, "todo-item"));
// --*>2.3
