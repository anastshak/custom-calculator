# custom-calculator

## Task | Задание

Innowise Lab Internship: Level 0: Custom calculator

The project is based on the pet project “simple-calculator”, but has been reworked with new functionality and testing. |
Проект основан на пет-проекте "simple-calculator", но переработан с новый функционалом и тестированием.

[Link to task description | Описание задания](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

## Technologies used | Используемые технологии

- webpack
- javascript
- eslint, prettier, husky
- jest

## How to run the app | Как запустить приложение

1. Clone this repository | Склонировать репозиторий

```cmd
git clone https://github.com/anastshak/custom-calculator.git
```

2. Install dependencies | Установить все зависимости

```cmd
npm install
```

3. Start | Старт

```cmd
npm run start
```

## Useful scripts | Полезные скрипты

1. For identification of coding style issues and potential errors | Для выявления проблем со стилем кода и потенциальных ошибок

```cmd
npm run lint
```

2. For fix errors | Для исправления ошибок

```cmd
npm run lint:fix
```

3. For checking issues of coding style | Для проверки кода на стилистические ошибки

```cmd
npm run ci:format
```

4. For code formatting and ensuring uniform code style | Для форматирования кода и обеспечения единообразного стиля кода

```cmd
npm run format
```

5. For testing the application work to validate the behavior of all mathematical function | Для тестирования работы приложения, чтобы проверить поведение всех математических функций

```cmd
npm run test
```

## The app structure | Структура приложения

> custom-calculator

> > src

> > > tests - тесты математических функций

> > > assets - изображения (фавиконка)

> > > commands - комманды и менеджер комманд (логика приложения)

> > > components - компоненты (главный слой + переключатель темы)

> > > constants - константы

> > > handlers - обработчики функций и кнопок

> > > state - состояние

> > > styles - стили

> > > utils - дополнительные функции

> > > index.js

> > > index.html
