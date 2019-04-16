var Observable = require("tns-core-modules/data/observable").Observable;
var utils = require("tns-core-modules/utils/utils");
var jobScheduler = require("./notifications/job-scheduler");

function getMessage(counter) {
    return counter;
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.message = "Schedule a local notification every 15 minutes";

    viewModel.onTap = function () {
        jobScheduler.scheduleJob(utils.ad.getApplicationContext());
    }

    return viewModel;
}

exports.createViewModel = createViewModel;