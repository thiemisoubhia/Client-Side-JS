//Thiemi Soubhia Doi
//200645138

//variables
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;


//select element
let status = document.querySelector("#status");
 
//CRITICAL FAILURE (Highest Priority)
//health < 30 AND enemyNearby is true
if(health < 30 && enemyNearby === true ){
    //"CRITICAL ALERT: Immediate Evacuation Required"
    status.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
}

//LOW RESOURCES WARNING
//ammo < 5 OR shield is false
else if(ammo < 5 || shield === false){
    //"Warning: Low Resources"
    status.textContent = "Warning: Low Resources";
}

//MID MISSION STATUS
//missionProgress is between 1 and 70
else if(missionProgress >= 1 && missionProgress <= 70){
    //"Mission In Progress"
    status.textContent = "Mission In Progress";
}

//HIGH PROGRESS STATUS
//missionProgress > 70 AND enemyNearby is false
else if(missionProgress > 70 && enemyNearby === false){
    //"Approaching Mission Completion"
    status.textContent = "Approaching Mission Completion";
}

//MISSION COMPLETE
//missionProgress === 100
else if(missionProgress === 100){
    //"Mission Complete Successfully"
    status.textContent = "Mission Complete Successfully";
}

//DEFAULT STATE
else{
    //"System Stable"
    status.textContent = "System Stable";
}