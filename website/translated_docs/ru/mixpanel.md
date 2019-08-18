Mixpanel это мощная система мобильной аналитики. Отправляйте события из Apphud в Mixpanel, анализируйте поведение ваших пользователей и принимайте на их основе решения.

## Как добавить интеграцию? 

1. Откройте <a href="https://mixpanel.com/" target="_blank">Mixpanel</a> и войдите в ваш аккаунт.
2. Откройте *"Project settings"*:

![mixpanel-step-1](assets/mixpanel-step-1.png)

3. Прокрутите вниз и скопируйте *API Key*:

![mixpanel-step-3](assets/mixpanel-step-2.png)

4. Мы **рекомендуем** отключить опцию *"Automatically collect common mobile events"*, чтобы Mixpanel автоматически не создавал события при покупках. Иначе, например, оформление триального периода будет считаться выручкой:

![mixpanel-disable-autocollect](assets/mixpanel-disable-autocollect.png)

5. В <a href="https://app.apphud.com/" target="_blank">Apphud</a> перейдите в раздел *"Integrations"* и добавьте Mixpanel: 

![mixpanel-adding-integration](assets/mixpanel-adding-integration.png)

6. Вставьте скопированный *Mixpanel API Key* в поле *"API Key"*: 

![mixpanel-api-key](assets/mixpanel-api-key.png)

7. При желании введите собственные названия любого из событий или отключите его отправку в Mixpanel:

![mixpanel-custom-event-names](assets/mixpanel-custom-event-names.png)

8. Поставьте галочку напротив *"Enable this integration"*:

![mixpanel-enable-integration](assets/mixpanel-enable-integration.png)

9. Если хотите, чтобы Apphud отправлял в Mixpanel данные о выручке, поставьте галочку напротив *"Send Revenue properties to Mixpanel"*. Сохраните изменения:

![mixpanel-save](assets/mixpanel-save.png)

## События

В таблице ниже указаны возможные события и их параметры, которые отсылаются в Mixpanel. Вы можете задать собственные наименования для каждого события и отключить некоторые их них в настройках интеграции, если нужно.

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
| *Промо-предложение*                                          |                                  |                                                              |
| Оформление промо-предложения                                 | `[Apphud] promo_started`         | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Успешное продление промо-предложения                         | `[Apphud] promo_renewed`         | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String<br/>`unit`: String<br/>`units_count`: Integer |
| Успешная конвертация промо-предложения в обычную подписку    | `[Apphud] promo_converted`       | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`offer_type`: String |
| Неудачная конвертация промо-предложения в обычную подписку   | `[Apphud] promo_expired`         | `product_id`: String<br/>`reason`: String<br>`offer_type`: String |
| Возврат денег в пределах промо-предложения                   | `[Apphud] promo_refunded`        | `product_id`: String<br/>`local_price`: Float<br/>`currency`: String<br/>`usd_price`: Float<br/>`reason`: String<br>`offer_type`: String |
| *Настройки авто-возобновления*                               |                                  |                                                              |
| Отключение авто-возобновления                                | `[Apphud] autorenew_disabled`    | `product_id`: String                                         |
| Включение авто-возобновления                                 | `[Apphud] autorenew_enabled`     | `product_id`: String                                         |

> Настройте Subscription Status URL, чтобы своевременно получать события `autorenew_disabled` и `autorenew_enabled`. Более подробно о настройке можно почитать [здесь](creating-app.md#subscription-status-url).
>

Вместе с событиями:

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

могут опционально отправляться **встроенные в Mixpanel данные о выручке**. По умолчанию эта опция **отключена**, но вы можете включить ее в настройках интеграции: 

![mixpanel-revenue-tracking](assets/mixpanel-revenue-tracking.png)

## Свойства пользователя 

В таблице ниже указаны свойства пользователя и их типы, которые присваиваются пользователям в Mixpanel.

> О том, что означает каждое из свойств, вы можете прочитать [здесь](integrations.md).

| Параметр                        | Тип     |
| ------------------------------- | ------- |
| `[Apphud] status-group_name`    | String  |
| `[Apphud] autorenew-group_name` | Boolean |
| `[Apphud] total_spent`          | Float   |
| `[Apphud] paying`               | Boolean |
| `[Apphud] payments_count`       | Integer |

## Отправка тестового события

Вы можете протестировать интеграцию с Mixpanel, отправив тестовое событие. Нажмите *"…"* и выберите *"Send test event"*:

![mixpanel-test-event](assets/mixpanel-test-event.png)

После этого вы увидите нового пользователя и событие в разделе *"Live view"*:

![mixpanel-test-event-received](assets/mixpanel-test-event-received.png)