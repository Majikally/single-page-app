


async function fetchData() {

    try {

        const achievementName = document.getElementById("achievementName");
        const response = await fetch('https://api.astroworldmc.com/api/v1/achievements/${achievementName}');

        if(!response.ok) {
        throw new Error("Could not fetch");
        }

        const data = await response.json();
        console.log(data);
        }
        catch(error){
        console.error(error);
        }
}

fetchData();