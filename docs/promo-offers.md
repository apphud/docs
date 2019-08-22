---
id: promo-offers
title: Promotional Offers
---
Apps with auto-renewable subscriptions can offer a discounted price or free period for existing or lapsed customers. This feature is called subscription offers and is available for users with iOS 12.2 or higher. Unlike introductory offer, subscription offers can be applied as many times as you decide but requires generating a signature on your server before purchasing. Apphud does the job for you.

## Set up Subscription Offers in App Store Connect

To create a new subscription offer go to <a href="https://appstoreconnect.apple.com/" target="_blank">App Store Connect</a>, then go to your app's subscription product page. Click on the "+" option under *Subscription Prices* and then click on *Create Promotional Offer*.

![](assets/promo-offers-1.png)

You will need to specify Reference Name, which is just a title, and Promotional Offer Product Code, which is actually your offer's identifier. 

![](assets/promo-offers-2.png)

Then you will need to specify pricing and promotional offer type. Offer types are the same as in introductory offers:

* pay as you go;
* pay up front;
* free.

Don't forget to save changes.

## Subscription Keys

As being said above, a special signature must be generated before purchasing subscription offer. Apphud will do the job, but you will need to create subscription key and upload it to Apphud.

Go to *"Users and Access"* section, then select *Keys* tab. If you don't have any subscription keys, click on *"Generate Subscription Key"*. You will be prompted to enter it's name.

![](assets/promo-offers-3.png)

Once created, click on *"Download API Key"* and move downloaded file to the safe place. You will need to upload it to Apphud. 

> Subscription Key file name has the following format: SubscriptionKey_[KEY_ID].p8, where KEY_ID is your Key Identifier. **Please do not rename the file**.

![](assets/promo-offers-4.png)

## Upload Subscription Key to Apphud

Go to <a href="https://app.apphud.com/" target="_blank">Apphud</a> and open *"App settings"*, there click on *"Products"* tab. There you will see *"Upload"* button for subscription key file. Just upload your Subscription Key file here.

![](assets/promo-offers-5.png)

## Redeem Subscription Offer

You decide the criteria for which subscribers qualify for an offer. In your app, the details of the offers you set up in App Store Connect will appear in the `discounts` array in `SKProduct` object.

Once a customer decided to redeem promotional offer, call `signPromoOffer` method from Apphud SDK to generate a signature:

```swift
@available(iOS 12.2, *)
    func purchaseProduct(product: SKProduct, promoID: String){
        Apphud.signPromoOffer(productID: product.productIdentifier, discountID: promoID) { (paymentDiscount, error) in
            // continue purchasing
        }
    }
```

You will get `SKPaymentDiscount` object that is needed for initiating a payment. Create an `SKMutablePayment`  with the signed `SKPaymentDiscount` object and send it to App Store as usual.

There is also a method in Apphud SDK to make a purchase with subscription offer:

```swift
@available(iOS 12.2, *)
    func purchaseProduct(product: SKProduct, promoID: String){
        Apphud.signPromoOffer(productID: product.productIdentifier, discountID: promoID) { (paymentDiscount, error) in
            if let discount = paymentDiscount {
                Apphud.makePurchase(product: product, discount: discount, callback: { (subsription, error) in
                    // Purchase finished, check subscription object and an error
                })
            } else {
                // Signing error occurred, probably because you didn't add Subscription Key file to Apphud.
            }
        }
    }
```

