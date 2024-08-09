function visitInputs(form, f) {
    // Check if the provided form is valid
    if (!form || !form.elements) {
        console.error("Invalid form provided");
        return;
    }

    // Iterate over all elements in the form
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        
        // Apply the callback function to each input element
        if (element.tagName === "INPUT") {
            f(element);
        }
    }
}

// Example usage
const myForm = document.getElementById("myForm");

// Define a callback function that does something with each input element
function exampleCallback(input) {
    console.log("Visiting input: ", input.name);
}

// Visit all input elements in the form and apply the callback function
visitInputs(myForm, exampleCallback);
