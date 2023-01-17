let proname = document.getElementById("proname");
let information = document.getElementById("information")

function profile(){
    information.classList.toggle("infonone");
}
proname.addEventListener('click', profile);


let head = document.getElementById("head");
let sub1 = document.getElementById("sub1");
// let sub2 = document.getElementById("sub2");
// let sub3 = document.getElementById("sub3");
// let sub4 = document.getElementById("sub4");
// let sub5 = document.getElementById("sub5");
// let sub6 = document.getElementById("sub6");

sub1.onmouseover = function(){
    document.body.style.background = 'linear-gradient(180deg, rgb(160, 9, 9) 0%, rgba(0, 0, 0, 1) 20%)';
    head.style.background = 'linear-gradient(180deg, rgba(103, 9, 9, 1) 0%, rgba(0, 0, 0, 1) 80%)';
}
sub1.onmouseout = function(){
    document.body.style.background = '';
    head.style.background = '';
}

sub2.onmouseover = function(){
    document.body.style.background = 'linear-gradient(180deg, rgb(205, 151, 90) 0%, rgba(0, 0, 0, 1) 20%)';
    head.style.background =  'linear-gradient(180deg, rgb(170, 151, 90) 0%, rgba(0, 0, 0, 1) 80%';
}
sub2.onmouseout = function(){
    document.body.style.background = '';
    head.style.background = '';
}

sub3.onmouseover = function(){
    document.body.style.background = 'linear-gradient(180deg, rgb(44, 40, 40) 0%, rgba(0, 0, 0, 1) 20%)';
    head.style.background =  'linear-gradient(180deg, rgb(106, 102, 102) 0%, rgba(0, 0, 0, 1) 80%)';
}
sub3.onmouseout = function(){
    document.body.style.background = '';
    head.style.background = '';
}

sub4.onmouseover = function(){
    document.body.style.background = 'linear-gradient(180deg, rgb(20, 152, 8) 0%, rgba(0, 0, 0, 1) 20%)';
    head.style.background =  'linear-gradient(180deg, rgb(32, 84, 4) 0%, rgba(0, 0, 0, 1) 80%)';
}
sub4.onmouseout = function(){
    document.body.style.background = '';
    head.style.background = '';
}

sub5.onmouseover = function(){
    document.body.style.background = 'linear-gradient(180deg, rgb(90, 8, 167) 0%, rgba(0, 0, 0, 1) 20%';
    head.style.background =  'linear-gradient(180deg, rgb(52, 7, 95) 0%, rgba(0, 0, 0, 1) 80%)';
}
sub5.onmouseout = function(){
    document.body.style.background = '';
    head.style.background = '';
}

sub6.onmouseover = function(){
    document.body.style.background = 'linear-gradient(180deg, rgb(174, 98, 12) 0%, rgba(0, 0, 0, 1) 20%)';
    head.style.background =  'linear-gradient(180deg, rgb(111, 62, 6) 0%, rgba(0, 0, 0, 1) 80%)';
}
sub6.onmouseout = function(){
    document.body.style.background = '';
    head.style.background = '';
}
