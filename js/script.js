// Fonction appelée lors du click du bouton
function start(cityName) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(cityName);
  // Appel de la fonction fetchFourDaysForecast

  apiWeather
    .getThreeDaysForecast()
    .then(function(response) {
      const list = response.data.list;
      list.forEach(function(element, index) {
        const main = (list[index].weather[0].main);
        const description = list[index].weather[0].description;
        const icon= apiWeather.getHTMLElementFromIcon(list[index].weather[0].icon);
        const temp = list[index].temp.day;
        document.getElementById(`day${(index)}-forecast-main`).innerHTML = main;
        document.getElementById(`day${index}-forecast-more-info`).innerHTML = description;
        document.getElementById(`icon${index}-weather-container`).innerHTML = icon;
        document.getElementById(`day${index}-forecast-temp`).innerHTML = `${temp}°C`;
      });

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function refresh(){
	// recupère la valeur de l'input
	const cityName = document.getElementById('city-input').value;

	if(cityName){
		start(cityName);
	}
	// On Check si cette valeur n'est pas vide
	// On Lance dans start
}
