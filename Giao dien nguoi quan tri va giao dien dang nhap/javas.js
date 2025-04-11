const showThem = document.querySelector('.showThem');
const closeThem = document.querySelector('.closeThem');
const openThem = document.querySelector('.openThem')

openThem.addEventListener('click', function() {
    showThem.classList.add("open");
})

closeThem.addEventListener('click', function(){
    showThem.classList.remove("open");
})

showThem.addEventListener('click', function(event){
    event.stopImmediatePropagation()
})

const openSua = document.querySelector('.openSua');
const showSua = document.querySelector('.showSua');
const Sua = document.querySelector('.Sua');
const closeshowSua = document.querySelector('.closeshowSua');
const closeSua = document.querySelector('.closeSua');
const buttonSua = document.querySelector('.buttonSua');

openSua.addEventListener('click', function() {
    Sua.classList.add("open");
})

closeSua.addEventListener('click', function() {
    Sua.classList.remove("open");
})

openThem.addEventListener('click', function() {
    showThem.classList.add("open");
})

buttonSua.addEventListener('click', function() {
    showSua.classList.add("open");
})

closeshowSua.addEventListener('click', function() {
    showSua.classList.remove("open");
})

const openXoa = document.querySelector('.openXoa');
const showXoa = document.querySelector('.Xoa');
const closeXoa = document.querySelector('.closeXoa');

openXoa.addEventListener('click', function() {
    showXoa.classList.add("open");
})

closeXoa.addEventListener('click', function() {
    showXoa.classList.remove("open");
})


