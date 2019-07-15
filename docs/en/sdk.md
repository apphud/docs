# Integrate SDK

### Requirements

Apphud SDK requires minimum iOS 11.2 and Xcode 10 and uses Swift version 5.0. 

### Installation

Apphud SDK can be installed via CocoaPods or manually.

#### Install via CocoaPods

Add the following line to your Podfile:

```ruby
pod 'apphud'
```

And then run in the Terminal:

```
pod install
```

#### Manual Installation

Copy all files in `Source` folder to your project.

### Next Steps

...

### Configure Apphud SDK

Initialize Apphud SDK at your AppDelegate:

```swift
import apphud

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
	
  Apphud.start(apiKey: "YOUR_API_KEY")
  
  // the rest of your code
  return true
}
```



Api key is unique identifier of your Apphud application. You can get api key in Apphud web dashboard. Go to `App Settings`, then under `General` tab you should see `SDK token`.



### Sending Subscription Events

One of the main features of Apphud is tracking all subscription events: subscription started, renewed, expired, refunded, autorenew disabled, trial converted and many other. See the list of all available events [here](https://apphud.com).

All you need to implement when purchase is made:

```swift
// when purchase is completed
Apphud.submitPurchase(productIdentifier, callback: { (subscription, error) in
     // returns a subscription class that has been purchased and an optional error
})
```

This will automatically send App Store receipt, validate it and return a subscription model, which contains all relevant info about your subscription, including expiration date. See `ApphudSubscription.swift` file for details.

#### About Currencies

US Dollar – is a base currency in Apphud. All transactions are automatically converted to USD by the exchange rates at the time of event.

### Restoring Purchases

If your app doesn't have a login system, which identifies a premium user by his credentials, then you need a restore mechanism. If you already have a restore purchases mechanism implemented, then you have nothing to worry about – Apphud SDK will automatically fetch and send latest App Store Receipt to Apphud servers when your own restoration is completed. However, you can use our restore purchases method from SDK:

```swift
Apphud.restoreSubscriptions()
```

Once called, the latest receipt will also be sent to Apphud servers and user's subscriptions will be updated in the delegate method.

### Set up a Delegate

You can set up Apphud delegate by calling:

```swift
Apphud.setDelegate(self)
```

You can set a delegate at any time but after Apphud SDK has been initialized.

There are two optional methods that can be implemented in ApphudDelegate protocol. The first one is:

```swift
@objc optional func apphudSubscriptionsUpdated(_ subscriptions : [ApphudSubscription])
```

This method gets called when of subscriptions state changes. Note, that this delegate method is not called after `Apphud.submitPurchase` , because submit purchase method has it's own completion block.

There are two cases when this delegate method is called:

*  When subscriptions are restored (in any way)
* When one of subscription's state has been changed. For example, if state has changed from trial to regular.

Apphud SDK fetches latest subscription information once during launch and after purchase/restore methods.



Another delegate method is:

```swift
@objc optional func apphudDidChangeUserID(_ userID : String)
```

This method gets called when userID value changes. User ID identifies user across his multiple devices. Apphud server identifies the user by his App Store receipt. So one App Store account user may have multiple devices, but one userID. 

This also means, that we identify only subscribers – users who have ever purchased any subscription,  i.e. only users who submitted their App Store receipt to Apphud.

There are 3 cases when this method gets called:

* After the very first launch, when this device has successfully registered at Apphud server.
* After user has successfully restored his transactions or purchased something from his another device.
* After `Apphud.updateUserID(_ userID : String)` method call. 



## User identifier

There are two identifiers in Apphud SDK: internal device id which identifiers current device and user id which identifies a user across his multiple devices. 

### Internal Device Identifier

At the first launch of the app Apphud SDK generates unique identifier based on UUID and saves it to keychain. It's used inside Apphud platform and cannot be accessed.

### Custom User Identifier

If not specified, user identifier is also generated at the first launch of the app. However, it may be changed in case user has launched the app for the first time from his another device and restored purchases. In this case user identifier will change to original one and `apphudDidChangeUserID` method gets called.

### Sync user identifiers with analytics services

If you want to pass subscription events to your custom analytics services, such as Amplitude, you need to match Apphud user id with your analytics user id. There are two ways to implement this:

#### 1. Using Apphud User ID

When initializing SDK add the following line:

```swift
Apphud.start(apiKey: "YOUR_API_KEY")
Apphud.setDelegate(self)
Amplitude.instance()?.setUserId(Apphud.userID()) // or any other analytics
```

However, userID value may change if user restores purchases when app is launched at the first time from his another device. You need to add the following delegate method as well:

```swift
func apphudDidChangeUserID(_ userID: String) {
	Amplitude.instance()?.setUserId(userID) // or any other analytics
}
```

Read more information here: [Identifiying users by App Store receipt]()

#### 2. Using your own User ID

Only do this if you are sure that your user id explicitly identifies a user across his devices. For example, if you have a login system with unique username and password, you can pass username as user ID. The only requirement is to update Apphud user ID and your analytics user ID simultaneously.

This can be done at app launch:

```swift
// at AppDelegate
Apphud.start(apiKey: "YOUR_API_KEY", userID: "YOUR_OWN_USER_ID")
Amplitude.instance()?.setUserId("YOUR_OWN_USER_ID") // or any other analytics
```

Or can be done later:

```swift
// if authenticated
Apphud.updateUserID("YOUR_OWN_USER_ID")
Amplitude.instance()?.setUserId("YOUR_OWN_USER_ID") // or any other analytics
```

