document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {

    });
    let elems2 = document.querySelectorAll('.carousel2');
    let instance2 = M.Carousel.init(elems2,{
        fullWidth: true,
        indicators: true
    });




let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button5 = document.getElementById("btn5");
let button6 = document.getElementById("btn6");
let button7 = document.getElementById("btn7");
let button_whatsapp = document.querySelector(".whatsapp-button");
let button_telegram = document.querySelector(".telegram-button");
let button_facebook = document.querySelector(".facebook-button");
let buy_button = document.querySelector(".buy-button");


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
button7.addEventListener("click", menuclk);
button_whatsapp.addEventListener("click", whatsapp);
button_facebook.addEventListener("click", facebook);
button_telegram.addEventListener("click", telegram);
buy_button.addEventListener("click", buy);


});