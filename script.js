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
        block.style.display = 'flex';
        block2.style.display = 'none';
        second.checked == false;
        return true;
    }
    if(this.value == "second"){
        block2.style.display = 'flex';
        block.style.display = 'none';
        first.checked == false;
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
