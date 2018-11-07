$(document).ready(function() {

  var owl = $(".owl-carousel");

  owl.owlCarousel({
     items : 1,
     loop  : true,
     margin : 30,
     dots: false,
     nav    : true,
     smartSpeed :900,
     navText : ["<i class='glyphicon glyphicon-chevron-left'></i>","<i class='glyphicon glyphicon-chevron-right'></i>"]
   });

});
