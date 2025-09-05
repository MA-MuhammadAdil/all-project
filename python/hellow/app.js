//  let arr = [1,2,3,4,5]

//  let calSquare = (val)=>{

//  }

//  let newArr = arr.forEach(function(val,index){
//     console.log(val * val)
//  })

// let arr =  ["adil","hassan","sameer","ali"];

// for(let i = 0 ; i < arr.length; i++){
//    console.log(arr[i])
// }

// arr.forEach((e)=>{
//     console.log(`My name is ${e}`)
// })

// for (const el of arr) {
//     console.log(el)
// }

// let arrMAP  = ["adil","hiussai","hassan","ali"]

// let newName  =  arrMAP.map((val) =>{
//     return  val.push("ahmed")
// })

// let text  = "Todya is a good day "

// let spted =  text.split(" ")
// // console.log(spted)

// let arr  =  ["My","name","is","Adil"]

// let joinarr = arr.join("-")

// console.log(joinarr)

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let opt = arr.reduce((prev, curr) => {
// //   return prev + curr;
//     return prev > curr ? prev : curr
// });

// console.log(opt);

// Array Method
// first map => Create a new array th the results of some  operation
// .the value is callback return are used to for, new array

// for ex  arr.map(callbackfnx(value,index,array))

// let arr = [67,52,39]
// let newarr = arr.map((val)=>{
//     return val * 2
// })

// console.log(newarr )

// Array.Reduce

// performs some operation & reduce the array to a single value .it returns that single value

// let arr = [1,2,3,4]

// const output = arr.reduce((res,val)=>{
//     return res + val
// })

// console.log(output)

//  let arr = [1,2,5,3,4]

//  const output = arr.reduce((prev , curr)=>{
//     return prev > curr ? prev : curr
//  })
// console.log(output)

//  let's practice
// Q 1
// let marks  =  [79,99,87,34,23,93]

// const  newArr =  marks.filter((val)=>{
//     return val > 90
// })

// console.log(newArr)

// Q2

// let n = +prompt("Enter the number :")

// let arr =  []

// for (let i = 1; i<=n; i++) {
//     arr[i - 1] = i;

// }

// // console.log(arr)
// const sum = arr.reduce((prev,curr)=>{
//     return prev + curr
// })

// console.log("Sum = "+sum)

// const factorial = arr.reduce((prev,curr)=>{
//     return prev * curr
// })

// console.log(factorial)

// let arr = [12,3,34,34,23]

// const sum = arr.reduce((val1,val2)=>{
//      return val1 + val2
// })

// console.log(sum)

// ==== dom===

// let body =  document.querySelector("body")
// let btn = document.createElement("button")
// let div = document.createElement("div")
// let h1 =  document.createElement("h1")
// body.append(div)

// div.style.backgroundColor = "pink"
// div.style.color = "white"
// div.append(h1)
// h1.innerText = "0"
// div.style.width = "50%"
// div.style.height = "300px"
// div.style.display = "flex"
// div.style.alignItems = "center"
// div.style.justifyContent = "center"
// div.style.flexDirection = "column"

// div.append(btn)

// body.style.display = "flex"
// body.style.justifyContent = "center"
// body.style.textAlign = "center"

// btn.innerText = "click Me"
// btn.style.padding ="10px 25px"
// btn.style.borderRadius ="10px"

// let socre = 0;

// btn.addEventListener("click", ()=>{
//     socre++

//      h1.innerText = socre

// })
// let h2 = document.querySelector("h2")

// h2.innerText =h2.innerText + "I m adil"

// let divs =  document.querySelectorAll(".box")

// let idx = 1;
// for (const dic of divs) {
//    dic.innerText = `hellow box ${idx}`
//     idx++
// }

// divs[0].innerText = "Hellow Box 1"
// divs[1].innerText = "Hellow Box 2"
// divs[2].innerText = "Hellow Box 3"

// let para = document.querySelector("p")

//  console.log(para.getAttribute("id"))

//  console.log(para.setAttribute("id","adil"))

//  let h1 =  document.querySelector("h1")

//  h1.style.fontSize = "24px"

// let btnCreate = document.createElement("button")

// btnCreate.innerText = "Click ME !"

// let div = document.querySelector("div")
// div.append(btnCreate)

// let newh1 = document.createElement("h1")

// newh1.innerHTML = "<i>Hi I  m Muhammad Adil </i>"
//  document.querySelector("body").prepend(newh1)
// let para = document.querySelector("p")
// para.remove()
// newh1.remove()

// Q1

// let createtbn = document.createElement("button")
// createtbn.innerHTML = "click Me"

// let  body =  document.querySelector("body").prepend(createtbn)

// createtbn.style.backgroundColor = "red"
// createtbn.style.color = "#fff"

// let para =  document.querySelector("p")

// para.classList.add("newClass")

// let btn1 = document.querySelector("#btn1")
// btn1.addEventListener()

// let btn =  document.querySelector("#mode")
// let body =  document.querySelector("body")
// let currMode = "light"

// btn.addEventListener("click" , function(){

//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }
//     else{
//         currMode = "light";
//     body.classList.add("light")
//         body.classList.remove("dark")

//     }
// })

// ( append  )add At the end Node inside div body etc
// ( prepend )add at the start of the node (inside )
// ( before )add before the node (out side )
// ( after )add after the node (out side )

// for examplie
// let btn =  document.createElement("button")
// btn.innerText = "Click Me "

// let el = document.querySelector("body")

// el.append(btn)
// let flage =  0

// btn.addEventListener("click", ()=>{
//      if(flage === 0){
//         el.style.backgroundColor = "black"
//         btn.style.backgroundColor = "pink"
//         btn.style.color = "white"
//         flage = 1
//      }
//      else{
//         el.style.backgroundColor = "White"
//         btn.style.backgroundColor = "blue"
//         btn.style.color = "white"
//         flage = 0
//      }
// })

// object and classes

//==================== prototypes in js ====================

// let obj =  {
//     FullName:"adil",
//     age:17,
//     marks:94.4,
//     print : function(){
//         console.log("Marks = " , this.marks)
//     }
// }

//  const empolyee = {
//     claTex() {
//         console.log("hellow this is object 10 ")
//     }
//  }

//  let empoly1 = {
//     // salay : 50000,
//     claTex(){
//         console.log("hellow your text is 20%")
//     }
//  }
//  let empoly2 = {
//     salay : 50000,
//     claTex(){
//         console.log("hellow your text is 20%")
//     }
//  }
//  empoly1.__proto__ = empolyee
//  empoly2.__proto__ = empolyee

// class toyotaCar {
//     constructor(brand,milage){
//         console.log("This is classes costructor ")
//         this.brand = brand
//         this.milage = milage
//     }

//     start (){
//         console.log("start car")
//         }

//          stop(){
//             console.log("stop")
//         }

// }

// let BMWcar = new toyotaCar(prompt("Enter Your brand name ") , +prompt("Enter your milage "))
// let toyota  = new toyotaCar("Toyota CAR lover ", 12)

// class suzuki{
//     constructor(barnd, milage){
//         console.log("This is constructor class ")
//         this.brandName = barnd
//         this.milageNum = milage
//     }
//         start(){
//             console.log("start car")
//         }
//         stop(){
//             console.log("stop car ")
//         }

// }

// let  Bmw = new suzuki(prompt("Enter Your favirate Car  name "), +prompt("Enter your milage number "))
// console.log(Bmw)
// let  audi = new suzuki(prompt("Enter Your favirate Car  name "), +prompt("Enter your milage number "))
// console.log(audi)

// class person{
//     constructor(name){
//         this.brand =  "hellow All of you "
//         this.name = name
//     }
//     eat(){
//         console.log("eat this food ")
//     }
// }

// // extends  mean k person har kaam kar sakta hy  to engineer bhi to insaan hy wo bhi wohi kaam kar sakta hy jo insaan kar sakta hy

// // is liye extends used hota

// class engineer extends person {
//     constructor(name){
//         super(name)
//     }
//     work(){
//         console.log("Solve Problems ")
//     }

// }

// let obj = new engineer("Adil")

// Q1 // let practice this All Question 1
// let Data = "Secret Information"
// class user {
//     constructor(name , email){
//         this.name = name
//         this.email = email
//       }

//       ViewData (){
//         console.log("Data is  = " ,Data)
//       }

// }

// class admin extends user {

//     constructor(name, email){
//         super(name, email)
//     }

//     editdata(){
//         Data = "Admin change data"
//     }

// }

// let student1 = new user("Adil","Abc@gmail.com")
// let student2 = new user("hassan","by@gmail.com")

// let admin1 = new admin("Ail", "Ali@gmail.com")

// Error handaling

// is se hum error ko handle kar saktan hn

//  let a = 2
//  let b = 10 ;

//  console.log("a+b = ",a+b)
//  console.log("a+b = ",a+b)
//  console.log("a+b = ",a+b)

// // humay aghr  shak ho raha hy k is line ye is code me error a sakta hy to hum try or catch method ka istimal kartn hn
// try{

//     console.log("a+b = ",a+c)
// } catch(err){
//     console.log(err)
// }

//  console.log("a+b = ",a+b)
//  console.log("a+b = ",a+b)
//  console.log("a+b = ",a+b)

// next day practice hy

// let AdminRules  = {
//     officetime : "7am",
//     Leave:"7pm",
//     work:"Perfectly",
//     rule (){
//         console.log("work =",this.work )
//     }
// }

// let empoly1 = {
//     fulName :"adil",
//     age:17,
//     skills:"Javascript",
//     experience:"2 Year",
//     experience(){
//         console.log("Experience = " , this.experience)
//     }
// }

// empoly1.__proto__ = AdminRules

// class Laptop {
//     constructor(brand){
//         this.brand = brand
//         console.log("hellow All Developer's ")
//     }
//     On(){
//         console.log("Laptop on ")
//     }
//     Off(){
//         console.log("Laptop Off ")
//     }
//     cmd(){
//         console.log("Command Hy ")
//     }
// }

// class bike {
//     constructor(bikeBrand){
//         console.log("Bike Ki do tayer hy bhai")
//     }
//     start(){
//         console.log("Bike start hogi ")
//     }
//     stop(){
//         console.log("bike Ruk gai hy ")
//     }
//     petrol(){
//         console.log("Tenki full Hy bahi ")
//     }
//     chabi(){
//         console.log("Chabi Lagi howi hy ")
//     }

// }

// class car extends bike{
//     constructor(carBrand){
//         super(carBrand);
//         console.log("car ki char tayer hy ")
//     }
//     wheel(){
//         console.log("Char tayar hy ")
//     }
// }

// let view  = new Laptop("Dell")
// let newVerSionBike = new bike("Honda")
// let newVerSionCar = new car("Bmw ")

// let userData = "Secret Information Hy bhai "
// class user {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     data(){
//         console.log("data > " ,userData)
//     }

// }

// class Admin extends user {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }
//     editUserData (){
//      userData = "Admin change Data "
//     }

// }

// let usreDta = new user("hassan","hassan@gmail.com")
// let adminDta =  new user("Adil","Adil@gmail.com")

// let a = 20 ;
// let b = 30 ;

// try{
//     if(a === c){
//         a = 20
//     }

// }catch(err){
//     console.log(err)
// }

// let h1 =  document.createElement("h1")

// let btn =  document.createElement("button");

// let body = document.querySelector("body");

// btn.style.backgroundColor ="yellow";
// btn.style.color ="red";
// btn.innerText = "Change Background ";
// btn.style.padding ="30px";
// btn.style.borderRadius = "15px"

// body.append(btn);
// body.prepend(h1)
// body.style.marginTop = "100px"

// h1.innerText = "Hellow World  Click This Button"
// h1.style.color = "black"

// body.style.textAlign = "center"

// let flage =  0 ;

// btn.addEventListener("click" ,function(){
//     if(flage == 0 ){
//     body.style.backgroundColor  = "black";
//     flage  = 1;
//     h1.style.color = "#fff"

// }else{
//     body.style.backgroundColor  = "#fff";
//     h1.style.color = "black"
//     flage  = 0;
// }
// });

// ======== Callbacks, Promises & Async Await ======

// console.log("Hi")
// console.log("Hi frid")
//     setTimeout(() => {
//         console.log("Hellow World set")
//     }, 2000);

// console.log("1")

// function sum(a,b){
//     console.log(a+b)
// }
// function claculator(a,b, sumCallback){
//     sumCallback(a,b)
// }
// claculator(1,3 ,sum)

// const hellow = ()=>{
//  console.log("hellow ")
// }

// setTimeout(hellow,2000);

// function getdata(dataId, nextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (nextData) {
//       nextData();
//     }
//   }, 2000);
// }


// callbakc hell 

// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3, () => {
//       getdata(4);
//     });
//   });
// });

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I m a promies");
//     // resolve("success")
//     reject("network error");
//   });
// };

// let promies = getPromise();
//   promies.then((res) => {
//   console.log("Promies Fullfilled", res);
// });

// promies.catch((err) => {
//   console.log("rejected", err);
// });

// function getdata(dataId,getynextdata){
//   return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//     console.log("data", dataId);
//     resolve("success")
//     if (getynextdata) {
//       getynextdata();
//     }
//   }, 5000);
//   })
// }

// let results=  getdata(123)

// console.log(results)



// function anyncFunc1(){
//  return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log(" data 1 ")
//     resolve("some message success ")
//   },2000)
//   });
// }


// function anyncFunc2(){
//  return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log(" data 2 ")
//     resolve("success")
//   },2000)
//   });
// }

// console.log("Fetching data...... 1")
//  anyncFunc1().then((res)=>{
// console.log("Fetching data...... 2")
// anyncFunc2().then((res)=>{})

// })

 
//  function getdata(dataId,getynextdata){
//   return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//     console.log("data", dataId);
//     resolve("success")
//     if (getynextdata) {
//       getynextdata();
//     }
//   }, 3000);
//   })
// }

// // Promise chain

// getdata(1).then((res)=>{   
//   return getdata(2)
// }).then((res)=>{
//   console.log(res)  
// })
 

// async await
 
// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        console.log("Weather data")
//        resolve(200)
//     }, 2000);
//   })
// }

// async function  getWeatherdata() {
//   await api()
// }



// function getData(dataId){
//  return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log(" data " ,dataId)
//     resolve("success")
//   },2000)
//   });
// }

// async function getAlldata() {
//    await getData(1)
//    await getData(2)
//    await getData(3)
// }

//  function data(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data = ", dataId)
//       resolve("success")
//     },2000)
//   })
//  }

//  iife   function  immmediately incoked function expression

// ( async function alldataGEt() {

//   await data(1)
//   await data(2)
//   await data(3)
//   await data(4)
  
//  }
// )()



// Api Classs ===============






