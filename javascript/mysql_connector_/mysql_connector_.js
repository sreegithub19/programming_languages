var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sree@sql2021",
  database: "university"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM EEngineeringStudents", function (err, result, fields) {if (err) throw err;console.log(result);});
  con.query("SELECT Student_ID FROM EEngineeringStudents", function (err, result, fields) {if (err) throw err;console.log(result);});
  con.end();
});