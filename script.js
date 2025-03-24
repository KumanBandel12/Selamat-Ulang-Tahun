
$(document).ready(function() {
    let isOpen = false;
    
    $('.container').click(function() {
        if (!isOpen) {
            $('.card').stop().animate({top: '-90px'}, 'slow');
            isOpen = true;
        } else {
            $('.card').stop().animate({top: '5px'}, 'slow');
            isOpen = false;
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     let music = document.getElementById("bg-music");
//     let playButton = document.getElementById("play-music");

//     playButton.addEventListener("click", function () {
//         if (music.paused) {
//             music.play();
//             playButton.textContent = "Pause Musik";
//         } else {
//             music.pause();
//             playButton.textContent = "Putar Musik";
//         }
//     });
// });

