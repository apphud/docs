Получайте события о новых и существующих подписках в Telegram используя Webhook URL.

## Как добавить интеграцию?

1. Перейдите по ссылке <a href="https://t.me/integram_bot" target="_blank">https://t.me/integram_bot</a> или откройте Telegram и найдите в поиске бота *@integram_bot*:

![integram-bot](assets/integram-bot.png)

2. Нажмите *"Start"* и выберите *"Webhook"*:

![integram-webhook](assets/integram-webhook.png)

3. Скопируйте Webhook URL из бота <a href="https://t.me/bullhorn_bot" target="_blank">bullhorn_bot</a>

![integram-webhook-url](assets/integram-webhook-url.png)

4. В <a href="https://app.apphud.com/" target="_blank">Apphud</a> перейдите в раздел *"Integrations"* и добавьте Telegram:

![telegram-adding-integration](assets/telegram-adding-integration.png)

5. Вставьте скопированный *Webhook URL* в поле *"Webhook"*:

![telegram-webhook](assets/telegram-webhook.png)

6. При желании отключите ненужные уведомления, которые вы не хотите получать:

![telegram-disable-events](assets/telegram-disable-events.png)

7. Поставьте галочку напротив *"Enable this integration"*:

![telegram-enable-integration](assets/telegram-enable-integration.png)

8. Сохраните изменения:

![telegram-save](assets/telegram-save.png)

## События

В таблице ниже указаны возможные события, которые отсылаются в Telegram. Вы можете отключить отправку некоторых событий в настройках интеграции.

> Более подробно о событиях можете почитать [здесь](events.md).

| Событие                                                      | Наименование            |
| ------------------------------------------------------------ | ----------------------- |
| *Триальный период*                                           |                         |
| Оформление триала                                            | `Trial Started`         |
| Успешная конвертация триала в обычную подписку               | `Trial Converted`       |
| Неудачная конвертация триала в обычную подписку              | `Trial Expired`         |
| *Вводное предложение*                                        |                         |
| Оформление вводного предложения                              | `Intro Started`         |
| Успешное продление вводного предложения                      | `Intro Renewed`         |
| Успешная конвертация вводного предложения в обычную подписку | `Intro Converted`       |
| Неудачная конвертация вводного предложения в обычную подписку | `Intro Expired`         |
| Возврат денег в пределах вводного предложения                | `Intro Refunded`        |
| *Обычная подписка*                                           |                         |
| Успешное оформление подписки                                 | `Subscription Started`  |
| Успешное продление подписки                                  | `Subscription Renewed`  |
| Неудачное продление подписки                                 | `Subscription Expired`  |
| Возврат денег                                                | `Subscription Refunded` |
| *Промо-предложение*                                          |                         |
| Оформление промо-предложения                                 | `Promo Started`         |
| Успешное продление промо-предложения                         | `Promo Renewed`         |
| Успешная конвертация промо-предложения в обычную подписку    | `Promo Expired`         |
| Неудачная конвертация промо-предложения в обычную подписку   | `Promo Expired`         |
| Возврат денег в пределах промо-предложения                   | `Promo Refunded`        |
| *Настройки авто-возобновления*                               |                         |
| Отключение авто-возобновления                                | `Autorenew Disabled`    |
| Включение авто-возобновления                                 | `Autorenew Enabled`     |

> Настройте Subscription Status URL, чтобы своевременно получать события `autorenew_disabled` и `autorenew_enabled`. Более подробно о настройке можно почитать [здесь](creating-app.md#subscription-status-url).

## Отправка тестового события 

Вы можете протестировать интеграцию с Telegram, отправив тестовое уведомление. Нажмите *"…"* и выберите *"Send test event"*:

![telegram-test-event](assets/telegram-test-event.png)