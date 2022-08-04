// variables
var date = moment().format('MMMM Do YYYY');
console.log(date);

var $cityBtn = $("#cityBtn");
// var cityList = $(".cityList"); add to html as list of searched cities
var fiveDay = $(".fiveDay");

moment(); // calls current date

let lat;
let lon;

// write getuvBGN function

// write getForecast function

// call weather api
let currentWeather = (cityName) => {
    let urlKey = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5133ceb0f2a1d71c6003e2c39af6728c&units=imperial`

    $.ajax({
        url: urlKey,
        method: 'GET'
    }).then(function (response) {
        lat = response.coord.lat;
        lon = response.coord.lon;
    $("#weathCard").empty();
    let nameBlock = $('<div class="nameBlock">')
    let cityNameCard = $('<h3>').text(`${cityName} (${moment().format('MM')}/${moment().format('DD')}/${moment().format('YYYY')})`);
    nameBlock.append(cityNameCard)
    $("#weathCard").append(nameBlock);

    let icon = $(`<img src="http://openweathermap.org/img/w/${response.weather[0].icon}.png">`);
    $("#weathCard").append(icon);

    $("#weathCard").append($('<p class="temperature">').text(`Temperature: ${response.main.temp} \xB0F`));
    $("#weathCard").append($('<p class="humidity">').text(`Humidity: ${response.main.humidity}%`));
    $("#weathCard").append($('<p class="windSpeed">').text(`Wind speed: ${response.wind.speed} MPH`));
    //getUvBGN();
    //getForecast();
    })
}

// make it work on search button click
$("#cityBtn").click((event) => {
    event.preventDefault();
    let searchedCity = $("#searchCity").val();
    $("#searchCity").val('');
    if (searchedCity) {
        $("#currentWeather").empty();
        $("#fiveDay").empty();
        currentWeather(searchedCity);
    }
})