# Cleverland*

! NOTE: the backend is currently unavailable

## Summary

![главная страница все книги плитка](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/d036a17c-de04-4368-8ea5-0ee9278180e3)

Приложение для библиотеки.

Возможности: 
регистрация/авторизация пользователя, восстановление пароля; 
просмотр полного списка книг, просмотр по категориям, сортировка по рейтингу, поиск по названию; 
просмотр информации о книге, бронирование/отмена бронирования книги, добавление комментария и оценки книги; 
личный кабинет пользователя с возможностью редактирования данных, загрузки фото профиля, просмотра списка забронированных пользователем книг и книг, которые находятся у пользователя в данный момент (при нарушении сроков бронирования и возврата книги, в личном кабинете пользователь видит предупреждение), а также истории прочитанных пользователем книг.

*тренинг по веб-разработке Clevertec Frontend Lab

#

Library application.

Features: 
user registration/authorization, password recovery; 
viewing the full list of books, viewing by category, sorting by rating, searching by title; 
viewing book information, booking/cancelling booking, adding a comment and rating a book; 
user's personal account with the ability to edit data, upload a profile photo, view a list of books booked by the user and books that the user currently has (in case of violation of the terms of booking and returning the book, the user sees a warning in the personal account), as well as the history of books read by the user .

*web development training Clevertec Frontend Lab

## Technologies

##### React,                                                                   
##### Redux, Redux Thunk, Redux Persist, Redux Toolkit,  
##### React Hook Form,
##### TypeScript,                                    
##### Axios
##### SCSS


## Details

Авторизация:

Authorization:

![вход](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/db94fcef-f5fc-4a75-96d7-86066466d4eb)
![вход неверный логин или пароль](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/a2d3f167-f809-4680-8dda-a5dc72cbde89)

Регистрация:

Registration:

![регистрация шаг1 неверный пароль](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/205aa95b-3c85-46fd-b002-6ca914f8d88e)
![регистрация шаг1 верно](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/de050d71-b305-4f21-a8e7-747dd617e6de)
![регистрация шаг2](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/1c7b8d31-e7aa-4434-a662-75f451ce0994)
![регистрация шаг3 неверный адрес](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/a322fb32-7101-4663-a8b8-9d879a915720)

Восстановление пароля:

Password recovery:

![восстановление пароля](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/412c76a7-ccb8-4548-9a32-2da69e749a87)

Главная страница:

Main page:

![главная страница все книги плитка](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/56a78a7f-90b0-469d-a0a5-dbfd3ddd7154)
![главная страница все книги список](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/979708e3-9e54-4c32-9699-d19aabd9295e)

320px view
![главная страница 320 все книги список](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/a2b9a75d-9559-431a-adef-53d4f8731a46)

 -поиск:
 
 -search:
 
 ![главная страница все книги поиск](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/1b20c0d5-b846-4916-a4e8-a6937293f6a7)

 -сортировка по рейтингу:
 
 -sort by rating:
 
![главная страница все книги по рейтингу с высокого](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/5a98027d-d181-4099-9fb1-9bc1afeb8fbb)

 -книги из категории:
 
 -books from category:
 
 ![главная страница книги из категории](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/ec4ca491-b465-482c-9137-52b200028ec5)

 -одна книга забронирована:
 
 -one item is booked:
 
 ![главная страница все книги - книга забронирована](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/668ec4b6-4fa4-42d2-bef8-046d66d016b7)

 -выбрать дату бронирования (выделена текущая дата (26) и доступные для бронирования дни (27)):
 
 -select booking date (the current date (26) and days available for booking (27) are highlighted):
 
 ![выбор даты бронирования](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/b815630c-aa94-49e4-acc5-1ebba319e123)
 ![выбор даты бронирования - дата выбрана](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/f5da4fcb-191c-49aa-8644-c89fee2f13a5)

Страница книги:

Book page:

![страница книги 1](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/6b7cfc69-5827-408c-89cf-78c01e079bc8)
![страница книги 2](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/55c5b6ec-0061-43a2-8e74-676f7a793984)

 -измененить дату бронирования/отмена брони (выделена измененная дата (26) и доступные для бронирования дни (27)):
 
 -change booking date/cancel booking (the chosen date (26) and days available for booking (27) are highlighted):
 
 ![изменение даты бронирования, отмена брони - дата изменена](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/de49163a-9a6a-4c45-adc5-4aa9e940ef9c)

 -оценить книгу и оставить отзыв:
 
 -rate the book and leave a comment:
 
![оценить книгу](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/3ae54da6-d841-4a12-a648-64555c95335e)

Страница профиля пользователя:

User profile page:

![профиль пользователя - часть 1](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/7f249f1f-9dcc-41a4-a884-198b3635de20)
![профиль пользователя - часть 2](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/a185eb9f-93d6-46d7-b8f4-ae54ca13bb31)

 -редактировать данные пользователя:
 
 -edit profile data:
 
![профиль пользователя - редактировать данные - неверно](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/da4e73c4-f2c3-4835-97c2-ce803cc548d5)


 -у пользователя одна забронированная книга:
 
 -the user has one booked item:
 
 ![профиль пользователя - книга забронирована](https://github.com/TatyanaZahozhaya/cleverland/assets/102023089/f9e3f7f7-799f-4796-84a5-bf567112ca21)






