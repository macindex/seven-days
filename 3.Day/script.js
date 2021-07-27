document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        showWarning('Carregando ...');

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=4f78b4394f806f40d8682f86f1348826`;
        //let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=4f78b4394f806f40d8682f86f1348826&units=metric&lang=pt_br`;
        let results = await fetch(url);
        let json = await results.json();

        console.log(json);

        if(json.cod === 200){
            showInfo({
                id: json.sys.id,
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
                wDesc: json.weather.description

            });
        }else{
            showWarning('Localização não encontrada!', json.cod)
        }
    }
});

function showInfo(json){
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.name}, ${json.temp}<sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}, <span>km/h</span>`
    // document.querySelector('.descInfo').innerHTML = `${json.wDesc}<span>km/h</span>`
}

function showWarning(msg){

    document.querySelector('.aviso').innerHTML = msg;
}
