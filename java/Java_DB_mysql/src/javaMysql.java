// Reference: https://www.tutorialspoint.com/jdbc/jdbc-sample-code.htm

import java.sql.*;

public class javaMysql{
    static final String DB_URL = "jdbc:mysql://localhost:3306/university";
    static final String USER = "root";
    static final String PASS = "sree@mysql2021";
    static final String QUERY = "SELECT * FROM EngineeringStudents";
    static final String QUERY1 = "SELECT * FROM EngineeringStudents";

    public static void main(String[] args) {
        // Open a connection
        try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(QUERY);) {
            // Extract data from result set
            while (rs.next()) {
                System.out.println("rs:"+rs);
                        // Retrieve by column name
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

        try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(QUERY1);) {
            // Extract data from result set
            while (rs.next()) {
                System.out.println("rs1:"+rs);
                // Retrieve by column name
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
}