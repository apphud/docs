---
id: amplitude
title: Amplitude
---
# Amplitude

Amplitude это мощная система мобильной аналитики. Отправляйте события из Apphud в Amplitude, анализируйте поведение ваших пользователей и принимайте на их основе решения.

## Как добавить интеграцию? 

1. [Откройте Amplitude](https://analytics.amplitude.com/) и войдите в ваш аккаунт.
2. Кликните на *"Manage Data"* в нижней части экрана:

![Amplitude-step-1](assets/amplitude-step-1.jpeg)

3. Выберите ваше приложение:

![Amplitude-step-2](assets/amplitude-step-2.jpeg)

4. Скопируйте *Amplitude API Key*:

![Amplitude-step-3](assets/amplitude-step-3.jpeg)

5. В [Apphud](https://app.apphud.com) перейдите в раздел *"Integrations"* и добавьте Amplitude: 

**// картинка**

6. Вставьте скопированный *Amplitude API Key* в поле *"Amplitude API Key"*: 

**// картинка**

## События

В таблице ниже указаны возможные события и их параметры, которые отсылаются в Amplitude. Вы можете задать собственные наименования для каждого события и отключить некоторые их них в настройках интеграции, если нужно.

> Более подробно о событиях можете почитать [здесь](events.md), а о том, что означает каждый из параметров – [здесь](integrations.md).

| Событие                                                      | Наименование по умолчанию        | Параметры и их типы                                          |
| ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| *Триальный период*                                           |                                  |                                                              |
| Оформление триала                                            | `[Apphud] trial_started`         | `product_id`: String<br>`unit`: String<br>`units_count`: Integer |
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

* `[Apphud] trial_converted`,
* `[Apphud] intro_started`,
* `[Apphud] intro_renewed`,
* `[Apphud] intro_converted`,
* `[Apphud] intro_refunded`,
* `[Apphud] subscription_started` 
* `[Apphud] subscription_renewed` 

также могут опционально отправляться встроенные в Amplitude события типа *Track Revenue*. Более подробно можно почитать <a href="https://help.amplitude.com/hc/en-us/articles/115002278527#tracking-revenue" target="_blank">здесь</a>. Это позволит пользоваться встроенными в Amplitude отчетами о выручке. По умолчанию эта опция **отключена**, но вы можете включить ее в настройках интеграции: 

**// картинка**

Вот описание параметров, которые отсылаются вместе с этими событиями:

| Параметр          | Тип        | Описание                                                     |
| ----------------- | ---------- | ------------------------------------------------------------ |
| `productID`       | String     | ID продукта                                                  |
| `quantity`        | Integer    | Количество продуктов в покупке. *Всегда равно 1*             |
| `price`           | Float      | Цена покупки в долларах США                                  |
| `revenueType`     | String     | Информация о событии. Возможные значения: `trial_converted`,<br>`intro_started`,<br>`intro_renewed`,<br/>`intro_converted`,<br/>`intro_refunded`,<br/>`subscription_started`,<br>`subscription_renewed` |
| `eventProperties` | Dictionary | Дополнительная информация. Это словарь содержит такие поля:<br>– `local_price`: Float – цена покупки в валюте пользователя;<br>– `currency`: String – код валюты пользователя;<br>– `offer_type`: String – тип вводного предложения. Возможные значения: `pay_as_you_go`, `pay_up_front`. Это опциональное поле;<br>– `unit`: String – единица измерения длительности вводного предложения. Это опциональное поле;<br>– `units_count`: Integer – число `unit`-ов в длительности вводного предложения. |

## Свойства пользователя 

В таблице ниже указаны свойства пользователя и их типы, которые присваиваются пользователям в Amplitude.

> О том, что означает каждое из свойств, вы можете прочитать [здесь](integrations.md).

| Параметр                        | Тип     |
| ------------------------------- | ------- |
| `[Apphud] status-group_name`    | String  |
| `[Apphud] autorenew-group_name` | Boolean |
| `[Apphud] total_spent`          | Float   |
| `[Apphud] paying`               | Boolean |
| `[Apphud] payments_count`       | Integer |