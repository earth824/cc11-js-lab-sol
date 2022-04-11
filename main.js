// Lab 1.1.1, 1.1.3
// alert กล่องข้อความ
// alert('My name is Son');

// Lab 1.2.1
// var name;
// var person;
// name = 'John';
// person = name;
// alert(person);

// Lab 1.2.2
// let myMoney
// let fatherName
// let motherName
// let address
// let universeAge

// Lab 1.2.3
// error const ต้องประกาศค่าเริ่มต้นเสมอ
// const user;
// const role;
// user = 'I am a hero'
// role = 'customer'
// error ต้องประกาศตัวแปรก่อนเรียกใช้
// alert(username)

// Lab 1.2.4
// const firstName = 'John'
// let lastName = 'Doe'
// var nickname = 'J'

// const firstName = 'Jim'
// let lastName = 'Carry'
// var nickname = 'Jim'
// ไม่ error แต่ไม่ควร
// birthDate = '1/1/1990'

// Lab 1.3.2
// const firstName = 'John';
// let lastName = 'Doe';
// const age = 20;
// const address = '179 Banthathong Pathumwan Bangkok';
// console.log(
//   `Full Name: ${firstName} ${lastName}, Age: ${age}, Address: ${address}`
// );

// Lab 1.4.1
// let a = undefined;
// let b = 2;
// let c = a++; // a = a + 1 => NaN
// let d = String(a); // 'undefined'
// let e = '' + b; // '2'
// let f = `${c}`; // 'NaN'

// Lab 1.4.2
// let a = undefined;
// let b = null;
// let c = b + '4 2'; // 'null4 2'
// let d = Number(a) // NaN
// let e = +b // 0
// let f = c * 1 // NaN

// Lab 1.4.3
// let a = undefined;
// let b = ' ';
// let c = !b; // false
// let d = Boolean(a) // false
// let e = !!b // true
// let f = !!c // false

// Lab 1.4.5
// let a = 0;
// a++; // 1
// a += 3; // 4
// a *= 17; // 68
// a %= 7; // 5

// Lab 1.4.6
// let a = 1; // a:1
// let b = 2; // a:1 b:2
// let c = a++; // a:2 b:2 c:1
// let d = ++c; // a:2 b:2 c:2 d:2
// let e = ++d + d++ + d; // 3+3+4 // d:4 e:10

// Lab 1.4.7
// let num1 = +prompt('Enter number 1')
// let num2 = +prompt('Enter number 2')
// alert(num1 + num2)

// Lab 1.4.8
// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c.toFixed(1));

// Lab 1.4.9
// let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
// 4 + 0 => 4 + 0 => 4 - 10 => -6 + +('9' + 0) => -6 + +'90' => 84

// Lab 2.2.3
// const input = prompt('Enter name')
// if (input === 'John') alert('Correct')
// else alert('Wrong')

// Lab 2.2.4
// const input = prompt('Enter number');
// if (input > 0) {
//   alert('Positive number');
// } else if (input < 0) {
//   alert('Negative number');
// } else if (input === '0') {
//   alert('Zero');
// } else {
//   alert('Invalid number');
// }
// เปรียบเทียบความเท่ากันทำได้ 2 แบบ ==, ===

// Lab 2.2.5
// const input = prompt('Enter number');
// if (input === null || input.trim() === '' || isNaN(input)) {
//   alert('Invalid number')
// } else if (input % 2 === 0) {
//   alert('Even number')
// } else  {
//   alert('Odd number')
// }

// Lab 2.2.6
// function isValidNumber(checkValue) {
// if (checkValue === null) {
//   return false;
// }
// if (checkValue.trim() === '') {
//   return false;
// }
// if (isNaN(checkValue)) {
//   return false;
// }
// return true;
//   return !(
//     checkValue === null ||
//     checkValue.trim() === '' ||
//     checkValue(input1)
//   );
// }

// const input1 = prompt('Enter number1');
// const input2 = prompt('Enter number2');
// if (!isValidNumber(input1) || !isValidNumber(input2)) {
//   alert('Invalid number');
// } else {
//   alert(+input1 + +input2)
// }

// Lab 2.2.7
// const username = prompt('Enter username');

// if (!isValidInput(username)) {
//   alert('username is required')
// } else {
//   const password = prompt('Enter password');
//   if (!isValidInput(password)) {
//     alert('password is required')
//   } else {
//     if (username === 'admin' && password === '1234') {
//       alert(`Hello ${username}`)
//     } else if (username === 'john' && password === 'qwerty') {
//       alert(`Hello ${username}`)
//     } else {
//       alert('invalid username or password')
//     }
//   }
// }

// function isValidInput(value) {
//   return !(value === null || value.trim() === '')
// }

// Lab 2.2.8
// const input = prompt('Enter score');
// if (!isValidNumber(input)) {
//   alert('Invalid number')
// } else {
//   if (input >= 80) {
//     alert('A')
//   } else if (input >= 70) {
//     alert('B')
//   } else if (input >= 60) {
//     alert('C')
//   } else if (input >= 50) {
//     alert('D')
//   } else if (input >= 0) {
//     alert('F')
//   } else {
//     alert('Invalid score')
//   }
// }

// Lab 2.2.9
// let age = prompt('How old are you');
// let message;
// if (age >= 18) {
//   message = 'Allowed';
// } else {
//   message = 'Not allowed';
// }
// let message = age >= 18 ? 'Allowed' : 'Not allowed'

