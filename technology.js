const p1 = document.querySelector(".first")

const p2 = document.querySelector(".second")
const p3 = document.querySelector(".third")

const img = document.querySelector(".ship-img")

p2.addEventListener("click", ()=>{
    img.src = "starter-code/assets/technology/image-space-capsule-portrait.jpg"
    p2.style.backgroundColor = "white"
    p2.style.color = "black"
  p1.style.backgroundColor = "transparent"
    p1.style.color = "white"
    p1.style.border = "1px solid white"
      p3.style.backgroundColor = "transparent"
    p3.style.color = "white"
    p3.style.border = "1px solid white"
  
})

p3.addEventListener("click", ()=>{
    img.src = "starter-code/assets/technology/image-spaceport-portrait.jpg"
        p3.style.backgroundColor = "white"
    p3.style.color = "black"
  p1.style.backgroundColor = "transparent"
    p1.style.color = "white"
    p1.style.border = "1px solid white"
      p2.style.backgroundColor = "transparent"
    p2.style.color = "white"
    p2.style.border = "1px solid white"
})


p1.addEventListener("click", ()=>{
    img.src = "starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
    p1.style.backgroundColor = "white"
        p1.style.color = "black"
  p2.style.backgroundColor = "transparent"
    p2.style.color = "white"
    p2.style.border = "1px solid white"
      p3.style.backgroundColor = "transparent"
    p3.style.color = "white"
    p3.style.border = "1px solid white"
})
