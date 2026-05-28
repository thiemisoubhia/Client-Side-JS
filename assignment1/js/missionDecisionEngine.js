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
document.getElementById("locationBtn").addEventListener("click", funLocation);
document.getElementById("weaponBtn").addEventListener("click", funWeapon);
document.getElementById("objectiveBtn").addEventListener("click", funObjective);
document.getElementById("riskBtn").addEventListener("click", funRisk);

//other buttons
document.getElementById("launchBtn").addEventListener("click", generateMission);
document.getElementById("resetBtn").addEventListener("click", resetMission);
document.getElementById("randomBtn").addEventListener("click", randomMission);

//variables
let agent = null;
let loc= null;
let weapon = null;
let objective = null;
let risk = null;

// calling
updateStatus();

//function to get the next value from the array
function nextValue(array, current) {
    let index = array.indexOf(current);
    return array[(index + 1) % array.length];
}

//reset
function resetMission() {
    agent = null;
    loc = null;
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
     Location: ${loc} <br>
     Weapon: ${weapon} <br>
     Objective: ${objective} <br>
     Risk: ${risk}`;
}

//function to each information
function funAgent() {
    agent = nextValue(agents, agent);
    updateStatus();
}

function funLocation() {
    loc = nextValue(locations, loc);
    updateStatus();
}

function funWeapon() {
    weapon = nextValue(weapons, weapon);
    updateStatus();
}

function funObjective() {
    objective = nextValue(objectives, objective);
    updateStatus();
}

function funRisk() {
    risk = nextValue(risks, risk);
    updateStatus();
}

function generateMission() {
    if (!agent || !loc || !weapon || !objective || !risk) {
        document.getElementById("status").textContent =
            "WARNING: Complete all mission parameters before launch!";
        return;
    }

    document.getElementById("status").innerHTML =
        `MISSION BRIEFING:<br>
        Agent ${agent} assigned to ${loc}.<br>
        Objective: ${objective}.<br>
        Loadout: ${weapon}.<br>
        Risk Level: ${risk}.`;
}