setInterval(()=>{
    let d = new Date();
    document.getElementById("waqt").innerHTML = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit',hour12: false});
})




let p = fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=a3106545d0c9985c8001796683436a21");
p.then((value1) => {
    return value1.json()
}).then((data) => {
    console.log(data);

    const city = data.name;
    const cityis = document.getElementById('city');
    cityis.textContent = city;
    
    const temperatureAv = data.main.temp -273;
    const temperatureAvg = document.getElementById('temperature');
    temperatureAvg.textContent = temperatureAv.toFixed(2);

    const temperatureMax = data.main.temp_max-273;
    const temperaturemx = document.getElementById('max');
    temperaturemx.textContent = temperatureMax.toFixed(2);
    
    const temperatureMin = data.main.temp_min-273;
    const temperatureMn = document.getElementById('min');
    temperatureMn.textContent = temperatureMin.toFixed(2);

    const weatherDesc = data.wind.speed;
    const weather = document.getElementById('desc');
    weather.textContent = weatherDesc;
})


        
  