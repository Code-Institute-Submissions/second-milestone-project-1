queue()
    .defer(d3.csv,"assets/data/crimedata.csv")
    .await(makeGraphs);
    
function makeGraphs(error, crimeData) {
    //create a cross filter
    var ndx=crossfilter(crimeData);
	 crimeData.forEach(function(d) {
        d.Total_sum = parseInt(d["count"]);
    });
    crimeData.forEach(function(d) {
        if (d.province === "NL") {
            d.province = "Newfoundland and Labrador"
        }else if (d.province === "PE") {
            d.province = "Prince Edward Island"
        }else if (d.province === "NS") {
            d.province = "Nova Scotia"
        }else if (d.province === "NB") {
            d.province = "New Brunswick"
        }else if (d.province === "QC") {
            d.province = "Quebec"
        } else if (d.province === "ON") {
            d.province = "Ontario"
        } else if (d.province === "MB") {
            d.province = "Manitoba"
        }else if (d.province === "SK") {
            d.province = "Saskatchewan"
        }
         else if (d.province === "AB") {
            d.province = "Alberta"
        }
         else if (d.province === "BC") {
            d.province = "British Columbia"
        }
    })
    show_total_reported(ndx);
    show_year_selector(ndx);
    show_total_crimes_commited(ndx)
    dc.renderAll();
}

/*------------------------------Number Display--*/
function show_total_reported(ndx) {
    var totalCrimes = ndx.groupAll().reduceSum(function(d) {
        return d["Total_sum"];
    });
    dc.numberDisplay("#total-count")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return d;
        })
        .group(totalCrimes)
        .formatNumber(d3.format(",.0f"));
}

/*------------------------------Year selector--*/
function show_year_selector(ndx){
    yearDim = ndx.dimension(dc.pluck("year"));
    yearGroup = yearDim.group();
    
    var year = dc.selectMenu("#year-selector")
    year.dimension(yearDim)
        .group(yearGroup)
        .title(function(d) {
            return d.key;
        })
}

/*------------------------------Row Chart #number-of-crime-row-chart--*/
function show_total_crimes_commited(ndx){
    var violation_dim=ndx.dimension(dc.pluck("violation"));
    var count_group= violation_dim.group().reduceSum(dc.pluck("Total_sum"));
    dc.rowChart("#number-of-crime-row-chart")
      .dimension(violation_dim)
      .group(count_group)
      .width(520)
      .height(400)
      .title(function(d) { return (d.key + " : " + d.value + ""); })
      .transitionDuration(300)
      .elasticX(true)
      .cap(5)
      .gap(2)
      .othersGrouper(false);
}