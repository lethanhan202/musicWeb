const background = document.getElementById("theme");
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const theme4 = document.querySelector('.theme4');
const main = document.querySelector('.main');

const topictheme1 = document.querySelector('.tptheme1');
const topictheme2 = document.querySelector('.tptheme2');

topictheme1.addEventListener('click', function() {
    background.src = "./img/theme12.svg";
    // document.body.style.background = "#fff !important";
    
})

function changeBodyBg(color){
    document.body.style.background = color;
}

topictheme2.addEventListener('click', function() {
    background.src = "./img/theme12.svg";
})


theme1.addEventListener('click', function() {
    background.src = "./img/theme1.jpg";
})

theme2.addEventListener('click', function() {
    background.src = "./img/theme2.jpg";
})

theme3.addEventListener('click', function() {
    background.src = "./img/theme3.jpg";
})

theme4.addEventListener('click', function() {
    background.src = "./img/theme4.jpg";
})

const close = document.getElementById("close");
const themebackground = document.querySelector('.theme-background');

close.addEventListener('click', function() {
    themebackground.classList.remove("open");
})

function changebackgr(){
    themebackground.classList.add("open");
}

//-------------SETTING----------------

const setting = document.querySelector('.settingOpen');
const opensetting = document.querySelector('.opensetting');

opensetting.addEventListener('click', function() {
    setting.classList.toggle('open');
})

setting.addEventListener('click', function(event){
    event.stopImmediatePropagation()
})