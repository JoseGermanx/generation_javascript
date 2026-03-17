
console.log("Apis")

async function getRandomUser(){

    const res = await fetch("https://randomuser.me/api"); // envia una request a la api
    const data = await res.json()
    console.log(data.results)
};

// getRandomUser();



