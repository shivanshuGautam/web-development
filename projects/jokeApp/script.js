// async function GetNewJoke() {
//   const API_URL = "https://official-joke-api.appspot.com/jokes/random";

//   const Response = await fetch(API_URL);
//   const data = await Response.json();

//   document.getElementById("setup").innerText = data.joke || data.setup;
//   document.getElementById("delivery").innerText = data.delivery || "";
// }


async function GetNewJoke()
    {
        const API_URL = "https://v2.jokeapi.dev/joke/Any"
        const response = await fetch(API_URL);

        console.log(response);

        const data = await response.json();

        console.log(data);

        document.getElementById("setup").innerText = data.joke || data.setup;
        document.getElementById("delivery").innerText = data.delivery || "";
    }