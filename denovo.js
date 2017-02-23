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
// end scroll to top function

// start last updated function
var bigText = [
  {
  "id": "date",
  "column": "Info as of",
  "label": "Info as of:",
  "queryName": "DeNovo Date"
  }
];

queries = [];

datasets.forEach(function(d,i){ queries.push( [d.queryName,i] ); });

$(".test").text(queries);

try{
  bigText.forEach(function(bn) {
    var data = datasets.filter(function(d) { return d.queryName == bn.queryName; })[0].content;
    var value = data[0][bn.column];
    $("#" + bn.id).append("<p><span class='bn-label'>" + bn.label + "</span><br><br><span class='bn-number'>" + value + "</span></p>");
  });
}
catch(err){
  document.getElementById("date").innerHTML = err.message;
}
// end last updated function
