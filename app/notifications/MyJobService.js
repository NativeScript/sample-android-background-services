android.app.job.JobService.extend("com.tns.notifications.MyJobService", {
    onStartJob: function(params) {       
        console.log("Job execution ...");

        // Do something useful here, fetch data and show notification for example
        var utils = require("utils/utils");
        var context = utils.ad.getApplicationContext();
    
        var builder = new android.app.Notification.Builder(context);
        builder.setContentTitle("Scheduled Notification")
            .setAutoCancel(true)
            .setColor(android.R.color.holo_purple)//getResources().getColor(R.color.colorAccent))
            .setContentText("This notification has been triggered by Notification Service")
            .setVibrate([100, 200, 100])
            .setSmallIcon(android.R.drawable.btn_star_big_on);
    
            // will open main NativeScript activity when the notification is pressed
        var mainIntent = new android.content.Intent(context, com.tns.NativeScriptActivity.class); 
           
        var mNotificationManager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);

        // The id of the channel.
        const channelId = "my_channel_01";
        // The user-visible name of the channel.
        const name = "Channel name";
        // The user-visible description of the channel.
        const description = "Channel description";
        const importance = android.app.NotificationManager.IMPORTANCE_LOW;
        const mChannel = new android.app.NotificationChannel(channelId, name,importance);
        // Configure the notification channel.
        mChannel.setDescription(description);
        mChannel.enableLights(true);
        // Sets the notification light color for notifications posted to this
        // channel, if the device supports this feature.
        mChannel.setLightColor(android.graphics.Color.RED);
        mChannel.enableVibration(true);
        mNotificationManager.createNotificationChannel(mChannel);

        builder.setChannelId(channelId);

        mNotificationManager.notify(1, builder.build());

        return false;
    },
    
    onStopJob: function() {
        console.log("Stopping job ...");
    }
});