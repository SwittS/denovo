alamode.conditionalFormattingByColumn({
    table_id: "table_e46f74dbacbb",
    query_name: "Insights",
    column_rules: [{
      column: "this week",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 30 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 90 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "YTD",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Total",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }]
  });

  alamode.conditionalFormattingByColumn({
    table_id: "table_e8f9d1ad1185",
    query_name: "Recons",
    column_rules: [{
      column: "this week",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 30 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 90 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "YTD",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Total",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }]
  });

  alamode.conditionalFormattingByColumn({
    table_id: "table_3902da2621ff",
    query_name: "PoVs Published",
    column_rules: [{
      column: "this week",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 30 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 90 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "YTD",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Total",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }]
  });

  alamode.conditionalFormattingByColumn({
    table_id: "table_3902da2621ff",
    query_name: "PoVs Published",
    column_rules: [{
      column: "this week",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 30 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "last 90 days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "YTD",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Total",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }]
  });

  alamode.conditionalFormattingByColumn({
    table_id: "table_d0a6fb91d348",
    query_name: "DeNovo Tags",
    column_rules: [{
      column: "Companies Tagged - this week",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Tags Added - this week",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Companies Tagged - last 30 Days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Tags Added - last 30 Days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Companies Tagged - last 90 Days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Tags Added - last 90 Days",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Companies Tagged - YTD",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Tags Added - YTD",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Companies Tagged - Total",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }, {
      column: "Total Tags",
      rules: [{
        type: "gradient",
        color: ["#E9F6F8", "#116578"]
      }]
    }]
  });

  alamode.funnel({
    html_element: "funnel_2",
    query_name: "Callidus Funnel",
    stage_column: "case_status",
    value_column: "case_count",
    title: "Throughput in Callidus",
    height: 350,
    width: 500
  });

  alamode.funnel({
    html_element: "funnel_1",
    query_name: "Callidus WIP",
    stage_column: "case_status",
    value_column: "case_count",
    title: "Callidus - Work in Progress",
    height: 350,
    width: 500
  });

  alamode.addLinksToTables(
    {
      table_id: "table_d0a6fb91d348",
      query_name: "DeNovo Tags",
      link_columns: ["Industry"],
      link_urls: ["{{link_url}}"]
    }
  );

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
