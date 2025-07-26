// window.onload = function () {
//     document.querySelector("h1").style.color = "red";
// };

// document.writeln("<h1>hello page</h1>");
// console.log("Log");
// console.error("Error");
// console.log(["Omar", "Ali", "Ahmade"]);
// console.log(
//     "Omar %cMuhammad %cSabry",
//     "color:red; font-size: 30px",
//     "color:blue; font-size: 30px"
// );

// var sum = "Omar";
// console.log(`Hello ${sum}. How Are You`);

// console.log(typeof "Omar");

// let omarel = document.getElementById("omar");
// // var globle
// // let logle

// var name = 50;
// let age = 40;
// const ali = 55;

// console.log(ali);
// // ali = 30;
// console.log(ali);

// var name = "hi";
// console.log(`wellcom back mr. ${name}`);

// b = 3;
// c = 6;

// // غيرّينا var x إلى isBLessC
// var isBLessC = b < c;
// console.log(typeof isBLessC);

// for (let i = 0; i < 8; i++) {
//     console.log(i);
// }

// // غيرّينا var x إلى counter
// var counter = 0;
// while (counter <= 20) {
//     console.log(counter);
//     counter++;
// }

// // غيرّينا let x إلى xVal
// let xVal = 54;
// let y = 55;
// let z = 44;

// if (xVal < y) {
//     console.log(xVal * y);
// } else if (z < y) {
//     console.log(z - y);
// } else if (xVal > z) {
//     console.log("this is value not fund");
// }

// let name1 = 10;
// let name2 = 15;
// let operator = "+";
// if (operator == "-") {
//     console.log(name1 - name1);
// } else if (operator == "+") {
//     console.log(name1 * name2);
// } else {
//     console.log("this is operator not found");
// }

// let names = "Omar";
// let names2 = "Muhammad";

// let x = names.toUpperCase();
// console.log(x);
// let o = names.length;
// console.log(o);
// let p = names.concat(" ", names2);
// console.log(p);
// let t = names.toLowerCase();
// console.log(t);
// let f = names.trim();
// console.log(f);

// // ################################################
// // document.getElementById("omar").innerHTML;

// var m = document.getElementById("omar");
// // document.getElementById("omar").style.backgroundColor = "green";
// // document.getElementById("omar").style.width = "300px";

// // for (let i = 0; i < 2; i++) {
// //   m.style.color = "red";
// //   m.style.backgroundColor = "green";
// //   m.style.width = "300px";
// //   m.style.height = "50px";
// // }
// // ################################################

// // ################################################
// // var element = document.getElementsByClassName("text");
// // for (let i = 0; i < 4; i++) {
// //   element[i].style.color = "red";
// //   element[i].style.backgroundColor = "yellow";
// //   element[i].style.width = "300px";
// //   element[i].style.height = "50px";
// // }
// // for (let element of el) {
// //   element.style.color = "red";
// //   element.style.backgroundColor = "yellow";
// //   element.style.width = "300px";
// //   element.style.height = "50px";
// // }
// // ################################################

// // ################################################
// // let tl = document.querySelectorAll("h2");
// // for (let i = 0; i < 4; i++) {
// //   tl[i].style.color = "red";
// //   tl[i].style.backgroundColor = "yellow";
// //   tl[i].style.width = "150px";
// //   tl[i].style.height = "50px";
// //   tl[i].style.color = "red";
// // }
// // ################################################

// let man1 = 12;
// let man2 = 10;
// let operato = prompt("Enter the value:").toLowerCase();
// if (operato === "yes") {
//     console.log(man1 - man2);
// } else if (operato === "no") {
//     console.log(man1 + man2);
// } else {
//     console.log("The value not fund! tray by(yes or no) ");
// }
// // ################################################

// let ma = "Omar";
// console.log(ma.replace("O", "A"));
// console.log(ma.toUpperCase());
// console.log(ma.toLowerCase());
// console.log(ma[1]);
// // ################################################

// x = 10;
// y = 20;
// console.log(`x + y = ${x + y}`);
// // ################################################


// document.getElementById("text").innerHTML = "Hello Omar"
// document.getElementById("text").style.background = " blue"
// document.getElementById("text").style.width = " 200px"
// document.getElementById("text").style.height = " 200px"

// let element = document.getElementsByClassName("text")
// element[0].style.color = "blue"

// document.querySelector(".text").innerHTML = "Hello Omar";
// // document.querySelector(".text").style.color = "green";
// let el = document.querySelectorAll(".text")
// el[0].style.color = "green";

// let el = document.querySelectorAll(".text")
// for(let x of el){
//     x.style.color = "red";
// }

