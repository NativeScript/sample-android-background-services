const nsAppium = require("nativescript-dev-appium");
const assert = require("chai").assert;

describe("smoke tests", () => {
    let driver;

    before(async () => {
        driver = await nsAppium.createDriver();
    });

    after(async () => {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("assert console log", async () => {
        const btnTap = await driver.findElementByText("Every 20 mins", "contains");
        assert.isTrue(await btnTap.isDisplayed(), "App is not running");

        await btnTap.tap();
        await driver.sleep(2000);

        const logs = await driver.getlog("logcat");
        let containsJobExecutions = false;
        let containsJobScheduled = false;
        logs.forEach(log => {
            const logPart = JSON.stringify(log);
            if (logPart.includes("Job Scheduled: 1")) {
                containsJobScheduled = true;
            }

            if (logPart.includes("Job execution")) {
                containsJobExecutions = true;
            }
        });
        assert.isTrue(containsJobExecutions);
        assert.isTrue(containsJobScheduled);
    });
});
