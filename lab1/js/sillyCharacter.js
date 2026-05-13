/* 
Project: 'Silly Character Customizer'
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)

Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = '';
let age = 0;
let isSuperhero = true;
let specialPowers = ['Invisibility', 'Strength', 'Intelligence', 'Super Speed'];
let favoriteFood = '';


// Function to generate a random character description
function generateDescription(){
    //array function scope
   let foods = ['Fries', 'Cake', 'Pizza', 'Hamburguer', 'Salad', 'Cookies'];

    //math random
    specialPowers = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    favoriteFood = foods[Math.floor(Math.random() * foods.length)];

    //calling to update description infos
    updateDescription();
}



// Functions to update character's age
function increaseAge() {
    character.age++;
    updateDescription();
}

// Decrease age
function decreaseAge() {
    if (character.age > 0) {
        character.age--;
    }
    updateDescription();
}



// Function to update the character's description after changing age
function updateDescription(){
    //concatenation
    let description = characterName + ' is '+ age +' years old, loves '+ favoriteFood +'and has the power of ' + specialPowers + '!';
    if(isSuperhero){
        description += "\n" + characterName + " is a super hero!!";
    } else{
        description += "\n" + characterName + " is not a super hero :(";
    }
    document.getElementById('characterDescription').textContent = description;
}

// Add event listeners for buttons using querySelector
document.getElementById('generateButton').addEventListener('click', generateCharacter);
document.getElementById('increaseAgeButton').addEventListener('click', increaseAge);
document.getElementById('decreaseAgeButton').addEventListener('click', decreaseAge);

