---
id: slack
title: Slack
---

Receive events about subscriptions to Slack.

## How to Add Integration?

1. Add <a href="https://slack.com/apps/A0F7XDUAZ-incoming-webhooks" target="_blank">incoming webhook</a> in your Slack account.
2. Copy given *Webhook URL*.
3. At <a href="https://app.apphud.com/" target="_blank">Apphud</a> go to *"Integrations"* and add Slack: 

![slack-adding-integration](assets/slack-adding-integration.png)

4. Insert *Webhook URL* at *"Webhook"* field. Enter username which will be shown in notifications and channel name:

![slack-name-channel](assets/slack-name-channel.png)

5. You can disable events you don't need:

![slack-disable-events](assets/slack-disable-events.png)

6. Make sure *"Enable this integration"* is checked:

![slack-enable-integration](assets/slack-enable-integration.png)

7. Save changes:

![slack-save](assets/slack-save.png)

## Events

This is a table of all possible events that are being sent to Slack.

> You can get more details regarding events [here](events.md).

| Event                                                        | Default Name            |
| ------------------------------------------------------------ | ----------------------- |
| *Trial Period*                                               |                         |
| Trial period started                                         | `Trial Started`         |
| Successful conversion from trial period to regular subscription | `Trial Converted`       |
| Failed conversion from trial period to regular subscription  | `Trial Expired`         |
| *Introductory offer*                                         |                         |
| Introductory offer started                                   | `Intro Started`         |
| Introductory offer renewed                                   | `Intro Renewed`         |
| Successful conversion from introductory offer to regular subscription | `Intro Converted`       |
| Failed conversion from introductory offer to regular subscription or failed renew | `Intro Expired`         |
| Refund during introductory offer                             | `Intro Refunded`        |
| *Regular subscription*                                       |                         |
| Subscription started                                         | `Subscription Started`  |
| Subscription renewed                                         | `Subscription Renewed`  |
| Subscription expired                                         | `Subscription Expired`  |
| Subscription refunded                                        | `Subscription Refunded` |
| *Promotional offer*                                          |                         |
| Promotional offer started                                    | `Promo Started`         |
| Promotional offer renewed                                    | `Promo Renewed`         |
| Successful conversion from promotional offer to regular subscription | `Promo Converted`       |
| Failed conversion from promotional offer to regular subscription or failed renew | `Promo Expired`         |
| Refund during promotional offer                              | `Promo Refunded`        |
| *Autorenew settings*                                         |                         |
| Autorenew disabled                                           | `Autorenew Disabled`    |
| Autorenew enabled                                            | `Autorenew Enabled`     |

> Set up Subscription Status URL to receive `autorenew_disabled` and `autorenew_enabled` events in real-time. More information can be found [here](creating-app.md#subscription-status-url).

## Send Test Event

You can test Slack integration by clicking *"…"* and then in dropdown click on *"Send test event"*:

![slack-test-event](assets/slack-test-event.png)