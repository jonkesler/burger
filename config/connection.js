// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: "	y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "	ctr9mdalk6l38ysr",
  password: "un6cmnlxbiintc0r",
  database: "h10jiht7e9s8e42a"
});
};

// host: "localhost",
// user: "root",
// password: "root",
// database: "burgers_db"
// });
// };

// = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
