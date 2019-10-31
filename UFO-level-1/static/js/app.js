// from data.js
var tableData = data;

var inputDate = d3.select("#datetime");
var button1 = d3.select("#filter-btn");
// YOUR CODE HERE!

button1.on("click",function(){

    date = inputDate.property("value");
    var sighting = sightings.filter(ufo => ufo.datetime === date);
    var tbody = d3.select("tbody");
    tbody.html("");
    
    sighting.map((sighting) =>
    {
        var row = tbody.append("tr");
        row.append("td").text(sighting.datetime);
        row.append("td").text(TitleCase(sighting.city));
        row.append("td").text(sighting.state.toUpperCase());
        row.append("td").text(sighting.country.toUpperCase());
        row.append("td").text(TitleCase(sighting.shape));
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);

    });
});






