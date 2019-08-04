---
id: sdk-integration
title: SDK Integration
---
Here we describe how to add Apphud SDK to your iOS app.

## Requirements

Apphud SDK requires minimum iOS 11.2 and Xcode 10 and uses Swift version 5.0. 

## Installation

Apphud SDK can be installed via CocoaPods or manually.

##### Install via CocoaPods

Add the following line to your Podfile:

```ruby
pod 'apphud'
```

And then run in the Terminal:

```ruby
pod install
```

#### Manual Installation

Copy all files in `Source` folder to your project.


## Configure Apphud SDK

Initialize Apphud SDK at your AppDelegate:

```swift
import apphud

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
	
  Apphud.start(apiKey: "YOUR_API_KEY")
  
  // the rest of your code
  return true
}
```



API key is a unique identifier of your Apphud application. You can get it in your Apphud application settings under `General` tab.


## Sending Subscription Events

One of the main features of Apphud is tracking all subscription events: subscription started, renewed, expired, refunded, autorenew disabled, trial converted and many other. 

> See the list of all available events [here](events.md).

All you need is to implement when purchase is made:

```swift
// when purchase is completed
Apphud.submitPurchase(productIdentifier, callback: { (subscription, error) in
     // returns a subscription class that has been purchased and an optional error
})
```

This will automatically send App Store receipt, validate it and return a subscription model, which contains all relevant info about your subscription, including expiration date. See `ApphudSubscription.swift` file for details.

## About Currencies

US Dollar is a base currency in Apphud. All transactions are automatically converted to USD by the exchange rates at the time of event.

## Restoring Purchases

If your app doesn't have a login system, which identifies a premium user by his credentials, then you need a restore mechanism. If you already have a restore purchases mechanism implemented, then you have nothing to worry about – Apphud SDK will automatically fetch and send latest App Store Receipt to Apphud servers when your own restoration is completed. However, you can use our restore purchases method from SDK:

```swift
Apphud.restoreSubscriptions()
```

Once called, the latest receipt will also be sent to Apphud servers and user's subscriptions will be updated in the delegate method.

## Set up a Delegate

You can set up Apphud delegate by calling:

```swift
Apphud.setDelegate(self)
```

You can set a delegate at any time but after Apphud SDK has been initialized.

There are two optional methods that can be implemented in `ApphudDelegate` protocol.

#### Subscription status updates

```swift
@objc optional func apphudSubscriptionsUpdated(_ subscriptions : [ApphudSubscription])
```

This method gets called when one of subscription's state changes. 

> This delegate method is not called after `Apphud.submitPurchase` , because that method has it's own completion block.

There are two cases when this delegate method is called:

*  when subscriptions are restored.
* when one of subscription's state has been changed. For example, if state has changed from `trial` to `regular`.

Apphud SDK fetches the latest subscription information once during launch and after purchase/restore methods.

#### Change of `userID`.

```swift
@objc optional func apphudDidChangeUserID(_ userID : String)
```

This method gets called when `userID` value changes. `userID` identifies user across his multiple devices.

There are 2 cases when this method gets called:

* when user has restored subsciption from his another device.
* after manual call of `updateUserID(userID : String)` method. 

## User identifier

There are two identifiers in Apphud SDK: device identifier and user identifier. 

### Device Identifier

Apphud SDK generates device identifier at the first launch of the app and saves it to keychain. It's used inside Apphud platform and cannot be accessed.

### User Identifier

If not set explicitly, user identifier is also generated at the first launch of the app.

> `userID` may change in case user has restored purchases from his another device. After Apphud receives the App Store receipt from iOS app, the server tries to find the same receipt in the database. If the same App Store receipt has been found and it already belongs to another user, Apphud will merge two users into a single user with two devices and then will return an original `userID`.

### User Identifier and Integrations

If you want to pass subscription events to your analytics services, such as Amplitude, you need to match Apphud `userID` with your analytics user identifier. There are two ways to implement this:

#### 1. Using Apphud `userID`

Add the following line when initializing SDK:

```swift
Apphud.start(apiKey: "YOUR_API_KEY")
Apphud.setDelegate(self)
Amplitude.instance()?.setUserId(Apphud.userID()) // or any other analytics
```

As we said previously, `userID` may change if user has restored purchases from his another device. You need to add the following delegate method as well:

```swift
func apphudDidChangeUserID(_ userID: String) {
	Amplitude.instance()?.setUserId(userID) // or any other analytics
}
```

#### 2. Using your own `userID`

Only do this if you are sure that your `userID`  explicitly identifies a user across his multiple devices. For example, if you have a login system with unique username and password, you can pass username as user ID. The only requirement is to update Apphud `userID` and your analytics `userID` simultaneously.

This can be done at app launch:

```swift
// at AppDelegate
Apphud.start(apiKey: "YOUR_API_KEY", userID: "YOUR_OWN_USER_ID")
Amplitude.instance()?.setUserId("YOUR_OWN_USER_ID") // or any other analytics
```

Or this can be done later:

```swift
// if authenticated
Apphud.updateUserID("YOUR_OWN_USER_ID")
Amplitude.instance()?.setUserId("YOUR_OWN_USER_ID") // or any other analytics
```

