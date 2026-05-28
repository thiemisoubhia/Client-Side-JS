//Thiemi Soubhia Doi
//200645138

//Controls
const agents = ["Spy", "Sniper", "Cyber", "Controller", "Initiator"];
const locations = ["City", "Base", "Arctic", "Enemy","Disney"];
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

//function to get the next value from the array
function nextValue(array, current) {
    let index = array.indexOf(current);
    return array[(index + 1) % array.length];
}