// var names = ["omar", "Ali", 10, "mohamad"]
// console.log(names)

// function evenChars(string) {
//   if (string.length < 2 || string.length > 100) {
//     return "invalid string";
//   }
//   return [...string].filter((_, i) => i % 2 === 1);
// }


// function evenChars(string) {
//     if(string.length < 2 || string.length > 100){
//       return "invalid string"
//   }
//   else{
//     var result = []
//     for(let i = 1; i < string.length; i +=2){
//       result.push(string[i])
//     }
//     return result
//    }
//   }
//   console.log(evenChars(["remove", "keep", "remove", "keep"]))




// function num(numper){
//   if(numper.length < 10 || numper.length > 15) {
//     return " invalid number"
//   }

// else{
//   let arr = []
//   for (let i = 1; i < numper.length; i+=2) {
//     arr.push(numper[i])
//   }
//   return arr
// }
// }
// console.log(num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))




// function count(str) {
//   let count = 0;
//   const matrix = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < str.length; i++) {
//     if (matrix.includes(str[i])) {
//       count ++;
//     }
//   }

//   return count;
// }
// console.log(count(" egypt "));
// console.log(count(" omar "));
// console.log(count(" mohamad "));






// function getCount(str) {
//   let count = 0;
//   let matrix = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (matrix.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getCount("Omar"))
// console.log(getCount("Muhammad"))



// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// function persistence(num) {
//   let count = 0;
  
//   for (; num >= 10; count++) {
//     let digits = num.toString().split('');
//     let product = 1;
    
//     for (let digit of digits) {
//       product *= Number(digit);
//     }
    
//     num = product;
//   }

//   return count;
// }

// console.log(persistence(333));









// function persistence(num) {
//   let count = 0;
  
//   while (num >= 10) {
//     num = multiplyDigits(num);
//     count++;
//   }

//   return count;
// }

// console.log(persistence(999));







// function persistence(num, count = 0) {
//   if (num < 10) {
//     return count;
//   }

//   let digits = num.toString().split('').map(Number);
//   let product = digits.reduce((a, b) => a * b);

//   return persistence(product, count + 1);
// }

// console.log(persistence(999));






// function persistence(num) {
//   let count = 0;
//   while (num >= 10) {
//     num = num
//       .toString()
//       .split('')
//       .map(Number)
//       .reduce((a, b) => a * b);
//     count++;
//   }
//   return count;
// }

// console.log(persistence(999));  // 4







// const memo = {};  // هنا نستخدم تخزين القيم المساعدة

// function persistence(num, count = 0) {
//   if (num < 10) return count;
//   if (memo[num]) return count + memo[num];  // نتحقق إذا كانت القيمة تم حسابها سابقًا
  
//   let digits = num
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((a, b) => a * b);
  
//   memo[num] = 1 + persistence(digits, count + 1);  // نخزن القيمة المؤقتة

//   return memo[num];
// }

// console.log(persistence(999));  // 4






// function persistence(num) {
//   let count = 0;
  
//   // نستخدم التمثيل الثنائي للعدد
//   while (num >= 10) {
//     let digits = num
//       .toString(2)  // تحويل العدد إلى ثنائي
//       .split('')    // فصل الأرقام
//       .map(Number)
//       .reduce((a, b) => a * b);  // ضرب الأرقام

//     num = parseInt(digits.toString(), 2);  // تحويل النتيجة مرة تانية للعدد العشري
//     count++;
//   }

//   return count;
// }

// console.log(persistence(999));  // 4








// function* persistenceGenerator(num) {
//   while (num >= 10) {
//     let digits = num
//       .toString()
//       .split('')
//       .map(Number)
//       .reduce((a, b) => a * b);
//     yield digits;  // إنشاء قيمة جديدة
//     num = digits;
//   }
// }

// function persistence(num) {
//   let count = 0;
//   for (let _ of persistenceGenerator(num)) {
//     count++;
//   }
//   return count;
// }

// console.log(persistence(999));  // 4





// function persistence(num) {
//   let count = 0;
//   while (num >= 10) {
//     let digits = num.toString().split('').map(Number);
//     num = digits.reduce((A, B) => A * B);   
//     count++;
//   }
//   return count;
// }
// console.log(persistence(999));
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4





// function sayHello(userName, age, id){
//   console.log(`Welcome ${userName}, your age is ${age}, your id ${id}`)
// }
// sayHello("omar",74, 657)
// sayHello("ali", 34, 675)
// sayHello("mazen",30, 333)


// function year(){
//   for (let i = 2000; i < 2024; i++) {
//     console.log(i)
//   }
// }
// year()




