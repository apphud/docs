---
id: events
title: Events
---
This section desribes events which are registered by Apphud and can be sent to third party analytics services and messengers.

In some particular moments of time Apphud fetches from Apple information about auto-renewable subscriptions for each subscriber. It also registers corresponding events if needed and sends to third party analytics or messenger.

## Trial Period

Trial period is a free trial period that every Apple ID user can enable just once within one subscription group.

### Trial Period Started 

This event is created when user purchases a subscription with free trial period.

Event is sent to analytics under `trial_started` name.

### Successful Conversion from Trial Period to Regular Subscription

This event is created after trial period is finished and user has been charged for the first time with regular subscription price.

Event is sent to analytics under `trial_converted` name.

### Failed Conversion from Trial Period to Regular Subscription

This event is created after trial period is finished but subscription is lapsed.

Event is sent to analytics under `trial_expired` name.

Has the following expiration reasons:

* User canceled subscription manually – `user_canceled`;
* There was a billing error – `billing_issue`;
* User did not agree to a recent price increase – `declined_price_increase`;
* Product was not available for purchase at the time of renewal – `unavailable_product`;
* Unknown error occurred – `unknown_error`.

## Introductory Offer

Introductory offer is a discount that can be applied to new subscribers. Every Apple ID user can enable just once within one subscription group.

> Trial Period is a subtype of introductory offer, but we moved it to a separate event.

> You can read more about introductory offer types in our <a href="https://blog.apphud.com/introductory-offers-in-ios/" target="_blank">blog</a>.

### Introductory Offer Started

This event is created when user purchases a subscription with introductory offer.

Event is sent to analytics under `intro_started` name.

### Introductory Offer Renewed

This event is created when subscription renews during introductory offer with "pay as you go" type.

Event is sent to analytics under `intro_renewed` name.

### Successful Conversion from Introductory Offer to Regular Subscription

This event is created when introductory offer is finished and user has been charged for the first time with regular subscription price.

Event is sent to analytics under `intro_converted` name.

### Failed Conversion from Introductory Offer to Regular Subscription or Failed Renew

This event is created when subscription lapses during introductory offer.

Event is sent to analytics under `intro_expired` name.

> Has the same set of expiration reasons as trial period.

### Refund During Introductory Offer

This event is created when user has refunded subscription with an introductory offer through Apple Care support.

Event is sent to analytics under `intro_refunded` name.

Has the following refund reasons:

- User canceled his subscription due to an actual or perceived issue within your app – `app_issue`;
-  Subscription was canceled for another reason, for example, if the user made the purchase accidentally – `another_reason`.

## Regular Subscription

These are events that are created for a subscription with a regular price.

### Subscription Started

This event is created when user has purchased subscription with a regular price.

Event is sent to analytics under `subscription_started` name.

### Subscription Renewed

This event is created when subscription has been renewed and user has been charged a regular price.

Event is sent to analytics under `subscription_renewed` name.

### Subscription Expired

This event is created when subscription lapses.

Event is sent to analytics under `subscription_expired` name.

> Has the same set of expiration reasons as a trial period.

### Subscription Refunded

This event is created when user has refunded subscription with a regular price through Apple Care support.

Event is sent to analytics under `subscription_refunded` name.

> Has the same set of refund reasons as a refund during introductory offer.

## Promotional Offer

Apps with auto-renewable subscriptions can offer a discounted price or free period for existing or lapsed customers. This feature is called subscription offers and is available for users with iOS 12.2 or higher. Unlike introductory offer, subscription offers can be applied as many times as you decide.

### Promotional Offer Started

This event is created when user activates a promotional offer.

Event is sent to analytics under `promo_started` name.

### Promotional Offer Renewed

This event is created when subscription renews during promotional offer with "pay as you go" type.

Event is sent to analytics under `promo_renewed` name.

### Successful Conversion from Promotional Offer to Regular Subscription

This event is created when promotional offer is finished and user has been charged with regular subscription price.

Event is sent to analytics under `promo_converted` name.

### Failed Conversion from Promotional Offer to Regular Subscription or Failed Renew

This event is created when subscription lapses during promotional offer.

Event is sent to analytics under `promo_expired` name.

> Has the same set of expiration reasons as trial period.

### Refund During Promotional Offer

This event is created when user has refunded subscription with an promotional offer through Apple Care support.

Event is sent to analytics under `promo_refunded` name.

Has the following refund reasons:

- User canceled his subscription due to an actual or perceived issue within your app – `app_issue`;
- Subscription was canceled for another reason, for example, if the user made the purchase accidentally – `another_reason`.

## Autorenew Settings

Users can manage and cancel or re-activate subscriptions in their account settings on the App Store. Depending on user action one of the following events is created.

> Set up Subscription Status URL to receive such events in real-time. More information is [here](creating-app.md#subscription-status-url).

### Autorenew Disabled

This event is created when subscription autorenewal is turned off.

Event is sent to analytics under `autorenew_disabled` name.

### Autorenew Enabled

This event is created when subscription autorenewal is turned back on.

Event is sent to analytics under `autorenew_enabled` name.

## When Events are Created?

Apphud regularly sends requests to App Store to update subscriptions state and to create new events if necessary. By enabling *Subscription Notifications* Apphud will be able to register events almost in real-time.

#### Subscription Notifications (or Status Update Notifications or Apple Server-to-Server Notifications)

To set up Subscription Notifications from App Store follow [this guide](creating-app.md#subscription-status-url). We highly recommend enabling this feature to receive more accurate data.

> Read more about Subscription Notifications in <a href="https://blog.apphud.com/subscriptions-notifications/" target="_blank">our blog</a>.
