/*
Steps:
- go mod init example.com/m
- go get -u github.com/go-sql-driver/mysql
- go run mysql_connector_.go
*/

package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

type universal struct {
	Student_ID     int
	Department     string
	First_Name     string
	Last_Name      string
	PassOutYear    int
	UniversityRank int
}

func main() {

	// create a database object which can be used
	// to connect with database.
	//db, err := sql.Open("mysql", "<username>:<passwd>@tcp(0.0.0.0:3306)/<db_name>")
	db, err := sql.Open("mysql", "root:sree@sql2021@tcp(0.0.0.0:3306)/university?multiStatements=true")

	// handle error, if any.
	if err != nil {
		panic(err)
	}

	//  database object has a method called Exec,
	// it executes a database query, but it does
	// not return any row as result.
	// Here we create a database table with a SQL query.
	results, err := db.Query("select Student_ID from EEngineeringStudents")

	// handle error
	if err != nil {
		panic(err)
	}

	//fmt.Println(results)
	for results.Next() {
		var universal universal
		err := results.Scan(
			&universal.Student_ID,
			// &universal.Department,
			// &universal.First_Name,
			// &universal.Last_Name,
			// &universal.PassOutYear,
			// &universal.UniversityRank,
		)

		if err != nil {
			log.Fatal(err)
		}

		fmt.Printf("%v\n", universal)
	}

	defer db.Close()
}
