"use strict";

// variables
const firstContainer = document.getElementById('first_container');
const secondContainer = document.getElementById('second_container');
const submitBtn = document.getElementById('btn');
const numbers = document.querySelectorAll('.number');
const ratingBtn = document.getElementById('rating');

// submit function
submitBtn.addEventListener('click', () => {
    secondContainer.style.display = "Block";
    firstContainer.style.display = "none";
});

// rating function 
numbers.forEach((rate) => {
    rate.addEventListener('click', () => {
        ratingBtn.innerHTML = rate.innerHTML
    });
});