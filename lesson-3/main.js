'use strict'

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	bydget: money,
	timeDate: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
}

for(let i = 0; i < 2; i++){
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = prompt('Во сколько обойдется?', '');

	if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
		/*Делаем проверку что переменная -a- является строкой
		 и переменные -а- и -b- не была отмена при вызове в prompt, 
		эти переменные не были пустыми строками 
		и переменная -а- не превышала больше 50 символов
		*/
		console.log('done');
		appData.expenses[a] = b;
	} else{
		i = i - 1;
		console.log('Ошибка при вводе данных!');
	}
};

appData.moneyPerDay = appData.bydget / 30;

alert('Ежедневный бюджет ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
	console.log('Минимальный уровень достатка');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
	console.log('Средний уровень достатка');
} else if(appData.moneyPerDay > 2000){
	console.log('Высокий уровень достатка');
} else(
	console.log('Произошла ошибка')
)
console.log(appData);

