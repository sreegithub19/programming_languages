import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ExampleTest {

    @Test
    public void testGoogleHomePageTitle() {
        // Set up ChromeDriver
        System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless"); // Run in headless mode
        options.addArguments("--no-sandbox"); // Disable the sandbox for CI
        options.addArguments("--disable-dev-shm-usage"); // Avoid /dev/shm size issues
        options.addArguments("--remote-allow-origins=*"); // Allow remote origins

        WebDriver driver = new ChromeDriver(options);

        // Open Google
        driver.get("https://www.google.com/");

        // Verify the title
        assertEquals("Google", driver.getTitle());

        // Close the browser
        driver.quit();
    }
}