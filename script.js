// Create an array called `colors` that contains three colors.
var colors = ['red','green', 'blue'];
// Log the last item in the array to the console.
console.log(colors[2]);
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for (col in colors){
    str = "My favorite color is " + colors[col];
    console.log(str);
}
// Create an `instructor` object that contains three key-value pairs.
var instructor = {firstName: "Ann", lastName: "Marie", age: 25}
// Add a `facial-hair` property to `instructor`.
instructor["facial-hair"] = "mustache";
// Log the value of the `facial-hair` property to the console.
console.log(instructor["facial-hair"]);