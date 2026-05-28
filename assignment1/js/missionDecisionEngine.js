//Thiemi Soubhia Doi
//200645138

//Controls
const agents = ["Spy", "Sniper", "Cyber", "Controller", "Initiator"];
const locations = ["City", "Base", "Arctic", "Enemy", "Disney"];
const weapons = ["Pistol", "Knife", "Rifle", "Drone"];
const objectives = ["Extract Target", "Sabotage System", "Intel Retrieval", "Eliminate Threat"];
const risks = ["Low", "Medium", "High", "Extreme"];

// Get Elements HTML
document.getElementById("agentBtn").addEventListener("click", funAgent);
document.getElementById("locationBtn").addEventListener("click", funAgent);
document.getElementById("weaponBtn").addEventListener("click", funWeapon);
document.getElementById("objectiveBtn").addEventListener("click", funObject);
document.getElementById("riskBtn").addEventListener("click", funRisk);

//other buttons
document.getElementById("launchBtn").addEventListener("click", generateMission);
document.getElementById("resetBtn").addEventListener("click", resetMission);
document.getElementById("randomBtn").addEventListener("click", randomMission);

//variables
let agent = null;
let location = null;
let weapon = null;
let objective = null;
let risk = null;

//function to get the next value from the array
function nextValue(array, current) {
    let index = array.indexOf(current);
    return array[(index + 1) % array.length];
}

//reset
function resetMission() {
    agent = null;
    location = null;
    weapon = null;
    objective = null;
    risk = null;

    //call to change the exhibition informations
    updateStatus();
}

//update to show in the html
function updateStatus() {
    document.getElementById("status").innerHTML =
    `Agent: ${agent} <br>
     Location: ${location} <br>
     Weapon: ${weapon} <br>
     Objective: ${objective} <br>
     Risk: ${risk}`;
}