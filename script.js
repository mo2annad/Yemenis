$(document).ready(function() {
    $(".read-more-text").hide();

    $(document).on('click', ".read-more-btn", function() {
        var $box = $(this).parent(".details-box");
        var $invisibleContent = $box.find(".read-more-text");
        var $visibleContent = $box.find(".blog-details");
        
        var isVisible = $invisibleContent.is(":visible");
        $(this).text(isVisible ? 'READ MORE' : 'READ LESS');
        $invisibleContent.toggle();
        $visibleContent.toggle();
        
        // Optional: Set aria-expanded for accessibility
        $(this).attr('aria-expanded', !isVisible);
    });
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
    nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
    nav.classList.remove('active');
    })
}

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
    resetAutoPlay();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
    resetAutoPlay();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveToSlide(index);
        resetAutoPlay();
    });
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function moveToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

let autoPlay = setInterval(moveToNextSlide, 3000);

function resetAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(moveToNextSlide, 3000);
}


