const { By, until } = require("selenium-webdriver");
const MainClass = require("./MainClass");

class LoginPage extends MainClass {
   constructor(driver) {
      super(driver);
      this.username = By.css('[placeholder="Username"]');
      this.password = By.css('[placeholder="Password"]');
      this.button = By.xpath(
         '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'
      );
   }
   async login(username, password) {
      await this.driver.wait(until.elementLocated(this.username), 1000);
      await this.driver.findElement(this.username).sendKeys(username);
      await this.driver.findElement(this.password).sendKeys(password);
      await this.driver.findElement(this.button).click();
   }
}
module.exports = LoginPage;
