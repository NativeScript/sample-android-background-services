var Observable = require("data/observable").Observable;
var application = require("application");
var utils = require("utils/utils");
var services = require("./service-helper");


function getMessage(counter) {
    return counter;
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.message = "Try implementing a stop-notifications (alarm) functionality!";

    viewModel.onTap = function () {
        services.setupAlarm(utils.ad.getApplicationContext());
    }

    return viewModel;
}

exports.createViewModel = createViewModel;