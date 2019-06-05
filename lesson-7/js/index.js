// 'use strict'
let startBtn =document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsaving-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function() {
	time = prompt('Введите дату в формате год-месяц-день', '2019-06-01');
	money = +prompt('Ваш бюджет на месяц?', '');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt('Ваш бюджет на месяц?', '');
	}

	appData.budget = money;
	appData.timeDate = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
	let sum = 0;

	for(let i = 0; i < expensesItem.length; i++){
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
	
		if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
			
			console.log('done');
			appData.expenses[a] = b;
			sum += +b;
		} else{
			i = i - 1;
			console.log('Ошибка при вводе данных!');
		}
		expensesValue.textContent = sum;
	}
});

optionalExpensesBtn.addEventListener('click', function() {
	for ( let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + '; '; 
	}
});

countBtn.addEventListener('click', function() {
	if (appData.bydget != undefined) {
		appData.moneyPerDay = (appData.bydget / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if(appData.moneyPerDay < 100){
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
			levelValue.textContent = 'Средний уровень достатка';
		} else if(appData.moneyPerDay > 2000){
			levelValue.textContent = 'Высокий уровень достатка';
		} else(
			levelValue.textContent = 'Произошла ошибка'
		)
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка'
	}
	
});

let appData = {
	bydget: money,
	timeDate: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	// detectDayBudget: function() {
		
	// 	alert('Ежедневный бюджет ' + appData.moneyPerDay);
	// },
	// detectLevel: function() {
		
	// 	console.log(appData);
	// },
	checkSavings: function() {
		if(appData.savings == true){
			let save 	= +prompt('Какова сумма накоплений?', ''),
				percent = +prompt('Под какой процент?', '');
			
			appData.montIncome = save/100/12*percent;
			alert('Доход в месяц с вашего депозита: ' + appData.montIncome);	
		}
	},
	// chooseOptExpenses: function() {
		
	// },
	choseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то еще?'));
		appData.income.sort();
	}
};