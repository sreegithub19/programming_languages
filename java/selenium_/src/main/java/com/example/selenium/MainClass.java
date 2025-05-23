import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class MainClass {
    public static void main(String[] args) {
        // Automatically set up ChromeDriver
        WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless"); // Run in headless mode
        options.addArguments("--no-sandbox"); // Disable the sandbox for CI
        options.addArguments("--disable-dev-shm-usage"); // Avoid /dev/shm size issues
        options.addArguments("--remote-allow-origins=*"); // Allow remote origins

        WebDriver driver = new ChromeDriver(options);

        // Your test code here
        driver.get("https://www.google.com");
        System.out.println("Page title is: " + driver.getTitle());
        driver.quit();
    }
}