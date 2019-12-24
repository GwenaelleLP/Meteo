var httpRequest = new XMLHttpRequest();
var key = "4e924c02b814d61686282097b4bd8381";
var link = document.querySelectorAll('area');
var body = document.getElementById("main");
link.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(e);
        var city = link.target
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                console.log(httpRequest.response);
                var tempJSON = JSON.parse(httpRequest.response);
                var test = document.getElementById('info');
                if (test != null) {
                    test.remove();
                }
                creatDiv(tempJSON);
            }
        }
        httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',fr&appid=' + key + '&units=metric', true);
        httpRequest.send();
    })
})

function creatDiv(tempJSON) {
    var saut = document.createElement('br');
    var volant = document.createElement('div');
    volant.id = "info";
    body.appendChild(volant);

    var titre = document.createElement('h1');
    volant.appendChild(titre);
    titre.innerHTML = tempJSON.name;

    var menu = document.createElement('article');
    menu.id = 'contenue'
    volant.appendChild(menu);

    var img = document.createElement('img');
    img.src ="images/"+ tempJSON.weather[0].main + ".png";
    console.log(tempJSON.weather[0].main);
    menu.appendChild(img);

    var para = document.createElement('p');
    menu.appendChild(para);
    para.innerHTML = " Il fait " + tempJSON.main.temp + " °C, avec un ressentis de " + tempJSON.main.feels_like + "°C<br>Le vent souffle à " + tempJSON.wind.speed + " km/h <br>Il y a un taux d'humidité de " + tempJSON.main.humidity + "%";

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'boutonF';
    btn.innerText = 'Fermer';
    volant.appendChild(btn);

    btn.addEventListener("click", function () {
        var test = document.getElementById('info');
        if (test != null) {
            test.remove();
        }
    })
}