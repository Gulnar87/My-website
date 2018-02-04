
$(document).ready(function(){
$('.autoplay').slick({
  
// dotsClass: 'slick-dots',
accessibility: true,

 // Enable Next/Prev arrows
  arrows: true,

  // prev arrow
  prevArrow: '<a class="carousel-control-prev2 btn btn-default btn-md" href="#carouselControls" role="button" data-slide="prev"><div id="triangle-left2"></div></a>',

  // next arrow
  nextArrow: '<a class="carousel-control-next2 btn btn-default btn-md" href="#carouselControls" role="button" data-slide="next"><div id="triangle-right2" ></div></a>',

 autoplay: true,
 
  dots: false,
  infinite: true,
  // speed: 300,
   autoplaySpeed: 3000, 
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  
});

});






$(function () { 

  $(".read-more").blur(function (event) {
      $("#multiCollapseExample1, #multiCollapseExample2, #multiCollapseExample3" ).collapse('hide');
  });

  // $(".read-more").click(function (event) {
  //   $(event.target).focus();
  // });
});

(function (global){

})(window); 


$(function () { 
  $("#worksButton").blur(function (event) {
      $("#multiCollapseExample4" ).collapse('hide');
  });

});

(function (global){

})(window); 


$(document).ready(function(){
 $('#search').on("click",(function(e){
  $(".form-inline").addClass("sb-search-open");
    e.stopPropagation() 
  }));
   $(document).on("click", function(e) {
    if ($(e.target).is("#search") === false && $(".form-control").val().length == 0) {
      $(".form-inline").removeClass("sb-search-open");
    } 
  });
    $(".form-control-submit").click(function(e){
      $(".form-control").each(function(){
        if($(".form-control").val().length == 0){
          e.preventDefault();
          $(this).css('border', '1px solid grey');
        }
    }) 
  }) 
})

$('.demo').circleGraphic({color:'#00a99d'});

 $('.demo1').circleGraphic({color:'#00a99d'});

 $('.demo2').circleGraphic({color:'#00a99d'});

 $('.demo3').circleGraphic({color:'#00a99d'});

 $('.demo4').circleGraphic({color:'#00a99d'});

  $('.demo5').circleGraphic({color:'#00a99d'});



$(document).ready(function() {

  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window), wrapper);
  });
  
});




  

 


 





