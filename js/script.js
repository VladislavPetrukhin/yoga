document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {

    });

let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button5 = document.getElementById("btn5");
let button6 = document.getElementById("btn6");
let button_whatsapp = document.getElementById("whatsapp-button");
let button_telegram = document.getElementById("telegram-button");
let button_facebook = document.getElementById("facebook-button");
let buy_button = document.querySelector(".buy-button");
// let bodyclk = document.querySelector("body");


function buy(){

    Swal.fire({
        title: 'Для приобретения курса обращайтесь по нашим контактам:' +
            '<br>WhatsApp: +89109122539' +
            '<br>Facebook: facebook.com' +
            '<br>Telegram: +89109122539',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })

}

function whatsapp(){
    Swal.fire({
        title: 'WhatsApp: +89109122539',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}
function facebook(){

    Swal.fire({
        title: 'Facebook: facebook.com',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}
function telegram(){

    Swal.fire({
        title: 'Telegram: +89109122539',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

function menuclk() {
    document.getElementById('active').checked = false;

}


button1.addEventListener("click", menuclk);
button2.addEventListener("click", menuclk);
button3.addEventListener("click", menuclk);
button4.addEventListener("click", menuclk);
button5.addEventListener("click", menuclk);
button6.addEventListener("click", menuclk);
button_whatsapp.addEventListener("click", whatsapp);
button_facebook.addEventListener("click", facebook);
button_telegram.addEventListener("click", telegram);
buy_button.addEventListener("click", bye);
// bodyclk.addEventListener("click", menuclk);


});