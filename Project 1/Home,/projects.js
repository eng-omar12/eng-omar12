
// let names = ["Ahmed", "Ali", "Omar", "Sabry", "Khaled", "Samy"]
// let ages = ["18 years old", "30 years old", "19 years old", "27 years old", "23 years old", "44 years old"]

// let container = document.createElement("div");
// document.body.appendChild(container);
// container.style.textAlign = "center";
// function element(name, ages) {
//     // elements
//     let card = document.createElement("div");
//     let title = document.createElement("h2");
//     let age = document.createElement("p");
//     let img = document.createElement("img");

//     // content
//     let head = document.createTextNode(name)
//     let ageContent = document.createTextNode(ages)
//     img.src = "./FB_IMG_1723244333187.jpg";
//     title.appendChild(head);
//     age.appendChild(ageContent);

//     // style
//     card.style.width = "200px"
//     card.style.background = "yellow"
//     card.style.color = "red"
//     card.style.padding = "10px"
//     card.style.margin = "2px"
//     card.style.display = "inline-block"
//     card.style.fontSize = "30px"
//     card.style.borderWidth = "30px"


//     img.style.width = "100%"

//     card.appendChild(title);
//     card.appendChild(age);
//     card.appendChild(img);

//     container.appendChild(card)
// }
// for (let i = 0; i < 6; i++) {
//     element(names[i], ages[i]);
    
// }

//#####################################################################

// document.write("hello world");

// document.write("hello world");

// console.log("hello world");

// window.alert("hello world");

// // عملية الجمع
// let num = 4 + 5;
// // عملية الطرح
// let b = 5 - 4;
// // عملية الضرب
// let c = 4 * 5;
// // عملية القسمة
// let d = 5 / 4;
// // باقي الفسمة
// let e = 5 % 2;
// // الأس
// let f = 4 ** 5;




// let x = +"5"; 
// let y = +"abdelrahman";
// let z = +undefined; 
// let d = +true; 
// let h = +null;

// let q = -"5"; 
// let w = -"abdelrahman"; 
// let e = -undefined; 
// let r = -true; 
// let t = -null;

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(d);
// console.log(h);



// تحويل النص الى رقم
// let x = +"5";

// let x = Number("5");

// let x = parsInt("5");

// let x = parsFloat("5");



// // الكائن Number يتيح لك العديد من الخصائص المميزة مثل:

// // MAX_VALUE : تُرجع أكبر رقم ممكن في JavaScript

// // MIN_VALUE : تُرجع أفل رقم ممكن في JavaScript

// // MAX_SAFE_INTEGER : تُرجع أكبر رقم أمن في JavaScript

// // MIN_SAFE_INTEGER : تُرجع أقل رقم أمن في JavaScript

// // isSafeInteger : يمكنك من خلال هذا الـ method التحقق من كون الرقم أمن ام لا

// // isInteger : يمكنك من خلال هذا الـ method التحقق من كون نوع البيانات تلك رقمية ام لا

// // isNan : يمكنك من خلال هذا الـ method التحقق من كون نوع البيانات تلك Nan ام لا



// (10).toString()




// repeat
// // يمكنها تكرار الجملة النصية بالعدد الذي تمرره لها مثال:

// "ahmed".repeat(10)
 
// length
// // من خلاله يمكنك معرفة عدد السلسلة النصية و ارجاع عدد الاحرف بها مثال:

// "ahmed".length = 5
 
// // الوصول الى الحرف المراد
// // للوصول الى index معين في اي سلسلة نصية تكتب اسم المتغير ثم رقم الحرف المراد في الاقواس المربعة مثال:

// name[10]
 
// // أو باستخدام charAt للوصول الى الحرف المراد و للوصول له نمرر ال index المراد مثال:

// charAt(10)




// // indexOf
// // من خلال هذا ال method يمكنك البحث عن اي حرف او نص في اي سلسلة نصية من باداية السلسلة النصية و ذلك من خلال تمرير الحرف المراد البحث عنه و من ثم يرجع لك رقم ال index اذا كان موجود مثال:

// indexOf("a")
 
