## Создание приложения

Чтобы создать приложение, выберите пункт меню *"Add new app"* в выпадающем списке в верхней части экрана:

![New-app-step-1](../Images/New-app-step-1.png)

Или просто зарегистрируйтесь и экран создания нового приложения появится автоматически. Заполните информацию о приложении.

## App name

Это название приложение, которое будет указано в отчетах.

## Bundle ID

Узнать уникальный идентификатор iOS-приложения – *Bundle ID* – можно одним из двух способов:

##### Если у вас есть доступ к App Store Connect

1. Откройте [App Store Connect](https://appstoreconnect.apple.com), перейдите в раздел *"My Apps"* и выберите нужное приложение.
2. На странице приложения в выпадающем меню *“More”* выберите *“About this App”*.
3. Идентификатор приложения указан в поле *“Bundle ID”*.

##### Если у вас нет доступа к App Store Connect

1. Найдите приложение в App Store и откройте его страницу (например, https://itunes.apple.com/us/app/facebook/id284882215?mt=8).
2. Скопируйте число, которое указан в URL между `id` и `?` (в примере: `284882215`).
3. Вставьте идентификатор в URL: https://itunes.apple.com/lookup?id= после знака `=`: https://itunes.apple.com/lookup?id=284882215.
4. В файле `1.txt`, который браузер скачает по этому URL, найдите текст *"bundleId"*.

## App Store shared secret

Узнать App Store shared secret можно так:

1. Откройте [App Store Connect](https://appstoreconnect.apple.com), перейдите в раздел *“My Apps”* и выберите нужное приложение.
2. Перейдите во вкладку *"Functions"*, выберите пункт меню *“In-App Purchases”*.
3. Нажмите *“View Shared Secret”*.

## Subscription Status URL

Мы настоятельно рекомендуем вставить сгенерированный *Subscription Status URL* в настройках вашего приложения в [App Store Connect](https://appstoreconnect.apple.com). Это позволит сильно увеличить точность создавамых событий.

> Более подробно о создаваемых событиях можете почитать здесь

1. Откройте [App Store Connect](https://appstoreconnect.apple.com), перейдите в раздел *“My Apps”* и выберите нужное приложение.
2. В разделе *"General Information"* найдите поле *"Subscription Status URL"*, вставьте сгенерированный URL в это поле и сохраните изменения.