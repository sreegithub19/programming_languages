# pip install mysql-connector-python

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="sree@sql2021",
  database="university"
)

mycursor = mydb.cursor()
mycursor.execute("SHOW TABLES")
for x in mycursor:
  print(x)

mycursor1 = mydb.cursor()
mycursor1.execute("select * from EEngineeringStudents")
for x in mycursor1:
  print(x)

mycursor1 = mydb.cursor()
mycursor1.execute("show columns from EEngineeringStudents")
for x in mycursor1:
  print(x)