var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloude Service<br>2018-1';
function getIdPw(){
    var id = prompt('ID 입력','');
    alert(id + '가 로그인 함.');
    var passwordSystem = '12345';
    var password = prompt('PW 입력','');
    if(password === passwordSystem) alert('정상 로그인!');
    else alert('비밀번호 오류');
}

document.querySelector('h1').onclick = function(){
    getIdPw();
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') myImage.setAttribute ('src','images/mokwon.png');
    else myImage.setAttribute ('src','images/firefox-icon.png');   
}