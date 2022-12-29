          //******Array******
// Array is a collaction of similar data colled Array

let fruits = ["banana","orange","apple","mango"];
//toString() & join();
console.log(fruits.toString());//banana,orange,apple,mango

console.log(fruits.join("*")); //banana*orange*apple*mango

//pop()
fruits = ["banana","orange","apple","mango"];
console.log(fruits.pop());//mango //remove last element of string (mango);
console.log(fruits);//[ 'banana', 'orange', 'apple' ]

//shift()
fruits = ["banana","orange","apple","mango"];
console.log(fruits.shift());//banana  --->its remove the first element
console.log(fruits);//[ 'orange', 'apple', 'mango' ]

//unshift()
fruits = ["banana","orange","apple","mango"];
console.log(fruits.unshift("lemon"));// add new element on beginging & length of array
console.log(fruits); //[ 'lemon', 'banana', 'orange', 'apple', 'mango' ]

//push()
fruits = ["banana","orange","apple","mango"];//show length of array
console.log(fruits.push("lichi")); // "5"-->add new element in array& last position   
console.log(fruits);//[ 'banana', 'orange', 'apple', 'mango', 'lichi' ]


// Deleting element of array 
fruits = ["banana","orange","apple","mango"];
delete fruits[1];//[ 'banana', <1 empty item>, 'apple', 'mango' ]
console.log(fruits);// array start from 0 1 2 3 4

//concat()--> joining || marging 2 or more array
let arr1=[10,20];
let arr2=["A","B","C",];
console.log(arr1.concat(arr2));//[ 10, 20, 'A', 'B', 'C' ]

let arr3=["x","y","z"];
console.log(arr1.concat(arr2,arr3));//[
//     10,  20,  'A', 'B',
//     'C', 'x', 'y', 'z'
//   ]

//slice();
// -->use slice method print rest of the element print;
fruits = ["banana","orange","apple","mango"];
console.log(fruits.slice(1));//[ 'orange', 'apple', 'mango' ]
console.log(fruits.slice(2));//[ 'apple', 'mango' ]

//sort//set alphabetical order  || Ordering array
fruits = ["banana","orange","apple","mango"];
console.log(fruits.sort());//[ 'apple', 'banana', 'mango', 'orange' ]

let nums=[100,200,300,600,30,50];//sequence 1 2 3 4 4 ....
console.log(nums.sort());//[ 100, 200, 30, 300, 50, 600 ]

//reverse() 
fruits = ["banana","orange","apple","mango"];
console.log("Original array element:"+fruits);//Original array element:banana,orange,apple,mango
fruits.reverse();
console.log("After reversing array element are:"+fruits);//After reversing array element are:mango,apple,orange,banana


//length, indexOf , lastIndexOf , ......

let myLovelyString="Harry is a good boy";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("a")); // 1 indexOf is a method that indicate position of word
console.log(myLovelyString.lastIndexOf("a"));//9 lastIndexOf indicate that last position of the word

//replace
let myString="roki is good girl";
d=myString.replace("girl","boy");
console.log(d,myString);//roki is good boy roki is good girl



//get date
let myDate=new Date();
console.log(myDate.getTime());//its show time in view in sec,
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());


// console.clear(); //this method use to clear the console





