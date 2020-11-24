canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
let car1_width = 120;
let car1_height = 70;
let car1 = "car1.png";
let x_car1 = 50;
let y_car1 = 50;

let bg = "background.jpg";

let car2_width = 120;
let car2_height = 70;
let car2 = "car2.png";
let x_car2 = 150;
let y_car2 = 150;

function add() {
    bg_img = new Image();
    bg_img.onload = upload_background;
    bg_img.src = bg;

    car1_img = new Image();
    car1_img.onload = upload_car1;
    car1_img.src = car1;

    car2_img = new Image();
    car2_img.onload = upload_car2;
    car2_img.src = car2;
}

function upload_background() {
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
}

function upload_car1() {
    ctx.drawImage(car1_img, x_car1, y_car1, car1_width, car1_height);
}

function upload_car2() {
    ctx.drawImage(car2_img, x_car2, y_car2, car2_width, car2_height);
}

window.addEventListner("keydown", my_keydown_car1);

function my_keydown_car1(e) {
    var key_press = e.keycode;
    console.log(key_press);

    if (keypress == "37") {
        Left();
        console.log("Left");
    } else if (keypress == "38") {
        Up();
        console.log("Up");
    } else if (keypress == "39") {
        Right();
        console.log("Right");
    } else if (keypress == "40") {
        Down();
        console.log("Down");
    }
}

window.addEventListner("keydown", my_keydown_car2);

function my_keydown_car2(e) {
    var key_press = e.keycode;
    console.log(key_press);

    if (keypress == "65") {
        Left();
        console.log("Left");
    } else if (keypress == "87") {
        Up();
        console.log("Up")
    } else if (keypress == "68") {
        Right();
        console.log("Right")
    } else if (keypress == "83") {
        Down();
        console.log("Down")
    }
}