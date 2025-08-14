// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
function simulateClick(elementID, text) {
    const element = document.getElementById(elementID);
    if (element) {
        element.textContent = text;
        element.click();
    }
}

function handleFormSubmit(formID, targetID) {
    const form = document.getElementById(formID);
    const target = document.getElementById(targetID);
    const input = document.getElementById("user-input");
    const error = document.getElementById("error-message");

    if (form && target && input.value.trim() !== "") {
        target.textContent = input.value
        hideError(error);
    } else {
        showError(error, "Input cannot be empty");
    }
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function addElementToDOM(elementID, text) {
    const element = document. getElementById(elementID);
    if (element) {
        element.textContent = text
    } else {
        const newElement = createElement("div", {id: elementID}, text);
        document.body.append(newElement);
    }

}

function removeElementFromDOM(elementID) {
    const element = document.getElementById(elementID);
    if (element) element.remove();
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
function showError(error, message) {
    if (error) {
        error.textContent = message;
        error.classList.remove("hidden");
    }
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function createElement (tag, attributes = {}, text = "") {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }

    element.textContent = text;
    return element;
}

function hideError(error) {
    if (error) {
        error.textContent = "";
        error.classList.add("hidden");
    }
}


module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    showError,
    hideError,
    createElement
};