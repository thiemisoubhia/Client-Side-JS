
//API key
const key = "85223393794463e1b9ca9841d03246fc";

//API url
const url = "http://ws.audioscrobbler.com/2.0/";

// My information
const name  = "Thiemi Soubhia";
const studentID = "200645138";

// HTML elements
const searchForm = document.querySelector("#search");
const artistInput = document.querySelector("#artistName");
const artist = document.querySelector("#artist");
const myName = document.querySelector("#name");
const myID = document.querySelector("#studentID");

// Add my infos in the html
myName.textContent = name;
myID.textContent = studentID;


// Listen for the form submission
searchForm.addEventListener("submit", function (event) {

    // Dont refresh the page
    event.preventDefault();

    // Get artist name
    const artistName = artistInput.value.trim();

    // If the input is empty
    if (artistName === "") {
        alert("Enter the artist name...");
        return;
    }
    else{
    }


});
