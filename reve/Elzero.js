// document.writeln("hello world")
// console.log("hello world")
// window.alert("hello world")
// // DOM ==> document object model

// // document ==> document	صفحة الويب نفسها (DOM)	عشان نتعامل مع عناصر الصفحة
// document.querySelector("h1").style.color = "blue";
// document.writeln("<h1>hello world</h1>");

// // console ==> شاشة المطور (Developer Console)	عشان نطبع أو نفحص أو نظهر أخطاء
// console.log("What is your name:");
// console.error("Error");
// console.log(30 + 10);

// window ==> المتصفح كله (النافذة)	عشان نتعامل مع الحاجات العامة
// window.alert("window");
// window.print();

// // معرفة الخطأ
// console.log("hello world");
// console.log("hello world");
// cnsole.log("hello world");
// console.log("hello world");
// console.log("hello world");
// consol.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.lg("hello world");

// document.writeln(typeof 23.4 + "</br>" );
// document.writeln( "10" + "30" + "</br>" );
// document.writeln( 10 + 30 + "</br>" );
// document.writeln(typeof true + "</br>" );
// document.writeln(typeof undefined + "</br>" );
// document.writeln(typeof null + "</br>" );

// var name = " Ali";
// name = "Omar";
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

// // #################################
// let nam = 54;
// nam = 5;
// // let nam = 54;

// var sum = 55;
// sum = 10;
// var sum = 4;

// const upper = 60;
// // upper = 6

// console.log(nam);
// console.log(sum);
// console.log(upper);
// // #################################

// var x;
// console.log(x);
// let y;
// console.log(y);
// const z; // ❌
// console.log(z);

// let names = "Muhammad";
// let age = 26;
// console.log(`my name is ${names} my age is ${age}`)

// let num1 = 5;
// let num2 = 4;
// console.log("num1" + num2)
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log("num1" - num2)
// console.log(num1 * num2)
// console.log(num1 ** num2)
// console.log(num1 / num2)
// console.log(num1 % num2)


// let AI = 10;
// // AI++;
// // console.log(++ AI);
// console.log( AI++ );
// console.log( AI );


// // تحويل النص الي رقم
// console.log("6" + "5") // الاال+ا 🤨 
// console.log("6" - "5")
// console.log("6" * "5")
// console.log("6" ** "5")
// console.log("6" / "5")
// console.log("6" % "5")
// console.log("6" * "Omar") // ==> داكمان اتحول الي رقم 🤨
// console.log(+"6" + +"5") 

// ####################################
// console.log(+"5")
// console.log(-"5")
// console.log(-"-5")
// console.log(+true)
// console.log(+false)
// console.log(+undefined)
// console.log(+NaN)

// console.log(typeof +"5")
// console.log(typeof Number("5"))
// console.log(parseInt("4 Omar"))
// console.log(parseInt("Ali 4 Omar"))
// console.log(parseInt("4.5 omar"))
// console.log(parseFloat("4.5 omar"))
// // ####################################

// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(Number.MIN_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.isSafeInteger(9007199254740991))

// console.log(Number.isInteger(+"5"))
// console.log(Number.isInteger("5"))
// console.log(Number.isNaN("ali" - 1))
// console.log(Number.isNaN("ali" + 1))


// console.log(Math.abs(-3));
// console.log(Math.sqrt(16));// الجزر التربيعي
// console.log(Math.pow(2,3));// الاس
// console.log(Math.round(5.45));
// console.log(Math.ceil(5.45));
// console.log(Math.floor(5.9));
// console.log(Math.min(1,4,-3,6,-7,2,6,7,8,3));
// console.log(Math.max(1,4,3,-6,7,2,6,7,-8,3));



// console.log("omar mohamad \"sabry\"");
// console.log("omar \
//     mohamad \
//     sabry");









// /*
//     Number Methods
//     - Two Dots To Call A Methods
//     - toString()
//     - toFixed()
//     - parseInt()
//     - parseFloat()
//     - isInteger() [ES6]
//     - isNaN() [ES6]
// */

// console.log((100).toString());
// console.log(100.10.toString());

// console.log(100.554555.toFixed(2));

// console.log(Number("100 Osama"));
// console.log(+"100 Osama");
// console.log(parseInt("100 Osama"));
// console.log(parseInt("Osama 100 Osama"));
// console.log(parseInt("100.500 Osama"));
// console.log(parseFloat("100.500 Osama"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("Osama" / 20));








// /*
//     Math Object
//     - round()
//     - ceil()
//     - floor()
//     - min()
//     - max()
//     - pow()
//     - random()
//     - trunc() [Es6]
// */

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));
// console.log(Math.random());
// console.log(Math.trunc(99.5));





// let a = "Elzero Web School";

// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a.charAt(13).repeat(8).toUpperCase());
// console.log([a.slice(0, 6)]);
// console.log(`${a.substr(0, 6)} ${a.substr(11)}`);

// console.log(
//     a[0].toLowerCase() +
//     a.slice(1, a.length - 1).toUpperCase() +
//     a.slice(-1).toLowerCase()
// );







