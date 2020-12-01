let sound1, sound2, sound3;

function preload() {
sound1=new Audio("sound1.mp3");
sound2=new Audio("sound2.mp3");
sound3=new Audio("sound3.mp3")
}

function draw() {
    //plays dhoo
    if (keyDown("z")) {
    sound1.play();      
    }
    //plays teesh
    if (keyDown("x")) {
        sound2.play();
    }
    //plays tak
    if (keyDown("c")) {
        sound3.play();
    }

}