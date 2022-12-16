console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Japneet Singh
200513084
*/
const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array
myImmutableArray.push("Japneet","Henry","Mary");


// Step 4: Remove the first array item from the array
myImmutableArray.shift();

// Step 5 Remove the second array item from the array
myImmutableArray.slice(1,1);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
const first = myArray.find(function (arrayItem) {
    if (arrayItem.charAt(0)=="J") {
        return myImmutableArray.splice(,1);
});
console.log(first);

// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const image = document.querySelector('img');
image.addEventListener("click", function () {
    console.log("Image was clicked");
    alert("Call me now at 555-555-55555");
});