var flightApp = angular.module('flightSearchApp', []);

//Define the `PhoneListController` controller on the `phonecatApp` module
flightApp.controller('FlightSearch', function FlightSearch($scope,$http) {
	// $http.get('js/flightlist.json').
	//   then(function onSuccess(response) {
	//   	$scope.flights = response;
	//   	console.log(response);
	//      //angular.extend(_this, data);
	//      //defer.resolve();
	//   }).
	//   catch(function onError(response) {
	//    console.log(response);
	//   }); 
  	$scope.flightArr = {
  		"flight1":{
		    "name":"Air India",
		    "price":1200,
		    "time": [{ 
		        	"departure":"10.00PM", 
			        "arival":"1200"
			    }
			]
		 },
		 "flight2":{
		    "name":"Air India",
		    "price":950,
		    "time": [{ 
		        	"departure":"10.00PM", 
			        "arival":"1200"
			    }
			]
		 },
		 "flight3":{
		    "name":"Air India",
		    "price":1500,
		    "time": [{ 
		        	"departure":"10.00PM", 
			        "arival":"1200"
			    }
			]
		 },
		 "flight4":{
		    "name":"Air India",
		    "price":1200,
		    "time": [{ 
		        	"departure":"10.00PM", 
			        "arival":"1200"
			    }
			]
		 },
		 "flight5":{
		    "name":"Air India",
		    "price":500,
		    "time": [{ 
		        	"departure":"10.00PM", 
			        "arival":"1200"
			    }
			]
		 },
		 "flight6":{
		    "name":"Air India",
		    "price":200,
		    "time": [{ 
		        	"departure":"10.00PM", 
			        "arival":"1200"
			    }
			]
	 	}
  	};
  	console.log($scope.flightArr);

});

