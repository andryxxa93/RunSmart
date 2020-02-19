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
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
    });
    document.querySelector('.prev').onclick = function () {
        slider.goTo('prev');
      };
      document.querySelector('.next').onclick = function () {
        slider.goTo('next');
      };