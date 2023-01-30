let profile1 = document.getElementsByClassName("profile1");
let info1 = document.getElementsByClassName("info1")
let profile2 = document.getElementsByClassName("profile2");
let info2 = document.getElementsByClassName("info2")
let profile3 = document.getElementsByClassName("profile3");
let info3 = document.getElementsByClassName("info3")

function profile(){
    info1[0].classList.toggle("infonone")

    info2[0].classList.toggle("infonone")

    info3[0].classList.toggle("infonone");
    info3[1].classList.toggle("infonone");
    info3[2].classList.toggle("infonone");
    info3[3].classList.toggle("infonone");
    info3[4].classList.toggle("infonone");
    info3[5].classList.toggle("infonone");
}
profile1[0].addEventListener('click', profile);

profile2[0].addEventListener('click', profile);

profile3[0].addEventListener('click', profile);
profile3[1].addEventListener('click', profile);
profile3[2].addEventListener('click', profile);
profile3[3].addEventListener('click', profile);
profile3[4].addEventListener('click', profile);
profile3[5].addEventListener('click', profile);


let head = document.getElementById("head");
let sub1 = document.getElementById("sub1");
let sub2 = document.getElementById("sub2");
let sub3 = document.getElementById("sub3");
let sub4 = document.getElementById("sub4");
let sub5 = document.getElementById("sub5");
let sub6 = document.getElementById("sub6");

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

// From Home to Search and Search to Home
let home = document.getElementsByClassName("container");
let search = document.getElementsByClassName("container2");
let homebtn = document.getElementsByClassName("li1");
let searchbtn = document.getElementsByClassName("li2");
let librarybtn = document.getElementsByClassName("li3");
let playlists1 = document.getElementsByClassName("playlists1");
let playlists2 = document.getElementsByClassName("playlists2");
let playlists3 = document.getElementsByClassName("playlists3");
let playlists4 = document.getElementsByClassName("playlists4");
let playlists5 = document.getElementsByClassName("playlists5");
let playlists6 = document.getElementsByClassName("playlists6");


function searchpage(){
    home[0].style.display = "none";
    search[0].style.display = "block";
    playlists1[0].style.display = "none"
    playlists2[0].style.display = "none"
    playlists3[0].style.display = "none"
    playlists4[0].style.display = "none"
    playlists5[0].style.display = "none"
    playlists6[0].style.display = "none"

}
searchbtn[0].addEventListener("click", searchpage);

function homepage(){
    home[0].style.display = "inline-block";
    search[0].style.display = "none";
    playlists1[0].style.display = "none"
    playlists2[0].style.display = "none"
    playlists3[0].style.display = "none"
    playlists4[0].style.display = "none"
    playlists5[0].style.display = "none"
    playlists6[0].style.display = "none"
}
homebtn[0].addEventListener("click", homepage);


let subsection = document.getElementsByClassName("subsection")
let subsection1 = subsection[0]
let subsection2 = subsection[1]
let subsection3 = subsection[2]
let subsection4 = subsection[3]
let subsection5 = subsection[4]
let subsection6 = subsection[5]

function playredkingv(){
    home[0].style.display = "none";
    playlists1[0].style.display = "block";
}
function playgymmusic(){
    home[0].style.display = "none";
    playlists2[0].style.display = "block";
}
function playlatestsongs(){
    home[0].style.display = "none";
    playlists3[0].style.display = "block";
}
function playhiphopmusic(){
    home[0].style.display = "none";
    playlists4[0].style.display = "block";
}
function playarjitsingh(){
    home[0].style.display = "none";
    playlists5[0].style.display = "block";
}
function playglobalhits(){
    home[0].style.display = "none";
    playlists6[0].style.display = "block";
}
subsection1.addEventListener("click", playredkingv);
subsection2.addEventListener("click", playgymmusic);
subsection3.addEventListener("click", playlatestsongs);
subsection4.addEventListener("click", playhiphopmusic);
subsection5.addEventListener("click", playarjitsingh);
subsection6.addEventListener("click", playglobalhits);



let currentlike = document.getElementsByClassName("like");
let likebtn = document.getElementsByClassName("fa-heart");

function like(){
    likebtn[1].classList.toggle("liketransp")
}
currentlike[0].addEventListener("click", like);