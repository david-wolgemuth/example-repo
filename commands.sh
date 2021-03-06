<<"COMMENT"
<*--SECTION(1.0)
title: "Setup Git"
description: "Initialize a new git repository"
--*>
COMMENT
# <*--CODE(1.0)
git init  # Notice: this will create a `.git` directory
touch .gitignore  # Specify everything that should not be included in git commits
echo "node_modules" >> .gitignore  # Add `node_modules` to list of ignored directories
# --*>

<<"COMMENT"
<*--SECTION(1.1)
title: "Setup NPM and Install Packages"
description: "Setup your node package and download the `express` framework."
--*>
COMMENT
# <*--CODE(1.1)
npm init --yes  # Notice: this will create a `package.json` file
npm install express --save  # Notice: this will download many files into `node_modules` directory, and update the `package.json` file
# --*>

<<"COMMENT"
<*--SECTION(1.2)
title: "Commit Changes"
--*>
COMMENT
# <*--CODE(1.2)
git commit -m "Server Setup"
# --*>

<<"COMMENT"
<*--SECTION(2.0)
title: "Install Mongoose, Create File Structure"
--*>
COMMENT
# <*--CODE(2.0)
npm install mongoose --save
mkdir config
touch config/db.js
mkdir models
touch models/todo-item.js
# --*>

<<"COMMENT"
<*--SECTION(3.0)
title: "Setup Routes / Controllers"
--*>
COMMENT
# <*--CODE(3.0)
npm install body-parser --save
touch config/routes.js
mkdir controllers
touch controllers/todo-items.js
# --*>
