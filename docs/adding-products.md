---
id: adding-products
title: Adding products
---
# Добавление продуктов

Структура групп продуктов (подписок) и самих продуктов (подписок) внутри них должна **точно соответствовать** их структуре в App Store Connect. Это требуется для правильной работы сервиса.

> К сожалению, у Apple нет API для загрузки продуктов из App Store Connect. Поэтому вам придется вручную продублировать эту структуру в Apphud.
>

**Важно: если вы добавляете новые продукты в App Store Connect, не забывайте их сразу же добавлять и в Apphud. Удалять же старые продукты из Apphud не нужно.**

**Важно: не рекомендуется менять цены на уже существующие продукты после интеграции Apphud. Вместо этого создайте новые продукты с новыми product_id и новой ценой.**

## Добавление группы продуктов

Нажмите *“Add products group”*, чтобы добавить новую группу продуктов. Придумайте название для нее, которое будет использовано в отчетах.

## Добавление продукта

Чтобы создать продукт, нажмите *“Add a product”*. Введите идентификатор *“product_id”* и нажмите *“Create”*.