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

// scroll to table and show function
var table = $('mode-table').each(function(){});

// $('mode-table:not(#table_d0a6fb91d348, #table_ff996ca9a36d)').addClass('hide');
// $('funnel_1').addClass('hide');
// $('funnel_2').addClass('hide');

$(table).mouseenter(function() {
  $('a').on("click", function(e){
      e.preventDefault();
      var whichIndustry = $(this).attr('href');
      if (whichIndustry === "#Banking%20Services"){
        if(!mode-table.hasClass('banking-services')){
          $('mode-table:not(#table_d0a6fb91d348, #table_ff996ca9a36d)').addClass('hide');
        }
          $('.banking-services').removeClass('hide');
          $('html, body').animate({
          scrollTop: $('.banking-services').offset().top
        }, 1000);
      }
      // } else if (whichIndustry === "#Capital%20Markets"){
      //   if(!mode-table.hasClass('capital-markets')){
      //     $('mode-table:not(#table_d0a6fb91d348, #table_ff996ca9a36d)').addClass('hide');
      //   }
      //     $('.capital-markets').removeClass('hide');
      //     $('html, body').animate({
      //     scrollTop: $('.capital-markets').offset().top
      //   }, 1000);
      // } else if (whichIndustry === "#Insurance"){
      //     if(!mode-table.hasClass('insurance')){
      //       $('mode-table:not(#table_d0a6fb91d348, #table_ff996ca9a36d)').addClass('hide');
      //     }
      //       $('.insurance').removeClass('hide');
      //       $('html, body').animate({
      //       scrollTop: $('.insurance').offset().top
      //     }, 1000);
      // } else if (whichIndustry === "#Investment%20&%20Wealth%20Management"){
      //     if(!mode-table.hasClass('investment')){
      //       $('mode-table:not(#table_d0a6fb91d348, #table_ff996ca9a36d)').addClass('hide');
      //     }
      //       $('.investment').removeClass('hide');
      //       $('html, body').animate({
      //       scrollTop: $('.investment').offset().top
      //     }, 1000);
      // } else if (whichIndustry === "#Technology%20Solutions"){
      //     if(!mode-table.hasClass('technology')){
      //       $('mode-table:not(#table_d0a6fb91d348, #table_ff996ca9a36d)').addClass('hide');
      //     }
      //       $('.technology').removeClass('hide');
      //       $('html, body').animate({
      //       scrollTop: $('.technology').offset().top
      //     }, 1000);
      // } else if (whichIndustry === "#Transaction%20&%20Payment%20Services"){
      //     if(!mode-table.hasClass('transaction')){
      //       $('mode-table:not(#table_d0a6fb91d348, #table_ff996ca9a36d)').addClass('hide');
      //     }
      //       $('.transaction').removeClass('hide');
      //       $('html, body').animate({
      //       scrollTop: $('.transaction').offset().top
      //     }, 1000);
      // }
  });
});
