async function getWeather() {
  let city = document.getElementById("city").value;

  let apiKey = "ef645d16f152132011f5707f30bd2ae5";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    let temp = data.main.temp;

    document.getElementById("result").innerText =
      `Temperature in ${city} is ${temp}°C`;

  } catch (error) {
    console.log(error);
    document.getElementById("result").innerText = "Error fetching data";
  }
}