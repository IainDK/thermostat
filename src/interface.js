$(document).ready(function() {

  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if (thermostat.energyUsage() === 'low-usage') {
    $("#temperature").css("color", "green");}
    else if (thermostat.energyUsage() === 'medium-usage') {
    $("#temperature").css("color", "orange");}
    else {
    $("#temperature").css("color", "red");}
  }
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.upButton();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.downButton();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-toggle').click(function() {
    thermostat.togglePowerSavingMode();
    updateTemperature();
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city
    var token = '&appid=64f745ba72497d79c7328f9cdc4dfa53';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  };

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=64f745ba72497d79c7328f9cdc4dfa53&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    });
  });
});
