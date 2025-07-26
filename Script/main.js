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


// /*
//     String Methods
//     - Access With Index
//     - Access With charAt()
//     - length
//     - trim()
//     - toUpperCase()
//     - toLowerCase()
//     - Chain Methods
// */

// let theName = "  Ahmed  ";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[5]);

// console.log(theName.charAt(1));
// console.log(theName.charAt(5));

// console.log(theName.length);
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());



// function highAndLow(numbers) {
//     let nums = numbers.split(" ").map(Number);

//     let max = Math.max(...nums)
//     let min = Math.min(...nums)

//     return `${max} ${min}`;
// }
// console.log(highAndLow("1 2 -3 4 5"))





// function getSum(a, b) {

//     let min = Math.min(a, b);
//     let max = Math.max(a, b);

//     return ((max - min + 1) * (min + max)) / 2;
// }




// function hero(bullets, dragons) {
//   return bullets >= dragons * 2;
// }

// console.log(hero(10, 5));
// console.log(hero(5, 10));




// /*
//     String Methods
//     - indexOf(Value [Mand], Start [Opt] 0)
//     - lastIndexOf(Value [Mand], Start [Opt] Length)
//     - slice(Start [Mand], End [Opt] Not Include End)
//     - repeat(Times) [ES6]
//     - split(Separator [Opt], Limit [Opt])
// */

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15

// console.log(a.slice(2, 6));
// console.log(a.slice(-5, -3));

// console.log(a.repeat(5));

// console.log(a.split("", 6));



// /*
//     String Methods
//     - substring(Start [Mand], End [Opt] Not Including End)
//     --- Start > End Will Swap
//     --- Start < 0 It Start From 0
//     --- Use Length To Get Last Character
//     - substr(Start [Mand], Characters To Extract)
//     --- Start >= Length = ""
//     --- Negative Start From End
//     - includes(Value [Mand], Start [Opt] Default 0) [ES6]
//     - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
//     - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
// */

// let a = "Elzero Web School";

// console.log(a.length);

// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));
// console.log(a.substring(-10, 6)); // 0 - 6
// console.log(a.substring(a.length - 5, a.length - 3));

// console.log(a.substr(0, 6));
// console.log(a.substr(17));
// console.log(a.substr(-3));
// console.log(a.substr(-5, 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web", 8));

// console.log(a.startsWith("E"));
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("zero", 2));

// console.log(a.endsWith("l"));





