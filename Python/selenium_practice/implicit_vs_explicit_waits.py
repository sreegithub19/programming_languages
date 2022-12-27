import os
import win32api  # pip install pywin32
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# https://chromedriver.chromium.org/downloads
# https://www.youtube.com/watch?v=j7VZsCCnptM

# pip install webdriver-manager selenium

# implicit
os.environ['PATH'] += r"C:/SeleniumDrivers"
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("https://jqueryui.com/resources/demos/progressbar/download.html")
driver.implicitly_wait(5)
id_element = driver.find_element_by_id("downloadButton")
id_element.click()

# explicit
progress_element = driver.find_element_by_class_name('progress-label')
print(f"{progress_element.text == 'Completed!'}")

WebDriverWait(driver, 30).until(
    EC.text_to_be_present_in_element(
        (By.CLASS_NAME, 'progress-label') , # Element filtration
        'Complete!'# The expected text
    )
)