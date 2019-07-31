---
id: integrations
title: Integrations
---
Apphud can send events about subscriptions to third party services: analytics and messengers.

At this moment following services are supported:

* Amplitude
* Slack
* Telegram

> We will add new services soon. If you would like us to add integration with specific service, please write us an [email](mailto:hi@apphud.com).
>

## Events parameters

This is a list of all available parameters that are sent with events:

| Parameter           | Description                                                  |
| :------------------ | ------------------------------------------------------------ |
| `product_id`        | Product identifier.                                          |
| `transaction_id`    | Transaction identifier.                                      |
| `unit`              | The increment of time that a subscription period is specified in. Possible values: `day`, `week`, `month`, `year` |
| `units_count`       | The number of units per subscription period.                 |
| `local_price`       | The cost of the product in the local currency.               |
| `currency`          | Local currency.                                              |
| `usd_price`         | The cost of the product in USD.                              |
| `price_description` | Price description in following format: `local_price` `currency` ~ `usd_price`, for example: 499 RUR ~ 7.8 USD |
| `reason`            | 1. The reason of an expiration of a subscription. Possible values: `user_canceled`, `billing_issue`, `declined_price_increase`, `unavailable_product`, `unknown_error`<br/><br/>2. The reason of refund. Possible values: `app_issue`, `another_reason` |
| `offer_type`        | Introductory offer payment mode, if applied. Possible values: `pay_up_front`, `pay_as_you_go` |
| `app_name`          | App name.                                                    |
| `user_id`           | User identifier.                                             |
| `group_name`        | Subscription group name.                                     |

To get more details about parameters in each integration, please check corrensponding integration guide.

### Possible values of `reason` parameter

#### If subscription lapsed:

* `user_canceled`: user canceled subscription manually;
* `billing_issue`: there was an error during billing;
* `declined_price_increase`: user did not agree to a recent price increase;
* `unavailable_product`: product was not available for purchase at the time of renewal;
* `unknown_error`: unknown error occurred.

#### If subscription refunded:

* `app_issue`: user canceled his subscription due to an actual or perceived issue within your app;
* `another_reason`: subscription was canceled for another reason, for example, if the user made the purchase accidentally.

## User properties

Besides events Apphud also sends user properties to analytics:

| Property                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `[Apphud] status-<group_name>`, where `<group_name>` – name of subscription group | Status of subscription. Possible values: `none`, `trial`, `intro`, `regular`, `refunded`, `expired` |
| `[Apphud] autorenew-<group_name>`, where `<group_name>` – name of subscription group | Whether autorenew option is turned on.                       |
| `[Apphud] total_spent`                                       | Total amount of money that user has been charged, in USD.    |
| `[Apphud] paying`                                            | Whether user is paying or not.                               |
| `[Apphud] payments_count`                                    | Number of transactions user has been charged.                |

To get more details about user properties in each integration, please check corrensponding integration guide.

### Possible values of `[Apphud] status-<group_name>`

All values are applied for given subscription group:

* `none`: user has never purchased a subscription;
* `trial`: user has a subscription that is currently in trial period;
* `intro`: user has a subscription that is currently in introductory offer;
* `regular`: user has a subscription with regular price;
* `refunded`: user has refunded a subscription;
* `expired`: subscription lapsed.