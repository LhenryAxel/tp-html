// Function to fetch and display player info including position, height, weight, team, birthdate, and nationality
function fetchPlayerInfo(playerName, descriptionElementId) {
    const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(playerName)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.player && data.player.length > 0) {
                const playerInfo = data.player[0]; // Get the first player info
                
                // Prepare player information (with fallback if some data is unavailable)
                const description = playerInfo.strDescriptionEN ? playerInfo.strDescriptionEN : "No description available.";
                const position = playerInfo.strPosition ? `<strong>Position:</strong> ${playerInfo.strPosition}` : "<strong>Position:</strong> Not available.";
                const height = playerInfo.strHeight ? `<strong>Height:</strong> ${playerInfo.strHeight}` : "<strong>Height:</strong> Not available.";
                const weight = playerInfo.strWeight ? `<strong>Weight:</strong> ${playerInfo.strWeight} lbs` : "<strong>Weight:</strong> Not available.";
                const team = playerInfo.strTeam ? `<strong>Team:</strong> ${playerInfo.strTeam}` : "<strong>Team:</strong> Not available.";
                const birthDate = playerInfo.dateBorn ? `<strong>Birthdate:</strong> ${playerInfo.dateBorn}` : "<strong>Birthdate:</strong> Not available.";
                const nationality = playerInfo.strNationality ? `<strong>Nationality:</strong> ${playerInfo.strNationality}` : "<strong>Nationality:</strong> Not available.";

                // Inject the player information into the specified element
                document.getElementById(descriptionElementId).innerHTML = `
                    <p>${description}</p>
                    <br>
                    <p>${position}</p>
                    <p>${height}</p>
                    <p>${weight}</p>
                    <p>${team}</p>
                    <p>${birthDate}</p>
                    <p>${nationality}</p>
                `;
            } else {
                document.getElementById(descriptionElementId).textContent = "Player information not found.";
            }
        })
        .catch(error => {
            console.error("Error fetching player info:", error);
            document.getElementById(descriptionElementId).textContent = "Error fetching player information.";
        });
}


const showMoreLeBron = document.getElementById('showMoreLeBron');
const moreInfoLeBron = document.getElementById('moreInfoLeBron');

// Toggle visibility of additional info and change button text
showMoreLeBron.addEventListener('click', function() {
    if (moreInfoLeBron.style.display === 'none' || moreInfoLeBron.style.display === '') {
        moreInfoLeBron.style.display = 'block'; 
        showMoreLeBron.textContent = 'Show less'; 

        // Fetch detailed player info
        fetchPlayerInfo("LeBron James", "lebronDescription");
    } else {
        moreInfoLeBron.style.display = 'none'; 
        showMoreLeBron.textContent = 'Show more'; 
    }
});

const showMoreCurry = document.getElementById('showMoreCurry');
const moreInfoCurry = document.getElementById('moreInfoCurry');

showMoreCurry.addEventListener('click', function() {
    if (moreInfoCurry.style.display === 'none' || moreInfoCurry.style.display === '') {
        moreInfoCurry.style.display = 'block'; 
        showMoreCurry.textContent = 'Show less'; 

        fetchPlayerInfo("Stephen Curry", "curryDescription");
    } else {
        moreInfoCurry.style.display = 'none'; 
        showMoreCurry.textContent = 'Show more'; 
    }
});

const showMoreDurant = document.getElementById('showMoreDurant');
const moreInfoDurant = document.getElementById('moreInfoDurant');

showMoreDurant.addEventListener('click', function() {
    if (moreInfoDurant.style.display === 'none' || moreInfoDurant.style.display === '') {
        moreInfoDurant.style.display = 'block'; 
        showMoreDurant.textContent = 'Show less'; 

        fetchPlayerInfo("Kevin Durant", "durantDescription");
    } else {
        moreInfoDurant.style.display = 'none'; 
        showMoreDurant.textContent = 'Show more'; 
    }
});

const showMoreIrving = document.getElementById('showMoreIrving');
const moreInfoIrving = document.getElementById('moreInfoIrving');

showMoreIrving.addEventListener('click', function() {
    if (moreInfoIrving.style.display === 'none' || moreInfoIrving.style.display === '') {
        moreInfoIrving.style.display = 'block'; 
        showMoreIrving.textContent = 'Show less'; 

        fetchPlayerInfo("Kyrie Irving", "irvingDescription");
    } else {
        moreInfoIrving.style.display = 'none'; 
        showMoreIrving.textContent = 'Show more'; 
    }
});

const showMoreDoncic = document.getElementById('showMoreDoncic');
const moreInfoDoncic = document.getElementById('moreInfoDoncic');

showMoreDoncic.addEventListener('click', function() {
    if (moreInfoDoncic.style.display === 'none' || moreInfoDoncic.style.display === '') {
        moreInfoDoncic.style.display = 'block'; 
        showMoreDoncic.textContent = 'Show less'; 

        fetchPlayerInfo("Luka Dončić", "doncicDescription");
    } else {
        moreInfoDoncic.style.display = 'none'; 
        showMoreDoncic.textContent = 'Show more'; 
    }
});
