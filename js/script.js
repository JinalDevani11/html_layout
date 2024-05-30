$(document).ready(function(){
    $('#banner1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:7000,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn', 
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        } 
    })
    var owl = $('#banner1');
            owl.owlCarousel();
            // Listen to owl events:
            owl.on('changed.owl.carousel', function(event) {
                new WOW().init();
            })
            new WOW().init();  
            
    // second slider
    $('#room').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })

    //third slider
    $('#testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })

    //blog slider
    $('#blog_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
    
    
})


