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

   
    onOffButton.addEventListener('change', function() {
        if (this.querySelector('input').checked) {
          
            inputField.classList.add('isiton');
            inputField.value = '';  
            inputField.removeAttribute('disabled'); 
        } else {
             
            inputField.classList.remove('isiton');
            inputField.value = 'Calculator is off';  
            inputField.setAttribute('disabled', true);  
        }
    });

     
    inputField.addEventListener('keydown', function(event) {
        if (inputField.hasAttribute('disabled')) {
            event.preventDefault();  
        }
    });
});