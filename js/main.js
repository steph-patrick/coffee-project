"use strict";

function renderCoffee(coffee) {
    var html = '<div class="col-6">';
    html += '<p class="d-none">' + coffee.id + '</p>';
    html += '<h1 class="mb-0">' + coffee.name + '</h1>';
    html += '<p class="text-justify text-secondary">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    html +='<div class="row">'
    for(var i = coffees.length - 1;i>=0; i--) {
        html += renderCoffee(coffees[i]);
    }
    html +='</div>'
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];


    coffees.forEach(function(coffee) {
        if (selectedRoast === coffee.roast) {
            filteredCoffees.push(coffee);
        }

    });

    tbody.innerHTML = renderCoffees(filteredCoffees);

    if(selectedRoast === "all"){
        tbody.innerHTML = renderCoffees(coffees);
    }
}

function inputCoffees(){
    var selectedName = nameSelection.value;
    var twiceFilteredCoffees = [];
    coffees.forEach(function(coffee) {

        if (coffee.name.toLowerCase().indexOf(selectedName.toLowerCase()) > -1 &&
        coffee.name.toLowerCase().charAt(0) === selectedName.toLowerCase().charAt(0) &&
            (roastSelection.value === coffee.roast || roastSelection.value == "all")) {

            twiceFilteredCoffees.push(coffee);
        }
        else {
        }

    });
    tbody.innerHTML = renderCoffees(twiceFilteredCoffees);
}
//function to input user coffee into coffee array

function userCoffees(){
    var nameSelect = nameInput.value;
    var roastSelect = roastInput.value;
    var coffeeObject = {'id': coffees.length, 'name': nameSelect, 'roast': roastSelect};
    coffees.push(coffeeObject);


    tbody.innerHTML = renderCoffees(coffees);

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
// var submitInputButton = document.querySelector('#submit-input');

var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#covfefe-selection');
var roastInput = document.querySelector('#roast-input');
var nameInput = document.querySelector('#name-input');

tbody.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener('change', updateCoffees);


var userSubmitBtn = document.querySelector('#user-submit');
userSubmitBtn.addEventListener('click', userCoffees);