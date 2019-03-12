queue()
    .defer(d3.csv,"assets/data/crimedata.csv")
    .await(makeGraphs);

var colorCodesOffence=d3.scale.ordinal()
    .domain(["Sexual assault", "Assault", "Robbery", "Criminal harassment", "Uttering threats"])
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
    
var colorCodesYear = d3.scale.ordinal()
    .domain(["2008","2009","2010","2011", "2012"])
    .range(["#51A0D5","#FD6A02","#4C9900","#CC0000","#B266FF"])
    
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
    show_crime_selector(ndx);
    show_total_crimes_commited(ndx);
    show_crimes_reported_each_year(ndx);
    show_total_crime_each_province(ndx);
    show_offence_per_year(ndx);
    show_year_per_offence(ndx);
    show_offence_per_province(ndx);
    dc.renderAll();
}

/*------------------------------Number Display--*/
function show_total_reported(ndx) {
    var totalCrimes = ndx.groupAll().reduceSum(function(d) {
        return d["Total_sum"];
    });
    dc.numberDisplay("#total-count")
        .formatNumber(d3.format(",.0f"))
        .valueAccessor(function(d) {
            return d;
        })
        .group(totalCrimes)

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
        .promptText("Select Year")
        
}
/*------------------------------Crime selector--*/
function show_crime_selector(ndx){
    crimeDim = ndx.dimension(dc.pluck("violation"));
    crimeGroup = crimeDim.group();
    
    var crime = dc.selectMenu("#crime-selector")
    crime.dimension(crimeDim)
        .group(crimeGroup)
        .title(function(d) {
            return d.key;
        })
        .promptText("Select Crime Type")
        
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
      .transitionDuration(300)
      .colorAccessor(function(d) {
            return d.key;
        })
      .colors(colorCodesOffence)
      .elasticX(true)
      .cap(5)
      .gap(2)
      .othersGrouper(false);
  
}

/*------------------------------Bar Chart #crimes-reported-each-year--*/
function show_crimes_reported_each_year(ndx){
    var crimeDim = ndx.dimension(dc.pluck("year"));
    var crimeGroup = crimeDim.group().reduceSum(dc.pluck("Total_sum"));
    dc.barChart("#crimes-reported-each-year")
        .width(500)
        .height(400)
        .margins({top: 5, right: 50, bottom: 40, left: 50})
        .dimension(crimeDim)
        .group(crimeGroup)
        .barPadding(.3)
        .colors(colorCodesYear)
        .colorAccessor(function(d) {
            return d.key
        })
        .transitionDuration(500)//animates when we filter
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Number of Crimes")
        .xAxisLabel("Year")
        .yAxis().ticks(4);

}

