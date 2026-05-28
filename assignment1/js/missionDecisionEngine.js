//Thiemi Soubhia Doi
//200645138

//Controls
const agents = ["Spy", "Sniper", "Cyber", "Controller", "Initiator"];
const locations = ["City", "Base", "Arctic", "Enemy","Disney"];
const weapons = ["Pistol", "Knife", "Rifle", "Drone"];
const objectives = ["Extract Target", "Sabotage System", "Intel Retrieval", "Eliminate Threat"];
const risks = ["Low", "Medium", "High", "Extreme"];

// Get Elements HTML
document.getElementById("agentBtn").addEventListener("click", cycleAgent);
document.getElementById("locationBtn").addEventListener("click", cycleLocation);
document.getElementById("weaponBtn").addEventListener("click", cycleWeapon);
document.getElementById("objectiveBtn").addEventListener("click", cycleObjective);
document.getElementById("riskBtn").addEventListener("click", cycleRisk);
document.getElementById("launchBtn").addEventListener("click", generateMission);
document.getElementById("resetBtn").addEventListener("click", resetMission);
document.getElementById("randomBtn").addEventListener("click", randomMission);

