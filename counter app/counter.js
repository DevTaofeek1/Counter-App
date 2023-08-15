let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let errorEl = document.getElementById("error-el")

let count = 0

function increment(){
    count = count + 1
    countEL.textContent = count
    

}
function save(){
    let countStr = count + " -  "
    saveEl.textContent += countStr
    countEL.innerText = 0
    count = 0
    errorEl.textContent = "Something went wrong, Please try again"
}
console.log("Let's count people on the subway")