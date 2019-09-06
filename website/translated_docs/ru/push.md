Интеграция пуш уведомлений в вашем приложении откроет возможность использования ключевой функции по возврату ушедших покупателей и уведомлений о проблемах с оплатой.

## Генерация ключа

Перейдите [Портал разрабтчика Apple](https://developer.apple.com/account/ios/profile/), далее на страницу '*Ключи*' , там создайте новый ключ, указав его имя и выбрав '_Apple Push Notifications service (APNs)_'.

[IMAGE]

Скачайте полученный ключ и сохраните в безопасном месте. Он понадобится нам далее. 

Также скопируйте Team ID, который можно узнать на странице вашего аккаунта [Developer Account Membership](https://developer.apple.com/account/#/membership).

> Название ключа имеет следущий формат: AuthKey_[KEY_ID].p8, где KEY_ID – это ваш идентификатор ключа.
>
> Используя данный ключ, Apphud сможет отправлять пуш уведомления на все ваши приложения данного аккаунта, включая sandbox и production среды. Это также означает, что для вашего следующего приложения вы можете использовать этот же файл.

## Загрузка ключа в Apphud

Перейдите в [Apphud Dashboard](https://app.apphud.com) и откройте '*App settings'*, далее секцию '*Push*'. Там вы найдете кнопку Upload. Загрузите файл, а также введите Team ID и Key ID.

[IMAGE]

## Настройка пуш уведомлений в iOS приложении

Убедитесь, что пуш уведомления включены в разделе '*Capabilities*' таргета вашего приложения:

[IMAGE]

Теперь давайте напишем немного кода. Во-первых, запросим разрешение для получения уведомлений:

```swift
import UserNotifications

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  Apphud.start(apiKey: YOUR_API_KEY)
  registerForNotifications()
  //... the rest of your code
}

func registerForNotifications(){
	UNUserNotificationCenter.current().delegate = self
	UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound])	{ (granted, error) in            
		// handle if needed
	}        
	UIApplication.shared.registerForRemoteNotifications()
}
```

После этого вам нужно отправить полученный deviceToken в Apphud:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
	Apphud.submitPushNotificationsToken(token: deviceToken, callback: {_ in})
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
	// error occurred. Probably you have signing issues or push notifications capabilities are	// turned off
}
```

Осталось добавить обработку полученных пуш уведомлений. Это делается двумя методами: первый обрабатывает уведомления, полученные, когда приложение в бэкграунде либо не запущено, а второй – когда приложение активно.

```swift
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
	Apphud.handlePushNotification(apsInfo: response.notification.request.content.userInfo)
	completionHandler()
}
    
func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
	Apphud.handlePushNotification(apsInfo: notification.request.content.userInfo)
	completionHandler([]) // return empty array to skip showing notification banner
}
```

На этом всем. Запустите приложение и убедитесь, что метод `didRegisterForRemoteNotificationsWithDeviceToken` вызывается и `deviceToken` успешно отправляется в Apphud.

Теперь вы готовы получать пуш уведомления. 

## Тестирование пуш уведомлений

Для тестирования уведомлений создайте любое правило и перейдите во вкладку '*Test*'. Введите пуш токен устройства и нажмите '*Send*'.

[IMAGE]

Пуш токен устройства можно получить, как в Apphud, так и в Xcode:

* На странице пользователя в секции '*Users*'. Найдите своего пользователя и увидите пуш токен. 

* Запустите приложение в Xcode с подключенным iOS устройством и найдите строку `push_token`  в консоли. Apphud пишет пуш токен в логи при каждом запуске.

Если вы получили пуш уведомление, значит настройка завершена.

