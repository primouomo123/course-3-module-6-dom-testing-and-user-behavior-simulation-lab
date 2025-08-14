// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
function simulateClick(elementID, text) {
    const element = document.getElementById(elementID);
    if (element) element.textContent = text;
}

function handleFormSubmit(formID, targetID) {
    const form = document.getElementById(formID);
    const target = document.getElementById(targetID);
    const input = document.getElementById("user-input");
    const error = document.getElementById("error-message");

    if (form && target && input.value.trim() !== "") {
        target.textContent = input.value
    } else {
        handleError(error);
    }

    if (error.textContent === "") {
        error.classList.add("hidden")
    }
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function addElementToDOM(elementID, text) {
    const element = document. getElementById(elementID);
    if (element) element.textContent = text;

}

function removeElementFromDOM(elementID) {
    const element = document.getElementById(elementID);
    if (element) element.remove();
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
function handleError(error) {
    if (error) {
        error.textContent = "Input cannot be empty"
        error.classList.remove("hidden");
    }


}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
};