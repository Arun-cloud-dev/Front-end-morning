let count = 0

let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText=count
}


let saveEl = document.getElementById("save-el")


function save() {
    let countstr = count + "__"
    saveEl.innerText += countstr
    countEl.innerText = 0 
    count = 0 
}