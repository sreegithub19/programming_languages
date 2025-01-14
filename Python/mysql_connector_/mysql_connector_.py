# # pip install mysql-connector-python

# import mysql.connector

# mydb = mysql.connector.connect(
#   host="localhost",
#   user="root",
#   password="sree@sql2021",
#   database="university"
# )

# mycursor = mydb.cursor()
# mycursor.execute("SHOW TABLES")
# for x in mycursor:
#   print(x)

# mycursor1 = mydb.cursor()
# mycursor1.execute("select * from EEngineeringStudents")
# for x in mycursor1:
#   print(x)

# mycursor1 = mydb.cursor()
# mycursor1.execute("show columns from EEngineeringStudents")
# for x in mycursor1:
#   print(x)


import subprocess


# Example 2: Check Python version
print(subprocess.run("""
echo "Waiting for MySQL to be ready..."
                     
for i in {1..30}; do
  if mysqladmin ping -h 127.0.0.1 -u root --password=example --silent; then
    echo "MySQL is ready!"
    break
  fi
  echo "Waiting for MySQL..."
  sleep 2
done
                     
sudo apt-get update && sudo apt-get install -y mysql-client
                     
echo "Connecting to MySQL and creating a table..."
mysql -h 127.0.0.1 -u sample_user -psample_password sample_db -e "
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO users (name, email) VALUES ('Jane Smith', 'jane.smith@example.com');
"

echo "Querying the database..."
mysql -h 127.0.0.1 -u sample_user -psample_password sample_db -e "
SELECT * FROM users;
"                                      
""", shell=True, text=True, capture_output=True).stdout)

