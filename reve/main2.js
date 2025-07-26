


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



// setInterval(() => {
//     console.log("Hello Omar")
// }, 9000)


