---
id: slack
title: Slack
---

Получайте события о новых и существующих подписках в Slack.

## Как добавить интеграцию?

1. Добавьте <a href="https://slack.com/apps/A0F7XDUAZ-incoming-webhooks" target="_blank">входящий Webhook</a> в ваш аккаунт в Slack.
2. Скопируйте полученный *Webhook URL*.
3. В <a href="https://app.apphud.com/" target="_blank">Apphud</a> перейдите в раздел *"Integrations"* и добавьте Slack: 

![slack-adding-integration](assets/slack-adding-integration.png)

4. Вставьте скопированный *Webhook URL* в поле *"Webhook"*. Введите имя, от которого будут приходить уведомления, и укажите название канала:

![slack-name-channel](assets/slack-name-channel.png)

5. При желании отключите ненужные уведомления, которые вы не хотите получать:

![slack-disable-events](assets/slack-disable-events.png)

6. Поставьте галочку напротив *"Enable this integration"*:

![slack-enable-integration](assets/slack-enable-integration.png)

7. Сохраните изменения:

![slack-save](assets/slack-save.png)

## События

В таблице ниже указаны возможные события и их параметры, которые отсылаются в Slack. Вы можете отключить отправку некоторых событий в настройках интеграции.

> Более подробно о событиях можете почитать [здесь](events.md), а о том, что означает каждый из параметров – [здесь](integrations.md).

| Событие                                                      | Наименование                 | Параметры и их типы                                          |
| ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| *Триальный период*                                           |                              |                                                              |
| Оформление триала                                            | `Trial Started`              | `app_name`<br>`group_name`<br>`product_id`<br>`user_id`      |
| Успешная конвертация триала в обычную подписку               | `Trial Converted`            | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br>`price_description` |
| Неудачная конвертация триала в обычную подписку              | `Trial Expired`              |                                                              |
| *Вводное предложение*                                        |                              |                                                              |
| Оформление вводного предложения                              | `Intro Started`              |                                                              |
| Успешное продление вводного предложения                      | `Intro Renewed`              |                                                              |
| Успешная конвертация вводного предложения в обычную подписку | `Intro Converted`            |                                                              |
| Неудачная конвертация вводного предложения в обычную подписку | `Intro Expired`              |                                                              |
| Возврат денег в пределах вводного предложения                | `Intro Refunded`             |                                                              |
| *Обычная подписка*                                           |                              |                                                              |
| Успешное оформление подписки                                 | `Subscription Started`       |                                                              |
| Успешное продление подписки                                  | `Sbscription Renewed`        | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br/>`price_description` |
| Неудачное продление подписки                                 | `Subscription Expired`       | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br/>`reason` |
| Возврат денег                                                | `Subscription Refunded`      |                                                              |
| *Настройки авто-возобновления*                               |                              |                                                              |
| Отключение авто-возобновления                                | `Autorenew Disabled`         | `app_name`<br/>`group_name`<br/>`product_id`<br/>`user_id`<br/>`reason` |
| Включение авто-возобновления                                 | `[Apphud] autorenew_enabled` |                                                              |

> Настройте Subscription Status URL, чтобы своевременно получать события `autorenew_disabled` и `autorenew_enabled`. Более подробно о настройке можно почитать [здесь](creating-app.md#subscription-status-url).

## Отправка тестового события

Вы можете протестировать интеграцию со Slack, отправив тестовое уведомление. Нажмите *"…"* и выберите *"Send test event"*:

![slack-test-event](assets/slack-test-event.png)