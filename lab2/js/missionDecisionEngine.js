//variables
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;
 
//CRITICAL FAILURE (Highest Priority)
//health < 30 AND enemyNearby is true
if(health < 30 && enemyNearby === true ){
    //"CRITICAL ALERT: Immediate Evacuation Required"
}

//LOW RESOURCES WARNING
//ammo < 5 OR shield is false
if(ammo < 5 || shield === false){
    //"Warning: Low Resources"
}

//MID MISSION STATUS
//missionProgress is between 1 and 70
if(missionProgress > 1 || missionProgress < 70){
    //"Mission In Progress"
}

//HIGH PROGRESS STATUS
//missionProgress > 70 AND enemyNearby is false
if(missionProgress > 70 && enemyNearby === false){
    //"Approaching Mission Completion"
}

//MISSION COMPLETE
//missionProgress === 100
if(missionProgress === 100){
    //"Mission Complete Successfully"
}