// // و يمكنك البحث من المكان المراد في السلسلة النصية و ذلك من خلال تمرير نقطة بداية البحث مثال:

// indexOf("a", 6)
 
// // lastIndexOf
// // ايضاً يمكنك البحث من نهاية السلسلة النصية و ذلك من خلال lastIndexOf مثال:

// lastIndexOf("a")
 
// // و يمكنك البحث من المكان المراد في السلسلة النصية و ذلك من خلال تمرير نقطة بداية البحث مثال:

// lastIndexOf("a", 6)
 
// // slice
// // من خلال هذا ال method يمكنك تقطيع السلسلة النصية و ارجاع ما تريد منها و ذلك من خلال تمرير رقم index بداية التقطيع و رقم index نهاية التقطيع و بذلك يقوم بارجاع الجزء المقطوع من النص و اذا لم تقم بتمرير اي ارقام index سيقوم بارجاع النص كامل مثال:

// slice(0 , 5)
 
// // splite
// // ترجع نسخة من الـ String على شكل مصفوفة و اذا تم مرير لها حرف تقوم باقتطاع هذه السلسلة النصية من مكان هذا الحرف في النص مثال:

// "i love javascript".splite(" ")  =>  ["i" , "love" , "javascript"]




// // subString
// // من خلال هذا ال method يمكنك تقطيع السلسلة النصية و ارجاع ما تريد منها و ذلك من خلال تمرير رقم ايجابي فقط  لقيمة index بداية التقطيع و رقم ايجابي فقط لقيمة index نهاية التقطيع و بذلك يقوم بارجاع الجزء المقطوع من النص و اذا لم تقم بتمرير اي ارقام index سيقوم بارجاع النص كامل مثال:

// subString(start ,  end)
// subString(0 , 5)
 

// // subStr
// // من خلال هذا ال method يمكنك تقطيع السلسلة النصية و ارجاع ما تريد منها و ذلك من خلال تمرير index بداية التقطيع و ثم ادخال عدد الحروف التي تريد قطعها و بذلك يقوم بارجاع الجزء المقطوع من النص و اذا لم تقم بتمرير اي ارقام index سيقوم بارجاع النص كامل مثال:

// subStr(start ,  length)
// subStr(0 , 5)



// // indexOf
// // من خلال هذا ال method يمكنك البحث في النصوص من بداية النص من خلال تمرير الحرف او النص المراد البحث عنه و تقوم بارجاع قيمة ال index للحرف او النص اذا وجد و اذا لم يكن الحرف موجود تقوم بارجاع -1 مثال:

// indexOf(character,  search location)
// indexOf("a" , 5)
 
 

// // lastIndexOf
// // من خلال هذا ال method يمكنك البحث في النصوص من نهاية النص من خلال تمرير الحرف او النص المراد البحث عنه و تقوم بارجاع قيمة ال index للحرف او النص اذا وجد و اذا لم يكن الحرف موجود تقوم بارجاع -1 مثال:

// lastIndexOf(character,  search location)
// lastIndexOf("a" , 5)
 
 

// // includes
// // من خلال هذا ال method يمكنك البحث في النصوص من خلال تمرير الحرف او النص المراد البحث عنه و تقوم بارجاع قيمة true اذا وجد و قيمة false اذا لم يكن الحرف موجود مثال:

// includes(character,  search location)
// includes("a" , 5)
 
 

// // startsWith
// // من خلال هذا ال method يمكنك معرفة الحرف الذي يبدأ به اي نص و ذلك من خلال تمرير حرف لها يمكنها ارجاع true اذا كان النص يبدأ بهذا الحرف او ارجاع false في حالة ما كان الحرف خطأ و يمكنك بدأ البحث من المكان المراد في اي نص و مثال:

// startsWith(character,  search location)
// startsWith("a" , 5)
 
 

// // endsWith
// // من خلال هذا ال method يمكنك معرفة الحرف الذي ينتهي به اي نص و ذلك من خلال تمرير عدد الحروف المراد البحث فيهم و يمكنها ارجاع true اذا كان النص ينتهي بهذا الحرف او ارجاع false في حالة ما كان الحرف خطأ مثال:

