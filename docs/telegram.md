---
id: telegram
title: Telegram
---

Получайте события о новых и существующих подписках в Telegram используя Webhook URL.

## Как добавить интеграцию?

1. Перейдите по ссылке <a href="https://t.me/integram_bot" target="_blank">https://t.me/integram_bot</a> или откройте Telegram и найдите в поиске бота *@integram_bot*:

![integram-bot](assets/integram-bot.png)

2. Нажмите *"Start"* и выберите *"Webhook"*:

![integram-webhook](assets/integram-webhook.png)

3. Скопируйте Webhook URL из бота <a href="https://t.me/bullhorn_bot" target="_blank">bullhorn_bot</a>

![integram-webhook-url](assets/integram-webhook-url.png)

4. Перейдите на страницу "Integrations" в <a href="https://app.apphud.com/" target="_blank">Apphud</a> и

## События

В таблице ниже указаны возможные события и их параметры, которые отсылаются в Telegram. Вы можете отключить отправку некоторых событий в настройках интеграции.

> Более подробно о событиях можете почитать [здесь](events.md), а о том, что означает каждый из параметров – [здесь](integrations.md).
>

| Событие                                                      | Наименование                     | Параметры                                                    |
| ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| *Триальный период*                                           |                                  |                                                              |
| Оформление триала                                            | `[Apphud] Trial Started`         | `app`: String<br>`products_group`: String<br>                |
| Успешная конвертация триала в обычную подписку               | `[Apphud] trial_converted`       | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float |
| Неудачная конвертация триала в обычную подписку              | `[Apphud] trial_expired`         | `product_id`: String<br>`reason`: String                     |
| *Вводное предложение*                                        |                                  |                                                              |
| Оформление вводного предложения                              | `[Apphud] intro_started`         | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Успешное продление вводного предложения                      | `[Apphud] intro_renewed`         | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Успешная конвертация вводного предложения в обычную подписку | `[Apphud] intro_converted`       | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String |
| Неудачная конвертация вводного предложения в обычную подписку | `[Apphud] intro_expired`         | `product_id`: String<br/>`reason`: String<br>`offer_type`: String |
| Возврат денег в пределах вводного предложения                | `[Apphud] intro_refunded`        | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`reason`: String<br>`offer_type`: String |
| *Обычная подписка*                                           |                                  |                                                              |
| Успешное оформление подписки                                 | `[Apphud] subscription_started`  | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float |
| Успешное продление подписки                                  | `[Apphud] subscription_renewed`  | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float |
| Неудачное продление подписки                                 | `[Apphud] subscription_expired`  | `product_id`: String<br>`reason`: String                     |
| Возврат денег                                                | `[Apphud] subscription_refunded` | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float<br>`reason`: String |
| *Настройки авто-возобновления*                               |                                  |                                                              |
| Отключение авто-возобновления                                | `[Apphud] autorenew_disabled`    | `product_id`: String<br>`reason`: String                     |
| Включение авто-возобновления                                 | `[Apphud] autorenew_enabled`     | `product_id`: String                                         |

Вместе с событиями:

- `[Apphud] trial_converted`,
- `[Apphud] intro_started`,
- `[Apphud] intro_renewed`,
- `[Apphud] intro_converted`,
- `[Apphud] intro_refunded`,
- `[Apphud] subscription_started` 
- `[Apphud] subscription_renewed` 

также могут опционально отправляться встроенные в Amplitude события типа *Track Revenue* (более подробно можно почитать [здесь](https://help.amplitude.com/hc/en-us/articles/115002278527#tracking-revenue)). Это позволит пользоваться встроенными в Amplitude отчетами о выручке. По умолчанию эта опция **отключена**, но вы можете включить ее в настройках интеграции: 