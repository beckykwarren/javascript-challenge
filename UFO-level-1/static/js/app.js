
var tableData = data;


var chosenDate = d3.select("#datetime");
var button1 = d3.select("#filter-btn");

button1.on('click',function(){
    dateValue = chosenDate.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === dateValue); 
    fillTable(filteredData)

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



