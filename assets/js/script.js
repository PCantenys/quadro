$(document).ready(function() {

  var owl = $(".owl-carousel");

  owl.owlCarousel({
     items : 1,
     loop  : true,
     margin : 30,
     nav    : true,
     smartSpeed :900,
     navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
   });

});
