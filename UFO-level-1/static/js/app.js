// from data.js
var tableData = data;

var input = d3.select("#datetime");
var button = d3.select("#filter-btn");

function handleInput() {
    tableData = data
    d3.event.preventDefault();
    d3.selectAll("tr").remove();
    var inputValue = input.property("value");
    var newData = tableData.filter((item) => item.datetime==inputValue);

    tbody = d3.select("tbody");

    newData.forEach((ufo) => {
        var row = tbody.append("tr");
        row.append("td").text(ufo.datetime);
        row.append("td").text(ufo.city);
        row.append("td").text(ufo.state);
        row.append("td").text(ufo.country);
        row.append("td").text(ufo.shape);
        row.append("td").text(ufo.durationMinutes);
        row.append("td").text(ufo.comments);
    })
}

button.on("click", handleInput);

