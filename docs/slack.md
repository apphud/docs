---
id: slack
title: Slack
---

Receive events about subscriptions to Slack.

## How to add integration?

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

This is a table of all possible events and their parameters that are being sent to Slack.

> You can get more details regarding events [here](events.md) and event parameters description - [here](integrations.md).

| Event                                                        | Default Name                 | Parameters                                                   |
| ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| *Trial Period*                                               |                              |                                                              |
| Trial period started                                         | `Trial Started`              | `app_name`<br>`group_name`<br>`product_id`<br>`user_id`      |
| Successful conversion from trial period to regular subscription | `Trial Converted`            | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br>`price_description` |
| Failed conversion from trial period to regular subscription  | `Trial Expired`              |                                                              |
| *Introductory offer*                                         |                              |                                                              |
| Introductory offer started                                   | `Intro Started`              |                                                              |
| Introductory offer renewed                                   | `Intro Renewed`              |                                                              |
| Successful conversion from introductory offer to regular subscription | `Intro Converted`            |                                                              |
| Failed conversion from introductory offer to regular subscription or failed renew | `Intro Expired`              |                                                              |
| Refund during introductory offer                             | `Intro Refunded`             |                                                              |
| *Regular subscription*                                       |                              |                                                              |
| Subscription started                                         | `Subscription Started`       |                                                              |
| Subscription renewed                                         | `Sbscription Renewed`        | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br/>`price_description` |
| Subscription expired                                         | `Subscription Expired`       | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br/>`reason` |
| Subscription refunded                                        | `Subscription Refunded`      |                                                              |
| *Autorenew settings*                                         |                              |                                                              |
| Autorenew disabled                                           | `Autorenew Disabled`         | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br/>`reason` |
| Autorenew enabled                                            | `[Apphud] autorenew_enabled` |                                                              |

> Set up Subscription Status URL to receive `autorenew_disabled` and `autorenew_enabled` events in real-time. More information can be found [here](creating-app.md#subscription-status-url).

## Send test event

You can test Slack integration by clicking *"…"* and then in dropdown click on *"Send test event"*:

![slack-test-event](assets/slack-test-event.png)