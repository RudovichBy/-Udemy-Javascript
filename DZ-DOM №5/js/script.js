'use strict'

let li = document.createElement('li');
let menu = document.querySelector('.menu');
let menuItem = document.getElementsByClassName('menu-item');
let title = document.getElementById('title');
let adv = document.querySelector('.adv');
let body = document.createElement('body');
let promptContent = document.querySelector('.prompt');


// Восстановить порядок в меню
menu.insertBefore(menuItem[2], menuItem[1]);

// добавить пятый пункт
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

// Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.innerHTML = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
adv.remove();

 // Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let promtQuery = prompt('Ваше отношение  к технике Apple', '');
promptContent.textContent = promtQuery;