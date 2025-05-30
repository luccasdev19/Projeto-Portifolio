const prevbutton = document.getElementById('prev'); 
const nextbutton = document.getElementById('next'); 
const contentitem = document.querySelectorAll('.item');
const contentdot = document.querySelectorAll('.dot'); 
const contentnumbers = document.querySelector('.numbers'); 

let active = 0; 
const total = contentitem.length;
 let timer;

function update(direction) {
    // Remove classe active atual
    contentitem[active].classList.remove('active'); 
    contentdot[active].classList.remove('active');

    // Atualiza índice com base na direção
    if (direction > 0) {
        active++;
        if (active === total) active = 0;
    } else {
        active--;
        if (active < 0) active = total - 1;
    }

    // Adiciona classe active ao novo item
    contentitem[active].classList.add('active');
    contentdot[active].classList.add('active');
    contentnumbers.textContent = `0${active + 1}`;
}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 4000);

prevbutton.addEventListener('click', () => {
    update(-1);
});

nextbutton.addEventListener('click', () => {
    update(1);
});

