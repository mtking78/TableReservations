// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Customers (DATA)
// =============================================================
var tables = [
    {
        "customerName": "Richard",
        "phoneNumber": "520-123-4567",
        "customerEmail": "richard@rick.com",
        "customerID": "Rich"
    },
    {
        "customerName": "Tommy",
        "phoneNumber": "602-301-5251",
        "customerEmail": "thomas@tom.com",
        "customerID": "Tommy"
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Create New Table Reservations - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newtable
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);
  

  tables.push(newTable);
  console.log(tables);

  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});