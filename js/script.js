/**
 * @author Basil Sajeev <basilsajeevthevarmadam@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    console.log('playing song');
});

// Set the date we're counting down to
var countDownDate = new Date("Dec 29, 2024 06:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='title'><p class=\"time-med\">"+days + " Days " + hours + " Hours " + minutes + " Minutes  </p></div>"
     
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 29th Dec, 2024!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Basil Sajeev', styles1, styles2);

console.log(
    `%come to my wedding reception!!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

const overlay = document.getElementById('overlay');
const closeOverlayBtn = document.querySelector('.close-overlay');

// Show the overlay when the page loads
window.addEventListener('load', () => {
    overlay.classList.add('show');
});

// Close overlay on button click with smooth fade-out
closeOverlayBtn.addEventListener('click', () => {
    document.getElementById("my_audio").play();
    overlay.classList.remove('show');
});

// Optionally prevent scrolling when the overlay is shown
document.body.style.overflow = 'hidden';
closeOverlayBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
});
