let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.toggle');


menuToggle.addEventListener('click', () => {

menuContent.classList.toggle('on', show);
show = !show;

})