// 1

// let bankAccount = {
//     ownerName: 'Dima',
//     accountNumber: 2,
//     balance: 1500,
//     deposit: function () {
//         let value = Number(prompt("Введіть суму яку хочете поповнити:"));
//         let a = confirm(`Сума поповнення ${value},Все вірно?`);
//         if (a === true) {
//             this.balance += value;
            
//         }
//         else {
//             return `Ваш баланс = ${this.balance}`;
//         }
//         return `Ваш баланс = ${this.balance}`
//     },
//     withdraw: function () {
//         let value = Number(prompt("Введіть суму яку хочете зняти з рахунку"));
//         let b = confirm(`Сума зняття з рахунку = ${value},все вірно?`);
//         if (b === true) {
//             if (this.balance > value) {
//                 this.balance = this.balance - value;
                
//             }
//             else {
//                 return `На рахунку недостатньо коштів`;
//             }
//         }
//         else {
//             return `Ваш баланс = ${this.balance}`;
//         }
//         return `Залишок на рахунку = ${this.balance}`;
//     }
// }
// console.log(bankAccount);
// console.log(bankAccount.deposit());
// console.log(bankAccount.withdraw());
// console.log(bankAccount);

// 2
// let weather = {
//     tempreture: Number(prompt("Введіть температуру")),
//     humidity: 2,
//     windSpeed: 10,
//     isWarm: function () {
//         if (this.tempreture >= 0) {
//             return 'Температура вища або рівна 0';
//         }
//         return 'Температура нижче 0';
//     }
// }
// console.log(weather.isWarm());

// 3
// let user = {
//     name: 'dima',
//     email: 'dimongorchak@gmail.com',
//     password: 12345678,
//     login: function (email, password) {
//         if (email === this.email && password === this.password) {
//             return 'Пароль та пошта введені вірно';
//         }
//         return 'Пароль або пошта введені невірно';
//     }
// }
// console.log(user.login('dimongorchak@gmail.com',12345678));
// console.log(user.login('dim1','dd'));


// 4
// let movie = {
//     title: 'first',
//     director: 'dima',
//     rating: 7,
//     year: 2001,
//     isGood: function () {
//         if (this.rating >= 8) {
//             return true;
//         }
//         return false;
//     }    
// }
// console.log(`Чи фільм вищий за рейтингом ніж 8? ${movie.isGood()}`);


