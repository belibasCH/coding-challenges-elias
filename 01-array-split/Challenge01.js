(() => {
const input = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"];
const expectedOutput = [
    ["elem1", "elem2", "elem3"],
    ["elem4", "elem5", "elem6"],
    ["elem7"]
];

const splitArray = arr => elements => {
    const output = [];
    let counter = 0;
    while (counter < arr.length) {
        output.push(arr.slice(counter, counter+elements));
        counter += elements;
    }
    return output;
};

console.log("Ausgabe Challenge 01:");
console.log(splitArray(input)(3));
document.write("<h2>Challenge 01 Split Array</h2>");
document.write("You find the output in the console.");
document.write("<br>");
document.write("Test:"+ (splitArray(input)(3).toString() === expectedOutput.toString()));
})();