// Этот кусок кода должен работать во всех браузерах 
//но почему то не хочет работать? раотает только в Лисе 

// const anchors = document.querySelectorAll('header a[href*="#"]');
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault()
//         const anchorId = anchor.getAttribute('href');
//         console.log(anchorId)
//         document.querySelector(anchorId).scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//         })
//     })
// }

// реализация плавного скрола на Jqvery
var $page = $('html, body');
$('header a[href*="#"]').click(function(){
    $page.animate({
        scrollTop:$($.attr(this, 'href')).offset().top
    }, 2000);
    return false;
});