// Lab 2.2.10
// let login = prompt('Enter username');
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// let message = login === 'Employee' ? 'Hello' : login === 'Director' ? 'Greetings' : login === '' ? 'No login' : ''

// Lab 2.2.11
// const input = prompt('Enter score');
// if (!isValidNumber(input)) {
//   alert('Invalid number');
// } else {
//   if (input >= 80) {
//     alert('A');
//   } else if (input >= 70) {
//     alert('B');
//   } else if (input >= 60) {
//     alert('C');
//   } else if (input >= 50) {
//     alert('D');
//   } else if (input >= 0) {
//     alert('F');
//   } else {
//     alert('Invalid score');
//   }
// }

// let message = !isValidNumber(input)
//   ? 'Invalid number'
//   : input >= 80
//   ? 'A'
//   : input >= 70
//   ? 'B'
//   : input >= 60
//   ? 'C'
//   : input >= 50
//   ? 'D'
//   : input >= 0
//   ? 'F'
//   : 'Invalid score';
// alert(message);

// Lab 2.3.1
// const input = prompt('Enter number');
// switch (input) {
//   case '1':
//     alert('One');
//   break;
//   case '0':
//     alert('Zero');
//     break;
//   case '-1':
//     alert('Minus one');
//     break;
//   default:
//     alert('Invalid value');
// }

// Lab 2.3.2
// let a = +prompt('a?');

// if (a === 0) {
//   alert(0);
// }
// if (a === 1) {
//   alert(1);
// }

// if (a === 2 || a === 3) {
//   alert('2,3');
// }

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
//   default:
// }

// Lab 2.3.3
// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;
//   default:
//     alert('We hope that this page looks ok!');
// }

// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === "Safari" || browser === 'Opera') {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }

// Lab 2.4.3
// let user = prompt('Enter username') || 'guest'
// // if (user === '' || user === null) {
// //   user = 'Guest'
// // }

// if (user === 'codecamp') {
//   let password = prompt('Enter password');
//   if (password !== '123456') {
//     alert('Wrong password')
//   }
// } else {
//   user = 'guest'
// }

// alert(user);

// Lab 3.3
// for (let i = 1; i <= 50; i++) {
//   console.log(i * 2);
// }

// let i = 0;
// while (i < 100) {
//   i += 2;
//   console.log(i);
// }

// Lab 3.4
// let sum = 0;
// let sumOdd = 0;
// let sumEven = 0;
// let sum3 = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   if (i % 2) {
//     sumOdd += i;
//   } else {
//     sumEven += i;
//     sum3 += i ** 2; // 2**2 + 4**2 + ...
//   }
//   if (i % 3 === 0) {
//     sum3 -= i ** 2; // -(3**2 + 6**2)
//   }
// }
// console.log(sum);
// console.log(sumOdd);
// console.log(sumEven);
// console.log(sum3);

// Lab 3.5
// let amount = 100000; // amount = amount + amount * rate / 100
// for (let i = 0; i < 10; i++) {
//   // amount = amount + (amount * 2.5) / 100;
// amount += (2.5 / 100) * amount;
// amount = (1+2.5 / 100) * amount;
// }

// for (let i = 0;i<=10;i++) {
//   for(let j=0;j<=10;j++) {
//     console.log('Hello')
//   }
// }

// let result = '';
// for (let i = 0; i < 10; i++) {
//   // console.log(i);
//   result += i + ' ';
// }
// console.log(result);

