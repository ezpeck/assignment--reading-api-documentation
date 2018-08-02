var request = superagent;

//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')

request.get('https://apis.is/hospital')
  .then(function(serverRes){
    let apiJsonData = serverRes.body
    //console.log(apiJsonData)
    answerElement_iceland_1.innerHTML = apiJsonData.results[0].birthNumbers
  })



//========================================================================
// (3) How many **arrival** flights are scheduled for today?
const answerElement_iceland_3 = document.getElementById('iceland-3')

var API_URL = "http://apis.is/flight?language=en&type=arrivals";

request
.get(API_URL)
.then(function(response){
	var vuelos = response.body;
	console.log(vuelos);
	answerElement_iceland_3.textContent = vuelos.results.length;
});



//========================================================================
// (2) What is the next concert event in Iceland?
const answerElement_iceland_2 = document.getElementById('iceland-2');

request.get('http://apis.is/concerts')
  .then(function(response){
  	var conciertos  = response.body;
  	console.log(conciertos.results[0].eventDateName);
  	answerElement_iceland_2.textContent = conciertos.results[0].eventDateName;
 
  })


//
