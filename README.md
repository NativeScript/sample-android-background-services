# Notifications Scheduler 

To see an iOS version of this sample please check - https://github.com/NativeScript/sample-ios-background-execution

A sample project demonstrating how Android background services work in NativeScript, using the Android AlarmManager to schedule periodical calling of an IntentService, which should create Notifications even when the Application's Activities have been destroyed. (**Caution: Be very mindful when developing applications which send out notifications. Some users may find them annoying, if they get them too often, and as a result - delete your application.**)

# Running the sample
```shell
    git clone https://github.com/NativeScript/sample-android-background-services
    cd sample-android-background-services
    tns run android
```

## Notes
- [IntentService](https://developer.android.com/reference/android/app/IntentService.html)’s `onHandleIntent` will execute on the main UI thread (versus on a dedicated worker Thread when implemented in pure Android)
IntentService’s implementation needs to use a constructor that takes no arguments, but that currently is not possible through Java.
- The [base Service class](https://developer.android.com/reference/android/app/Service.html) and all its descendants execute on the main UI thread by default in Android. Implementing a service that should run on a background thread must be managed in Java by the developer (see **Notes**).
- [BroadcastReceivers](http://www.tutorialspoint.com/android/android_broadcast_receivers.htm) should not be registered with the `android: process =":remote"` property in the AndroidManifest as the receiver will be unable to execute JavaScript in an independent process
- The suggested approach when you want to offload a long-running job on a different Thread is to write the implementation in Java classes and invoke the job in NativeScript.
