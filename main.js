let btn = document.querySelector('.btn')
let img = document.querySelector('.img')

btn.addEventListener('click',  () => {
    btn.classList.toggle("close");
    img.classList.toggle("turn");
}) 