(() => {
    const input = [
        {
            "customer_number": "1002442",
            "invoice": {
                "number": 850004111
            }
        },
        {
            "customer_number": "1352432",
            "invoice": {
                "number": 850002489
            }
        },
        {
            "customer_number": "1002442",
            "invoice": {
                "number": 850004391
            }
        },
        {
            "customer_number": "3944835",
            "invoice": {
                "number": 86028494
            }
        },
    ];
    const expectedOutput = [
        {
            "customer_number": "1002442",
            "invoice": {
                "number": 850004391
            }
        },
        {
            "customer_number": "1002442",
            "invoice": {
                "number": 850004111
            }
        },
        {
            "customer_number": "1352432",
            "invoice": {
                "number": 850002489
            }
        },
        {
            "customer_number": "3944835",
            "invoice": {
                "number": 86028494
            }
        },
    ];

    const customSort = json =>
         json.sort((a, b) => {
            if (a.customer_number === b.customer_number) {
                return b.invoice.number - a.invoice.number;
            }
            return a.customer_number.localeCompare(b.customer_number);
        });


    const container = document.getElementById("challengeThree");
    const inputfield = document.createElement("input");
    inputfield.type = "file";
    inputfield.accept = ".json";
    container.appendChild(inputfield);

    //function to handle html input - TODO: Cases for empty input, wrong input, file list etc.
    const parseInput = () => {
        const file = inputfield.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const json = JSON.parse(reader.result);
            console.log(customSort(json));
            alert("You find the sorted List in the console.")
        };
    };

    const button = document.createElement("button");
    button.innerText = "Challenge03 ausführen";
    button.onclick = parseInput;
    container.appendChild(button);

    console.log("Ausgabe Challenge 03:");
    console.log(customSort(input));
    document.write("<br>");
    document.write("You find the output in the console.");
    document.write("<br>");
    document.write("Test: " + (customSort(input).toString() === expectedOutput.toString()));

})();