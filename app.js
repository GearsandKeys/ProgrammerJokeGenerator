const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const jokeDelivery = document.getElementById("jokeDelivery");

jokeBtn.addEventListener("click", generateJokes);

generateJokes()

async function generateJokes(){
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,sexist,explicit"
    )
    const data = await res.json();
    console.log(data);
    let joke = ""
    let delivery = ""
    console.log(data.delivery)

    if (data.joke == undefined){
        joke = `${data.setup}`
        delivery = `${data.delivery}`
    } else {
        joke = data.joke
    }
   jokeText.innerHTML = joke
   jokeDelivery.innerHTML = delivery

}