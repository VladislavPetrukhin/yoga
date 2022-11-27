document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {

    });
});

// let buy = document.querySelector(".buy-button");
document.querySelector(".buy-button").onclick = function() {

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

document.querySelector(".whatsapp-button").onclick = function () {

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
document.querySelector(".facebook-button").onclick = function () {

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
document.querySelector(".telegram-button").onclick = function () {

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