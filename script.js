const generateButton = document.querySelector(".circle");
const adviceText = document.querySelector("p");
const adviceId = document.querySelector("span");

// console.log(fetch("https://api.adviceslip.com"))
// fetch("https://api.adviceslip.com/advice/advice")
//     .then(res => res.json())
//     .then(data => console.log(data))

generateButton.addEventListener('click', fetchRandomData);
async function fetchRandomData() {
        const response = await fetch("https://api.adviceslip.com/advice")
        let data = await response.json()
        console.log(data.slip)
        adviceText.innerHTML = data.slip.advice
        adviceId.innerHTML = data.slip.id
    }
fetchRandomData();