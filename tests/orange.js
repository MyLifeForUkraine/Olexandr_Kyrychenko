const { Builder } = require("selenium-webdriver");
const MainClass = require("../Classes/MainClass");
const LoginPage = require("../Classes/Login");
const JobClass = require("../Classes/JobClass");
var expect = require("chai").expect;
require("chromedriver");

describe("Create and delete job", function () {
   let driver;
   let mainClass;

   before(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      await driver.manage().window().maximize();
      mainClass = new MainClass(driver);
   });

   it("Open main Page", async () => {
      const baseurl =
         "https://opensource-demo.orangehrmlive.com/";
      await mainClass.goToUrl(baseurl);
   }).timeout(10000);

   it("Login", async () => {
      const username = "Admin";
      const password = "admin123";
      const loginPage = new LoginPage(driver);
      await loginPage.login(username, password);
   }).timeout(10000);

   it("Go to add new job page", async () => {
      const JobClassPage = new JobClass(driver);
      await JobClassPage.goToNewJob();
      expect(await JobClassPage.getURL()).to.equal(
         "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle"
      );
   }).timeout(10000);

   it("Add Job", async () => {
      const JobClassPage = new JobClass(driver);
      let checkAdded = await JobClassPage.addNewJob(
         "#Programist",
         "Very cool and high-paying job",
         "Interesting new job, everyone should be told about it"
      );
      expect(checkAdded);

   }).timeout(15000);
   it('Check if added new job', async () => {
      const JobClassPage = new JobClass(driver);
      JobClassPage.checkIfAdded();
   })
   it("Delete job", async () => {
      setTimeout(() => {
         const JobClassPage = new JobClass(driver);
         let checkRemoved = JobClassPage.deleteJob();
         expect(checkRemoved);
      }, 5000);
   }).timeout(15000);

   after(async () => {
      setTimeout(() => {
         driver.quit();
      }, 100000);
   });
});
