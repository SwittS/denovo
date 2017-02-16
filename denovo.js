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

var table = $('mode-table').each(function() {
            });

var hideTables = $('mode-table:not(#table_d0a6fb91d348)').addClass('hide');

$('funnel_1').addClass('hide');
$('funnel_2').addClass('hide');

$(table).mouseenter(function() {
  $('a').on("click", function(e){
      e.preventDefault();
      var whichIndustry = $(this).attr('href');
      if (whichIndustry === "#Banking%20Services"){
        if(!mode-table.hasClass('banking-services')){
          $(hideTables);
        }
          $('.banking-services').removeClass('hide');
          $('html, body').animate({
          scrollTop: $('.banking-services').offset().top
        }, 1000);
      } else if (whichIndustry === "#Capital%20Markets"){
        if(!mode-table.hasClass('capital-markets')){
          $(hideTables);
        }
          $('.capital-markets').removeClass('hide');
          $('html, body').animate({
          scrollTop: $('.capital-markets').offset().top
        }, 1000);
      } else if (whichIndustry === "#Insurance"){
        console.log('Insurance was clicked!');
      } else if (whichIndustry === "#Investment%20&%20Wealth%20Management"){
        console.log('Investment & Wealth Management was clicked!');
      } else if (whichIndustry === "#Technology%20Solutions"){
        console.log('Technology Solutions was clicked!');
      } else if (whichIndustry === "#Transaction%20&%20Payment%20Services"){
        console.log('Transaction & Payment Services was clicked!');
      }
  });
});
