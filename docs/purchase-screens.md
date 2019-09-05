---
id: purchase-screens
title: Purchase Screens
---
> Please, read [Rules documentation](rules.md) first.

Showing purchase screen with a good discount or additional free trial is a way to win back lapsed subscriber. It will be shown to a user when he selects certain option in a survey. Usually this option similar to "The subscription was too expensive for me". This screen contains a button to purchase a promotional offer with a discount or additional trial period.

Apphud offers many templates of purchase screens for every taste. We regularly add new templates. No additional coding required: you just select a screen and properly configure it.

## Configuring Purchase Screen

> Before configuring a screen make sure you have uploaded Subscription Key to update. Here is the [guide](promo-offers#subscription-keys) how to do it.

Pick a screen you would to use at "Purchase Screens" section of Apphud. Enter the following information.

### Screen Name

Enter name to identify a screen.

### Product ID

Select a product the promotional offer belongs to.

> You can read more about products configuration [here](adding-products.md)

### Promotional Offer ID

Promotional offer identifier that will be offered to a user once he taps a confirmation button.

> You can read more about promotional offers [here](promo-offers.md)

### Image

You can upload your own image here. Supported image formats are JPEG, PNG, GIF, SVG.

### Heading and Subheading

Texts that will be shown on a purchase screen.

### Offer Description

This is the text that describes subscription conditions. 

> According to Apple Review Guidelines you <a href="https://developer.apple.com/app-store/subscriptions/#clear-description" target="_blank">must clearly describe</a> all subscription terms.

You may use the following macroses that will automatically changed to necessary values:

* `{offer_duration}` – the duration of a promotional offer, e.g.: "1 week", "2 weeks", "1 month".
* `{offer_price}` – the price of a promotional offer, including user's currency, e.g.: "$9.99", "999,00 RUB".
* `{offer_unit}` – the period of a promotional offer. Possible values: "day", "week", "month", "year".
* `{regular_price}` – the price of a regular subscription that will take effect once promotional offer expires. This price also includes user's currency, e.g.: "$9.99", "999,00 RUB".
* `{regular_unit}` – the period of a regular subscription that will take effect once promotional offer expires. Possible values: "day", "week", "month", "year".

> `{offer_duration}`, `{offer_unit}`, `{regular_price}`, `{regular_unit}` are currently localized to English only.

### Confirmation and Dismiss Buttons Titles

Specify a titles that will be shown on confirmation and dismiss buttons.

### Privacy Policy and Terms of Use URLs

Enter a links to your app's Privacy Policy and Terms of Use.