// endsWith(character,  length)
// endsWith("a" , 5)




// let user = {
//     // property
//     firstName:"abdelrahman",
//     lastName:"gamal",
//     email:"test@gmail.com",
//     age:26,
//     skills:["html","css","js","python","php"],
//     active:false,
//     phoneNumber:{
//         first:"0106547687",
//         second:"0126574687",
//     },
//     address:{
//         Egypt:"elmohandsen",
//         Uae:"abu dhabi",
//     },
//     // method
//     isActive:function(){
//         if(user.active === true){
//             return "hello user";
//         }
//         else{
//             return "sorry you are not active";
//         }
//     },
//     getAge:function(){
//         if(user.age >= 18)
//         {
//             return "availalbe";
//         }
//         else{
//             return "unavailable";
//         }
//     },
// };
// console.log(user.isActive())
// console.log(user["getAge"]())
 


// // الـ This داخل Method
// // عند استخدام الـ This داخل method معين ف ان الـ This تشير الى الـ obect مالك هذا الـ method في هذا المثال يشير This الى ال object المالك وهو user

// let user = {name:"abdelrahman", getName:function(){
//     return this.name;
// }, };

// // الـ This مكتوب وحده
// // هنا This تشير الى الـ Global Object و في حالتنا تلك يشير الى الـ window مثال
// let user = this;

// // الـ This مع function عادية
// // هنا This تشير الى window مثال
// function func(){
//     return this;
// }

// // الـ This مع function in strict mode
// // هنا يشير This إلى undefined. مثال
// "use strict"; function func(){
//     return this;
// }

// // الـ This مع Event
// // عند استخدام this مع حدث معين في ال html ف ان this تشير الى عنصر ال html المتسخدم في المثال التالي this تشير الى
// <button onclick="this.style.color='red'"> Submit </button>



// // ما هو الـ Object.create ؟
// // يقوم الـ Object.create بانشاء Object جديد من Object موجود كنموذج أولي للـ Object الذي تم إنشاؤه حديثًا.
// // Syntax
// // يتم اضافة Parameters الى الـ create method منها الاجباري و منها الاختياري
// Object.create(object) Object.create(object, properties)

// // object
// // الـ Parameter الاجباري هو object النموئج الذي ستنشئ منها الـ object الجديد. مثال:
// let user1 = { name:"abdelrahman", getName:function(){ return this.name; }, }; 
// let user2 = Object.create(user1);
// // properties

// // الـ Parameter الاختياري هو مجموع الخصائص التي تريد اضافتها بشكل مباشر الى الكائن الجديد مثال:
// let user1 = { name:"abdelrahman", getName:function(){ return this.name; }, }; 
// let user2 = Object.create(user1, {age:{value:26}});



// let a1 = {
//     num1:1,
// }
// let a2 = {
//     num2:2,
// }
// let a3 = {
//     num3:3,
// }
// let a4 = Object.assign(a1,a2,a3,{
//     num4:4,
// });
// console.log(a4)



// // طرق الوصول الى العناصر
// // هناك عدة طرق لاختيار عنصرك المراد و سيتم استعراضهم الان

// // 1- الوصول الى العنصر من خلال ال id  الخاص به
// document.getElementById()

// // 2- الوصول الى العنصر من خلال ال class name  الخاص به
// document.getElementsByClassName()

// // 3- الوصول الى العنصر من خلال ال tag name  الخاص به
// document.getElementsByTagName()

// // 4- الوصول الى العنصر من خلال ال selector
// document.querySelector()

// // 5- الوصول الى العنصر من خلال ال collection
// document.querySelectorAll()

// // 6- الوصول الى الـ body
// document.body

// // 7- الوصول الى الـ title
// document.title

// // 8- الوصول الى الـ images
// document.images

// // 9- الوصول الى الـ links
// document.links

// // 10- الوصول الى الـ forms
// document.forms