// Lab 3.6
// let acc = '';
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (i <= j) {
//       acc += '*';
//     } else {
//       acc += ' ';
//     }
//   }
//   acc += '\n';
// }
// console.log(acc);

// Lab 3.7
// let acc = '';
// for (let i = 2; i <= 12; i++) {
//   for (let j = 1; j <= 12; j++) {
//     acc += `${i} x ${j} = ${i * j}\n`;
//   }
//   acc += '\n';
// }
// console.log(acc);

// Lab 3.8
// let input = prompt('Enter number');
// let sum = 0;
// let count = 0;
// while (!(input === '0' || input === '' || input === null)) {
//   sum += +input;
//   count++;
//   input = prompt('Enter number');
// }

// console.log(sum);
// console.log(sum / count);

// Lab 3.10
// function isPrime(number) {
//   for (let i = 2; i <= number / 2; i++) {
//     if (number % i === 0) {
//       // console.log(i);
//       return false;
//     }
//   }
//   return true;
// }

// // console.log(isPrime(11111));

// for (let i = 2; i <= 100000; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// Lab 4.1.2
// function sayHelloUser(username) {
//   alert(`Hello ${username}`)
// }
// const user = prompt('Enter user');

// Lab 4.1.6
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// Lab 4.1.7
// function min(num1, num2) {
//   // return num1 > num2 ? num2 : num1;
//   if (num1 > num2) return num2;
//   return num1;
// }

// Lab 4.1.8
// function login(username,password) {
//   if (username === 'admin' && password === 'P@ssw0rd') {
//     alert('Success login')
//   } else {
//     alert('Incorrect username or password')
//   }
// }

// Lab 4.1.9
// function showPrimeNumber(n) {
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// Lab 4.1.13
// function checkAge(age) {
// if (age > 18) {
//   return true;
// } else {
//   return confirm('Did parents allow you?');
// }

// if (age > 18) {
//   return true
// }
// return confirm('Did parents allow you?');

// return age > 18 ? true : confirm('Did parents allow you?');

//   return age > 18 || confirm('Did parents allow you?');
// }

// Lab 4.1.14
// function isValidNumber(number) {
//   if (
//     number === null ||
//     String(number).trim() === '' ||
//     isNaN(number) ||
//     typeof number === 'boolean'
//   )
//     return false;
//   return true;
// }

// function max(a, b, c, d) {
// Math.max(a, b, c)
// if (a === undefined) return undefined;
// if (b === undefined) {
//   if (isValidNumber(a)) return a;
//   else return NaN;
// } else {
//   if (isValidNumber(a) && isValidNumber(b)) {
//     return a > b ? a : b;
//   } else return NaN;
// }

//   if (a === undefined) return undefined;
//   if (b === undefined) return Math.max(a);
//   else {
//     if (c === undefined) return Math.max(a, b);
//     else {
//       if (d === undefined) return Math.max(a, b, c);
//       else return Math.max(a, b, c, d);
//     }
//   }
// }

// max();

// Lab 4.1.15
// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic();
// // function (x) {
// //   return x * 42;
// // };
// console.log(answer); // *
// console.log(answer(1337)); // ** 1337*42
// console.log(magic(1337)(42)); // *** 42*42

// Lab 4.2.1
// const multiply = function (a, b) {
//   return a * b;
// };

// const result = multiply(17, 7);
// console.log(result);

// Lab 4.3.1
// const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(12, 12));

// Lab 4.3.2
// const checkPrime = number => {
//   for (let i = 2; i < number / 2; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// };

// Lab 4.3.5
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Do you agree?',
//   function () {
//     alert('You agreed.');
//   },
//   function () {
//     alert('You canceled the execution.');
//   }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   'Do you agree?',
//   () => alert('You agreed.'),
//   () => alert('You canceled the execution.')
// );

// Lab 4.3.6
// const convertDayToSecond = day => day * 24 * 60 * 60;

// Lab 4.3.7
// const isDivideBySeven = number => number % 7 === 0 ? true : false
// const isDivideBySeven = number => number % 7 === 0;

// Lab 4.3.8
// const calcPoint = (win, draw) => 3 * win + draw;

// Lab 4.3.9
// const isLeapYear = year => {
//   if (year % 4 !== 0) {
//     return false;
//   } else {
//     if (year % 100 !== 0) {
//       return true;
//     } else {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }

//   if (year % 4 !== 0) return false;
//   if (year % 100 !== 0) return true;
//   // if (year % 400 === 0) return true;
//   // return false;
//   // or
//   return year % 400 === 0;

//   if (year % 4 === 0) {
//     return year % 100 !== 0 ? true : year % 400 === 0;
//     return year % 100 !== 0 || year % 400 === 0;
//   }
// };

// Lab 4.3.10
// const calcAge = year => {
//   let totalDay = 0;
//   for (let i = year; i <= 2020; i++) {
//     if (isLeapYear(i)) {
//       totalDay += 366;
//     } else {
//       totalDay += 365;
//     }
//   }
//   return totalDay;
// };

// Lab 4.3.11
// const convertFahrenheitToCelsius = value => ((value - 32) / 9) * 5;

// Lab 4.3.12
// const factorial = number => {
//   if (number === 0 || number === 1) return 1;
//   let result = 1;
//   for (let i = number; i >= 2; i--) {
//     result *= i;
//   }
//   return result;
// };

// const factRecursive = number =>
//   number === 0 || number === 1 ? 1 : number * factRecursive(number - 1);
// console.log(factRecursive(5));

// Lab 4.4.1
// const checkPermission = function (role, yes, no) {
//   if (role === 'ADMIN') {
//     yes();
//   } else {
//     no();
//   }
// };

// const granted = function () {
//   alert('ACCESS GRANTED');
// };

// function denied() {
//   alert('ACCESS DENIED');
// }

// checkPermission('ADMIN', granted(), denied); // checkPermission('ADMIN',undefined, denied)

// Lab 5.1
// const person = {
//   name: 'john',
//   age: 20,
//   gender: 'Male',
//   address: '719 Bantatthong, Bangkok',
//   phoneNumber: '090-190-1900'
// };

// Lab 5.2.1
// const user = {};
// // user.name = 'John'; // user => { name: 'John' }
// user['name'] = 'John';
// user.surname = 'Doe';
// user.name = 'Matt';
// delete user.name;

// Lab 5.2.2
// const isEmptyObject = obj => {
//   for (let key in obj) {
//     // execute
//     return false;
//   }
//   return true;
// };

// Lab 5.3.1
// const calcSalary = obj => {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// };

// const salaries = { john: 100, ann: 160, pete: 130 };
// console.log(calcSalary(salaries));

// Lab 5.3.2
// const multiplyNumber = (obj, num) => {
//   const result = {};
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       result[key] = num * obj[key];
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };

// const testObj = { width: 200, height: 300, title: 'My menu' };
// const resultObj = multiplyNumber(testObj, 3);
// console.log(testObj);
// console.log(resultObj);

// Lab 5.3.3
// const username = prompt('Enter username');
// const email = prompt('Enter email');
// const password = prompt('Enter password');

// const user = {
//   username, // username: username
//   email, // email: email
//   password // password: password
// };

// Lab 5.3.4
// let key = prompt('Enter key');
// if (key !== 'stop') {
//   let value = prompt('Enter value');
//   if (value !== 'stop') {
//     while (key !== 'stop' && value !== 'stop') {

