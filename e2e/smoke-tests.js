const nsAppium = require("nativescript-dev-appium");
const assert = require("chai").assert;

describe("smoke tests", async function () {
    let driver;

    before(async function () {
        nsAppium.nsCapabilities.testReporter.context = this;
        driver = await nsAppium.createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("assert console log", async function () {
        const btnTap = await driver.findElementByClassName(driver.locators.button);
        assert.isTrue(await btnTap.isDisplayed(), "App is not running");

        await btnTap.tap();
        await driver.sleep(2000);

        const logs = await driver.getlog("logcat");
        let containsJobExecutions = false;
        let containsJobScheduled = false;
        logs.forEach(log => {
            if (/Job Scheduled: 1/mig.test(log.message)) {
                containsJobScheduled = true;
            }

            if (/Job Execution/igm.test(log.message)) {
                containsJobExecutions = true;
            }
        });
        assert.isTrue(containsJobScheduled, "Not found: Job Scheduled: 1");
        assert.isTrue(containsJobExecutions, "Not found: Job execution");
    });
});
