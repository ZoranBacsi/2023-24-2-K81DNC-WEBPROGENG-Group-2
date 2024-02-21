const greetButton = document.querySelector("#greeting")
const greetSpan = document.querySelector("#hello")

function handleGreetingButtonClick() {
    greetButton.style.display = "none"
    greetSpan.innerHTML = "Welcome on my Course!"
}

greetButton.addEventListener('click', handleGreetingButtonClick)

const target = Math.floor(Math.random()*100)
console.log(target)
const guessInput = document.querySelector("input#guess")
const guessButton = document.querySelector("button#guess")
const guessOutput = document.querySelector("span#guess")

function handleGuessButtonClick(){
    let guessed = parseInt(guessInput.value)
    if(guessed === target) guessOutput.innerText = "You find it!"
    else if (guessed > target) guessOutput.innerText = "Lower!"
    else guessOutput.innerText = "Greater!"
}

guessButton.addEventListener('click', handleGuessButtonClick)

const urlInput = document.querySelector("#url")
const showButton = document.querySelector("#showimage")
const imageOutput = document.querySelector("img")

function handleShowImageButtonClick() {
    imageOutput.src = urlInput.value
}

showButton.addEventListener("click", handleShowImageButtonClick)

const list = document.querySelectorAll("a[href]")
const output = document.querySelector("ul")

list.forEach(function(link){
    let li = document.createElement('li')
    li.innerText = link.href
    output.appendChild(li)
})

const balanceSpan    = document.querySelector("#balance")
const moneyInput     = document.querySelector("#money")
const withdrawButton = document.querySelector("#withdraw")
let balance = balanceSpan.innerText

function handleMoneyInput(){
    let amount = parseInt(moneyInput.value)
    moneyInput.classList.toggle("error", isNaN(amount) || amount > balance)
}

function handleWithdrawClick(){
    let amount = parseInt(moneyInput.value)
    if (!isNaN(amount)) balance -= amount
    balanceSpan.innerText = balance
}

moneyInput.addEventListener("input", handleMoneyInput)
withdrawButton.addEventListener("click", handleWithdrawClick)