// function cal(num1, num2){
//   return num1 + num2;
// }
// console.log(cal(10, 20))

//  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

// function isEvenOrOdd(value){
//   if (value %2 === 0 ) {
//     return "Even"
//   }else{
//     return "Odd"
//   }
// }
// console.log(isEvenOrOdd(4))
// console.log(isEvenOrOdd(7))
//  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4



// function isEvenOrOdd(value) {
//   return (value % 2 === 0) ? "Even" : "Odd";
// }
// console.log(isEvenOrOdd(4)); // Even
// console.log(isEvenOrOdd(7)); // Odd


// function printNumbersUpTo() {
//   for (let i = 1; i < 6; i++) {
//     console.log(`Printing numbers from 1 to ${i}`);
    
//   }
// }
// printNumbersUpTo()
//  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

// function printNumbersUpTo(parameter) {
//   if(parameter < 1) {
//     console.log("Please enter a number greater than 0")
//     return;
//   }
//   console.log(`Printing numbers from 1 to ${parameter}:`);
//   for (let i = 1; i<= parameter; i++) {
//     console.log(i);
//   }
// }
// printNumbersUpTo(0);




// function add( A, B ){
//   return A + B;
// }
// console.log(add(2, 4));


// function multiply( A, B ){
//   return A * B;
// }
// console.log(multiply(2, 4));

// function subtract( A, B ){
//   return A - B;
// }
// console.log(subtract(2, 4));


// Question 4:
// اكتب دالة باسم `isPrime` تأخذ رقمًا واحدًا كمعامل  
// وتعيد `true` إذا كان الرقم أوليًا (prime)، و`false` إذا لم يكن أوليًا.
// مثال على الاستخدام:
// console.log(isPrime(7)); // يجب أن يطبع: true
// console.log(isPrime(8)); // يجب أن يطبع: false




// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(8)); // false



// var day = 0
// switch(day){
//   case 1:
//     console.log("suterday")
//     break;
//   case 0:
//     console.log("sunday")
//     break;
//    default:
//     console.log("Undefind day")
// }



 /*

---------------------//\\
--------------------// ¤ \\
--------------------\\ ¤ //
-------------------- \\ //
-------------------- (___)
---------------------(___)
---------------------(___)
---------------------(___)_________
--------\_____/\__/----\__/\_____/
------------\ _°_[------------]_ _° /
----------------\_°_¤ ---- ¤_°_/
--------------------\ ° /
---------------------|\_°_/|
---------------------[|\_/|]
---------------------[|[¤]|]
---------------------[|;¤;|]
---------------------[;;¤;;]
--------------------;;;;¤]|]\
-------------------;;;;;¤]|]-\
------------------;;;;;[¤]|]--\
-----------------;;;;;|[¤]|]---\
----------------;;;;;[|[¤]|]|---|
---------------;;;;;[|[¤]|]|---|
----------------;;;;[|[¤]|/---/
-----------------;;;[|[¤]/---/
------------------;;[|[¤/---/
-------------------;[|[/---/
--------------------[|/---/
---------------------/---/
--------------------/---/|]
-------------------/---/]|];
------------------/---/¤]|];;
-----------------|---|[¤]|];;;
-----------------|---|[¤]|];;;
------------------\--|[¤]|];;
-------------------\-|[¤]|];
---------------------\|[¤]|]
----------------------\\¤//
-----------------------\|/
------------------------V

*/



// function calculator(a,b,sign){
//   if(typeof a != "number" || typeof b != "number"){
//     return "Unknown value";
//   }else{
//     switch(sign){
//       case "+":
//         return a + b
//       case "-":
//         return a - b
//       case "*":
//         return a * b
//       case "/":
//         return a / b
//         default:
//           return " unknown value"
//     }
//   } 
// }
// console.log(calculator(8, 4, "+"))
// console.log(calculator(8, 4, "-"))
// console.log(calculator(8, 4, "*"))
// console.log(calculator(8, 4, "/"))






// function calculator(a, b, sign) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "unknown value";
//   }
//   switch (sign) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return "unknown value";
//   }
// }
// console.log(calculator(8, 4, "*"))
// console.log(calculator(8, 4, "/"))






// function removeExclamationMarks(s) {
//   return s.replace(/!/g, "");
// }
// console.log(removeExclamationMarks("Hello! World!"));
// console.log(removeExclamationMarks("No here!")); 
// console.log(removeExclamationMarks("!!!")); 







// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"

//   console.log(peopleWithAgeDrink(15))







// تحوّل الرقم إلى سلسلة (String) → عشان تقدر تتعامل مع الأرقام كأحرف منفصلة.

