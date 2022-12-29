//let cars =["saab","volvo","bmw"];
let cars = new Array("saab", "volvo", "bmw");
// console.log(cars);


// console.log(cars[2]);//here counting start from --> 0 , 1, 2, 3, 4,  ...

cars[0] = "opel";//change thr value
console.log(cars);//[ 'opel', 'volvo', 'bmw' ]

let myarray =["100","welcome","10.23","true"];
console.log(myarray);//[ '100', 'welcome', '10.23', 'true' ]

let person1={
    name:"john",
    age: "45",

};
let person2={
    name:"david",
    age:"45"

};
let myarray1=[person1,person2];
console.log(myarray1);//[ { name: 'john', age: '45' }, { name: 'david', age: '45' } ]
 
let fruits = ["banana","orange","apple","mango"];
console.log(fruits.length);// 4 measurement of quantity

//looping elements from array using for loop

for (let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}
// banana
// orange
// apple
// mango

//looping element from array using for/of loop

for(ele of fruits){
    console.log(ele);// banana, orange, apple, mango
}

//recognize an array - typeof
console.log(typeof fruits);//object

console.log(Array.isArray(fruits));

