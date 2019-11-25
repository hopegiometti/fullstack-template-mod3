document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

let categoryBar = document.getElementById("category-bar")
let loveCategory = document.createElement("span")
loveCategory.innerText = "Love"
let lifeCategory = document.createElement("span")
lifeCategory.innerText = "Life"
let homeCategory = document.createElement("div")
homeCategory.innerText = "Home"
categoryBar.append(loveCategory, homeCategory, lifeCategory)

let lizInfo = document.createElement("div")


let header = document.querySelector("h1")

let lizAdviceArea = document.getElementById("liz-advice")
let allAdviceDiv = document.createElement("div")
let adviceP = document.createElement("p")
let adviceImage = document.createElement("img")

lifeCategory.addEventListener("click", (event) => {
    header.innerHTML = "Liz <span>Lemon</span> Says:"
    lizInfo.remove()
    allAdviceDiv.innerHTML = ""
    adviceImage.remove()
    adviceP.remove()
    fetch("http://localhost:3000/quotes")
    .then(r => r.json())
    .then((quotes) => {
        quotes.forEach((quote) => {
            if (quote.category === "life"){
               let adviceDiv = document.createElement("div")
               adviceDiv.innerText = quote.advice
               allAdviceDiv.append(adviceDiv)
               lizAdviceArea.append(allAdviceDiv)

               adviceDiv.addEventListener('click', (event) => {
                    allAdviceDiv.remove()
                    adviceP.innerText = quote.quote
                    adviceImage.src = quote.image
                    lizAdviceArea.append(adviceP, adviceImage)  
               })
            } 
        })
    })
})

loveCategory.addEventListener("click", (event) => {
    lizInfo.remove()
    header.innerHTML = "Liz <span>Lemon</span> Says:"
    allAdviceDiv.innerHTML = ""
    adviceP.remove()
    adviceImage.remove()
    fetch("http://localhost:3000/quotes")
    .then(r => r.json())
    .then((quotes) => {
        quotes.forEach((quote) => {
            if (quote.category === "love"){
               let adviceDiv = document.createElement("div")
               adviceDiv.innerText = quote.advice
               allAdviceDiv.append(adviceDiv)
               lizAdviceArea.append(allAdviceDiv)

               adviceDiv.addEventListener('click', (event) => {
                    allAdviceDiv.remove()
                    adviceP.innerText = quote.quote
                    adviceImage.src = quote.image
                    lizAdviceArea.append(adviceP, adviceImage)  
               })
            } 
        })
    })
})

let jackImage = document.createElement("img")
let lizP = document.createElement("p")
homeCategory.addEventListener("click", (event) => {
    lizInfo.remove()
    jackImage.remove()
    allAdviceDiv.innerHTML = ""
    adviceP.remove()
    adviceImage.remove()
    header.innerHTML = "Good God, <span>Lemon</span>!"
    jackImage.src = "https://media.giphy.com/media/xThuVYsrftrhlVSXte/giphy.gif"
    lizP.innerText = "What is this? Some kind of advice giving website? What makes you think you are capable of giving advice to others? I once watched you eat oysters while you had a cold. You once claimed your husband drowned so you could get out of a gym contract!"
    lizInfo.append(lizP, jackImage)
    lizAdviceArea.append(lizInfo)
})

