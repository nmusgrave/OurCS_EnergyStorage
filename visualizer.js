//var sampleSVG = d3.select("#viz")
//    .append("svg")
//    .attr("width", 100)
//    .attr("height", 100);
//
//sampleSVG.append("circle")
//    .style("stroke", "gray")
//    .style("fill", "white")
//    .attr("r", 40)
//    .attr("cx", 50)
//    .attr("cy", 50)
//    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
//    .on("mouseout", function(){d3.select(this).style("fill", "white");});

d3.csv("fourPeople_EnergyProfiles.csv", function(d) {
       return {
       d["Time of Day"] = +d["Time of Day"];
       d["Total Energy Used 4 People"] = +d["Total Energy Used 4 People"];
       };
       }, function(d) {
       console.log(d[0]);
       });