// /*
//     Loop Control
//     - Break
//     - Continue
//     - Label
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     nestedLoop: for (let j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`);
//         if (colors[j] === "Green") {
//             break mainLoop;
//         }
//     }
// }





// /*
//     Loop For Advanced Example
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// for (; ;) {
//     console.log(products[i]);
//     i++;
//     if (i === products.length) break;
// }






// /*
//     Products Practice
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`);
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`);
//     document.write(`</div>`);
// }







// /*
//     Loop
//     - While
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) {
//     console.log(products[index]);
//     index += 1;
// }





// /*
//     Loop Challenge
// */

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// let admin = 0;

// for (let i = 0; i < myAdmins.length; i++) {
//     if (myAdmins[i] === "Stop") {
//         break;
//     }
//     admin++;
// }
// document.writeln(`<div>We Have ${admin} Admins</div>`);

// for (let i = 0; i < admin; i++) {
//     document.writeln(`<hr>`);
//     document.writeln(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);

//     let count = 1;
//     for (let j = 0; j < myEmployees.length; j++) {
//         if (myEmployees[j][0] === myAdmins[i][0]) {
//             document.writeln(`<p>- ${count++} ${ myEmployees[j]}</p>`);
//         }
//     }
// }






// let Name = ["Ali", "Omar", "Mai", "Sabry", "Samy", "Sarh", "Smar"]
// let myEmployees = ["Amgad", "Samah", "Ameer", "Mohamad", "Omar", "Othman", "Amany", "Samia"];

// let admin = 0
// for (let i = 0; i < Name.length; i++) {
//     if (Name[i] === "Sabry") {
//         break;
//     }
//     admin++;
// }
// document.writeln(`My admin is ${admin}`)


// for (let i = 0; i < admin; i++) {
//     document.writeln(`<hr>`);
//     document.writeln(`<div>The Admin For Team ${i + 1} Is ${Name[i]}</div>`);

//     let count = 1;
//     for (let j = 0; j < myEmployees.length; j++) {
//         if (myEmployees[j][0] === Name[i][0]) {
//             document.writeln(`<p>- ${count++}  ${myEmployees[j]}</p>`)
//         }
//     }
// }

// info = (name, age)=> {
//     if (age < 20) {
//         console.log(`sorry your ${age} is not found`)
//     }else {
//         console.log(`hi ${name} and ${age}`)
//     }
// }
// info("omar", 66)
// info("ali", 34)
// info("ahmad", 15)



// year = (start, end, exe)=>{
//     for (let i = start; i <= end; i++) {
//         if (i === exe) {
//             continue;
//         }
//         console.log(i);
//     }
// }

// year(2005, 2025, 2024)



// names = (user= "unknone", age= "unknone")=>{
//     return `hello ${user} your age is ${age}`
// }

// console.log(names("Omar", 20))






// function digitize(n) {
//     return n.toString().split('').reverse().map(Number);
// }
// console.log(digitize(129837))





// // ('+', 4, 7) --> 11
// // ('-', 15, 18) --> -3
// // ('*', 5, 5) --> 25
// // ('/', 49, 7) --> 7


// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case "+":
//             return value1 + value2

//         case "-":
//             return value1 - value2

//         case "*":
//             return value1 * value2

//         case "/":
//             return value1 / value2
//         default:
//             return "Invalid operation"

//     }
// }
// console.log(basicOp("*", 2, 3))




// function findAverage(array) {
//     if (array.length === 0) return 0;

//     let sum = array.reduce((a, b)=> a + b); 
//     return sum / array.length;
// }
// console.log(findAverage([3, 3, 3])); // 3
// console.log(findAverage([])); // 0





// function reverseWords(str) {
//     return str
//         .split(" ")
//         .map((word) => word.split("").reverse("").join(""))
//         .join(" ");
// }
// console.log(reverseWords("This is an example!"));





// Object.defineProperty(String.prototype, 'toJadenCase', {
//     value: function () {
//         return this
//             .split(' ')
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' ');
//     }
// });

// console.log("most trees are blue".toJadenCase());





// function skInfo(user= "un" , age= 0, phone = 0, sow= "yes", ...skils) {
//     document.writeln("<div>")
//     document.writeln(`<h1>Welcom ${user}</h1>`)
//     document.writeln(`<p>your age is ${age}</p>`)
//     document.writeln(`<p>your phone is ${phone}</P>`)


//     if (sow === "yes") {
//         if (skils.length > 0) {
//             document.writeln(`<p>your skils is ${skils.join(" - ")}</p>`)
//         }else {
//             document.writeln(`<p>no skils</p>`)
//         }
//     }else {
//         document.writeln(`<p>dont skils</p>`)
//     }
//     document.writeln("</div>")
// }

// skInfo("omar", 22, "01003292892", "yes")




// function showDetails(a, b, c) {
//     let name, age, status;

//     [a, b, c].forEach(value => {
//         if (typeof value === "string") {
//             name = value;
//         } else if (typeof value === "number") {
//             age = value;
//         } else if (typeof value === "boolean") {
//             status = value;
//         }
//     });

//     document.writeln("<div>");

//     if (name !== undefined) {
//         document.writeln(`<h1>Welcome ${name}</h1>`);
//     }

//     if (age !== undefined) {
//         document.writeln(`<p>Your age is ${age}</p>`);
//     }

//     if (status !== undefined) {
//         let phoneStatus = status ? "Available" : "Not Available";
//         document.writeln(`<p>Your phone is ${phoneStatus}</p>`);
//     }

//     document.writeln("</div>");
// }

// showDetails("omar", 20, true)
// showDetails("omar", false, 20)
// showDetails(20, "omar", true)


// let names = ["Omar", "Ahmed", "Sara"];

// names.forEach((name)=> {
//     document.writeln(`hello ${name} </br>`)
// }) 







//   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// // 🟢 الدروس 01-09: Introduction and Syntax
// // عدد التمارين: 6

// // اكتب كود يطبع رسالة ترحيب في الـ Console.
// console.log("hello world");

// // أنشئ ملف HTML وضع فيه كود JavaScript داخلي.


// // استخدم console.log() مع console.error() و console.warn().
// console.log("This is a log message");
// console.error("This is a log message");
// console.warn("This is a log message");

// // اكتب تعليق سطر واحد وتعليق متعدد الأسطر.

// // جرّب Web API زي alert() أو prompt().
// alert("Welcome to JavaScript!");
// prompt("Welcome to JavaScript!");

// // ما الفرق بين JavaScript وECMAScript؟ اكتبه في تعليق.

// 🟢 الدروس 10–17: Data Types And Variables
// عدد التمارين: 4

// أنشئ 4 متغيرات بأنواع بيانات مختلفة (string, number, boolean, undefined).

// استخدم typeof لطباعة نوع كل متغير.

// استخدم Template Literals لعرض رسالة تحتوي متغيرات.

// اكتب كود يجمع اسمين ويعرض النتيجة.

// 🟢 الدروس 18–22: Operators
// عدد التمارين: 4

// أنشئ عمليتين حسابيتين مختلفة واطبع الناتج.

// جرّب + مع String وNumber وشوف الناتج.

// استخدم += و*= مع متغير.

// جرّب استخدام ++ و-- على متغير.

// 🟢 الدروس 23–26: Numbers
// عدد التمارين: 7

// خزّن رقم عشري في متغير واستخدم toFixed().

// جرّب parseInt() وparseFloat().

// استخدم Math.floor() وMath.ceil() على رقم.

// احسب الجذر التربيعي باستخدام Math.sqrt().

// احسب رقم عشوائي بين 1 و10.

// استخدم Math.max() وMath.min().

// تمرين: عدّل رقم واطبعه بأكثر من طريقة.

// 🟢 الدروس 27–30: Strings And Methods
// عدد التمارين: 2

// جرّب استخدام slice() وsubstring() على جملة.

// استخدم includes() وstartsWith() وendsWith() على جملة.

// 🟢 الدروس 31–32: Comparison & Logical Operators
// عدد التمارين: 3

// قارن رقمين باستخدام == و===.

// استخدم شرط مركّب يحتوي && و||.

// جرّب مقارنة باستخدام != و!==.

// 🟢 الدروس 33–37: If Condition
// عدد التمارين: 4

// اكتب كود يتحقق إذا كان السن أكبر من 18.

// استخدم if داخل if (Nested).

// استخدم ternary operator لطباعة "ناجح" أو "راسب".

// جرّب nullish coalescing مع قيمة null.

// 🟢 الدروس 38–39: Switch Statement
// عدد التمارين: 1

// استخدم switch لتحديد نوع اليوم من رقم (1 إلى 7).

// 🟢 الدروس 40–47: Arrays And Methods
// عدد التمارين: 6

// أنشئ Array تحتوي 5 عناصر واطبع الطول.

// أضف عنصر إلى البداية وآخر للنهاية.

// احذف عنصر باستخدام pop() وshift().

// استخدم indexOf() وincludes().

// جرّب sort() وreverse().

// ادمج Array جديدة مع أخرى باستخدام concat().

// 🟢 الدروس 48–53: Loop – For
// عدد التمارين: 7

// اطبع الأرقام من 1 إلى 10 باستخدام for.

// استخدم حلقة داخل حلقة (Nested Loop).

// اطبع عناصر Array باستخدام for.

// استخدم continue لتخطي رقم معين.

// استخدم break عند رقم معين.

// أضف منتجات إلى صفحة HTML باستخدام حلقة.

// اطبع جدول الضرب من 1 إلى 5.

// 🟢 الدروس 54–56: Loop – While
// عدد التمارين: 1

// اطبع الأرقام من 1 إلى 5 باستخدام while.

// 🟢 الدروس 57–63: Function And Parameters
// عدد التمارين: 6

// اكتب دالة تطبع رسالة ترحيب.

// دالة تستقبل اسم وتطبع رسالة مخصصة.

// دالة ترجع ناتج جمع رقمين.

// دالة تقبل قيمة افتراضية.

// دالة تستخدم ...rest لطباعة كل المدخلات.

// أنشئ دالة تستخدم أكثر من نوع من البراميتر.

// 🟢 الدروس 64–66: Function And Scopes
// عدد التمارين: 3

// اكتب دالة بدون اسم (Anonymous).

// دالة ترجع دالة بداخلها.

// اكتب دالة بسهم (Arrow Function) تقبل اسم وتطبع "أهلا، [الاسم]".

//   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$