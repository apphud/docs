---
id: mixpanel
title: Mixpanel
---
Mixpanel is a powerful mobile analytics service. Send events to Mixpanel via Apphud, analyze your users behavior and make necessary desicions.

## How to Add Integration? 

1. Open <a href="https://mixpanel.com/" target="_blank">Mixpanel</a> and sign in.
2. Open *Project Settings*:

![mixpanel-step-1](assets/mixpanel-step-1.png)

3. Scroll down and copy *API Key*:

![mixpanel-step-2](assets/mixpanel-step-2.png)

4. In order not to receive Mixpanel's automatic In-App purchase events **we highly recommend** to disable collection common mobile events. Otherwise if user, for example, starts a trial period Mixpanel will consider this as a revenue.

![mixpanel-disable-autocollect](assets/mixpanel-disable-autocollect.png)

5. At <a href="https://app.apphud.com/" target="_blank">Apphud</a> go to *"Integrations"* section and add Mixpanel: 

![mixpanel-adding-integration](assets/mixpanel-adding-integration.png)

6. Enter *Mixpanel API Key* at the *"API Key"* field: 

![mixpanel-api-key](assets/mixpanel-api-key.png)

7. You can enter your custom event names or disable some:

![mixpanel-custom-event-names](assets/mixpanel-custom-event-names.png)

8. Tick *"Enable this integration"*:

![mixpanel-enable-integration](assets/mixpanel-enable-integration.png)

9. If you want to send Revenue information to Mixpanel, check *"Send Revenue properties to Mixpanel"*. Click *"Save"*:

![mixpanel-save](assets/mixpanel-save.png)

## Events

This is a table of all possible events and their parameters that are being sent to Mixpanel. 

> You can get more details regarding events [here](events.md) and event parameters description - [here](integrations.md).

| Event                                                      | Default Name        | Parameters                                          |
| ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| *Trial Period*                               |                                  |                                                              |
| Trial period started                    | `[Apphud] trial_started`         | `product_id`: String<br>`unit`: String<br>`units_count`: Integer |
| Successful conversion from trial period to regular subscription | `[Apphud] trial_converted`       | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float |
| Failed conversion from trial period to regular subscription | `[Apphud] trial_expired`         | `product_id`: String<br>`reason`: String                     |
| *Introductory offer*                  |                                  |                                                              |
| Introductory offer started | `[Apphud] intro_started`         | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Introductory offer renewed | `[Apphud] intro_renewed`         | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Successful conversion from introductory offer to regular subscription | `[Apphud] intro_converted`       | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String |
| Failed conversion from introductory offer to regular subscription or failed renew | `[Apphud] intro_expired`         | `product_id`: String<br/>`reason`: String<br>`offer_type`: String |
| Refund during introductory offer | `[Apphud] intro_refunded`        | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`reason`: String<br>`offer_type`: String |
| *Regular subscription*       |                                  |                                                              |
| Subscription started | `[Apphud] subscription_started`  | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float |
| Subscription renewed     | `[Apphud] subscription_renewed`  | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float |
| Subscription expired | `[Apphud] subscription_expired`  | `product_id`: String<br>`reason`: String                     |
| Subscription refunded | `[Apphud] subscription_refunded` | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float<br>`reason`: String |
| *Promotional offer* |  |  |
| Promotional offer started | `[Apphud] promo_started` | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Promotional offer renewed | `[Apphud] promo_renewed` | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Successful conversion from promotional offer to regular subscription | `[Apphud] promo_converted` | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String |
| Failed conversion from promotional offer to regular subscription or failed renew | `[Apphud] promo_expired` | `product_id`: String<br/>`reason`: String<br>`offer_type`: String |
| Refund during promotional offer | `[Apphud] promo_refunded` | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`reason`: String<br>`offer_type`: String |
| *Autorenew settings*              |                                  |                                                              |
| Autorenew disabled         | `[Apphud] autorenew_disabled`    | `product_id`: String                     |
| Autorenew enabled                 | `[Apphud] autorenew_enabled`     | `product_id`: String                                         |

> Set up Subscription Status URL to receive `autorenew_disabled` and `autorenew_enabled` events in real-time. More information can be found [here](creating-app.md#subscription-status-url).
>

These events:

- `[Apphud] trial_converted`,
- `[Apphud] intro_started`,
- `[Apphud] intro_renewed`,
- `[Apphud] intro_converted`,
- `[Apphud] intro_refunded`,
- `[Apphud] subscription_started` 
- `[Apphud] subscription_renewed`,
- `[Apphud] subscription_refunded`,
- `[Apphud] promo_started`,
- `[Apphud] promo_renewed`,
- `[Apphud] promo_converted`,
- `[Apphud] promo_refunded`,

can be optionally sent to Mixpanel with Mixpanel's build-in **Revenue parameter** converted to USD. By default this option is __off__, but you can enable this feature in integration settings:

![mixpanel-revenue-tracking](assets/mixpanel-revenue-tracking.png)

## User Properties

In the table below you can see the list of user properties that are sent to Mixpanel.

> More information about user properties can be found [here](integrations.md).

| Parameter                       | Type    |
| ------------------------------- | ------- |
| `[Apphud] status-group_name`    | String  |
| `[Apphud] autorenew-group_name` | Boolean |
| `[Apphud] total_spent`          | Float   |
| `[Apphud] paying`               | Boolean |
| `[Apphud] payments_count`       | Integer |

## Sending Test Event

You may send test event to Mixpanel to check if integration is set up correctly. Click *"…"* and then in dropdown click on *"Send test event"*:

![mixpanel-test-event](assets/mixpanel-test-event.png)

You will see new user in *"Live view"* report:

![mixpanel-test-event-received](assets/mixpanel-test-event-received.png)