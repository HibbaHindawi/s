var music = new Audio('lessgo.mp3')
function LESSGO(){
    music.play();
    document.getElementById('myImage').src='dababy.gif'; document.getElementById('myImage').style.width = '35%'
    document.getElementById('myImage').style.height = '35%'
    document.querySelector('.lessgo').style.visibility = 'visible'
    document.querySelector('.lessgo2').style.visibility = 'visible'
    document.querySelector('.lessgo3').style.visibility = 'visible'
    document.querySelector('.lessgo4').style.visibility = 'visible'


}
function Stop(){
    music.pause();
    document.getElementById('myImage').src='https://marketplacer.imgix.net/vJ/Tx58gaXWG74TcY55mqbkeuCmQ.jpg?auto=format&fm=pjpg&fit=max&q=90&itemprop=image&alt=Top%20tips%20to%20help%20your%20baby%27s%20development&w=1600&h=1000&s=290f80053944f9ec023ead946a59f60a'
    document.querySelector('.lessgo').style.visibility = 'hidden'
    document.querySelector('.lessgo2').style.visibility = 'hidden'
    document.querySelector('.lessgo3').style.visibility = 'hidden'
    document.querySelector('.lessgo4').style.visibility = 'hidden'

}