//     }
//   }
// }

// let result = {};
// while (1) {
//   let key = prompt('Enter key');
//   if (key === 'stop') break;
//   let value = prompt('Enter value');
//   if (value === 'stop') break;
//   result[key] = value;
// }
// console.log(result)

// Lab 5.3.5
// { apple: 1, oranges: 2}
// let result = {};
// while (1) {
//   let key = prompt('Enter key');
//   if (key === 'stop') break;
//   let value = prompt('Enter value');
//   if (value === 'stop') break;
//   if (value > 1) {
//     result[key + 's'] = value;
//   } else {
//     result[key] = value;
//   }
// }
// console.log(result);

// Lab 5.3.6
// let name = prompt('Enter name');
// let amount = prompt('Enter amount');
// let price = prompt('Enter price');
// let discount = prompt('Enter discount');

// const product = {
//   name,
//   amount,
//   price
// };

// if (discount > 0) {
//   product.discount = discount;
// }

// const calcPrice = obj => {
// if (obj.discount) {
//   return (
//     // obj.price * obj.amount - (obj.discount / 100) * obj.price * obj.amount
//     obj.price * obj.amount * (1 - obj.discount / 100)
//   );
// }
// return obj.price * obj.amount;
// return obj.price * obj.amount * (1 - (obj.discount || 0) / 100);
// };

// const calcPrice = obj =>
//   obj.price * obj.amount * (1 - (obj.discount || 0) / 100);

// Lab 5.3.7
// const employees = {
//   john: {
//     salary: 1000,
//     address: { district: 'Ratchathewi', province: 'Bangkok' }
//   },
//   peter: {
//     salary: 1500,
//     address: { district: 'Pathumwan', province: 'Bangkok' }
//   },
//   mike: {
//     salary: 800,
//     address: { district: 'Pakkret', province: 'Nonthaburi' }
//   },
//   sarah: {
//     salary: 2200,
//     address: { district: 'Sriraja', province: 'Chonburi' }
//   }
// };

// const name = prompt('Enter employee name');
// if (employees[name]) {
//   console.log(
//     `Name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].address.district}, ${employees[name].address.province}`
//   );
// } else {
//   console.log('Not found');
// }

// Lab 5.5.1
// const notebook = {
//   brand: 'ASUS',
//   model: 'Vivobook D413IA-EB303TS',
//   processor: 'AMD Ryzen 7 4700U 3.6GHz',
//   graphics: 'Integrated Graphics : AMD Radeon Graphics',
//   ram: '8GB DDR4 Onboard',
//   storage: '512GB PCIe NVMe M.2 SSD'
// };

// const cloneNB = {};
// for (let key in notebook) {
//   cloneNB[key] = notebook[key];
// }

// const cloneNBAssign = Object.assign({}, notebook);

// Lab 5.5.2
// const state1 = { username: 'john', point: 100, loading: true };
// // state1.point = 75
// // state1.loading = false
// // state1.success = true
// const state2 = Object.assign({}, state1, {
//   point: 75,
//   loading: false,
//   success: true
// });

// Lab 5.5.3
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };

// const permission = Object.assign(
//   {},
//   permission1,
//   permission2,
//   permission3,
//   permission4
// );

// const permission = {
//   ...permission1,
//   ...permission2,
//   ...permission3,
//   ...permission4
// };

// Lab 5.6.2
// var name = 'Joe';
// const z = 500
// function makeUser() {
//   const obj = {
//     a: function () {
//       return {
//         name: 'Jack',
//         ref: this
//       };
//     }
//   };
// console.log(obj.a);
// const z = 20
//   function b() {
//     return {
//       name: 'Jack',
//       ref: this
//     };
//   }

//   console.log(obj.a());
//   console.log(b());
//   return {
//     name: 'John',
//     ref: this
//   };
// }
// let user = makeUser();
// console.log(user.ref.name); // *
// b();

// var name = 'Joe';
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this
//   };
// }
// console.log(window);
// let user = window.makeUser(); // { name: 'John', ref: window }
// console.log(user.ref.name); // * console.log(window.name)

// Lab 5.6.3
// let calculator = {
//   // num1: undefined,
//   // num2: undefined,
//   read: function () {
//     this.num1 = +prompt('Enter number 1');
//     this.num2 = +prompt('Enter number 2');
//   },
//   // read() {}
//   sum: function () {
//     return this.num1 + this.num2;
//   },
//   mul: function () {
//     return this.num1 * this.num2;
//   }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Lab 5.8.1
// function Calculator() {
//   this.read = function () {
//     this.num1 = +prompt('Enter number 1');
//     this.num2 = +prompt('Enter number 2');
//   };
//   this.sum = function () {
//     return this.num1 + this.num2;
//   };
//   this.mul = function () {
//     return this.num1 * this.num2;
//   };
// }

// const calculator = new Calculator();
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Lab 5.8.2
// function Accumulator(startingValue) {
//   // this.currentValue = startingValue;
//   let currentValue = startingValue
//   this.read = function () {
//     this.currentValue += +prompt('Enter number');
//   };
//   this.show = function () {
//     alert(this.currentValue);
//   };
// }

// const acc = new Accumulator(10); // { currentValue: 10, read() {}, show() {} }
// acc.show();
// acc.read(); // { currentValue: 10+25 }
// acc.show();

