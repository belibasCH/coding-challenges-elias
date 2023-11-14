(() => {

const input = [
    ["elem1", "elem2", "elem3"],
    ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"],
    ["elem2", "elem3"]
];

const expectedOutput =[
    ["elem1","elem4", "elem5", "elem6", "elem7"]
];

const findMissingElements = arr => {
    const library = new Set();
    arr.forEach( subArray => {
        subArray.forEach( element => {
            library.add(element);
        });
    });

    const output = new Set();
    arr.forEach( sub => {
        library.forEach( element => {
            if (!sub.includes(element)) {
                output.add(element);
            }
        });
    });
    const result = Array.from(output);
    result.sort();
    return result;
};

console.log("Ausgabe Challenge 02:");
console.log(findMissingElements(input));
document.write("<h2>Challenge 02 - Missing Elements</h2>");
document.write("You find the output in the console.");
document.write("<br>");
document.write("Test:" + (findMissingElements(input).toString() === expectedOutput.toString()));
})();