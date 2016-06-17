rentReporters.controller('usersController', function($scope, userFactory, $location){

	$scope.addUserInformation = function(){
		var newUserInformation = $scope.newUserInfo;
		userFactory.updateUserInformation(newUserInformation, function(){
			console.log("success!");
		})
		// console.log(newUserInformation);
		// $scope.newUserInfo = {};
		$location.path('/step2');
	};

	$scope.addUserNameEmail = function(){
		var userNameEmail = $scope.userNameEmail;
		userFactory.addNameAndEmail(userNameEmail, function(){
			console.log('successfully added users name and email');
		})
		// console.log(userNameEmail);
		$location.path('/step3');
	}

	$scope.addRentalInformation = function(){
		var rentalData = $scope.userRentalInformation;
		userFactory.addRentalInformation(rentalData, function(){
			console.log("added rental information");
		})
		$location.path('/step4');
	}

	getUserInformation = function(){
		userFactory.getUserInfo(function(data){
			$scope.userInfo = data;
			console.log($scope.userInfo);
			console.log('in user controller');
		})
	}
	getUserInformation();

});