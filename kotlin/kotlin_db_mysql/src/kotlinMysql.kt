import java.sql.DriverManager

fun main() {
    val dbUrl = "jdbc:mysql://127.0.0.1:3306/sample_db"
    val user = "sample_user"
    val pass = "sample_password"
    val query = "SELECT * FROM EngineeringStudents"

    // Open a connection
    try {
        DriverManager.getConnection(dbUrl, user, pass).use { conn ->
            conn.createStatement().use { stmt ->
                stmt.executeQuery(query).use { rs ->
                    // Extract data from result set
                    while (rs.next()) {
                        // Retrieve by column name
                        println("Student_ID: ${rs.getInt("Student_ID")}")
                        println(", Department: ${rs.getString("Department")}")
                        println(", First_Name: ${rs.getString("First_Name")}")
                        println(", Last_Name: ${rs.getString("Last_Name")}")
                        println(", PassOutYear: ${rs.getInt("PassOutYear")}")
                        println(", UniversityRank: ${rs.getInt("UniversityRank")}")
                    }
                }
            }
        }
    } catch (e: Exception) {
        e.printStackTrace()
    }
}