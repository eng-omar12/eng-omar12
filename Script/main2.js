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





// let titleName = "Elzero", directionPragraph = "Elzero Web School", contantData = "25/10";

// let cardPox = `
// <div>
// <h3>${titleName}</h3>
// <p>${directionPragraph}</p>
// <span>${contantData}</span>
// </div>`

// document.body.innerHTML = cardPox.repeat(4)


// let a = 20;
// let b = "10";
// let c = true;

// console.log(a + b + c)
// console.log(a + +b + c)
// console.log(a + -b + c)



// let a = "-100";
// let b = "-20";
// let c = 30;
// let d = true;

// console.log(+a * +b);
// console.log(c - --a - --b * ++d); 



// let nameUser = document.querySelector("[mame ='user']")
// let ageUser = document.querySelector("[mame ='age']")
// let phoneUser = document.querySelector("[mame ='phone']")

// document.forms[0].onsubmit = function (sum){
//     let user = false;
//     let age = false;
//     let phone = false;
//     console.log(nameUser)
//     console.log(ageUser.value.length)
//     console.log(phoneUser.value.length)

//     if (nameUser !== ""){
//         nameUser = true;
//     }
    
    
//     if (ageUser < 18 && ageUser.value.length <= 60) {
//         age = true;
//     }

//     if (phoneUser >= 11 && phoneUser.value.length <= 13){
//         phone = true;
//     }
    
//     console.log(user);
//     console.log(age);
//     console.log(phoneUser);

//     if (nameUser === false || ageUser === false || phoneUser === false){
//         sum.preventDefault();
//     }
// }



// let userInput = document.querySelector("[name='user']")
// let ageInput = document.querySelector("[name='age']")
// let mobileInput = document.querySelector("[name='mobile']")


// document.forms[0].onsubmit = function (v){
//         let userValed     = false;
//         let ageValed      = false;
//         let mobileValed   = false;

//         if (userInput !== "" && userInput.value.length <= 20) {
//             userValed = true ;
//         }

//         if ( ageInput !== "" && ageInput.value.length <= 2 && ageInput.value > 18 && ageInput.value < 60) {
//             ageValed = true ;
//         }
//         if ( mobileInput !== "" && mobileInput.value.length >= 11 && mobileInput.value.length <= 13) {
//             mobileValed = true ;
//         }

//         if (userValed === false || ageValed === false || mobileValed === false) {
//             v.preventDefault();
//         }
// }



// let names = ("wath your name")
// let name = prompt("wath your name", names)
// console.log(name)



// const name = prompt("ener name");
// const age = prompt("enter age")
// if (age >= 20) {
//     console.log("yes")
// } else {
//     alert("no")
// }

// setTimeout(()=> {
//     console.log("Hello Omar")
// }, 3000)


// let id = setTimeout(info, 3000, "Omar Mohammad", "full-stack")
// console.log(id)
// function info (name, jop){
//     console.log(`Hi ${name}, You are a ${jop}`)
// }

// let stopBtn = document.querySelector("button")
// stopBtn.onclick = ()=> {
//     clearTimeout(id)
// }



// let id = setTimeout(info, 3000, "omar")
// console.log(id)
// function info (name){
//     console.log(`ih ${name}`)
// }
// stopBtn = document.querySelector("button")
// this.onclick = ()=> {
//     clearTimeout(id)
// }

// setInterval(()=> {
//     console.log("Hello Omar")
// }, 9000)



// const pere = "Welcome Omar"
// let user = "omar";
// let age = 20;

// let fff = document.createElement("h1");
// let ff = document.createElement("h2");
// let f = document.createElement("h3");


// fff.innerText = pere ;
// ff.innerText = user ;
// f.innerText = age; 


// [fff , ff , f].forEach(ffff => {

//     ffff.classList.add("text");
//     document.body.appendChild(ffff)
// })


// let myName = "Omar";
// let myAge = 20;

// function omar() {
//     myName = "Mohammad";
//     myAge = 25;
//     console.log(`Hello  ${myName}, You are ${myAge} years old.`);
//     function innerFunction() {
//         console.log(`Hello  ${myName}, You are ${myAge} years old.`);
//     }
//     innerFunction();
//     // return innerFunction;
// }
// omar();





// // let names = function (...args) {
// //   // Parameter ?
// //   return "String ["+ args.join("], [")+ "] => Done !";
// // };

// let names = (...args)=> "String ["+ args.join("], [")+ "] => Done !";

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !




// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + +two;

// function calcRegular(one, two, ...nums) {
//   return one + +two;
// }

// console.log(calc(10, "70", "test"));        
// console.log(calcRegular(10, "70", "test")); 
