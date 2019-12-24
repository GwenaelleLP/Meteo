var httpRequest = new XMLHttpRequest();
var key = "4e924c02b814d61686282097b4bd8381";
var link = document.querySelectorAll('a');
link.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(e);
        var city = link.textContent
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                console.log(httpRequest.response);
                var tempJSON = JSON.parse(httpRequest.response);
                document.getElementById('info').innerHTML ="Dans la ville de "+ tempJSON.name+" il fait "+ tempJSON.main.temp+ " °C";

            }
        }
        httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',fr&appid=' + key + '&units=metric', true);
        httpRequest.send();
    })
})