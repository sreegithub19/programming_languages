import java.sql.*;
// Reference: https://www.tutorialspoint.com/jdbc/jdbc-sample-code.htm


public class javaMysql {
    static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/sample_db";
    static final String USER = "sample_user";
    static final String PASS = "sample_password";
    static final String QUERY = "SELECT * FROM EngineeringStudents";

    static final String SQL_SCRIPT = """
        CREATE TABLE IF NOT EXISTS Employee (empId INT, name VARCHAR(255), supervisor INT, salary INT);
        CREATE TABLE IF NOT EXISTS Bonus (empId INT, bonus INT);
        TRUNCATE TABLE Employee;
        INSERT INTO Employee VALUES (3, 'Brad', NULL, 4000), (1, 'John', 3, 1000), (2, 'Dan', 3, 2000), (4, 'Thomas', 3, 4000);
        TRUNCATE TABLE Bonus;
        INSERT INTO Bonus VALUES (2, 500), (4, 2000);

        CREATE TABLE IF NOT EXISTS SalesPerson (sales_id INT, name VARCHAR(255), salary INT, commission_rate INT, hire_date DATE);
        CREATE TABLE IF NOT EXISTS Company (com_id INT, name VARCHAR(255), city VARCHAR(255));
        CREATE TABLE IF NOT EXISTS Orders (order_id INT, order_date DATE, com_id INT, sales_id INT, amount INT);
        TRUNCATE TABLE SalesPerson;
        INSERT INTO SalesPerson VALUES 
            (1, 'John', 100000, 6, '2006-04-01'),
            (2, 'Amy', 12000, 5, '2010-05-01'),
            (3, 'Mark', 65000, 12, '2008-12-25'),
            (4, 'Pam', 25000, 25, '2005-01-01'),
            (5, 'Alex', 5000, 10, '2007-02-03');

        TRUNCATE TABLE Company;
        INSERT INTO Company VALUES 
            (1, 'RED', 'Boston'),
            (2, 'ORANGE', 'New York'),
            (3, 'YELLOW', 'Boston'),
            (4, 'GREEN', 'Austin');

        TRUNCATE TABLE Orders;
        INSERT INTO Orders VALUES 
            (1, '2014-01-01', 3, 4, 10000),
            (2, '2014-01-02', 4, 5, 5000),
            (3, '2014-01-03', 1, 1, 50000),
            (4, '2014-01-04', 1, 4, 25000);

        CREATE TABLE IF NOT EXISTS Sales (sale_id INT, product_id INT, year INT, quantity INT, price INT);
        CREATE TABLE IF NOT EXISTS Product (product_id INT, product_name VARCHAR(10));
        TRUNCATE TABLE Sales;
        INSERT INTO Sales VALUES (1, 100, 2008, 10, 5000), (2, 100, 2009, 12, 5000), (7, 200, 2011, 15, 9000);
        TRUNCATE TABLE Product;
        INSERT INTO Product VALUES (100, 'Nokia'), (200, 'Apple'), (300, 'Samsung');
    """;

    public static void main(String[] args) {
        runSetupAndQueries(); // Call the first script as a method

        // This part stays as-is from your second file
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(QUERY)) {
            while (rs.next()) {
                System.out.print("Student_ID: " + rs.getInt("Student_ID"));
                System.out.print(", Department: " + rs.getString("Department"));
                System.out.print(", First_Name: " + rs.getString("First_Name"));
                System.out.println(", Last_Name: " + rs.getString("Last_Name"));
                System.out.println(", PassOutYear: " + rs.getInt("PassOutYear"));
                System.out.println(", UniversityRank: " + rs.getInt("UniversityRank"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // This is your previous code turned into a method
    public static void runSetupAndQueries() {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement()) {

            for (String sql : SQL_SCRIPT.split(";")) {
                String trimmed = sql.trim();
                if (!trimmed.isEmpty()) {
                    stmt.execute(trimmed);
                }
            }

            System.out.println("\n✅ All SQL setup statements executed successfully.");

            // Run SELECT queries
            runQuery(conn, "SELECT e.name, b.bonus FROM Employee e LEFT JOIN Bonus b ON e.empId = b.empId WHERE b.bonus < 1000 OR b.bonus IS NULL");
            runQuery(conn, "SELECT s.name FROM SalesPerson s WHERE s.name NOT IN (SELECT sp.name FROM SalesPerson sp LEFT JOIN Orders o ON sp.sales_id = o.sales_id LEFT JOIN Company c ON o.com_id = c.com_id WHERE c.name = 'Red')");
            runQuery(conn, "SELECT p.product_name , s.year, s.price FROM Sales s JOIN Product p ON s.product_id = p.product_id");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void runQuery(Connection conn, String query) throws SQLException {
        try (Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(query)) {
            ResultSetMetaData meta = rs.getMetaData();
            int colCount = meta.getColumnCount();
            System.out.println("\nQuery: " + query);
            while (rs.next()) {
                for (int i = 1; i <= colCount; i++) {
                    System.out.print(meta.getColumnLabel(i) + ": " + rs.getString(i) + "\t");
                }
                System.out.println();
            }
        }
    }
}
