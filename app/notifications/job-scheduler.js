function scheduleJob(context) {
    // Create a component from the JobService that should be triggered
    let component = new android.content.ComponentName(context, com.tns.notifications.MyJobService.class);
    console.log(component)

    // Set the id of the job to something meaningful for you
    const builder = new android.app.job.JobInfo.Builder(1, component);

    // Optional: Set how often the task should be triggered. The minimum is 15min.
    builder.setPeriodic(1 * 60 * 1000);
    
    // Optional: Set additional requirements under what conditions your job should be triggered
    builder.setRequiresCharging(true);

    const jobScheduler = context.getSystemService(android.content.Context.JOB_SCHEDULER_SERVICE);
    console.log("Job Scheduled: " + jobScheduler.schedule(builder.build()));
}

module.exports.scheduleJob = scheduleJob;