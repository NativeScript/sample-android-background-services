var Observable = require("data/observable").Observable;
var application = require("application");
var utils = require("utils/utils");
var jobScheduler = require("./notifications/job-scheduler");

function getMessage(counter) {
    return counter;
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.message = "Schedule a local notification every 20 mins";

    viewModel.onTap = function () {
        jobScheduler.scheduleJob(utils.ad.getApplicationContext());
    }

    return viewModel;
}

exports.createViewModel = createViewModel;