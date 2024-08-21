## Steps:

### Terminal 1:
- Start mysql from another terminal:
  - /usr/local/mysql/bin/mysql -u root -p
  - Password: sree@mysql2021

### Terminal 2:
- go mod init example.com/m
- go get -u github.com/go-sql-driver/mysql
- go run mysql_connector_.go
-  go run mysql_connector_2.go