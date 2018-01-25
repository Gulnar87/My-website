
 
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



// $(document).ready(function(){
//   $('#search').on("click",(function(e){
//   $(".form-group").addClass("sb-search-open");
//     e.stopPropagation()
//   }));
//    $(document).on("click", function(e) {
//     if ($(e.target).is("#search") === false && $(".form-control").val().length == 0) {
//       $(".form-group").removeClass("sb-search-open");
//     }
//   });
//     $(".form-control-submit").click(function(e){
//       $(".form-control").each(function(){
//         if($(".form-control").val().length == 0){
//           e.preventDefault();
//           $(this).css('border', '2px solid red');
//         }
//     })
//   })
// }) 







  $(function(){
         // When the toggle areas in your navbar are clicked, toggle them
         $("#search-button, #search-icon").click(function(e){
             e.preventDefault();
             $("#search-button, #search-form").toggle();
         });
      }) 