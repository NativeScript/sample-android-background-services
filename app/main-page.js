const createViewModel = require("./main-view-model").createViewModel;
const app = require("tns-core-modules/application");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();

    app.android.registerBroadcastReceiver("customservice",

       (androidContext, intent) => {
            console.log("________________________________________________Data Received");
            that.data = intent.getIntExtra("message",-1/*default value*/);
            console.log("Data + " + that.data);
    });
}
exports.onNavigatingTo = onNavigatingTo;