# Amplitude

Amplitude это мощная система мобильной аналитики. Отправляйте события из Apphud в Amplitude, анализируйте поведение ваших пользователей и принимайте на их основе решения.

## Как добавить интеграцию? 

1. [Откройте Amplitude](https://analytics.amplitude.com/) и войдите в ваш аккаунт.
2. Кликните на *"Manage Data"* в нижней части экрана:

![Amplitude-step-1](../../Images/Amplitude-step-1.png)

3. Выберите ваше приложение:

![Amplitude-step-2](../../Images/Amplitude-step-2.png)

4. Скопируйте *Amplitude API Key*:

![Amplitude-step-3](../../Images/Amplitude-step-3.png)

5. В [Apphud](https://app.apphud.com) перейдите в раздел *"Integrations"* и добавьте Amplitude: 

   **// картинка**

6. Вставьте скопированный *Amplitude API Key* в поле *"Amplitude API Key"*: 

   **// картинка**

## События

В таблице ниже указаны возможные события и их параметры, которые отсылаются в Amplitude. Вы можете задать собственные наименования для каждого события и отключить некоторые их них в настройках интеграции, если нужно.

> О том, что означает каждый из параметров вы можете прочитать [здесь](https://google.com).

| Событие                                         | Наименование по умолчанию      | Параметр:  тип, возможные значения                           |
| ----------------------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| Оформление триала                               | [Apphud] trial_started         | `product_id`: String<br>`unit`: String<br>`units_count`: Integer |
| Успешная конвертация триала в обычную подписку  | [Apphud] trial_converted       | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float |
| Неудачная конвертация триала в обычную подписку | [Apphud] trial_expired         | `product_id`: String<br>`reason`: String                     |
| Успешное оформление подписки                    | [Apphud] subscription_started  | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float<br>`in_intro`: Boolean |
| Успешное продление подписки                     | [Apphud] subscription_renewed  | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float<br>`in_intro`: Boolean |
| Неудачное продление подписки                    | [Apphud] subscription_expired  | `product_id`: String<br>`reason`: String<br>`in_intro`: Boolean |
| Возврат денег                                   | [Apphud] subscription_refunded | `product_id`: String<br>`local_price`: Float<br>`currency`: String<br>`usd_price`: Float<br>`in_intro`: Boolean<br>`refund_reason`: String |
| Отключение авто-возобновления                   | [Apphud] autorenew_off         | `product_id`: String<br>`reason`: String                     |
| Включение авто-возобновления                    | [Apphud] autorenew_on          | `product_id`: String                                         |

Вместе с событиями `[Apphud] trial_converted`, `[Apphud] subscription_started` и `[Apphud] subscription_renewed` также могут опционально отправляться встроенные в Amplitude события типа *Track Revenue* (более подробно можно почитать [здесь](https://help.amplitude.com/hc/en-us/articles/115002278527#tracking-revenue)). Это позволит пользоваться встроенными в Amplitude отчетами о выручке. По умолчанию эта опция **отключена**, но вы можете включить ее в настройках интеграции: 

**// картинка**

Вот описание параметров, которые отсылаются вместе с этими событиями:

| Параметр          | Тип        | Описание                                                     |
| ----------------- | ---------- | ------------------------------------------------------------ |
| `productID`       | String     | ID продукта                                                  |
| `quantity`        | Int        | Количество продуктов в покупке. *Всегда равно 1*             |
| `price`           | Float      | Цена покупки в долларах США                                  |
| `revenueType`     | String     | Информация о событии. Возможные значения: `trial_converted`, `subscription_started`, `subscription_renewed` |
| `eventProperties` | Dictionary | Дополнительная информация. Это словарь содержит следующие поля:<br>– `local_price`: Float – цена покупки в валюте пользователя<br>– `currency`: String – код валюты пользователя<br>– `in_intro`: Boolean – находится ли пользователь в рамках вводного предложения. *Опциональное поле*, присутствует только в случаях `subscription_started` и `subscription_renewed`. |

## Свойства пользователя 

В таблице ниже указаны свойства пользователя и их типы, которые присваиваются пользователям в Amplitude.

> О том, что означает каждое из свойств вы можете прочитать [здесь](https://google.com).

| Параметр                        | Тип     |
| ------------------------------- | ------- |
| `[Apphud] state-group_name`     | String  |
| `[Apphud] autorenew-group_name` | Boolean |
| `[Apphud] total_spent`          | Float   |
| `[Apphud] paying`               | Boolean |