const menu = document.querySelector('.hamburger-menu');
const sidebar_menu = document.querySelector('.hamburger-items');
const close_menu = document.querySelector('.close-menu');
menu.addEventListener('click',function(){
    sidebar_menu.classList.remove('inactive');
    sidebar_menu.classList.add('active');

})

close_menu.addEventListener('click',function(){
    sidebar_menu.classList.remove('active');
    sidebar_menu.classList.add('inactive');
    
})