// Lab 6.1.3
// const calcPoint = value => Math.floor(value / 100);

// Lab 6.1.4
// function to2Digit(num) {
//   // convert num to string ('1.2', '1.1457', '2')
//   // split string . => array ['1', '2'], ['1', '1457'], ['2']
//   const splitted = String(num).split('.');
//   if (splitted[1] && splitted[1].length > 2) {
//     return splitted[0] + '.' + splitted[1].slice(0, 2);
//   }
//   return num.toFixed(2);
// }

// console.log(to2Digit(10));
// console.log(to2Digit(5.1));
// console.log(to2Digit(3.1289));

// Lab 6.1.6
// const random = (min, max) => Math.random() * (max - min) + min; // [0, 1) * (3 - 1) => [0, 2) + 1 => [1, 3)

// Lab 6.1.7
// const randomDiceScore = () => Math.floor(Math.random() * 6) + 1; // [0, 6)

// Lab 6.1.8
// const calcCircumference = radius => 2 * Math.PI * radius;

// Lab 6.1.9
// const calcDiagonal = (w, l) => Math.sqrt(w ** 2 + l ** 2);

// Lab 6.1.10
// const convertDegToRadiun = deg => (Math.PI / 180) * deg;

// Lab 6.2.1
// const a =  'c:\\Users\\Admin\\Desktop' //  'c:\Users\Admin\Desktop'

// Lab 6.2.3
// const ucFirst = function (str) {
//   // 'omega' => ucFirst('omega') => 'Omega'
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

// Lab 6.2.4
// const checkSpam = function (str) {
//   // includes, indexOf
//   const lowerString = str.toLowerCase();
//   // if (lowerString.includes('xxx')) return true;
//   // if (lowerString.includes('porn')) return true;
//   // if (lowerString.includes('sex')) return true;
//   // return false;
//   return (
//     lowerString.includes('xxx') ||
//     lowerString.includes('porn') ||
//     lowerString.includes('sex')
//   );
//   // const checkWord = ['xxx', 'porn', 'sex'];
//   // return checkWord.includes(lowerString);
// };

// console.log(checkSpam('XXX'));

// Lab 6.2.5
// function truncate(str, length) {
//   return str.length > length - 1 ? str.slice(0, length - 1) + '…' : str;
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20)); // What I'd like to te…
// console.log(truncate('Hi everyone!', 12)); // Hi everyone!

// Lab 6.2.6
// function extractCurrencyValue(value, rate) {
//   return 'THB' + value.slice(1) * rate;
// }

// console.log(extractCurrencyValue('$120', 30));

// Lab 7.1.1
// const friends = ['Movie', 'Web', 'Gun', 'Term', 'Zian'];

// Lab 7.1.3
// const styles = ['Jazz', 'Blues'];
// styles[styles.length] = 'Rock-n-Roll'; // styles.push('Rock-n-Roll')
// styles[1] = 'Classic'; // ['Jazz', 'Classic', 'Rock-n-Roll' ]
// delete styles[0]; // [empty, 'Classic', 'Rock-n-Roll' ]
// console.log(styles.length); // 3

