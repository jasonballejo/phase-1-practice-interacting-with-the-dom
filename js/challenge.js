document.addEventListener('DOMContentLoaded', () => {

// First we increment from the reload
const counter = document.getElementById("counter")
let changes = counter.innerText
let intervalId
console.log(changes)
// function autoStartTimer(){
//     intervalId = setInterval(() => {
//         changes++
//         counter.innerHTML = changes
//     }, 1000)
// }
// autoStartTimer()
const autoCount = () => {
    changes = counter.innerText++
}

let id
const startTimer = () => (id = setInterval(autoCount, 1000))
startTimer()
const pauseTimer = () => clearInterval(id)

// Increment using the click addEventListener
const decrementCount = document.getElementById("minus")
const incrementCount = document.getElementById("plus")

const handleDecrement = () => {
    changes--
    return counter.innerHTML = changes
}

const handleIncrement = () => {
    changes++
    return counter.innerHTML = changes
}

decrementCount.addEventListener('click', handleDecrement)
incrementCount.addEventListener('click', handleIncrement)

// Like the heart button
const heart = document.getElementById("heart")

document.addEventListener('DOMContentLoaded', () => {
    heart.addEventListener('click', (e) => {
        handleToDo()
    })
})

function handleToDo(){
    let found = document.getElementById(changes)
    if(found){
        found.dataset.like_num++
        found.textContent = `${changes} has been liked ${found.dataset.like_num} times`
        console.log('found', found)
    } 
    else {
        let bullet = document.createElement('li')
        bullet.id = changes
        bullet.dataset.like_num = 1
        bullet.textContent = `${changes} has been liked 1 time`
        console.log('bullet', bullet)
        document.querySelector('.likes').appendChild(bullet)
    }
}

// Pause button = 1.pause the counter/ 2.disable all buttons except the pause button/ 3.switch the label on the button from "pause" to "resume"
const pauseBtn = document.getElementById("pause")

pauseBtn.addEventListener('click', disableEnable)

function disableEnable (){
    // let toPause = pauseBtn.textContent
    if(pauseBtn.innerText === 'pause') {
        pauseTimer() 
        decrementCount.disabled = true
        incrementCount.disabled = true
        heart.disabled = true
        submit.disabled = true
        pauseBtn.innerText = "resume"
        }
        else {
            startTimer()
            decrementCount.disabled = false
            incrementCount.disabled = false
            heart.disabled = false
            submit.disabled = false
            pauseBtn.innerText = "pause"
        }
    }

// Add a comment
const submit = document.getElementById('submit')
const formId = document.querySelector('#comment-input')
const commentList = document.querySelector('#list')

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        comment(formId.value)
        form.reset()
    })
})

function comment(value){
    let comments = document.createElement('p')
    comments.textContent = value
    commentList.appendChild(comments)
}
})