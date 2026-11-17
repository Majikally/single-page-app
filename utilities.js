


async function fetchData() {

    try {
  const response = await fetch('https://api.astroworldmc.com/api/v1/items/bow');

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