// Lab 7.2.4
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach(el => {
//   sum += el;
// });
// console.log(sum);

// Lab 7.2.5
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill
// names.forEach((el, idx) => console.log(`${idx + 1}. ${el}`));

// Lab 7.3.2
// let arr = ['a', 'b'];

// arr.push(function () {
//   console.log(this);
// });

// arr[2](); // *

// Lab 7.3.3
// จงสร้างตัวแปร Array ชื่อ animals โดยมี element 3 ตัว คือ Dog, Cat, Rat
// ให้เพิ่ม Fish ต่อท้ายเข้าไปใน animals
// ให้เพิ่ม Horse เข้าไปข้างหน้า animals
// ให้เพิ่ม Giraffe และ Snake ต่อท้าย animals โดยต้องเพิ่มเข้าไปพร้อมกัน
// ให้เอา Horse ออกจาก animals
// ให้เอา Snake ออกจาก animals
// ให้เอา Dog ออกจาก animals
// ผลลัพธ์สุดท้ายของ animals คืออะไร
// const animals = ['Dog', 'Cat', 'Rat'];
// animals.push('Fish');
// animals.unshift('Horse');
// animals.push('Giraffe', 'Snake');
// animals.shift();
// animals.pop();
// animals.shift();
// console.log(animals);

// Lab 7.3.4
// const first = function (arr, n = 1) {
//   if (n === 1) return arr[0];
//   return arr.slice(0, n);
// };

// console.log(first([])); // undefined
// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([], 3)); // []
// console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]

// Lab 7.3.5
// function clone(arr) {
//   return arr.slice(0);
//   // return [...arr]
// }

// Lab 7.3.6
// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];
// const result = a.concat(b);
// const result = [...a, ...b]

// Lab 7.3.7
// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// fish.splice(0);
// console.log(fish);

// Lab 7.3.8
// const persons = ['John', 'Jay', 'Jim', 'Jame'];
// persons.splice(1, 1, 'Jack', 'Joe');

// Lab 7.3.9
// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
// const result = sports.slice(1, 4);

// Lab 7.3.10
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// cars.splice(3, 0, 'mazda', 'bmw', 'nissan');
// console.log(cars);

// Lab 7.5.2
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// let result = [];
// alphabets.forEach((el, idx) => {
//   if (el === 'a') {
//     result.push(idx);
//   }
// });

// Lab 7.5.4
// const nums = [7, 9, -5, -1, 0, 3];
// const result = nums.find(el => el < 0);
// console.log(result);

// Lab 7.5.5
// const inventory = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cherries', quantity: 5 }
// ];
// const result = inventory.find(el => el.name === 'cherries');

// Lab 7.5.6
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];
// const idx = tasks.findIndex(el => 2 === el.id);
// console.log(idx);

// Lab 7.5.9
// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// const result = array.filter(el => el > 10);

// const array1 = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่
// const result1 = array1.filter(el => el % 2);

// const array2 = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// const result2 = array2.filter(el => typeof el === 'number');

// const array3 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const result3 = array3.filter(el => el.length > 6);

// const array4 = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// const result4 = array4.filter(el => el > 0);

// const array5 = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// const result5 = array5.filter(el => el % 3 === 0); // el => !(el % 3)

// const array6 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// const result6 = array6.filter(el => el.startsWith('E'));

// const array7 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const result7 = array7.filter(el => el.toUpperCase() === el);

// const array8 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// const result8 = array8.filter(el => el.toLowerCase().includes('buri'));

// const array9 = [
//   { name: 'Ben', age: 14 },
//   { name: 'Phil', age: 18 },
//   { name: 'John', age: 32 },
//   { name: 'Ann', age: 16 },
//   { name: 'Paul', age: 24 }
// ];
// // อายุไม่น้อยกว่า 18
// const result9 = array9.filter(el => el.age >= 18);

// const array10 = [
//   { id: 1, name: 'Pepsi' },
//   { id: 2, name: 'Mirinda' },
//   { id: 3, name: 'Coke' },
//   { id: 4, name: 'Fanta' },
//   { id: 5, name: 'Sprite' }
// ];
// // id ไม่เท่ากับ 4
// const result10 = array10.filter(el => el.id !== 4);

// const array11 = [
//   { name: 'John', birth: '2001-07-31' },
//   { name: 'Jack', birth: '1990-06-24' },
//   { name: 'Jim', birth: '1984-12-13' },
//   { name: 'Jeff', birth: '1996-02-05' },
//   { name: 'Joe', birth: '2002-06-13' }
// ];
// // เกิดเดือน 6
// // const result11 = array11.filter(el => el.birth.slice(5, 7) === '06')
// const result11 = array11.filter(el => new Date(el.birth).getMonth() === 5);

// Lab 7.6.1
// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// const result = array.map(el => 2 * el);

// const array2 = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// const result2 = array2.map(el => String(el)); // el+'', `${el}`

// const array3 = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// const result3 = array3.map(el => typeof el);

// const array4 = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const result4 = array4.map(el => el.toUpperCase());

// const array5 = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result5 = array5.map(el => (el % 2 ? 'odd' : 'even'));

// const array6 = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// // const result6 = array6.map(el => Math.abs(el)) // |-3| = 3
// const result6 = array6.map(el => (el < 0 ? el * -1 : el));

// const array7 = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// const result7 = array7.map(el => el.toFixed(2));

// const array8 = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const MONTH = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec'
// ];
// const result8 = array8.map(el => MONTH[el]);

// const array9 = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// const result9 = array9.map(el => Math.sqrt(Math.sqrt(el)));

// const array10 = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]
// const result10 = array10.map(el => el.name);

// const array11 = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]
// const result11 = array11.map(el => el.age);

// const array12 = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// // const result12 = array12.map(el => el.name + ' ' + el.surname);
// const result12 = array12.map(el => `${el.name} ${el.surname}`);

// const array13 = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 22 },
// //   { name: "banana", birth: "1990-10-01", age: 32 },
// //   { name: "watermelon", birth: "1985-12-01", age: 37 },
// // ]
// // const result13 = array13.map(el => {
// //   return {
// //     name: el.name,
// //     birth: el.birth,
// //     age: 2022 - el.birth.split('-')[0]
// //   }; // 2022 - el.birth.slice(0, 4), 2022 - new Date(el.birth).getFullYear()
// // });
// const result13 = array13.map(el => ({
//   name: el.name,
//   birth: el.birth,
//   age: 2022 - el.birth.split('-')[0]
// }));

// function formatDate(date) {
//   const MONTH = [
//     'jan',
//     'feb',
//     'mar',
//     'apr',
//     'may',
//     'jun',
//     'jul',
//     'aug',
//     'sep',
//     'oct',
//     'nov',
//     'dec'
//   ];
//   return (
//     date.slice(8) + ' ' + MONTH[date.slice(5, 7) - 1] + ' ' + date.slice(0, 4)
//   );
// }

// const array14 = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-10' },
//   { name: 'watermelon', birth: '1985-12-30' }
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
// const result14 = array14.map(
//   el => `<tr><td>${el.name}</td><td>${formatDate(el.birth)}</td></tr>`
// );

// Lab 7.6.2
// function convertDashToCamel(str) {
//   const split = str.split('-'); // 'background-color' => ['background', 'color']
//   // 'margin' => ['margin']
//   const map = split.map((el, idx) =>
//     idx > 0 ? el[0].toUpperCase() + el.slice(1) : el
//   ); // ['background', 'color'] => ['background', 'Color']
//   return map.join('');
// }

// const convertDashToCamel = str =>
//   str
//     .split('-')
//     .map((el, idx) => (idx ? el[0].toUpperCase() + el.slice(1) : el))
//     .join('');

// Lab 7.6.3
// const arr = [11, 17, 23, 13, 7, 19];
// arr.sort((a, b) => b - a);

// Lab 7.6.4
// const arr = [-3, 2, 0, -7, 4, 6];
// arr.sort((a, b) => a ** 2 - b ** 2)

// Lab 7.6.5
// const arr = [
//   { name: 'John', age: 25 },
//   { name: 'Leon', age: 26 },
//   { name: 'Mick', age: 29 },
//   { name: 'Pete', age: 30 },
//   { name: 'Mary', age: 28 }
// ];
// arr.sort((a, b) => a.age - b.age); // 30 - 28 > 0 สลับตำแหน่ง { name: 'Pete', age: 30 } กับ { name: 'Mary', age: 28 }

// Lab 7.6.6
// let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);
// function copySorted(array) {
//   const clone = array.slice(); // [...array]
//   return clone.sort();
// }

// Lab 7.6.7
// const nums = [-3, 2, 11, -7, 4, 6];
// let result = 1;
// for (let i = 0; i < nums.length; i++) {
//   result = result * nums[i];
// }
// const result1 = nums.reduce((acc, el) => acc * el, 1);

// Lab 7.6.8
// const scores = [
//   { score: 90, subject: 'HTML', weight: 0.2 }, // 90 * 0.2 = 18 => 0 + 18 => 18
//   { score: 95, subject: 'CSS', weight: 0.3 }, // 95 * 0.3 = 28.5 => 18 + 28.5 => 46.5
//   { score: 85, subject: 'JavaScript', weight: 0.5 } // 85 * 0.5 = 42.5 => 46.5 + 42.5 => 89
// ]; // 18 + 28.5 + 42.5
// const result = scores.reduce((acc, el) => acc + el.score * el.weight, 0);

// Lab 7.6.9
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i]
//   }
//   if (arr[i] > max) {
//     max = arr[i]
//   }
// }
// [min, max], { min: , max:  }
// const result = arr.reduce(
//   (acc, el) => {
//     if (acc[0] > el) {
//       acc[0] = el;
//     }
//     if (acc[1] < el) {
//       acc[1] = el;
//     }
//     return acc;
//   },
//   [arr[0], arr[0]] // [3.24, 3.24], [2.78, 3.24]
// );
// console.log(result);

