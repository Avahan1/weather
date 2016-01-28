$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    // var markup = "The weather report... " + "will be here when I finish my homework for the programming class.";

    // var markup = "the weather condition in Chicago will be: " +
    // data.daily.summary

        var markup = "the current weather condition in Chicago is: " +
        data.currently.summary;

          var temp="current temperature in Chicago is:" +
          data.currently.temperature;

                var daily="daily weather report in Chicago is:"  +
                data.daily.summary;

                      var hour="hourly weather report in Chicago is:" +
                      data.hourly.summary;

                      var humidity="humidity in Chicago is:" +
                      data.currently.humidity;

    // var markup= "the hourly weather condition in Chicago is: " +
    // data.hourly.summary

    // End of your code

    $('.weather-report').html(markup);
        $('.weather-temp').html(temp);
          $('.daily-weather').html(daily);
              $('.hourly-weather').html(hour);
                $('.weather-humidity').html(humidity);
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
