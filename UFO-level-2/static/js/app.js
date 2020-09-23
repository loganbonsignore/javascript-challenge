// from data.js
var tableData = data;

var date = d3.select("#datetime");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");

var button = d3.select("#filter-btn");

function handleInput() {
    tableData = data;
    d3.event.preventDefault();
    
    d3.selectAll("tr").remove();

    var dateValue = date.property("value");
    var cityValue = city.property("value");
    var stateValue = state.property("value");
    var countryValue = country.property("value");
    var shapeValue = shape.property("value");

    if (dateValue) {
        tableData = tableData.filter((item) => item.datetime==dateValue);
    }
    if (cityValue) {
        tableData = tableData.filter((item) => item.city==cityValue);
    }
    if (stateValue) {
        tableData = tableData.filter((item) => item.state==stateValue);
    }
    if (countryValue) {
        tableData = tableData.filter((item) => item.country==countryValue);
    }
    if (shapeValue) {
        tableData = tableData.filter((item) => item.shape==shapeValue);
    }

    tbody = d3.select("tbody");

    tableData.forEach((ufo) => {
        var row = tbody.append("tr");
        row.append("td").text(ufo.datetime);
        row.append("td").text(ufo.city);
        row.append("td").text(ufo.state);
        row.append("td").text(ufo.country);
        row.append("td").text(ufo.shape);
        row.append("td").text(ufo.durationMinutes);
        row.append("td").text(ufo.comments);
    })

};

button.on("click", handleInput);

