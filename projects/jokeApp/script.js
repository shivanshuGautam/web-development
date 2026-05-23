async function GetNewJoke() {
  const API_URL = "https://v2.jokeapi.dev/joke/Any";

  const Response = await fetch(API_URL);
  const data = await Response.json();

  document.getElementById("setup").innerText = data.joke || data.setup;
  document.getElementById("delivery").innerText = data.delivery || "";
}
