
const card=document.querySelector('.card');
const h1=document.querySelector('.card h1');

h1.addEventListener('mouseover',()=>{
    card.style.boxShadow="10px 10px var(--black)";
})

h1.addEventListener('mouseout',()=>{
    card.style.boxShadow="5px 5px var(--black)";
})
