android.app.job.JobService.extend("com.tns.notifications.MyJobService", {
    onStartJob: function(params) {       
        console.log("Job execution ...");

        return false;
    },
    
    onStopJob: function() {
        console.log("Stopping job ...");
    }
});