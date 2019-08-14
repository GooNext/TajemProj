$(document).ready(function(){
$('.slickslider').slick({
  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});