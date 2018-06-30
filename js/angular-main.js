var flightApp = angular.module('flightSearchApp', []).run(function($rootScope) {
    $rootScope.flightArr =[];
    $rootScope.to ='To';
    $rootScope.from ='From';
});

//Define the `PhoneListController` controller on the `phonecatApp` module
flightApp.controller('FlightSearch', function FlightSearch($scope, $rootScope, $http) {
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
  	
  	$scope.flightOneWay = {
  		0:{
		    "name":"Air India",
		    "from":'Delhi',
			"fromCode":'DEL',
			"to":'Pune',
			"toCode":'PNQ',
		    "price":1200,
		    "oneway": { 
		        	"departure":"10:00PM", 
			        "arrival":"12:00PM"
			    }
		 },
		 1:{
		    "name":"Air India",
		    "from":'Delhi',
			"fromCode":'DEL',
			"to":'Pune',
			"toCode":'PNQ',
		    "price":950,
		    "oneway": { 
		        	"departure":"11:00PM", 
			        "arrival":"01:00PM"
			    }
		 },
		 2:{
		    "name":"Air India",
		    "from":'Delhi',
			"fromCode":'DEL',
			"to":'Pune',
			"toCode":'PNQ',
		    "price":1500,
		    "oneway": { 
		        	"departure":"01:00PM", 
			        "arrival":"03:00PM"
			    }

		 },
		 3:{
		    "name":"Air India",
		    "from":'Delhi',
			"fromCode":'DEL',
			"to":'Pune',
			"toCode":'PNQ',
		    "price":1200,
		    "oneway": { 
		        	"departure":"3:00PM", 
			        "arrival":"05:30PM"
			    }
		 },
		 4:{
		    "name":"Air India",
		    "from":'Delhi',
			"fromCode":'DEL',
			"to":'Pune',
			"toCode":'PNQ',
		    "price":500,
		    "oneway": { 
		        	"departure":"10:00PM", 
			        "arrival":"12:00PM"
			    }
		 },
		 5:{
		    "name":"Air India",
	    	"from":'Delhi',
			"fromCode":'DEL',
			"to":'Pune',
			"toCode":'PNQ',
		    "price":200,
		    "oneway": { 
		        	"departure":"08:00PM", 
			        "arrival":"12:00PM"
			    }
	 	},
	 	6:{
		    "name":"Air India",	    	
			"from":'Pune',
			"fromCode":'PNQ',
			"to":'Delhi',
			"toCode":'DEL',
		    "price":200,
		    "oneway": { 
		        	"departure":"08:00PM", 
			        "arrival":"12:00PM"
			    }
	 	}
  	};


  	$scope.flightreturn = {
  		0:{
		    "name":"Air India",
		    "from":'Pune',
			"fromCode":'PNQ',
		    "to":'Delhi',
			"toCode":'DEL',			
		    "price":1200,
		    "oneway": { 
		        	"departure":"10:00PM", 
			        "arrival":"12:00PM"
			    },
		 	"return": { 
	        	"departure":"07:00PM", 
		        "arrival":"09:00PM"
		    }
		 },
		 1:{
		    "name":"Air India",
		    "from":'Pune',
			"fromCode":'PNQ',
		    "to":'Delhi',
			"toCode":'DEL',
		    "price":950,
		    "oneway": { 
		        	"departure":"11:00PM", 
			        "arrival":"01:00PM"
			    },
		 	"return": { 
	        	"departure":"02:00PM", 
		        "arrival":"4:00PM"
		    }
		 },
		 2:{
		    "name":"Air India",
		    "from":'Pune',
			"fromCode":'PNQ',
		    "to":'Delhi',
			"toCode":'DEL',
		    "price":1500,
		    "oneway": { 
		        	"departure":"01:00PM", 
			        "arrival":"03:00PM"
			    },
		    "return": { 
	        	"departure":"08:30PM", 
		        "arrival":"9:45PM"
		    }
		 },
		 3:{
		    "name":"Air India",
		    "from":'Pune',
			"fromCode":'PNQ',
		    "to":'Delhi',
			"toCode":'DEL',
		    "price":1200,
		    "oneway": { 
		        	"departure":"3:00PM", 
			        "arrival":"05:30PM"
			    },
			"return": { 
	        	"departure":"10:00PM", 
		        "arrival":"12:00PM"
		    }
		 },
		 4:{
		    "name":"Air India",
		    "from":'Pune',
			"fromCode":'PNQ',
		    "to":'Delhi',
			"toCode":'DEL',
		    "price":500,
		    "oneway": { 
		        	"departure":"10:00PM", 
			        "arrival":"12:00PM"
			    },
		    "return": { 
	        	"departure":"04:00PM", 
		        "arrival":"06:30PM"
		    }
		 },
		 5:{
		    "name":"Air India",
		    "from":'Pune',
			"fromCode":'PNQ',
		    "to":'Delhi',
			"toCode":'DEL',
		    "price":200,
		    "oneway": { 
		        	"departure":"08:00PM", 
			        "arrival":"12:00PM"
			    },
			"return": { 
	        	"departure":"10:00PM", 
		        "arrival":"12:00PM"
		    }
	 	}
  	};
  	// console.log($scope.flightArr);
  	$scope.range = function(){
  		$scope.error='';
  		v1 = angular.element('#min').val();
  		v2 = angular.element('#max').val();
  		$scope.temp=[];
  		angular.forEach($rootScope.selectedArray, function(value) {
  			console.log('IN Range each');
  			if(value.price > parseInt(v1) && value.price < parseInt(v2)){
  				console.log(value.price);
  				$scope.temp.push(value);
  				console.log('range ok');
  			}else{
  				console.log('range not proper');
  			}
		});
		$rootScope.flightArr = $scope.temp;
		if(!$rootScope.flightArr.length > 0){
			 $scope.error = 'FlightNotFound';
		 }
  		// console.log($rootScope.flightArr);
  	}
  	$scope.searchFlight = function(ftype){
  		$scope.error='';
  		$scope.temp=[];
  		if(ftype == 2){

  			$rootScope.from = angular.element('#frm2from').val();
			$rootScope.to = angular.element('#frm2to').val();
			$rootScope.departureDate = angular.element('#frm2departure').val();
			$rootScope.returnDate = angular.element('#frm2departure').val();
  			angular.forEach($scope.flightreturn, function(value) {
	  			if(value.from == $rootScope.from && value.to == $rootScope.to){
	  				$scope.temp.push(value);
	  				console.log('search ok');
	  			}else{
	  				console.log('wrong');
	  			}
			});

  			$rootScope.selectedArray = $scope.temp;
  			$rootScope.flightArr = $rootScope.selectedArray;


  		}else{	

  			$rootScope.from = angular.element('#frm1from').val();
			$rootScope.to = angular.element('#frm1to').val();
			$rootScope.departureDate = angular.element('#frm1departure').val();
			console.log('From:'+ $rootScope.from);
			console.log('To:'+$rootScope.to);

  			angular.forEach($scope.flightOneWay, function(value) {
	  			if(value.from == $rootScope.from && value.to == $rootScope.to){
	  				$scope.temp.push(value);
	  				console.log('search ok');
	  			}else{
	  				console.log('wrong');
	  			}
			});

  			$rootScope.selectedArray = $scope.temp;
  			$rootScope.flightArr = $rootScope.selectedArray;
  			
  		}
  		if(!$rootScope.flightArr.length > 0){
			 $scope.error = 'FlightNotFound';
		 }
  		console.log($rootScope.flightArr);
  	}

});