// /*
//   Comparison Operators
//   - == Equal
//   - != Not Equal

//   - === Identical
//   - !== Not Identical

//   - > Larger Than
//   - >= Larger Than Or Equal

//   - < Smaller Than
//   - <= Smaller Than Or Equal
// */

// console.log(10 == "10"); // Compare Value Only
// console.log(-100 == "-100"); // Compare Value Only
// console.log(10 != "10"); // Compare Value Only

// console.log(10 === "10"); // Compare Value + Type
// console.log(10 !== "10"); // Compare Value + Type
// console.log(10 !== 10); // Compare Value + Type

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log(typeof "Osama" === typeof "Ahmed");







// /*
//     Logical Operators
//     - ! Not
//     - && And
//     - || Or
// */

// console.log(true);
// console.log(!true);

// console.log(!(10 == "10"));

// console.log(10 == "10" && 10 > 8 && 10 > 50);

// console.log(10 == "10" || 10 > 80 || 10 > 50);








// /*
//     Control Flow
//     - if
//     - else if
//     - else

//     if (Condition) {
//         // Block Of Code
//     }

// */

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//     price -= discountAmount; // price = price - discountAmount
// } else if (country === "Egypt") {
//     price -= 40;
// } else if (country === "Syria") {
//     price -= 50;
// } else {
//     price -= 10;
// }

// console.log(price);







// /*
//     Nested If
// */

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {

//     price -= discountAmount;

// } else if (country === "Egypt") {

//     if (student === true) {
//         price -= discountAmount + 30;
//     } else {
//         price -= discountAmount + 10;
//     }

// } else {

//     price -= 10;

// }

// console.log(price);









// /*
//     Conditional (Ternary) Operator
// */

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male") {
//     console.log("Mr");
// } else {
//     console.log("Mrs");
// }

// // Condition ? If True : If False

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);



// theAge < 20
//     ? console.log(20)
//     : theAge > 20 && theAge < 60
//         ? console.log("20 To 60")
//         : theAge > 60
//             ? console.log("Larger Than 60")
//             : console.log("Unknown");






// let Name = "Ahmad"
// let theGender = "Male"
// let Age = 65

// let name = "Mai"
// let Gender = ""
// let age = 19


// if (Name.trim() && theGender.trim() && Age >= 19) {
//     console.log(`Hello ${Name}`)
// }else {
//     console.log("Pleas Enter Yor Name")
// }

// theGender.trim()
//     ? console.log(`the grender is ${theGender}`)
//     : console.log("sorey")



// result = Name.trim()
//     ? ((`the name is ${name} `) && (Gender.trim()
//         ? `the grender is ${Gender}`
//         : `the grender ${Gender} is not fund`))
//     : "sorey"
// console.log(result)



// result = Name.trim()
//     ? ((`the name is ${Name}`) && (theGender.trim()
//         ? `the grender is ${theGender}`
//         : `the grender ${theGender} is not fund`))
//     : "sorey"
// console.log(result)



// let Name = "Ahmad";
// let theGender = "Male";
// let Age = 65;

// if (Name.trim() && theGender.trim() && (Age >= 19 && Age <= 65)) {
//     console.log(`The name is ${Name}\nGender: ${theGender}\nAge: ${Age}`);

// } else {
//     if (Name.trim() === "") {
//         console.log("Please enter your name.");

//     } else if (theGender.trim() === "") {
//         console.log("Please enter your gender.");

//     } else {
//         console.log(`Age must be between 19 and 65.\nProvided age (${Age}) is invalid.`);
//     }
// }




// //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// let Name = "Ahmad";
// let theGender = "Male";
// let Age = 65;

// let errors = [];

// if (Name.trim() === "") {
//     errors.push("❌ Please enter your name.");
// }

// if (theGender.trim() === "") {
//     errors.push("❌ Please enter your gender.");
// }

// if (!(Age >= 19 && Age <= 65)) {
//     errors.push(`❌ Age must be between 19 - 65. Provided age (${Age}) is invalid.`);
// }

// if (errors.length > 0) {
//     console.log("Validation Errors:");
//     console.log(errors.join("\n"));
// } else {
//     console.log(`✅ The name is ${Name}\n✅ Gender: ${theGender}\n✅ Age: ${Age}`);
// }

// //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// /*
//     Logical Or ||
//     -- Null + Undefined + Any Falsy Value
//     Nullish Coalescing Operator ??
//     -- Null + Undefined
// */

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0;

// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);





// /*
//   If Condition Challenge
// */

// let a = 10;

// if (a < 10) {
//     console.log(10);
// } else if (a >= 10 && a <= 40) {
//     console.log("10 To 40");
// } else if (a > 40) {
//     console.log("> 40");
// } else {
//     console.log("Unknown");
// }





// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// let st = "Elzero Web School";

// let a = 10;
// let resalt = a < 10
// ? "10"
// : a >= 10 && a <= 40
// ? "10 To 40"
// : a > 40
// ? "> 40"
// : "Unknown"

// console.log(resalt)

// if (String(st.length * 2) === "34") {
//     console.log("Good");
// }

