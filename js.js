score = 0;
c = 1;
document.addEventListener('keydown', func);

// defining function func
function func(e) {
    document.getElementById('myAudio').play();

    console.log("key pressed" + e.keyCode);

    //  for up arrow key
    if (e.keyCode == 38)
        document.getElementById('player').classList.add('playerAni');
    setTimeout(() => {
        document.getElementById('player').classList.remove('playerAni');
    }, 700);
 
    // for left arrow key
    if (e.keyCode == 37) {
        player = document.getElementById('player');
        x = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
        x = (x - 150) + 'px';
        player.style.left = x;
    }

    // for right arrow key
    if (e.keyCode == 39) {
        player = document.getElementById('player');
        x = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
        x = (x + 300) + 'px';
        player.style.left = x;
    }

}
//detecting collision at every .1 sec

setInterval(() => {
    player = document.getElementById('player');
    obstacle = document.getElementById('obstacles');
    px = x = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    py = x = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));


    ox = x = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    oy = x = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));
   
    // //get difference between left and bottom positions of dino and dragon
    offsetx = Math.abs(ox - px);
    offsety = Math.abs(oy - py);
    // console.log(offsetx);
    // console.log(offsety);
    if (offsetx < 100 && offsety < 70) {
        document.getElementById('obstacles').classList.remove('obstacleAni');
        document.getElementById('gameover').innerHTML = "Game Over !Reload to play again";
        document.getElementById("myAudio2").play();
        //stop audios
        setTimeout(() => {
            document.getElementById("myAudio").pause();
            document.getElementById("myAudio2").pause();
        }, 1000);
        document.getElementById('player').classList.add('diedino');
        c = 0;
    }
    else if (c == 1) {
        score = score + 1;
        document.getElementById('score').innerHTML = "Your Score:  " + score;
    }
}, 100);
 
// reducing the speed of dragon at every cross
setInterval(() => {
    obstacle = document.getElementById('obstacles');
    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    if (newDur > 4.0)
        obstacle.style.animationDuration = newDur + 's';
    // console.log(newDur);
}, 1000);


