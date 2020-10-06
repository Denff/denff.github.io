(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }

    );
}

)(jQuery);


var mySwiper = new Swiper('.theSitesDeveloping', {
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:"auto",
    centeredSlides: true,
    speed: 600,


    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});


const rank = document.querySelectorAll('.rank');

const rankItem = document.querySelectorAll('.rank__item');

for (let i = 0; i < rank.length; i++) {
    switch (i) {
        case 0:
            const webpack = rank[0].querySelectorAll('.rank__item');

            for (let k = 0; k < webpack.length; k++) {
                if (k < 4) {
                    webpack[k].classList.add('active-red');
                }
            }

        case 1: const bem = rank[1].querySelectorAll('.rank__item');

            for (let k = 0; k < bem.length; k++) {
                if (k < 6) {
                    bem[k].classList.add('active-grey');
                }
            }

        case 2: const scss = rank[2].querySelectorAll('.rank__item');

            for (let k = 0; k < scss.length; k++) {
                if (k < 6) {
                    scss[k].classList.add('active-pink');
                }
            }

        case 3: const pug = rank[3].querySelectorAll('.rank__item');

            for (let k = 0; k < pug.length; k++) {
                if (k < 6) {
                    pug[k].classList.add('active-yellow');
                }
            }

        case 4: const git = rank[4].querySelectorAll('.rank__item');

            for (let k = 0; k < git.length; k++) {
                if (k < 5) {
                    git[k].classList.add('active-green');
                }
            }

        case 5: const jq = rank[5].querySelectorAll('.rank__item');

            for (let k = 0; k < jq.length; k++) {
                if (k < 4) {
                    jq[k].classList.add('active-lgrey');
                }
            }
        case 6: const drupal = rank[6].querySelectorAll('.rank__item');

            for (let k = 0; k < drupal.length; k++) {
                if (k < 4) {
                    drupal[k].classList.add('active-lblue');
                }
            }
        case 7: const jscript = rank[7].querySelectorAll('.rank__item');

            for (let k = 0; k < jscript.length; k++) {
                if (k < 4) {
                    jscript[k].classList.add('active-orange');
                }
            }
        case 8: const react = rank[8].querySelectorAll('.rank__item');

            for (let k = 0; k < react.length; k++) {
                if (k < 3) {
                    react[k].classList.add('active-blue');
                }
            }
    }
}



const animItems = document.querySelectorAll('.skills__item');

if (animItems.length > 0 ) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i =0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('visible-active');
            } else {
                if (!animItem.classList.contains('animate-stop')){
                    animItem.classList.remove('visible-active');
                }
                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 700)
    
}