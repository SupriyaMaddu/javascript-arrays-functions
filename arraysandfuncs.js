let myArray = [1,5,3,"string", 20.6,4];

//Accessing elements with indexing 

let firstItem = myArray[0];
console.log(firstItem);

// length or size of array 

let arrayLength = myArray.length;
console.log(arrayLength);

var lastItem = myArray[arrayLength - 1];
console.log(lastItem);

//updating the array item 

myArray[1] = "updatedItem"
console.log(myArray)

//array methods 

myArray.push(true);
console.log(myArray);

let removedItem = myArray.pop();
console.log(removedItem);

let isPresent = myArray.includes(1);

var addingItem = myArray.unshift(95.8,4)
console.log(myArray);

var removingFirstItem = myArray.shift();
console.log(removingFirstItem);

let itemIndex = myArray.indexOf(1);
console.log(itemIndex)

let itemLastIndex = myArray.lastIndexOf(4);
console.log(itemLastIndex);

let findingItemIndex = myArray.findIndex(function (eachItem) {
    if (eachItem === 20.6) {
        return true;
    } else {
        return false;
    }
});
console.log(findingItemIndex);

let partOfArray = myArray.slice(2,5);
console.log(partOfArray);

let array2 = ["node",564,"react",false]
let concatentaingArrays = myArray.concat(array2);
console.log(concatentaingArrays);

let deletedItem = myArray.splice(2,2)
console.log(deletedItem);

let addingItems = myArray.splice(1,0,"Hi",85);
console.log(myArray);

let updatingItems = myArray.splice(4,1,"xyz");
console.log(myArray);

let sortedArray = myArray.sort();
console.log(sortedArray);

let joiningArray = myArray.join(",");
console.log(joiningArray);



// Function Declaration 

function displayMessage() {
    console.log("Hello");
}

displayMessage();

// Function Expression 

let showMsg = function() {
    console.log("Welcome")
};

showMsg();

// callback functions 

//passing a function as an argument 

function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
  }
  
  displayGreeting(function() {
    console.log("xyz");
  });

// passing function name as an argument 

function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
  }
  function displayRahul() {
    console.log("Rahul");
  }
  displayGreeting(displayRahul);

//passing function expression as an argument 

function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning!");
  }
  let displayRam = function() {
    console.log("Ram");
  };
  displayGreeting(displayRam);

// arrow function 

let myFunction = (a, b) => a + b;
let result = myFunction(10,23);
console.log(result);


