$(document).ready(function() {

  var owl = $(".owl-carousel");

  owl.owlCarousel({
    items: 1,
    autoplay: true,
    nav: true,
    smartSpeed: 900,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  });

});
