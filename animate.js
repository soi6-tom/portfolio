
  $(function(){

      $(document).ready( function(){
$('.active').fadeIn("slow");
});
    $('a[href^="#"]').click(function(){
      var href= $(this).attr("name");
      $('.active-menu').removeClass('active-menu');
      $(this).addClass("active-menu");
      $('.active').fadeOut("slow");
      $('.active').removeClass('active');
      $(href).addClass('active');
      $('.active').fadeIn("slow");
    });
  });
