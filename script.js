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

window.addEventListener("keydown", my_keydown_car1);

function my_keydown_car1(e) {
    var keypress = e.keyCode;
    console.log(keypress);

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

function Left() {
    if (x_car1 >= 0) {
        x_car1 -= 2.5;
        console.log("CAR_1-X =" + x_car1 + " ; " + "CAR_1-Y =" + y_car1 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function Right() {
    if (x_car1 <= (canvas.width - 100)) {
        x_car1 += 2.5;
        console.log("CAR_1-X =" + x_car1 + " ; " + "CAR_1-Y =" + y_car1 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function Up() {
    if (y_car1 >= 5) {
        y_car1 -= 2.5;
        console.log("CAR_1-X =" + x_car1 + " ; " + "CAR_1-Y =" + y_car1 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function Down() {
    if (y_car1 <= (canvas.height - 105)) {
        y_car1 += 2.5;
        console.log("CAR_1-X =" + x_car1 + " ; " + "CAR_1-Y =" + y_car1 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}

window.addEventListener("keydown", my_keydown_car2);

function my_keydown_car2(e) {
    var key_press = e.keyCode;
    console.log(key_press);

    if (key_press == "65") {
        A_btn();
        console.log("A");
    } else if (key_press == "87") {
        W_btn();
        console.log("W")
    } else if (key_press == "68") {
        D_btn();
        console.log("D")
    } else if (key_press == "83") {
        S_btn();
        console.log("S")
    }
}

function A_btn() {
    if (x_car2 >= 0) {
        x_car2 -= 2.5;
        console.log("CAR_2-X =" + x_car2 + " ; " + "CAR_2-Y =" + y_car2 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function D_btn() {
    if (x_car2 <= (canvas.width - 100)) {
        x_car2 += 2.5;
        console.log("CAR_2-X =" + x_car2 + " ; " + "CAR_2-Y =" + y_car2 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function W_btn() {
    if (y_car2 >= 5) {
        y_car2 -= 2.5;
        console.log("CAR_2-X =" + x_car2 + " ; " + "CAR_2-Y =" + y_car2 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function S_btn() {
    if (y_car2 <= (canvas.height - 105)) {
        y_car2 += 2.5;
        console.log("CAR_2-X =" + x_car2 + " ; " + "CAR_2-Y =" + y_car2 + " ;");
        upload_background();
        upload_car1();
        upload_car2();
    }
}