window.addEventListener('DOMContentLoaded', function() {
	'use strict';
// ===========================Табы===========================
	let tab =  document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	}) 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// =======================Таймер=======================

	let deadline = '2019-06-21'; //Дата оканчания 

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()), //Определяем сколько времени осталось (дата оканчания таймера минус ныняшняя дата)
		seconds = Math.floor((t/1000) % 60), //определяем количество оставшихся секунд
		minutes = Math.floor((t/1000/60) % 60), //определяем количество оставшихся минут
		hours = Math.floor((t/(1000*60*60))); //определяем количество оставшихся часов

		/*
		// Если нужнен таймер с количеством дней
		hours = Math.floor((t/1000/60/60) % 24),
		days = Math.floor((t/(1000*60*60*24)));
		*/
		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if(t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock('timer', deadline);


});