var items = $('.block ul li');
        items.sort(function(a, b){
            return +$(a).data('time') - +$(b).data('time');
});

items.appendTo('ul');
// Search
document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.block ul li');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
};
//theme 
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
};
// scroll
window.onload = function() {
    var scrolled;
    var timer;
  
    document.getElementById("scroll").onclick = function() {
      scrolled = window.pageYOffset;
      scrollToTop();
    };
    function scrollToTop() {
      if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 50;
        timer = setTimeout(scrollToTop, 10);
      } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
      }
    }
  };

// document.querySelectorAll('.line').forEach((element)=>{
//     element.onclick = attFunc;
// });
// function attFunc(){
//     let target = this.getAttribute('data-time');
//     let setA = prompt('Нове значення: ');
//     console.log('Старе значення: '+ target);
//     target = this.removeAttribute('data-time');
//     target = this.setAttribute('data-time',setA);
//     console.log('Нове значення: '+ setA);
//     localStorage.setItem('number',setA.toString());
//     if(localStorage.getItem('number')!==null){
//         let num = localStorage.getItem('number');
//         document.querySelector('.line').setAttribute('data-time',num);
//     }
// };
// 
document.querySelectorAll('.order').forEach((element)=>{
    element.onclick = orderFunction;
});
let block = document.querySelector('.block');
let block2 = document.querySelector('.block2');
function orderFunction(){
    let first = document.querySelector('.order[value="first"]');
    let second = document.querySelector('.order[value="second"]');
    // console.log(this.value);
    if(this.value == "first"){
        trans();
        block.style.display = 'flex';
        block2.style.display = 'none';
        return true;
    }
    if(this.value == "second"){
        trans();
        block2.style.display = 'flex';
        block.style.display = 'none';
        return true;
    }
}
document.querySelectorAll('.span_name').forEach((span_name)=>{
    span_name.onclick = spanFunc;
});
let box = document.querySelector('.box');
function spanFunc(){
    box.style.display = 'none';
    block.style.display = 'none';
    block2.style.display = 'none';
}
function cross(){
    let close = document.querySelector('.close');
    close.addEventListener('click',()=>{
        statistics.style.display = 'none';
        box.style.display = 'flex';
        block.style.display = 'flex';
    });
}
let kr7 = document.querySelector('.kr7');
let statistics = document.querySelector('.statistics');
kr7.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = kr7bg;
   cross();
});
let vladay = document.querySelector('.vladay');
vladay.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = vladaybg;
    cross();
});
let temchik = document.querySelector('.temchik');
temchik.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = temchikbg;
    cross();
});
let arsen = document.querySelector('.arsen');
arsen.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = arsenbg
    cross();
});
let shark = document.querySelector('.shark');
shark.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = sharkbg;
    cross();
});
let anwonder = document.querySelector('.anwonder');
anwonder.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = anwonderbg;
    cross();
});
let sonic = document.querySelector('.sonic');
sonic.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = sonicbg;
    cross();
});
let monster = document.querySelector('.monster');
monster.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = monsterbg;
    cross();
});
let crowboy = document.querySelector('.crowboy');
crowboy.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = crowboybg;
    cross();
});
let strup = document.querySelector('.strup');
strup.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = strupbg;
    cross();
});
let zmiiir = document.querySelector('.zmiiir');
zmiiir.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = zmiiirbg;
    cross();
});
let bro = document.querySelector('.bro');
bro.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = brobg;
    cross();
});
let will = document.querySelector('.will');
will.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = willbg;
    cross();
});
let dark = document.querySelector('.dark');
dark.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = darkbg;
    cross();
});
let yinyang = document.querySelector('.yinyang');
yinyang.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = yinyangbg;
    cross();
});
let ninja = document.querySelector('.ninja');
ninja.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = ninjabg;
    cross();
});
let bsmonster = document.querySelector('.bsmonster');
bsmonster.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = bsmonsterbg;
    cross();
});
let artemiysex = document.querySelector('.artemiysex');
artemiysex.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = artemiysexbg;
    cross();
});
let fantop = document.querySelector('.fantop');
fantop.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = fantopbg;
    cross();
});
let stalker = document.querySelector('.stalker');
stalker.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = stalkerbg;
    cross();
});
let tonya = document.querySelector('.tonya');
tonya.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = tonyabg;
    cross();
});
let like = document.querySelector('.like');
like.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = likebg;
    cross();
});
let punk = document.querySelector('.punk');
punk.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = punkbg;
    cross();
});
let benderovec = document.querySelector('.benderovec');
benderovec.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = benderovecbg;
    cross();
});
let yulia = document.querySelector('.yulia');
yulia.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = yuliabg;
    cross();
});
let angel = document.querySelector('.angel');
angel.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = angelbg;
    cross();
});
let univP = document.querySelector('.univP');
univP.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = univPbg;
    cross();
});
let univK = document.querySelector('.univK');
univK.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = univKbg;
    cross();
});
let univF = document.querySelector('.univF');
univF.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = univFbg;
    cross();
});
let univM = document.querySelector('.univM');
univM.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = univMbg;
    cross();
});
let hats = document.querySelector('.hats');
hats.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = hatsbg;
    cross();
});
let panda = document.querySelector('.panda');
panda.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = pandabg;
    cross();
});
let sherlok = document.querySelector('.sherlok');
sherlok.addEventListener('click',()=>{
    statistics.style.display = 'flex';
    statistics.innerHTML = sherlokbg;
    cross();
});