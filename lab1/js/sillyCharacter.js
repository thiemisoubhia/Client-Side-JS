/* 
Project: "Silly Character Customizer"
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
let characterName = "";
let age = 0;
let superhero = true;
let specialPowers = ['Invisibility', 'Strength', 'Intelligence', 'Super Speed'];
let favoriteFood = "";


// character object
let character = {
    name: characterName,
    power: specialPowers,
    characterAge: age,
    food: favoriteFood
};

// Function to generate a random character description
function generateDescription(){
    //arrays function scope
    let names = ["Zorg", "Fluffy", "Captain Pickles", "Banana Man", "Sparkle Queen"];
    let foods = ["Fries", "Cake", "Pizza", "Hamburguer", "Salad", "Cookies"];

    //math random
    character.name = names[Math.floor(Math.random() * names.length)];
    character.power = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    character.food = foods[Math.floor(Math.random() * foods.length)];

    //calling to update description infos
    updateDescription();
}



// Functions to update character's age




// Function to update the character's description after changing age
function updateDescription(){
    //concatenation
    let description = character.name + ' is '+ character.age +' years old, loves '+ character.food +'and has the power of ' + character.power + '!';
    document.getElementById("characterDescription").textContent = description;
}

// Add event listeners for buttons using querySelector

