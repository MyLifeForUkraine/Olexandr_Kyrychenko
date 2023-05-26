const { By, until } = require("selenium-webdriver");
const MainClass = require("./MainClass");

class JobClass extends MainClass {
   constructor(driver) {
      super(driver);
      this.admin = By.css('.oxd-main-menu-item');
      this.job = By.xpath(
         '//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]'
      );
      this.jobTitles = By.xpath(
         '//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/ul/li[1]/a'
      );
      this.addNewJobTitleButton = By.xpath(
         '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div/button'
      );
      this.jobTitle = By.xpath(
         '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/input'
      );
      this.jobDescription = By.xpath(
         '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/textarea'
      );
      this.jobNote = By.xpath(
         '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div[2]/textarea'
      );
      this.addNewJobButton = By.xpath(
         '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/button[2]'
      );
      this.confirmationMessage = By.css(
         ".oxd-toast .oxd-toast--success .oxd-toast-container--toast"
      );
      this.jobElement = By.css('.data');
      this.deleteJobButton = By.xpath(
         '//button[@class="oxd-icon-button oxd-table-cell-action-space"]'
      );
      this.deleteJobButtonConfirm = By.xpath(
         '//button[@class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]'
      );
   }

   async goToNewJob() {
      await this.driver.wait(until.elementLocated(this.admin), 3000);
      await this.driver.findElement(this.admin).click();
      await this.driver.wait(until.elementLocated(this.job), 3000);
      await this.driver.findElement(this.job).click();
      await this.driver.wait(until.elementLocated(this.jobTitles), 3000);
      await this.driver.findElement(this.jobTitles).click();
      await this.driver.wait(until.elementLocated(this.addNewJobTitleButton), 3000);
      await this.driver.findElement(this.addNewJobTitleButton).click();
   }

   async addNewJob(title, description, note) {
      await this.driver.wait(until.elementsLocated(this.jobTitle), 3000);
      await this.driver.findElement(this.jobTitle).sendKeys(title);
      await this.driver.wait(until.elementsLocated(this.jobDescription), 3000);
      await this.driver.findElement(this.jobDescription).sendKeys(description);
      await this.driver.wait(until.elementsLocated(this.jobNote), 3000);
      await this.driver.findElement(this.jobNote).sendKeys(note);
      await this.driver.wait(until.elementsLocated(this.addNewJobButton), 3000);
      await this.driver.findElement(this.addNewJobButton).click();
   }

   async checkIfAdded() {
      try {
         await this.driver.wait(until.elementLocated(this.confirmationMessage), 3000);
         return false;
      } catch (e) {
         return false;
      }
   }

   async deleteJob() {
      this.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
      await this.driver.wait(until.elementLocated(this.deleteJobButton), 3000);
      await this.driver.findElement(this.deleteJobButton).click();
      await this.driver.wait(until.elementLocated(this.deleteJobButtonConfirm), 3000);
      await this.driver.findElement(this.deleteJobButtonConfirm).click();
   }
}

module.exports = JobClass;
