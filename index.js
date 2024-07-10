/*
String Manipulation Functions
*/

// String Reverse
function reverseString(value){
    let value_array = value.split("").reverse()
    console.log(value_array)
    console.log(arrayStringToString(value_array))  
}


function arrayStringToString(arr){
    let string = ""
    arr.forEach(value =>{
        string += value + " "
    })
    return string
}


//Check Passed
reverseString("Palindrome")



// Count Characters
function countChar(value){
    let index = 0
    for(let i = 0 ; i < value.length ; i++){
        index++
    }
     return index;
}

//Check Passed
console.log(countChar("WagWan How you doing bro?"))



//Capitalize Words
function capitalize(words){
    words_array = words.split(" ")
    words_sentence = ""
    words_array.forEach(value =>{
        words_sentence += value.slice(0 , 1).toUpperCase() + value.slice(1, value.length) + " "
    })
    console.log(words_sentence.trim())
}

// Check Passed
capitalize("i am a boy and i love football")





/*
    ARRAY FUNCTIONS
*/


// Maximum and Minimum Number

function findMaxAndMinNumber(arr){

   let min, max;

   //Using Javascript Sort Method
    arr = arr.sort((a,b) => a - b)
    min = arr[0]
    max = arr[arr.length - 1]
    return [min , max]
}

// Check Passed
let value = findMaxAndMinNumber([23,54,8,34,998,0,654,34,87])
console.log(value[0]) // returns min value
console.log(value[1]) // return max value



//Takes Array, and sums up the  Element and return the sums

function sumElementsInArray(num){
    let sum = 0
    num.forEach(value =>{
        sum += value
    })
    console.log(`Sum of Entries: ${sum}`)
}

// Check Passed
sumElementsInArray([1,2,3,4,5,6,7,8,9])



/*
    Array Filter using ES6 filter method
*/

function filterArray(arr){
    //This function filters out odd numbers from an array of numbers
    let arrd = arr.filter(element => {
        return element % 2 === 0
    })

    return arrd
}


//Check Passed
let arrd = [1,2,3,4,5,6,7,8,9,10,12,13]
console.log(filterArray(arrd))


/*
    Mathematical Function
*/


//Factorial
function factorial(n){
    let num = 1;
    for( let i = n ; i > 0 ; i--){
        num *= i
    }
    return num
}

//Check Passed
console.log(factorial(5))





//Prime Number Check
function checkNumber(n){
    if(n === 0 || n === 1)
        return "Not a Prime Number"

    let arraynum = []
    for( let i = 1 ; i <= n ; i++){
        if(n % i === 0){
            arraynum.push(i)
        }
    }
    if(arraynum.length === 2)
        return "Prime Number"
    else
        return "Not a Prime Number"
}

    //Check Passed
 console.log(checkNumber(18))


 //Fibonacci Sequence
 function fibonacciSequence(n){
    let arrd = [ 0 , 1]
    if(n <= 0){
         arrd.splice(0,2);
        return arrd
    }
    if( n === 1 ){
        arrd.splice(1,1)
        return arrd
    }
        
    if( n === 2)
        return arrd
    for(let i = 2 ; i < n ; i++){
        arrd[i] = arrd[i - 1] + arrd[ i - 2]
    }
    return arrd
 }

 //Check Passed
 console.log(fibonacciSequence(4))

