


async function fetchData() {

    try {

        const achievementName = document.getElementById("achievementName").value.trim();
        const response = await fetch(`https://api.astroworldmc.com/api/v1/achievements/${encodeURIComponent(achievementName)}`);

        if(!response.ok) {
        throw new Error("Could not fetch");
        }

        const data = await response.json();

        /*
        Use of AI to help change text based on input

        Now when data has successfully been fetched, part of that data lists the name of what I want (data.name). I want that in the fetchData script, it takes the const "achievementHeader" and applies it to h2.
        */
        const achievementHeader = data.data.name;
        const achievementRequirement = data.data.howToComplete;
        document.querySelector(".achievement h2").textContent = achievementHeader;
        console.log(data);
        document.querySelector(".achievement p").textContent = achievementRequirement;
        console.log(data);
        }
        catch(error){
        console.error(error);
        alert("Could not find achievement name")
        }
}

function reset() {
    document.querySelector(".achievement h2").textContent = "Achievement Name";
    document.querySelector(".achievement p").textContent = "Achievement Requirement";
}