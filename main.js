'use strict'

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
	bydget: money,
	timeDate: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
}
let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
	a2 = prompt('Во сколько обойдется?', ''),
	a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
	a4 = prompt('Во сколько обойдется?', ''),

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
alert('Ежедневный бюджет ' + appData.bydget / 30);
console.log(appData);

// for (let i = 0; i < 2; i++) {
// 	let a = prompt('Какой тип товаров будем продавать?');
// 	if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.lenght < 50) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		i = i - 1;
// 	}
// }
// alert('Ежедневный бюджет' + mainList / 30);
// console.log(mainList);
