// 'use strict'

let money, time;
function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt('Ваш бюджет на месяц?', '');
	}
}
start();

let appData = {
	bydget: money,
	timeDate: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function choseExpenses(){
/*Делаем проверку что переменная -a- является строкой
 и переменные -а- и -b- не была отмена при вызове в prompt, 
эти переменные не были пустыми строками 
и переменная -а- не превышала больше 50 символов
*/
	for(let i = 0; i < 2; i++){
		let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
			b = prompt('Во сколько обойдется?', '');
	
		if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
			
			console.log('done');
			appData.expenses[a] = b;
		} else{
			i = i - 1;
			console.log('Ошибка при вводе данных!');
		}
	}
}
choseExpenses();

function detectDayBudget(){
	appData.moneyPerDay = (appData.bydget / 30).toFixed();
	alert('Ежедневный бюджет ' + appData.moneyPerDay);
}
detectDayBudget();
function detectLevel(){
	if(appData.moneyPerDay < 100){
		console.log('Минимальный уровень достатка');
	} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
		console.log('Средний уровень достатка');
	} else if(appData.moneyPerDay > 2000){
		console.log('Высокий уровень достатка');
	} else(
		console.log('Произошла ошибка')
	);
	console.log(appData);
}
detectLevel();

function checkSavings(){
	if(appData.savings == true){
		let save 	= +prompt('Какова сумма накоплений?'),
			percent = +prompt('Под какой процент?');
		
		appData.montIncome = save/100/12*percent;
		alert('Доход с вашего депозита: ' + appData.montIncome);	
	}
}
checkSavings();

// function chooseOptExpenses(){
// 	for( let i = 1; i < 4; i++){
// 		let c = prompt('Статья необязательных расходов?', ''),
// 		  	x = 1;
		
// 		if((typeof(c)) != null && c != ''){
// 			appData.optionalExpenses[x] = c;
// 			x += 1;
// 		} 
// 	}
// }
// chooseOptExpenses();