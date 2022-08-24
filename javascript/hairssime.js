/* Redireccionamiento y efecto instagram Hairssime */

const contenedor = document.querySelector('.instagram-hairssime');
const divInstagram = document.querySelector('.instagram-hairssime-contenedor');



contenedor.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/hairssimezonanorte');
});

contenedor.addEventListener('mouseover', ()=>{
    contenedor.classList.add('scale');
    divInstagram.classList.add('scale-interno');
});
contenedor.addEventListener('mouseout', ()=>{
    contenedor.classList.remove('scale');
    divInstagram.classList.remove('scale-interno');
});