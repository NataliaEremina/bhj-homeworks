'use strict';

const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.getElementsByClassName('dropdown__item');




dropdownValue.addEventListener('click', show);

function show() {

    if (dropdownList.className === 'dropdown__list') {
        dropdownList.className = 'dropdown__list dropdown__list_active';
    } else {
        dropdownList.className = 'dropdown__list';
    }

}


for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', change);
    
function change (event) {
        event.preventDefault();
        dropdownValue.textContent = event.target.textContent;
        dropdownList.className = 'dropdown__list';      
    };
}

