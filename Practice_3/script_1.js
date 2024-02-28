let last = null
let lastTime = null

const outputSpan = document.querySelector('span')
outputSpan.innerText = 'Please click on the screen twice.'

function handleClick(event) {
    if(last != null){
        let dist = ((event.screenX - last.screenX) ** 2 + (event.screenY - last.screenY) ** 2) ** 0.5
        let timeDiff = event.timeStamp - last.timeStamp
        outputSpan.innerText = "Distance: " + dist + " px\nElapsedTime: " + timeDiff + " ms"
    }else{
        outputSpan.innerText = "Please click again on the screen!"
    }

    last = event
    lastTime = performance.now()
}

document.addEventListener('click', handleClick)