// تقصّ الأرقام إلى قائمة → كل رقم يكون عنصر مستقل.

// ترتّب العناصر ترتيب تنازلي → من الكبير للصغير.

// تجمع العناصر تاني في سلسلة.

// تحوّل السلسلة دي لعدد صحيح وترجّع الناتج.




// function descendingOrder(n){
//   let sum = n.toString();
//   let array = sum.split("");
//   array.sort(function(a, b){
//     return a - b;
//    });

//    let sortedStr = array.join("");
//    return parseInt(sortedStr, 10)
// }
// console.log(descendingOrder(1376542))





// function descendingOrder(n) {
//   return parseInt(n.toString().split('').sort((a, b) => b - a).join(''), 10);
// }
// console.log(descendingOrder(6237862871234646))




// function solution(str, ending) {
//   const last = str.slice(-ending.length);
//   return last == ending;
// }
// console.log(solution("Omar Muhammad", "Muhammad"));  // true
// console.log(solution("Omar Muhammad", "Omar"));      // false





// //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




// function addNameToArray(arr, name, index) {
//   arr.splice(index, 0, name); 
//   return arr;

// }
// let name = ["Ali", "Ahmed", "Omar", "Sara"];
// console.log(addNameToArray(name, "Mohamed", 2));  





// let nam = ["Ali", "Ahmed","Omar", "Sara"];
// nam.splice(2, 0, "Mohamed");  
// console.log(nam); 





// let names = ["Ali", "Ahmed",[4, 5, 6], "Omar", "Sara"];
// names[2].splice(2, 0, "Mohamed");  
// console.log(names); 

// //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// let names = ["Omar", "Ahmed",[4, 5, 6], "Ali", "Sara"];
// names.unshift("Mai")
// names.push([7, 8, 9])
// console.log(names)
// names.shift()
// names.pop()
// names[2].splice(1, 0, "mai")
// names[2].splice(3, 1, )
// console.log(names)
// console.log(names.sort())
// console.log(names.reverse())
// console.log(names.slice(2, 4))


// console.log(names.indexOf("Omar"))
// console.log(names.includes("Omar"))
// console.log(names.includes("mai"))
// // console.log(names[2].includes("mai"))

// var concat = [4, 5, 6, 7, 8]
// let firends = names.concat(concat)
// console.log(firends)
// console.log(firends.join("-"))


// function removeEveryOther(arr){
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i %2 == 0) {
//       result.push(arr[i]);
//     }
//   } 
//   return result
// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9,10]))



// function removeEveryOther(arr){
//   let result = []
//   for(i = 0; i < arr.length; i+=2){
//     result.push(arr[i])
//   }
//   return result;
// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9,10]))



// function check(a, x) {
//   //  indexOf
//   if(a.includes(x)){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(check(["a", "b", "c",[3 ,4, 5]], "x"))
// console.log(check(["a", "b", "c",[3 ,4, 5]], "a"))




// function check(a, x) {
//   return a.includes(x)
// }
// console.log(check([1, 2, 3, 4, 5], 3));   
// console.log(check(["Ali", "Ahmed", "Omar"], "Sara")); 




// let cont = document.querySelector("h1")
// let gth = cont.hasAttribute("class")
// if(gth == true){
//   console.log("ok")
// }else{
//   cont.setAttribute("class", "text")
// }


// let fgg = document.querySelector("h1")
// let dff = fgg.hasAttribute("id")
// if(dff == true){
//   if(fgg.getAttribute("id") == ""){
//     fgg.removeAttribute("id")
//   }
// }else{
//   fgg.setAttribute("id", "trtr")
// }



    // let remove = document.querySelector("h1")
    // let x = remove.hasAttribute("class")
    // if (x == true) {
    //   if (remove.getAttribute("class") == "") {
    //     remove.removeAttribute("class")
    //   }
    // } else {
    //   remove.setAttribute("class", "test")
    // }

    

// let element = document.createElement("div")
// let text = document.createElement("h1")
// let text1 = document.createElement("p")
// let text2 = document.createElement("span")

// let gtt = document.createTextNode("NIK ")
// let ghh = document.createTextNode("this is my project ")
// let gyy = document.createTextNode("price: 45$")

// text.appendChild(gtt)
// text1.appendChild(ghh)
// text2.appendChild(gyy)

// element.appendChild(text)
// element.appendChild(text1)
// element.appendChild(text2)

// document.body.appendChild(element)

// element.style.color = "red"
// element.style.backgroundColor = "blue"
// element.style.width = "300px"
// element.style.height = "300px"
// element.style.textAlign = "center"
// element.style.alignItems = "center"

// for (let i = 0; i < 10; i++) {
  
// }
