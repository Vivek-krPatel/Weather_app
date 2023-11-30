const api_key ='';
const base = "https://api.openweathermap.org/data/2.5/";

var button = document.getElementById('submit');
button.addEventListener('click',setquery);


function setquery(){
    query = document.getElementById('input').value;
    //console.log(query);
    getResults(query);
}

function getResults (query) {
  fetch(`${base}weather?q=${query}&units=metric&APPID=${api_key}`)
    .then(weather => {
      return weather.json();
    }).then(displaydata);
}


function displaydata(data){
    let date = document.querySelector('.date')
    let temp = document.querySelector('.temp')
    let location = document.querySelector('.location')
    let weather_el = document.querySelector('.weather_ele');

    let today = new Date();
    let date_str = formatdate(today);
    date.innerHTML = date_str;
    location.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`;
    weather_el.innerHTML = data.weather[0].main;
}



function formatdate(day){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October',
                  'November','December'];

    let month = months[day.getMonth()];
    let today = days[day.getDay()];
    let date = day.getDate();
    let year = day.getFullYear();

    return `${today} ${date } ${month } ${year}`;
}

