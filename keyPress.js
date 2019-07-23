//key control

//player 1
let w_key = false;
let a_key = false;
let s_key = false;
let f_key = false;

document.addEventListener('w_key', keyUpHandler, false);
document.addEventListener('a_key', keyUpHandler, false);
document.addEventListener('s_key', keyUpHandler, false);
document.addEventListener('f_key', keyUpHandler, false);






//player 2
let i_key = false;
let j_key = false;
let k_key = false;
let l_key = false;

document.addEventListener('i_key', keyUpHandler, false);
document.addEventListener('j_key', keyUpHandler, false);
document.addEventListener('k_key', keyUpHandler, false);
document.addEventListener('l_key', keyUpHandler, false);


function keyUpHandler(event) {
    //player 1
    if(event.keyCode == 87) {
        w_key = true;
    }
    if(event.keyCode == 65) {
        a_key = true;
    }
    if(event.keyCode == 83) {
    	s_key = true;
    }
    if(event.keyCode == 70) {
    	f_key = true;
    }
    //player 2
    if(event.keyCode == 73) {
        i_key = true;
    }
    if(event.keyCode == 74) {
        j_key = true;
    }
    if(event.keyCode == 75) {
    	k_key = true;
    }
    if(event.keyCode == 76) {
    	l_key = true;
    }
}