// Lab 7.6.10
// const result = {};
// let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// for (let i = 0; i < names.length; i++) {
//   if (result[names[i]]) {
//     result[names[i]] = result[names[i]] + 1;
//   } else {
//     result[names[i]] = 1;
//   }
// }
// Ite#1 i:0, names[0]: 'Jack', result: {}
// check result['Jack']: undefined => result['Jack'] = 1
// result: { 'Jack': 1 }
// Ite#2 i:1, names[1]: 'John', result: { 'Jack': 1 }
// check result['John']: undefined => result['John'] = 1
// result { 'Jack': 1, 'John': 1 }
// Ite#3 i:2, names[2]: 'Bill', result: { 'Jack': 1, 'John': 1 }
// check result['Bill']: undefined => result['Bill'] = 1
// result { 'Jack': 1, 'John': 1, 'Bill': 1 }
// Ite#4 i:3, names[3]: 'John', result: { 'Jack': 1, 'John': 1, 'Bill': 1 }
// check result['John']: 1 => result['John'] = 1 + 1
// result { 'Jack': 1, 'John': 2, 'Bill': 1

// const obj = {}
// console.log(obj.firstName) // undefined

// const result = names.reduce((acc, el) => {
//   if (acc[el] !== undefined) {
//     acc[el] = acc[el] + 1;
//   } else {
//     acc[el] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);

// Lab 7.6.11
// let str = 'I live in Thailand';
// const arr = str.split(''); // ['I', ' ', 'l', 'i', ...]
// const result = arr.reduce((acc, el) => {
//   if (el.trim() === '') return acc;
//   const lowerCase = el.toLowerCase();
//   if (acc[lowerCase] !== undefined) {
//     acc[lowerCase] = acc[lowerCase] + 1;
//   } else {
//     acc[lowerCase] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);

// Lab 7.6.12
// init: acc = [],
// ite#1 acc.concat(el) => [].concat([0, 1]) => [0, 1]
// ite#2 acc.concat(el) => [0, 1].concat([2, 3]) => [0, 1, 2, 3]
// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5]
// ];
// const result = flattened.reduce((acc, el) => acc.concat(el), []);
// // const result = flattened.reduce((acc, el) => [...acc, ...el], []);
// console.log(result);

// Lab 7.6.13
// init: acc = [];
// ite#1 acc.includes(el) ? return acc : acc.push(el) return acc
// el: 'a', acc.includes('a'): false => acc.push('a') => acc: ['a']
// ite#2 acc.includes(el) ? return acc : acc.push(el) return acc
// el: 'b', acc.includes('b'): false => acc.push('b') => acc: ['a', 'b']
// ite#3 acc.includes(el) ? return acc : acc.push(el) return acc
// el: 'a', acc.includes('a'): true => acc: ['a', 'b']
// let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// const result = alphabets.reduce((acc, el) => {
//   if (acc.includes(el)) return acc;
//   acc.push(el);
//   return acc;
// }, []);
// console.log(result);

// Lab 7.6.14
// const products = [
//   { id: 1, name: 'Crystal' },
//   { id: 4, name: 'Namthip' },
//   { id: 5, name: 'Nestle' }
// ];

