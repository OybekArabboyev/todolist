const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0

btn.addEventListener("click", (e) => {
    // result.innerHTML += `<li>${input.value}</li>`
    if(input.value === '') return
    createDeleteElement(input.value)
    input.value = ''
})
    /* todo'ni yaratish */
function createDeleteElement(value) {
    i++
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    li.appendChild(btn)

    /* todo'ni o`chirish */
    btn.addEventListener("click", (e)=>{
        result.removeChild(li)
        i--
    })
    li.addEventListener("click", (e)=>{
        li.classList.toggle('li-active')
        btn.classList.toggle('btn-active')
    })

    

    result.appendChild(li)
}
console.log(localStorage);
