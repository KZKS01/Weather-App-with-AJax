//testing: console.log("I am ready to go.");

const $weatherFor = $('#weatherFor');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $input = $('input[type="text"]');

let weatherData, userInput;

$("form").on("submit", handleGetData);

function handleGetData(event) {
    event.preventDefault()
    // calling preventDefault() on a 'submit' event will prevent a page refresh
  
    userInput = $input.val();

    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=c279c4098f15ae8ccc37d8972d308ce0`,
    }).then(
      (data) => {
        weatherData = data;
        render();
        $("form").trigger("reset")
      },
      
      (error) => {
        console.log("bad request", error)
      }
    )
  }

  //will only be called in success path
function render() {
    $weatherFor.text(weatherData.name);
    $temperature.text(weatherData.main.temp);
    $feelsLike.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather[0].description);
}
