$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "The weather report... " + "will be here when I finish my homework for the programming class.";

    var current={latitude: 42.056459, longitude: -87.675267, timezone: "America/Chicago", offset: -6,
      currently: {apparentTemperature: 29.16
        cloudCover: 0.93
        dewPoint: 24.63
        humidity: 0.83
        icon: "partly-cloudy-night"
        nearestStormBearing: 99
        nearestStormDistance: 18
        ozone: 322.4
        precipIntensity: 0
        precipProbability: 0
        pressure: 1015.74
        summary: "Mostly Cloudy"
        temperature: 29.16
        time: 1453680824
        visibility: 8.26
        windBearing: 98
        windSpeed: 2.45}
      };



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
//
