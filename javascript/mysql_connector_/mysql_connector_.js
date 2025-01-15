const { execSync,spawnSync } = require('child_process');
const path = require('path');

const pythonCode = `

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
CREATE TABLE IF NOT EXISTS users2 (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
INSERT INTO users2 (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO users2 (name, email) VALUES ('Jane Smith', 'jane.smith@example.com');
"

echo "Querying the database..."
mysql -h 127.0.0.1 -u sample_user -psample_password sample_db -e "
SELECT * FROM users2;
"                                      
""", shell=True, text=True, capture_output=True).stdout)
`;

// Use spawnSync to execute the Python code
try {
  const result = spawnSync('python3', ['-c', pythonCode], {
      stdio: 'inherit', // Inherit stdio to see Python output in real-time
      cwd: __dirname    // Set the current working directory
  });

  // Check for errors
  if (result.error) {
      throw result.error;
  }

  // Check the exit code
  if (result.status !== 0) {
      console.error(`Python script exited with code ${result.status}`);
      process.exit(result.status);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
}