// // init: acc: {}
// // iter#1 check acc key ว่ามันมีค่า key = el.id หรือเปล่า ถ้าไม่มีเพิ่ม key ให้ acc ถ้ามีไม่ต้องทำอะไร
// // el.id: 1, acc[el.id]: undefined => acc[el.id] = { name: el.name }
// // acc: { 1: {name: 'Crystal'} }
// const result = products.reduce((acc, el) => {
//   if (acc[el.id] === undefined) {
//     acc[el.id] = { name: el.name };
//   }
//   return acc;
// }, {});
// console.log(result);

// Lab 7.6.15
// let arr = [
//   { name: 'John', age: 27 },
//   { name: 'Jo', age: 21 },
//   { name: 'Jin', age: 25 }
// ];

// const getAverageAge = input => {
//   const sum = input.reduce((acc, el) => acc + el.age, 0);
//   return input.length === 0 ? 0 : sum / input.length;
// };

// console.log(getAverageAge(arr));

// Lab 7.6.16
// const persons = [
//   { name: 'John', sex: 'M' },
//   { name: 'Jody', sex: 'M' },
//   { name: 'Susan', sex: 'F' },
//   { name: 'Kate', sex: 'F' },
//   { name: 'Sid', sex: 'M' }
// ];

// init: acc = {}
// ite: check acc ว่ามี key ชื่อ el.sex หรือเปล่า
// ถ้ามี ให้ temp = acc[el.sex];temp.push(el.name); acc[el.sex] = temp;
// ถ้าไม่มี acc[el.sex] = [el.name]
// ite#1 acc: {}, el: { name: 'John', sex: 'M' }
// acc['M'] => undefined; acc['M'] = ['John']
// acc: { M: ['John'] }
// ite#2 acc: { M: ['John'] }, el: { name: 'Jody', sex: 'M' }
// acc['M'] => ['John']; temp.push('Jody') => ['John', 'Jody']
// acc['M'] = temp, acc: { M: ['John', 'Jody'] }
// ite#2 acc: { M: ['John', 'Jody'] }, el: { name: 'Susan', sex: 'F' }
// acc['F'] => undefined; acc['F'] = ['Susan']
// acc: { M: ['John', 'Jody'], F: ['Susan'] }
// const result = persons.reduce((acc, el) => {
//   if (acc[el.sex] === undefined) {
//     acc[el.sex] = [el.name];
//   } else {
//     // const temp = acc[el.sex];
//     // temp.push(el.name);
//     // acc[el.sex] = temp;
//     acc[el.sex] = [...acc[el.sex], el.name];
//   }
//   return acc;
// }, {});
// console.log(result);

// Lab 7.6.17
// let str = '31 45 12 67 34 86 23 37 19 41';
// const split = str.split(' '); // ['31', '45', '12', ...]
// const sum = split.reduce((acc, el) => {
//   if (el < 40) return acc + +el;
//   return acc;
// }, 0);
// console.log(sum);

// Lab 10.1.1
// const multiply = (...numbers) => numbers.reduce((acc, el) => acc * el, 1);
// console.log(multiply(2, 5, 8)); // numbers: [2, 5, 8]
// console.log(multiply(4, 9, 5, 3, 7, 1, 2, 6)); // numbers: [4, 9, 5, 3, 7, 1, 2, 6]

// Lab 10.1.2
// const filterOutOdds = (...numbers) => numbers.filter(el => el % 2 === 0);
// console.log(filterOutOdds(4, 9, 5, 3, 7, 1, 2, 6));

// Lab 10.1.3
// const mergeObjects = (...objects) => Object.assign({}, ...objects.reverse());
// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3 }, { c: 1, b: 5 })); // { a:1,b:2,c:3 }
// // objects: [{ a: 1, b: 2 }, { c: 3 }, { c: 1, b: 5 }]
// // objects.reverse(): [{ c: 1, b: 5 }, { c: 3 }, { a: 1, b: 2 }]
// // ...objects.reverse(): { c: 1, b: 5 }, { c: 3 }, { a: 1, b: 2 }
// // Object.assign({}, { c: 1, b: 5 }, { c: 3 }, { a: 1, b: 2 })

// Lab 10.2.1
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// const result1 = [...nums1, ...nums2]
// const result2 = [5, ...nums1, -6, -1, ...nums2]

// Lab 10.2.2
// function func(array1) {
//   return [...array1].map((el, idx) => (idx === 3 ? el ** 2 : el));
// }

// Lab 10.2.3
// function func(firstName, lastName, ...hobbies) {
//   return {
//     firstName,
//     lastName,
//     hobbies,
//     numHobbies: hobbies.length
//   };
// }

// Lab 10.2.4
// function doubleAndReturnArgs(arr, ...numbers) {
//   // [3, 4, 7] => [6, 8, 14]: numbers.map(el => el * 2)
//   return [...arr, ...numbers.map(el => el * 2)];
// }

// Lab 10.2.5
// function removeRandom(arr) {
//   // Math.random => [0, 1)
//   // index ของ array 0 ถึง length-1
//   const random = Math.floor(Math.random() * arr.length); // [0, 1) * 3 => [0, 3) => floor 0, 1, 2
//   return arr.splice(random, 1);
// }

// Lab 10.2.6
// function cloneArray(arr) {
//   return [...arr];
// }

// Lab 10.2.7
// const cloneObject = obj => ({ ...obj });
