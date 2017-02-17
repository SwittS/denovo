// scroll to top function
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('#scroll').fadeIn();
  } else {
    $('#scroll').fadeOut();
  }
});

$('#scroll').click(function(){
  $("html, body").animate({ scrollTop: 0}, 600);
  return false;
});

// hide all objects in dict
$.each(dict, function(key, value){
  $(value).addClass('hide');
});

// scroll to table and show function
var table = $('mode-table').each(function(){});

$(table).mouseenter(function(){
  $('a').on("click", function(e){
    e.preventDefault();
    var whichIndustry = $(this).attr('href').toLowerCase().replace(/[^a-zA-Z0-9 ]+/g,"").replace(/\s+/g, "").replace(/\d+/g, '-');
    $.each(dict, function(key, value){
      if(this !== key){
        $(value).addClass('hide');
      } else {
        $(value).removeClass('hide');
        $('html, body').animate({
        scrollTop: $(value).offset().top
        }, 1000);
      }
    });
  });
});
