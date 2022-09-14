/* ------ header ------ */

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('background',window.scrollY>576);
})

//funcion menu hamburguesa y menu oculto

let btnMenu = document.getElementById('btnMenu');
let divMenu = document.querySelector('.menu');
const menu = document.querySelector('#navegacion');

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('active');
    divMenu.classList.toggle('menu-activo');
});

menu.addEventListener('click', (e)=>{
    let {target} = e;
    let {tagName} = target;
    if (tagName == 'A'){
        divMenu.classList.toggle('menu-activo');
        btnMenu.classList.toggle('active');
    }
});

/* ------- fin header ------ */

/* ------- main ------------ */
const body = document.body;
let llamadaScroll = document.getElementById('llamada-scroll');
let {pathname} = window.location;
let page = pathname.replace('/', '');


// función llamada

const observer = new ResizeObserver((entrada) => {
    let {width} = entrada[0].contentRect;
    if (width < 768) {
        llamadaScroll.classList.add('fa-phone');
        llamadaScroll.classList.remove('fa-arrow-up');
    } else {
        llamadaScroll.classList.remove('fa-phone');
        llamadaScroll.classList.add('fa-arrow-up');
        btnMenu.classList.remove('active');
        divMenu.classList.remove('menu-activo');
    }
});

observer.observe(body);

let llamada = document.querySelector('.llamada');
let icono = document.querySelector('.icono-llamada');

llamada.addEventListener('click', ()=>{
    if (llamadaScroll.className == 'fa-solid fa-phone') {
    window.location.href = 'tel:+541134713549';
    } else if (llamadaScroll.className == 'fa-solid fa-arrow-up') {
        window.scrollTo(0,0)
    }
});

llamada.addEventListener('mouseover', ()=>{
    llamada.classList.add('scale');
    icono.classList.add('scale-interno');
});


llamada.addEventListener('mouseout', ()=>{
    llamada.classList.remove('scale');
    icono.classList.remove('scale-interno');
});

/* ------- footer -----------*/
// funciones Redes Sociales - footer

let Redes = document.querySelector('.Redes-Sociales');

Redes.addEventListener('click', (e) =>{
    let {className} = e.target;
    let clase = className.replace('fa-brands ', '');
    if((clase == 'fa-facebook') && (e.target.tagName == 'I' ))
    {
        window.open('https://www.facebook.com/gavdistribuciones', '_blank');
    } 
    else if ( (clase == 'fa-instagram') && (e.target.tagName == 'I')) 
    {
        window.open('https://www.instagram.com/gavcosmeticaprofesional', '_blank');
    } 
    else if ((clase == 'fa-whatsapp') && (e.target.tagName == 'I'))
    {
        window.open('https://api.whatsapp.com/send?phone=541134713549', '_blank');
    }
});



let link = document.querySelector('.text-link');

link.style.cursor = 'pointer';

link.addEventListener('click', ()=> {
    window.open('https://www.alezetech.com.ar', '_blank');
})