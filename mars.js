const moonP = document.querySelector(".moon-p")
const marsP = document.querySelector(".mars-p")
const europaP = document.querySelector(".europa-p")
const titanP = document.querySelector(".titan-p")

const planetImg = document.querySelector(".planet-img")
const planetName = document.querySelector(".planet-name")


moonP.addEventListener("click", () =>{
    planetImg.src = "starter-code/assets/destination/image-moon.png"
    planetName.textContent = "MOON"
})

marsP.addEventListener("click", () =>{
    planetImg.src = "starter-code/assets/destination/image-mars.png"
    planetName.textContent = "MARS"
})

europaP.addEventListener("click",()=>{
    planetImg.src = "starter-code/assets/destination/image-europa.png"
    planetName.textContent = "EUROPA"
})

titanP.addEventListener("click",()=>{
    planetImg.src = "starter-code/assets/destination/image-titan.png"
    planetName.textContent = "TITAN"
})