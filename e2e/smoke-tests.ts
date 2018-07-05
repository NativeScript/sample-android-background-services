import { AppiumDriver, createDriver, SearchOptions, LogType } from "nativescript-dev-appium";
import { assert } from "chai";

describe("smoke tests", () => {
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
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
        const btnTap = await driver.findElementByText("Every 20 mins", SearchOptions.contains);
        assert.isTrue(await btnTap.isDisplayed(), "App is not running");

        await btnTap.tap();

        const logs = await driver.getlog(LogType.logcat);

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
