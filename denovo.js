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

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// var table = $('mode-table').each(function() {
//             });
//
// var table2 = "#table_3902da2621ff";
//
//
// $('mode-table:not(#table_d0a6fb91d348)').addClass('hide');
// $('mode-chart').addClass('hide');
// $('funnel_1').addClass('hide');
// $('funnel_2').addClass('hide');

// $(table).mouseenter(function() {
//   $('a').on("click", function(event){
//     event.preventDefault();
      // var whichIndustry = $(this).attr('href');
      // if (whichIndustry === "#Banking%20Services"){
      //     $(table[4]).removeClass('hide');
      //     $('html, body').animate({
      //     scrollTop: $(table[4]).offset().top
      //   }, 1000);
      // } else if (whichIndustry === "#Capital%20Markets"){
      //   console.log('Capital Markets was clicked!');
      // } else if (whichIndustry === "#Insurance"){
      //   console.log('Insurance was clicked!');
      // } else if (whichIndustry === "#Investment%20&%20Wealth%20Management"){
      //   console.log('Investment & Wealth Management was clicked!');
      // } else if (whichIndustry === "#Technology%20Solutions"){
      //   console.log('Technology Solutions was clicked!');
      // } else if (whichIndustry === "#Transaction%20&%20Payment%20Services"){
      //   console.log('Transaction & Payment Services was clicked!');
      // }
//   });
// });
