Integrating push notifications in your app will let you to use the powerful feature of winning back lapsed customers or notifying them about their billing issues.



## Generate Push Notifications Auth Key

Go to the [Apple Developer Center](https://developer.apple.com/account/ios/profile/), then go to '*Keys*' page, then create a new key by entering a name and choosing '_Apple Push Notifications service (APNs)_'.

[IMAGE]

Once created, download the file and move it to the safe place. You will need to upload it to Apphud. 

Also copy your team ID somewhere which can be found in your [Developer Account Membership](https://developer.apple.com/account/#/membership) page. We will need it later.

> Auth Key file name has the following format: AuthKey_[KEY_ID].p8, where KEY_ID is your Key Identifier.
>
> By using auth key, Apphud will be able to send push notifications to all of your apps within the same account and to both sandbox and production environments. That means, you can use the same auth key file for your another app.

## Upload Auth Key to Apphud

Go to [Apphud Dashboard](https://app.apphud.com) and open '*App settings'*, there click on '*Push*' tab. There you will see *Upload* button for APNs auth key file. Just upload your Key file there. Also enter your Team ID and make sure key identifier is also entered.

[IMAGE]

## Set up Push Notifications in iOS app

Make sure that Push Notifications are turned on in '*Capabilities*' section of your app target:

[IMAGE]

Let's write some code in your AppDelegate. First, register for notifications:

```swift
import UserNotifications

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  Apphud.start(apiKey: YOUR_API_KEY)
  registerForNotifications()
  //... the rest of your code
}

func registerForNotifications(){
	UNUserNotificationCenter.current().delegate = self
	UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound])	{ (granted, error) in            
		// handle if needed
	}        
	UIApplication.shared.registerForRemoteNotifications()
}
```

Then you will need to submit device token to Apphud:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
	Apphud.submitPushNotificationsToken(token: deviceToken, callback: {_ in})
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
	// error occurred. Probably you have signing issues or push notifications capabilities are	// turned off
}
```

After that we should handle incoming push notification payload. This is done with two methods: one handles payload when app is in background or not launched, another handles payload when app is running.

```swift
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
	Apphud.handlePushNotification(apsInfo: response.notification.request.content.userInfo)
	completionHandler()
}
    
func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
	Apphud.handlePushNotification(apsInfo: notification.request.content.userInfo)
	completionHandler([]) // return empty array to skip showing notification banner
}
```

That's it. Next run the app and make sure that `didRegisterForRemoteNotificationsWithDeviceToken` is called and `deviceToken` is successfully sent to Apphud.

Now you are ready to receive push notifications. 

## Testing Push Notifications

To test push notifications simply create any rule and select '*Test*' tab. Enter you device's push token and click '*Send*'.

[IMAGE]

Device push token is a string that can be found either in Apphud or in Xcode:

* On user's page in Apphud '*Users*' section. Just find yourself and get your token. 

* Run your app in Xcode with your device connected and search `push_token` string in console. Apphud logs push token to console at every launch.

If you received push notification then set up is complete.