// // 1- انشاء العنصر 
// let container = document.createElement("div"); 
// let head = document.createElement("h1"); 
// let img = document.createElement("img"); 
// // 2- اضافة المحتوى 
// let content = document.createTextNode("hello world"); 
// head.appendChild(content); img.src = "img/1.jpg"; 
// img.style.width = "100px"; 
// // 3- اضافة العنصر في المكان المراد container.appendChild(head); 
// container.appendChild(img); 
// document.body.appendChild(container) 
// console.log(container); 
// container.style.background = "#666"; 
// container.style.color = "#fff"; 
// container.style.padding = "10px"; 
// container.style.textAlign = "center";




// let names = ["ahmed","ali","gamal","abdelrahman"];
// let ages= ["18 years old","17 years old","22 years old","20 years old"];
// let container = document.createElement("div");
// document.body.appendChild(container);
// container.style.textAlign = "center";
// function element(name,ages)
// {
//     // elements
//     let card = document.createElement("div");
//     let title = document.createElement("h2");
//     let age = document.createElement("p");
//     let img = document.createElement("img");
//     // content
//     let head = document.createTextNode(name);
//     let ageContent = document.createTextNode(ages);
//     img.src = "img/1.jpg";
//     title.appendChild(head);
//     age.appendChild(ageContent);
//     // style
//     card.style.width = "200px";
//     card.style.background = "#444";
//     card.style.color = "#fff";
//     card.style.padding = "10px";
//     card.style.margin = "2px";
//     card.style.display = "inline-block";
//     img.style.width = "100%";
//     card.appendChild(title);
//     card.appendChild(age);
//     card.appendChild(img);
//     container.appendChild(card);
// }
// for(let i = 0; i < 4; i++)
// {
//     element(names[i], ages[i]);
// }



// // كيف يتم كتابة الحدث؟
// // هناك طرق كثيرة لاضافة الاحداث اولها هو اضافة الحدث للعنصر بشكل مباشر و هنا يمكنك اضافة الحدث مباشرة الى عنصر html مثال:
// <element EVENT="CODE JAVASCRIPT">….</element>

// // مثال:
// // <button onclick="console.log("hello world")">click</button>
// // الطريقة الثانية لاضافة الحدث من خلال الجافاسكريبت
// // من خلال هذه الطريقة يمكنك اضافة الحدث في الجافاسكريبت و لفعل ذلك تحتاج الى العنصر الذي تريد وقوع الحدث عليه و من ثم تضيف اليه الحدث مثال:
// element.EVENT=FUNCTION;

// // مثال:
// let element = document.getElementById("element "); 
// element.onclick=function(){console.log("hello")};

// // يمكنك ايضاً استخدام طريقة اخرى اكثر ذكاء و اقل من ناحية الاخطاء و هي استماع الحدث في الطرق الماضية كنت تستطيع اضافة حدث لاي عنصر لكن كنت مقيد حيث لن تستطيع اضافة اكثر من حدث للعنصر الواحد كذلك فكانت تظهر اخطاء كثيرة يمكن حل كل ذلك من خلال addEventListener مثال:
// element.addEventListener("Event",FUNCTION);

// // مثال:
// let element = document.getElementById("element "); 
// element.addEventListener( "click" ,function(){console.log("hello")});



// // Window localStorage
// // يسمح لك عنصر localStorage بحفظ البيانات كـ key / value في المتصفح.

// // يخزن localStorage البيانات بدون تاريخ انتهاء الصلاحية. لا يتم حذف البيانات عند إغلاق المتصفح ، وتكون متاحة للجلسات المستقبلية. كائن sessionStorage الذي يخزن البيانات لجلسة واحدة. (يتم حذف البيانات عند إغلاق نافذة المتصفح)
 
// // طريقة الكتابة
// window.localStorage
// // أو
// localStorage
 
// // اضافة عنصر جديد في localStorage
// localStorage.setItem(key, value);
 
// // او
// localStorage.key = value;
 
// // لقراءة البيانات من localStorage
// localStorage.getItem(key);
 
// // او
// localStorage.key;
 
// // حذف عنصر واحد من ال localStorage
// localStorage.removeItem(key);
 
// // حذف جميع العناصر من ال localStorage
// localStorage.clear();



