//
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//   items: 1,
//   loop: true,
//   margin: 30,
//   nav: true,
//   smartSpeed :900,
//   navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
// });


$(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    navigation: true,
    smartSpeed: 900,
    navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
});

// $('.play').on('click',function(){
//     owl.trigger('autoplay.play.owl',[1000]);
// });
// $('.stop').on('click',function(){
// owl.trigger('autoplay.stop.owl');
// });


//
// $(".category-wrapper").owlCarousel({
//      items : 4,
//      loop  : true,
//      margin : 30,
//      nav    : true,
//      smartSpeed :900,
//      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
//    });
