- MySQL Workbench download link: https://dev.mysql.com/downloads/workbench/
- MySQL connector download link: https://dev.mysql.com/downloads/connector/j/

MySQL commands:

- /usr/local/mysql/bin/mysql -u root -p (To start mysql from terminal)
- show databases;
- create database University;
- use university;
- create EEngineeringStudents(
  Student_ID INT NOT NULL,
  Department VARCHAR(25),
  First_Name VARCHAR(25),
  Last_Name VARCHAR(25),
  PassOutYear INT NOT NULL,
  UniversityRank INT NOT NULL,
  PRIMARY KEY (Student_ID)
  );
- INSERT INTO EEngineeringStudents VALUES
  (10202, 'CSE', 'Kiren', 'Acharya',2018,1273),
  (10203, 'CSE', 'Kiron', 'Acharya',2018,1274),
  (10204, 'CSE', 'Karan', 'Acharya',2018,1275),
  (10205, 'CSE', 'Karen', 'Acharya',2018,1276),
  (10206, 'CSE', 'Karon', 'Acharya',2018,1277),
  (10207, 'CSE', 'Karun', 'Acharya',2018,1278),
  (10208, 'CSE', 'Karuna', 'Acharya',2018,1279),
  (10209, 'CSE', 'Kirana', 'Acharya',2018,1280),
  (10210, 'CSE', 'Kolar', 'Acharya',2018,1281),
  (10211, 'CSE', 'Koala', 'Acharya',2018,1282);
- select \* from EEngineeringStudents;
