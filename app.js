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

for(let i = 0; i < localStorage.length; i++){
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