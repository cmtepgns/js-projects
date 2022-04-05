const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // Get a random number between 0 - 3
    const randomNumber = getRandonNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandonNumber(){
    return Math.floor(Math.random() * colors.length)
}