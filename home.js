var nav = document.querySelector('.nav');
var menu = document.querySelector('.menu');
let main = document.querySelector('.main');

let main_second = document.querySelector('.main-second');

var main_first = document.querySelector('.main-first');
let header = document.querySelector('header');



//Menu déroulant et scroll nav

menu.addEventListener('click', () => {
    menu.classList.toggle('close');
    nav.classList.toggle('show');
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 5){
        nav.classList.add('box-shadow');
    }else{
        nav.classList.remove('box-shadow');
    }
    
})

// end code

//Creation de particules carrées

function newElement(){
    var myScroller = document.createElement('span');
    var size = Math.random() * 30;

    myScroller.style.width = size + 'px';
    myScroller.style.height = size + 'px';
    myScroller.style.left = Math.random() * innerWidth + 'px';

    main_second.appendChild(myScroller);

    setTimeout(() => {
            myScroller.remove();  
    }, 17000);
}

setInterval(newElement, 1000);

// end code

var four_container = document.querySelector('.main-four-container');
var four_container1_big = document.querySelector('.main-four-container1');
var four_container2_big = document.querySelector('.main-four-container2');
var four_container3_big = document.querySelector('.main-four-container3');

var four_container1 = document.querySelectorAll('.main-four-container1 img');
var four_container2 = document.querySelectorAll('.main-four-container2 img');
var four_container3 = document.querySelectorAll('.main-four-container3 img');


// Slides marks

var point1 = 0;
var point2 = 0;
var point3 = 0;
var heightImg = four_container1_big.clientHeight;
//const clone = four_container1[0].cloneNode(true);
//four_container1_big.append(clone);

function four1(){
   point1++;
   if(point1 > four_container1.length){
        point1 = 0;
        four_container1_big.style.transition = 'none'
        four_container1_big.style.transform = `translateY(${4 * heightImg}px)`;
   }else{
        four_container1_big.style.transform += `translateY(${-3.8 * heightImg}px)`;
        four_container1_big.style.transition = '1s';
   }
}
function four2(){
   point2++;
   if(point2 > four_container2.length){
        point2 = 0;
        four_container2_big.style.transition = 'none'
        four_container2_big.style.transform = `translateY(${4 * heightImg}px)`;
   }else{
        four_container2_big.style.transform += `translateY(${-3.8 * heightImg}px)`;
        four_container2_big.style.transition = '1s';
   }

}
function four3(){
   point3++;
   if(point3 > four_container3.length){
        point3 = 0;
        four_container3_big.style.transition = 'none'
        four_container3_big.style.transform = `translateY(${4 * heightImg}px)`;
   }else{
        four_container3_big.style.transform += `translateY(${-3.8 * heightImg}px)`;
        four_container3_big.style.transition = '1s';
   }
}

setInterval(four1, 4000);
setInterval(four2, 3000);
setInterval(four3, 3500);
//setInterval(four, 5000);

/*function four(){
    point++
    if(point >= four_container1.length-1){
        four_container1_big.style.transform = `translateY(0)`;
    }
    four_container1_big.style.transform = `translateY(${-2.5*heightImg}px)`;
    four_container1_big.style.transition = '.6s';
    console.log(point);
}
*/

// end code


//Creation particules cercles

var main_five = document.querySelector('.main-five');

function newElement2(){
    var myScroller = document.createElement('span');
    var size = Math.random() * 30;

    myScroller.style.width = size + 'px';
    myScroller.style.height = size + 'px';
    myScroller.style.left = Math.random() * innerWidth + 'px';

    main_five.appendChild(myScroller);

    setTimeout(() => {
            myScroller.remove();  
    }, 17000);
}

setInterval(newElement2, 1000);

// end code


//counter

var five_main = document.querySelector('.main-five')
var counters = document.querySelectorAll('.counter');
var speed = 500;


counters.forEach(counter => {
    const updatecount = () => {
        const target1 = +counter.getAttribute('data-target');
        const count = +counter.innerHTML;

        const inc = target1 / speed;

        if(count < target1){
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(updatecount, 2);
        }else{  
            counter.innerHTML = target1;
        }
    }
    
    
    let options = {
        rootMargin: "-5% 0px", 
        treshold: 0
    }
    
    function countIntersect(entries){
        
        entries.forEach(entry => {
            if(entry.isIntersecting){
                updatecount();
                
            }else{
                counter.innerHTML = '0'
            }
        })
    }
    
    const oberserver = new IntersectionObserver(countIntersect, options);
    
    counters.forEach(counter => {
        oberserver.observe(counter)
    });

})

//end code


// slides comments


var sevenAll = document.querySelectorAll('.sevenAll');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
var joges = document.querySelectorAll('.joge span')
var index1 = 0;


function removeClass(){
    for(var i = 0; i < sevenAll.length; i++){
        sevenAll[i].classList.remove('active');
    }
    for(var j = 0; j < joges.length; j++){
        joges[j].classList.remove('active-joge')
    }
}


right.addEventListener('click', () => {
    index1++;
    if(index1 >= sevenAll.length){
        index1 = 0;
    }
    removeClass();
    sevenAll[index1].classList.add('active');
    sevenAll[index1].style.transition ='.4s';
    joges[index1].classList.add('active-joge');
})

left.addEventListener('click', () => {
    index1--;
    if(index1 < 0){
        index1 = sevenAll.length-1;
    }
    removeClass();
    sevenAll[index1].classList.add('active');
    sevenAll[index1].style.transition ='.4s'
    joges[index1].classList.add('active-joge');
})

//end code   