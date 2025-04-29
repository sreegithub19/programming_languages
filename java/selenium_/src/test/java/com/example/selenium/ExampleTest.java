import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ExampleTest {

    @Test
    public void testGoogleHomePageTitle() {
        // Set up ChromeDriver
        System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");

        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        // Open Google
        driver.get("https://www.google.com/");

        // Verify the title
        assertEquals("Google", driver.getTitle());

        // Close the browser
        driver.quit();
    }
}