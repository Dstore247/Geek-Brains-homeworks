@@ -0,0 +1,39 @@
//Задание №1
var temDeg = prompt("Enter temperature in degrece:")
var result = (9 / 5) * temDeg + 32;
alert(result);
console.log("Task 1: temperature in Fahrenheit: " + result);
// Конец задания №1

//Задание №2


// Конец задания №2
var n1 = 10; //численые, для операции с цифрами
var n2 = 5.5
var resultNsum = n1 + n2;
console.log("Task 2.1: numeric " + typeof resultNsum);
var myWriting; //строковые, для операций с текстом.
myWriting = "text";
console.log("Task 2.2: text: " + typeof myWriting);
var iCheck = false; // логические, для булевых операций
console.log("Task 2.3: logic: " + typeof iCheck);
var age = null; // специальное значение
console.log("Task 2.4: it must be: " + typeof age);
var X;
console.log("Task 2.5: it must be undefined: " + typeof X);

//Задание №3
var admin;
var name = "Василий";
admin = name;
alert("Task 3: Name is: " + admin);
console.log("Task 3: Name is: " + admin);
// Конец задания №3

//Задание №4
var digitValue = 1000;
var textValue = "108";
var additionResult = digitValue + textValue;
alert("Task 4: addition result is: " + additionResult);
console.log("Task 4: addition result is: " + additionResult);