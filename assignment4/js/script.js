
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
        searchArtist(artistName);
    }


});


// Get music data
async function searchArtist(artistName) {

    // API request 
    const url = `${url}?method=artist.getTopTracks` +
    `&artist=${encodeURIComponent(artistName)}` +
    `&api_key=${key}` + `&format=json` + `&limit=5`;

    try {
    // Send the request
    const response = await fetch(url);
 // Convert to JSON
    const data = await response.json();

    // Get the tracks from the response
    const tracks = data.toptracks?.track;

    // Check if the artist was found
    if (!tracks || tracks.length === 0) {

        results.innerHTML = "<p>Artist not found... Try another...</p>";

        return;
    }

    // Get the artist name
    const artistNameFromAPI = data.toptracks["@attr"].artist;

    // Get the artist image from the first track
    const artistImage = tracks[0].image.find(image => image.size === "extralarge")?.["#text"];




    }
    catch(error){
    console.error(error);
    artist.innerHTML = "<p>Something went wrong. Please try again.</p>";
    }


}
