/*
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') myImage.setAttribute ('src','images/mokwon.png');
    else myImage.setAttribute ('src','images/firefox-icon.png');   
}


var myHeading = document.querySelector('h1');
var id = localStorage.getItem('id');
myHeading.innerHTML = id + 'HomePage';
function getIdPw(){
    var id = prompt('ID 입력','');
    alert(id + '가 로그인 함.');
    localStorage.setItem('id',id);
    var passwordSystem = '12345';
    var password = prompt('PW 입력','');
    if(password === passwordSystem) alert('정상 로그인!');
    else alert('비밀번호 오류');
}

var myButton = document.querySelector('button');
myButton.onclick = function(){
    getIdPw();
}
*/

/*
function getIdPw(){
    var id = prompt('ID를 입력하세요','');
    var password = prompt(id + '가 사용할 PW를 입력하세요','');
    localStorage.setItem('id',id);
    localStorage.setItem('password',password);
}

var password = localStorage.getItem('password');
if (!password){
    getIdPw();
}

//password

var id = localStorage.getItem('id');
var heading = document.querySelector('h1');
heading.innerHTML = id + 'HomePage';
*/



function getIdPw(){
    var id = prompt('ID를 입력하세요','');
    var password = prompt(id + '가 사용할 PW를 입력하세요','');
    localStorage.setItem('id',id);
    localStorage.setItem('password',password);
}

var password = localStorage.getItem('password');
getIdPw();

function setIdPw(){
    var checkPW = prompt('PW입력','');
    if(checkPW === localStorage.getItem('password')) alert('정상 로그인');
    else alert('비밀번호가 틀립니다.');
}

var id = localStorage.getItem('id');
var heading = document.querySelector('h1');
heading.innerHTML = id + 'HomePage';

var myButton = document.querySelector('button');
myButton.onclick = function(){
    setIdPw();
}
