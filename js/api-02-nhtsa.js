
//##### National Highway Transit Safety Administration
//https://vpic.nhtsa.dot.gov/api/

var request = superagent;

//1. How many types of Chevrolet models are registered with the NHTSA?


const chevroletTypesModelsField = document.getElementById('nhtsa-1');


request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/chevrolet?format=json')
  .then(function(response){
  	var CTM  = response.body.Results.length;
  	chevroletTypesModelsField.textContent = CTM;
  	//console.log(CTM);

  });


//2. What are the vehicle types that Nissan has?

const nissanTypesModelsField = document.getElementById('nhtsa-2');

request.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json")
	.then(function(response){
		var NTM = response.body.Results;
		console.log(NTM);
		var NTM_ARRAY = [];
		NTM.forEach(function(typesModels) {
			NTM_ARRAY.push(typesModels.VehicleTypeName)
		})
		NTM_ARRAY = NTM_ARRAY.join(", ");
		nissanTypesModelsField.textContent = NTM_ARRAY; 		
	});

//3. What are the types of models that exist for Toyota trucks in 2017?

const toyotaTrucksModelsField = document.getElementById('nhtsa-3');

request.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/448/modelyear/2017/vehicleType/truck?format=json")
	.then(function(response){
		var TTM = response.body.Results;
		console.log(TTM);
		var TTM_ARRAY = [];
		TTM.forEach(function(trucksModels) {
			TTM_ARRAY.push(trucksModels.Model_Name)
		})
		TTM_ARRAY = TTM_ARRAY.join(", ");
		toyotaTrucksModelsField.textContent = TTM_ARRAY;
	});