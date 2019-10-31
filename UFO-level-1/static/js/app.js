
var tableData = data;


var Form_Date = d3.select("#datetime");
var Button = d3.select("#filter-btn");

Button.on('click',function(){
    Date_Value = Form_Date.property("value");
    var sighting = tableData.filter(ufo => ufo.datetime === Date_Value); 
    fillTable(sighting)

}); 

function fillTable(newData) {
    
    var tbody = d3.select("tbody");
    tbody.html("");
    newData.map(( data) =>
    {
        var row = tbody.append("tr");
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);

    });

}; 



