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



    const output = input.sort( (a,b) => {
        if (a.customer_number === b.customer_number) {
            return b.invoice.number - a.invoice.number;
        }
        return parseInt(a.customer_number) - parseInt(b.customer_number);
    });



    console.log("Ausgabe Challenge 03:");
    console.log(output);
    document.write("<h2>Challenge 03 - Sort</h2>");
    document.write("You find the output in the console.");
    document.write("<br>");
    document.write("Test: " + (output.toString() === expectedOutput.toString()));
})();