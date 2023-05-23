const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click',() =>{
    menu.classList.toggle('active')
}) 

btnMenuù.addEventListener('click',()=>{
    menu.classList.toggle('active')
})

const allLinks = document.querySelector
('.item-nav');

allLinks.forEach(item=>
    {
        item.addEventListener('click',()=>{
            menu.classList.toggle('active')
        })
    })