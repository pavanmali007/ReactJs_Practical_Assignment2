function displayWeather(data) {
  const name = data.location.name + ", " + data.location.region; // name
  const description = data.current.condition.text; // description
  const temperature = data.current.temp_c; // temperature
  const icon = data.current.condition.icon; // icon
  let date = new Date();
  let minutes = date.getMinutes();
  let time = (date.getHours() > 12) ? ( (date.getHours() % 12 || 12)+':'+minutes+' pm' ): (date.getHours())+':'+minutes+' am';
  let region = data.location.region;
  let country = data.location.country; 
  let humidity = data.current.humidity;
  let feelslike_c = data.current.feelslike_c;
  let wind_kph = data.current.wind_kph;
  let dewpoint_c = data.current.dewpoint_c;
  let cloud = data.current.cloud;

  // log data in console
  console.log(data);
  console.log(name);
  console.log(description);
  console.log(temperature);
  console.log(icon);
  console.log(time);
  console.log(region);
  console.log(country);
  console.log(humidity);
  console.log(feelslike_c);
  console.log(wind_kph);
  console.log(dewpoint_c);
  console.log(cloud);


  // display the data in initial data div
  const initialData = document.getElementById('initialData');
  initialData.classList.add('plate');
  initialData.innerHTML = `
    <div id="tempANDname">
      <div id="temperature">${temperature}°</div>
      <div id="cityName">${name}</div>
      <img id="icon" src="${icon}" alt="${description}" />
    </div>
    <sub class="dataElement" id="currentTime">${country} ${time}</sub>
    <div class="dataElement" id="description">${description}<button class="btn" id="refreshBtn">Refresh</button></div>
    `

    const weatherDataContainer = document.getElementById('weatherDataContainer');
      weatherDataContainer.innerHTML = `
      <div id="rowContentHeading">Information</div>
      <div class="wwData">
        <span class="title">country</span>
        <span class="wData">${country}</span>
      </div>
      <div class="wwData">
        <span class="title">city</span>
        <span class="wData">${name}</span>
      </div>
      <div class="wwData">
        <span class="title">humidity</span>
        <span class="wData">${humidity}%</span>
      </div>
      <div class="wwData">
        <span class="title">feelslike</span>
        <span class="wData">${feelslike_c}°</span>
      </div>
      <div class="wwData">
        <span class="title">dewpoint</span>
        <span class="wData">${dewpoint_c}°</span>
      </div>
      <div class="wwData">
        <span class="title">cloudy</span>
        <span class="wData">${cloud}%</span>
      </div>
      <div class="wwData">
        <span class="title">wind kph</span>
        <span class="wData">${wind_kph}km/h</span>
      </div>
      `
      weatherDataContainer.style.display = "flex";
}

// Function to make AJAX call to fetch weather data
function getWeather(city) {
    const apiKey = '36624c9ff2b346ec8c975407241310';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        displayWeather(data);
      } else {
        alert('City not found');
      }
    };
    xhr.send();
  }

// Handle form submission
  document.getElementById('weatherForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const city = document.getElementById('city').value;
  getWeather(city);


});
  
