var table = $('mode-table').each(function() {
            });

var table2 = "#table_3902da2621ff";

$('mode-table:not(#table_d0a6fb91d348)').addClass('hide');
$('mode-chart').addClass('hide');
$('funnel_1').addClass('hide');
$('funnel_2').addClass('hide');

$(table).click(function() {
  $('a').click(function(){
      var whichIndustry = $(this).attr('href');
      if (whichIndustry === "#Banking%20Services"){
          $(table[4]).removeClass('hide');
          $('html, body').animate({
          scrollTop: $(table[4]).offset().top
          }, 500);
      } else if (whichIndustry === "#Capital%20Markets"){
        console.log('Capital Markets was clicked!');
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

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
    $('#scroll').fadeIn();
  } else {
    $('#scroll').fadeOut();
  }
});

$('#scroll').click(function(){
  $("html, body").animate({ scrollTop: 0}, 600);
  return false;
});
