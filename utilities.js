


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

        "Now when data has successfully been fetched, part of that data lists the name of what I want (data.name). I want that in the fetchData script, it takes the const "achievementHeader" and applies it to h2."
        */
        const achievementHeader = data.data.name;
        const achievementRequirement = data.data.howToComplete;
        const achievementCard = document.createElement("article");

        /*
        Once the base app setup was ready, I decided to ask AI with help on making the functionality better by stacking multiple achievements.

        "If possible, I would it so when a new achievement is added, it's added as its own .achievements card, so you can have multiple achievements displaying at once."
        */
        achievementCard.className = "achievements";

        const heading = document.createElement("h2");
        heading.textContent = achievementHeader;

        const requirement = document.createElement("p");
        requirement.textContent = achievementRequirement;

        const completedButton = document.createElement("button");
        completedButton.className = "completed";
        completedButton.type = "button";
        completedButton.textContent = "Completed?";
        completedButton.addEventListener("click", () => achievementCard.remove());

        achievementCard.append(heading, requirement, completedButton);
        document.getElementById("achievementList").append(achievementCard);
        console.log(data);
        console.log(data);
        }
        catch(error){
        console.error(error);
        alert("Could not find achievement name")
        }
}