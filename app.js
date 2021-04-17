const messForm = document.getElementById('messForm')
const messages = document.querySelector('.messages')


messForm.addEventListener('submit', e => {
    e.preventDefault()
    let message = messForm.message.value
    let now = new Date()
    let timestamp = now.getTime()
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center" timestamp="${timestamp}">
                ${message}
                <span class="badge bg-primary rounded-pill"></span>
         </li>
    `
    localStorage.setItem(timestamp, message)


    messages.innerHTML += html

    messForm.reset()


})

const globalDate = new Date()

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let message = localStorage.getItem(key)
    let before = new Date(parseInt(key))
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center" timestamp="${key}">
                ${message}
                <span class="badge bg-primary rounded-pill">${dateFns.distanceInWords(globalDate, before, {addSuffix: true})}</span>
         </li>
    `
    messages.innerHTML += html


}



gsap.from('.messages li', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.01,
    delay: 0.3,
    ease: "back"
})
gsap.from('h1', {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "ease"
})
gsap.from('hr', {
    width: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "linear"
})
gsap.from('#messForm', {
    y: 100,
    duration: 0.5,
    stagger: 1,
    delay: 0.8,
    ease: "back"
})