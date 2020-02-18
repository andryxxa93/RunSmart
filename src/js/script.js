// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1500,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icon/left_arrow.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icon/right_arrow.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//       });
//   });
var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controlsText: [
        '<img src="icon/left_arrow.svg">',
        '<img src="icon/right_arrow.svg">'
    ]
  });