"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativescript_dev_appium_1 = require("nativescript-dev-appium");
const chai_1 = require("chai");
describe("smoke tests", () => {
    let driver;
    before(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield nativescript_dev_appium_1.createDriver();
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield driver.quit();
        console.log("Quit driver!");
    }));
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentTest.state === "failed") {
                yield driver.logTestArtifacts(this.currentTest.title);
            }
        });
    });
    it("assert console log", () => __awaiter(this, void 0, void 0, function* () {
        const btnTap = yield driver.findElementByText("Every 20 mins", 1 /* contains */);
        chai_1.assert.isTrue(yield btnTap.isDisplayed(), "App is not running");
        yield btnTap.tap();
        const logs = yield driver.getlog(nativescript_dev_appium_1.LogType.logcat);
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
        chai_1.assert.isTrue(containsJobExecutions);
        chai_1.assert.isTrue(containsJobScheduled);
    }));
});