// // W Position May Change
// if (st[st.indexOf("W")] === "W") {
//     console.log("Good");
// }


// if (typeof Number(st) !== "string") {
//     console.log("Good");
// }

// if (typeof Number(st) === "number") {
//     console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//     console.log("Good");
// }

// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// let names = 4
// switch (names) {
//     case 1:
//         console.log("1")
//         break;
//     case 2:
//         console.log("2")
//         break;
//     case 3:
//         console.log("3")
//         break;

//     default:
//         console.log("not");
// }

// /*
//   Switch Challenge
// */

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//     salary = 8000;
//     console.log(salary)
// } else if (job === "IT" || job === "Support") {
//     salary = 6000;
//     console.log(salary)
// } else if (job === "Developer" || job === "Designer") {
//     salary = 7000;
//     console.log(salary)
// } else {
//     salary = 4000;
//     console.log(salary)
// }


// switch (job) {

//     case "Manager":
//         salary = 8000;
//         console.log(salary)
//         break;

//     case "IT":
//     case "Support":
//         salary = 6000;
//         console.log(salary)
//         break;

//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         console.log(salary)
//         break;

//     default:
//         salary = 4000;
//         console.log(salary)

// }





// /*
//   If Challenge
// */

// let holidays = 4;
// let money = 0;

// switch (holidays) {
//     case 0:
//         money = 5000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 1:
//     case 2:
//         money = 3000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 3:
//         money = 2000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 4:
//         money = 1000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 5:
//         money = 0;
//         console.log(`My Money is ${money}`);
//         break;
//     default:
//         money = 0;
//         console.log(`My Money is ${money}`);
// }

// if (holidays === 0) {
//     money = 5000;
//     console.log(`My Money is ${money}`);
// }
// else if(holidays === 1 || holidays === 2) {
//         money = 3000;
//         console.log(`My Money is ${money}`);
// }
// else if(holidays === 3) {
//         money = 2000;
//         console.log(`My Money is ${money}`);
// }
// else if(holidays === 4) {
//         money = 1000;
//         console.log(`My Money is ${money}`);
// }
// else if(holidays === 5) {
//         money = 0;
//         console.log(`My Money is ${money}`);
// }
// else {
//         money = 0;
//         console.log(`My Money is ${money}`);
// }

// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// /*
//   Arrays
//     - Create Arrays [Two Methods] new Array() + []
//     - Access Arrays Elements
//     - Nested Arrays
//     - Change Arrays Elements
//     - Check For Array Array.isArray(arr);
// */

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1] = "Gamal";
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);

// console.log(Array.isArray(myFriends));






// function longest(s1, s2) {
//     return [...new Set(s1 + s2)].sort().join("")
// }
// console.log(longest("acb", "dgfe"));



// function longest(s1, s2) {
//     let combined = s1 + s2; 
//     let result = ""; 

//     for (let i = 0; i < combined.length; i++) {
//         let letter = combined[i];

//         if (!result.includes(letter)) {
//             result += letter;
//         }
//     }
//     return result.split('').sort().join('');
// }


// console.log(longest("abc", "bcd")); 

// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// /*
//     Array Methods
//     - Length
// */

// // Index Start From 0 [ 0, 1, 2, 3, 4 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// myFriends.length = 2;

// console.log(myFriends);





// /*
//     Arrays Methods [Adding And Removing]
//     - unshift("", "") Add Element To The First
//     - push("", "") Add Element To The End
//     - shift() Remove First Element From Array
//     - pop() Remove Last Element From Array
// */

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);

// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);





// /*
//     Arrays Methods [Search]
//     - indexOf(Search Element, From Index [Opt])
//     - lastIndexOf(Search Element, From Index [Opt])
//     - includes(valueToFind, fromIndex [Opt]) [ES7]
// */

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));

// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed", 2));

// if (myFriends.lastIndexOf("Osama") === -1) {
//     console.log("Not Found");
// }

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));






// /*
//     Arrays Methods [Sort]
//     - sort(Function [Opt])
//     - reverse
// */

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort().reverse());


// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$




// /*
//     Arrays Methods [Slicing]
//     - slice(Start [Opt], End [Opt] Not Including End)
//     --- slice() => All Array
//     --- If Start Is Undefined => 0
//     --- Negative Count From End
//     --- If End Is Undefined || > Indexes => Slice To The End Array.length
//     --- Return New Array
//     - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
//     --- If Negative => Start From The End
// */

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);

// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);









// /*
//     Arrays Methods [Joining]
//     - concat(array, array) => Return A New Array
//     - join(Separator)
// */

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());




// /*
//    Array Challenge
// */

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here
// myy = my.slice(zero, counter)
// myy.push("Osama")
// console.log(myy.reverse())
// console.log(my.reverse().slice(counter, ++counter + 1)); // ["Elham", "Mazero"]

// my.splice(zero, my.length, "Elzero")
// console.log(my); // "Elzero"

// let str = "Mazero";
// let result = str.slice(-2);
// result = result[0] + result[1].toUpperCase(); 
// console.log(result); // "rO"






/*
    Loop
    - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors: ");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    console.log("Models: ");
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }
}