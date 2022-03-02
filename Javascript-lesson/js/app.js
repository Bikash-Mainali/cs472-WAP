"use strict"; 

document.write("<h1>Welcome to Javascript console project</h1><br>");
// variables can only be used after declaration
//1.	Define a function max() that takes two numbers as arguments and returns the largest 
//      of them. Use the if-then-else construct available in Javascript.

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
document.write('maximum number is: ' + max(1, 2));

// 2.	Define a function maxOfThree() that takes three numbers as arguments and 
//    returns the largest of them.
function maxOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    }
    return n3;
}
document.write('</br>maximum number is: ' + maxOfThree(123, 12, 3));

// 3.	Write a function isVowel() that takes a character (i.e. a string of length 1) 
//and returns true if it is a vowel, false otherwise.
function isVowel(char) {
    if (char.length == 1) {
        if (char.match(/[a|e|i|o|u]/) != null) {
            return true;
        }
    }
    return false;
}
document.write("<br> is vowel : " + isVowel('e'));


//4.	Define a function sum() and a function multiply() that sums and multiplies 
// (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) 
// should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using 
// Imperative programming approach (i.e. for…loop or while…loop)
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
document.write('<br> the sum is: ' + sum([1, 2, 3, 4]));

function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
document.write('<br> the product is: ' + multiply([1, 2, 3, 4]));

// 5.	Define a function reverse() that computes the reversal of a string. For example, 
//reverse("jag testar") should return the string "ratset gaj".

function reverse(str) {
    let reversedStr = new String();
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
document.write("<br> reversed string is: " + reverse('jag testar'));

// 6.	Write a function findLongestWord() that takes an array of words and returns 
//the length of the longest one.

function findLongestWord(arr) {
    let longestWordLength = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWordLength) {
            longestWordLength = arr[i].length;
        }

    }
    return longestWordLength;

}
document.write("<br> longest length is: " + findLongestWord(["ab", "abc", "abcdasdfase"]));

//7.	Write a function filterLongWords() that takes an array of words and an 
//integer i and returns a new array containing only those words that were longer than i characters.
//for in loop
function filterLongWords(arr, num) {
    let newArray = [];
    for (let x in arr) {
        if (arr[x].length > num)
            newArray.push(arr[x]);
    }
    return newArray;

}
document.write("<br> array containing words longer than i character: " + filterLongWords(["biki", "mainali"], 4));

/*
//functional approach
function filterLongWords(arr, num){
    let newArr = arr.filter(x => x.length>num);
    return newArr;
}
document.write("array containing words longer than i character => functional aproach : " + filterLongWords(["biki", "mainali"], 4));

*/

//8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers
//and calculates and returns the sum of the squares of each number in the input array. E.g. 
//computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your Javascript 
//code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead 
//use functional programming style/approach.

function computeSumOfSquares(arr) {
    let sumOfSquares = 0;
    //imperative approach
    //  for(let item of arr){
    //      sumOfSquares += item * item;
    //  }
    //functional programming approach
    arr.forEach(element => {
        sumOfSquares += element * element;
    });

    return sumOfSquares;
}
document.write("<br>sum of squares: " + computeSumOfSquares([1, 2, 3]));


//9.	Write a function named, printOddNumbersOnly, that takes as input, an array 
//of integral numbers and it finds and prints only the numbers which are odd.
//funtional approach
function printOddNumbersOnly(arr) {

    let newArr = arr.filter(x => x % 2 == 1);
    return newArr;

}
document.write("<br>odd elements array: " + printOddNumbersOnly([1, 2, 3, 7, 4]));

//10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, 
//an array of integral numbers and calculates and returns the sum of the squares of only 
//the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5])
//should be computed as 22 +42 = 20.

function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(x => x % 2 == 0)
        .map(x => x * x)
        .reduce((total, value) => total += value);

}

document.write("<br>computeSumOfSquaresOfEvensOnly: " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

//using anonymous function
function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(x => x % 2 == 0)
        .map(x => x * x)
        .reduce(function (total, value) {
            return total += value;
        })
}
document.write("<br>anonymous function approach....... " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

//11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
//(defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit 
//looping construct; instead use functional programming style/approach. 

function sum(arr) {
    return arr.reduce((sum, value) => sum += value);
}
document.write('<br>the sum is: ' + sum([1, 2, 3, 4]));

function multiply(arr) {
    return arr.reduce((sum, value) => sum *= value);
}
document.write("<br>functional approach to sum and multiply array items: " + sum([1, 2, 3]));
document.write("<br>functional approach to sum and multiply array items: " + multiply([1, 2, 3, 2]));

//12.	Implement Javascript code for a function named, findSecondBiggest, which takes as i
//nput, an array of numbers and finds and returns the second biggest of the numbers. For example, 
//findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 
//12. (Note: Do not use sorting!)

function findSecondBiggest(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr[arr.length - 2];
}
document.write("<br>second largest number is:" + findSecondBiggest([100, 12, 13, 14, 200]));



//functional approach
function findSecondBiggest(arr) {
    let sortedArray = arr.sort((a, b) => b - a);
    return sortedArray[1];
}
document.write("<br>second largest number is:" + findSecondBiggest([100, 12, 13, 14, 21]));


//13.	Write a function named printFibo, that takes as input, a given length, n, and any 
//two starting numbers a and b, and it prints-out the Fibonacci sequence, 
//e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and 
//b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), 
//prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
//printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and 
//printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

function printFibo(n, a, b) {
    let i = 0;
    let fibArray = [];
    fibArray.push([a, b]);
    let c = 0;
    if (n == 1) {
        return 0;
    }
    while (n - 2 != i) {
        c = a + b;
        a = b;
        b = c;
        fibArray.push(c);
        i++;
    }

    return fibArray;
}
document.write("<br> fibonacci series : " + printFibo(11, 0, 1));

//14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:

//a.	Login Form: Add code such that when the Submit button is clicked, the values entered in the input 
//fields are printed to the Console.
//b.	New Product Form: Add code such that when the Submit button is clicked, the values entered in the 
//input fields are displayed in a pop-up window.

//user login
window.onload = function () {
    document.getElementById("login").addEventListener("click", loginUser);
    var loginForm = document.getElementById("login-form");
    function loginUser() {
        let txt = "";
        for (let i = 0; i < loginForm.length - 1; i++) {
            txt += loginForm.elements[i].value + "<br>";
        }
        document.write(txt);
    }
}

//add product
let product = document.getElementById("add-product");
product.onclick = addProduct;
function addProduct() {
    var productForm = document.getElementById("product-form");
    let txt = "";
    for (let i = 0; i < productForm.length - 1; i++) {
        txt += productForm.elements[i].value + "<br/>";
    }
    document.write(txt);
}




//15.	Using JavaScript and HTML and CSS, implement a webpage that displays a 
//working, ticking counter Clock, that counts/displays the current Date and time 
//of the browser host, in the format: 2019-11-4 12:16:01  


let tickingCounterClock = setInterval(function () {
    const currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + "/"
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    document.getElementById("clock").innerHTML = datetime;

}, 1000)

