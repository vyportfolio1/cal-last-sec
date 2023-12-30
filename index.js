let calculation = '';
let result = 0;   

function updateCal(digit) {
    calculation += digit;
    document.getElementById('rezultat').value = calculation;
}

function calculateResult() {
    try {
        result = Function(`'use strict'; return (${calculation})`)();
        document.getElementById('rezultat').value = result;
    } catch (error) {
        document.getElementById('rezultat').value = 'Error';
    }
}

function clearInput() {
    calculation = '';
    result = 0;   
    document.getElementById('rezultat').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const onOffButton = document.querySelector('.on-off-button');
    const inputField = document.getElementById('rezultat');

    // Event listener for the toggle switch
    onOffButton.addEventListener('change', function() {
        if (this.querySelector('input').checked) {
            // If the calculator is ON
            inputField.classList.add('isiton');
            inputField.value = ''; // Clear input field
            inputField.removeAttribute('disabled'); // Enable input
        } else {
            // If the calculator is OFF
            inputField.classList.remove('isiton');
            inputField.value = 'Calculator is off'; // Display message
            inputField.setAttribute('disabled', true); // Disable input
        }
    });

    // Prevent typing when input is disabled
    inputField.addEventListener('keydown', function(event) {
        if (inputField.hasAttribute('disabled')) {
            event.preventDefault(); // Prevent typing when disabled
        }
    });
});