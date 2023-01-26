add_picker = document.getElementById('add')
input = document.querySelector('.input-group input[type="text"]')
container = document.querySelector('.container')
names = []
input.addEventListener('input', (e)=>{
    if (e.target.value.length > 3)
        add_picker.classList.add('active')
    else 
        add_picker.classList.remove('active')
})

add_picker.addEventListener('click' , ()=>{
    pick_name = input.value
    if (pick_name == '') {
        return
    }
    names.push(pick_name)
 
    createPicker(input.value)
    input.focus()
    input.value = ''
    add_picker.classList.remove('active')


})



picker = document.querySelector('.picker');
shuffler = document.querySelector('.shuffle');

picker.addEventListener("click" , ()=>{
    pickers = document.querySelectorAll('.pick')
    if (pickers.length < 2) {
        return
    }
    let idx = 0
    picker.disabled = true
    shuffler.disabled = true

    timer = (Math.ceil(Math.random()*100)%8+5)*1000
    speed = (Math.ceil(Math.random()*100))+100

    setTimeout(()=>{
        clearInterval(x)
        picker.disabled = false
        shuffler.disabled = false


    },timer)
    x = setInterval(() => {
        removeActive(pickers)
        pickers[idx%pickers.length].classList.add('active')
        idx++
        
    }, speed);
})

shuffler.addEventListener('click',()=>{
    picker.disabled = true
    shuffler.disabled = true
    removepickers()
    names = shuffle(names)
    names.forEach(n => {
        createPicker(n);
    })
    picker.disabled = false
    shuffler.disabled = false

})



function createPicker(name){
    new_pick = document.createElement('div')
    new_pick.classList.add('pick')
    new_pick.innerText = name
    container.appendChild(new_pick)
}
function removepickers() {
    pickers = document.querySelectorAll('.pick').forEach(el =>el.remove())
    
}
function removeActive(els) {
    els.forEach(el => {
        el.classList.remove('active')
    });
}

function shuffle(els) {
    return els.sort((a, b) => 0.5 - Math.random())
}