/*------------------------------Pie Chart #total_crime_each_province--*/
function show_total_crime_each_province(ndx){

    var provinceDim=ndx.dimension(dc.pluck('province'));
    var provinceGroup= provinceDim.group().reduceSum(dc.pluck('Total_sum'));
    
    dc.pieChart("#total_crime_each_province")
   
        .dimension(provinceDim)
        .group(provinceGroup)
        .radius(200)
        .innerRadius(25)
        .legend(dc.legend().x(5).y(10).itemHeight(25).gap(1))
        .label(function(d) {
            return d.value;
        })
        .colors(d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#ef5675", "#ff764a", "#ffa600"]))
        .width(570)
        .height(285)
        .transitionDuration(500);
}

/*------------------------------Stacked Chart #offence-per-province--*/
function show_offence_per_province(ndx) {
    var province_dim = ndx.dimension(dc.pluck('province'));
    var assault = province_dim.group().reduceSum(function(d) {
        if (d.violation === 'Assault') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

    var uttering_threats= province_dim.group().reduceSum(function(d) {
        if (d.violation === 'Uttering threats') {
            return +d.count;
        }
        else {
            return 0;
        }
    });
        var robbery= province_dim.group().reduceSum(function(d) {
        if (d.violation === 'Robbery') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

    var sexual_assault= province_dim.group().reduceSum(function(d) {
        if (d.violation === 'Sexual assault') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

   var criminal_harassment= province_dim.group().reduceSum(function(d) {
        if (d.violation === 'Criminal harassment') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

	
    var stackedChart = dc.barChart("#offence-per-province");
    stackedChart
        .width(620)
        .height(390)
        .dimension(province_dim)
        .group(assault, "Assault")
            .stack(uttering_threats, "Uttering Threats")   
         .stack(robbery, "Robbery")
          .stack(sexual_assault, "Sexual Assault")
          .stack(criminal_harassment, "Criminal harassment")
        .x(d3.scale.ordinal())
        .barPadding(.1)
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Proportion of offences recorded in 2008 - 2012")
        .xAxisLabel("Provinces")
		 .margins({top: 20, left: 80, bottom: 100, right: 200})
        .legend(dc.legend().x(450).y(10).itemHeight(15).gap(8))
    
}

/*------------------------------Stacked Chart #offence-per-year--*/
function show_offence_per_year(ndx) {
    var name_dim = ndx.dimension(dc.pluck('year'));
    var sexual_assault = name_dim.group().reduceSum(function(d) {
        if (d.violation === 'Sexual assault') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

    
    var assault = name_dim.group().reduceSum(function(d) {
        if (d.violation === 'Assault') {
            return +d.count;
        }
        else {
            return 0;
        }
    });
	 var robbery = name_dim.group().reduceSum(function(d) {
        if (d.violation === 'Robbery') {
            return +d.count;
        }
        else {
            return 0;
        }
    });
  var criminal_harassment = name_dim.group().reduceSum(function(d) {
        if (d.violation === 'Criminal harassment') {
            return +d.count;
        }
        else {
            return 0;
        }
    });
	 var uttering_threats = name_dim.group().reduceSum(function(d) {
        if (d.violation === 'Uttering threats'){
			return +d.count;
        }
        else {
            return 0;
        }
    });
	
    var stackedChart = dc.barChart("#offence-per-year");
    stackedChart
         .width(600)
        .height(400)
        .dimension(name_dim)
        .group(sexual_assault, "Sexual assault")
        .stack(assault, "Assault")
		.stack(robbery ,"Robbery")
		.stack(criminal_harassment, "Criminal harassment")
		.stack(uttering_threats, "Uttering threats")
        .x(d3.scale.ordinal())
          .barPadding(.1)
        .xUnits(dc.units.ordinal)
        .colors(d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]))
        .xAxisLabel("Year")
         .yAxisLabel("Number of crimes recorded")
		 .margins({top: 20, left: 80, bottom: 50, right: 200})
        .legend(dc.legend().x(380).y(170).itemHeight(15).gap(5))
    
}
function show_year_per_offence(ndx) {
    var year_dim = ndx.dimension(dc.pluck('violation'));
     var year2008 = year_dim.group().reduceSum(function(d) {
        if (d.year === '2008') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

    
    var year2009 = year_dim.group().reduceSum(function(d) {
        if (d.year === '2009') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

     var year2010 = year_dim.group().reduceSum(function(d) {
        if (d.year === '2010') {
            return +d.count;
        }
        else {
            return 0;
        }
    });
    var year2011 = year_dim.group().reduceSum(function(d) {
        if (d.year === '2011') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

    
    var year2012 = year_dim.group().reduceSum(function(d) {
        if (d.year === '2011') {
            return +d.count;
        }
        else {
            return 0;
        }
    });

	
    var stackedChart = dc.barChart("#offence-per-year1");
    stackedChart
         .width(630)
        .height(400)
        .dimension(year_dim)
        .group(year2008, "2008")
        .stack(year2012, "2009")
        .stack(year2012, "2010")
        .stack(year2012, "2011")
        .stack(year2012, "2012")
        .x(d3.scale.ordinal())
          .barPadding(.1)
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Proportion of offences recorded in 2011- 2012")
        .xAxisLabel("Types of Crimes")
		 .margins({top: 20, left: 80, bottom: 80, right: 200})
        .legend(dc.legend().x(420).y(20).itemHeight(15).gap(5))
    
}




