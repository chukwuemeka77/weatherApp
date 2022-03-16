window.addEventListener("load", function(){
  
  
  
  
    


    

const input = document.querySelector('#cityinput')
  var btn = document.querySelector('#add');
  var city = document.querySelector('#cityoutput')
  var description = document.querySelector('#description')
  var temp = document.querySelector('#temp')
  var wind = document.querySelector('#wind')
  var msg=document.querySelector('.msg')
  var country=document.querySelector('#country')
  var img=document.querySelector('#city-icon')
  function convertion(val){
    return (val - 273).toFixed(2)
}  
btn.addEventListener('click', function(e){ e.preventDefault();

  const inputVal = input.value;
  const url= `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=631b2522cc672480a232e53d72c18a6c`;
 
  fetch(url)
  .then(response => response.json())
  .then(data => {    console.log(data)
   

   
  var nameval = data['name']
  var descrip =data ['weather'][0]['description'] 
  var icon= data['weather'][0]['icon']
  
  var tempature = data['main']['temp']
  var wndspd = data['wind']['speed']
 var county= data['sys']['country']
 
//Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
  city.innerHTML=`Weather of <span>${nameval}<span>`
  temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
  description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
  wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>` 
  country.innerHTML=`Country:<span>${county}</span>`
    img.src=(icon);
    // do stuff with the data
  })
  .catch(
  () => {
  
   // msg.textContent = "Please enter a valid city 😩";
  })


 


/*Promise.all([
	fetch( "http://api.openweathermap.org/data/2.5/weather?q=london&appid=631b2522cc672480a232e53d72c18a6c"),
  fetch( "https://api.openweathermap.org/data/2.5/weather?q=kingston&units=metric&appid=894c8d4f9c11583de67429fa469e5e4f"),
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2751e991ace1e50ec774470ea53e4c38&mode=xml&unit=metric")
  
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here
	console.log(data);
}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});*/






 
})

})

