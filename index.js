const prevbutton = document.getElementById('prev'); 
const nextbutton = document.getElementById('next'); 
const contentitem = document.querySelectorAll('.item');
const contentdot = document.querySelectorAll('.dot'); 
const contentnumbers = document.querySelector('.numbers'); 
const contentlist = document.querySelector ('.list'); 


let active = 0; 
const total = item.length; 
let time; 

function update(derection) {
    document.querySelector ('.item.active').classList.remove(active) 
    document.querySelector ('.dot.active').classList.remove(active)
}

prevbutton.addEventListener ('click', () => {
    update (-1)
})

nextbutton.addEventListener ('click', () => {
    update (1)
})