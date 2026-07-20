
//API key
const key = "85223393794463e1b9ca9841d03246fc";

//API url
const url = "http://ws.audioscrobbler.com/2.0/";

//my information
const name  = "Thiemi Soubhia";
const studentID = "200645138";

// HTML elements
const searchForm = document.querySelector("#search");
const artistInput = document.querySelector("#artistName");
const results = document.querySelector("#artist");
const myName = document.querySelector("#name");
const myID = document.querySelector("#studentID");

//add my infos in the html
myName.textContent = name;
myID.textContent = studentID;


//Listen for the form submission
searchForm.addEventListener("submit", function (event) {

    //Dont refresh the page
    event.preventDefault();

    //get artist name
    const artistName = artistInput.value.trim();

    //If the input is empty
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
    const requestUrl = `${url}?method=artist.getTopTracks` +
    `&artist=${encodeURIComponent(artistName)}` +
    `&api_key=${key}` + `&format=json` + `&limit=5`;

    try {
    // Send the request
    const response = await fetch(requestUrl);
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

    //get artist listeners
    const totalListeners = Number(tracks[0].listeners).toLocaleString();

    // Create the artist info
    let html = `

        <div class="artistCard">

            <h2>${artistNameFromAPI}</h2>
            <p><strong>Top Track:</strong> ${tracks[0].name}</p>
            <p><strong>Listeners:</strong> ${totalListeners}</p>

        </div>

        <h2>Top 5 Tracks</h2>

        <div class="tracks"> `;

    // Add each track to the page
    tracks.forEach(function (track, index) {

        html += `

            <div class="trackCard">

                <h3> ${index + 1}. ${track.name} </h3>

                <p> ${Number(track.listeners).toLocaleString()} listeners</p>

            </div>

        `;

    });


    // Close the tracks container
    html += "</div>";


    // Add everything to the page
    results.innerHTML = html;


    }
    catch(error){
    console.error(error);
    artist.innerHTML = "<p>Something went wrong. Please try again.</p>";
    }


}
