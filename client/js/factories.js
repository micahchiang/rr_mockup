rentReporters.factory('userFactory', function(){
	var factory = {};
	var userInfo = {};

	factory.updateUserInformation = function(info, callback){
		var d = new Date();
		var m = d.getMonth();
		var y = d.getFullYear();
		var totalMonths;
		var totalRent;
		//Begin Rent Calculation
		var months = m - parseInt(info.moveInMonth);
			if(months < 0){
				months = months * -1;
			}
		var years = y - parseInt(info.moveInYear);
			if(years == 1){
				totalMonths = 12 - months;
			} else if(years == 0){
				totalMonths = months;
			} else {
				totalMonths = (12*years)+months;
			}
		totalRent = totalMonths * parseInt(info.rentalCostPerMonth);
		//End Rent Calculation
		userInfo.totalRentToDate = totalRent;
		userInfo.totalMonthsToDate = totalMonths;
		userInfo.rentalCostPerMonth = parseInt(info.rentalCostPerMonth);
		userInfo.moveInMonth = parseInt(info.moveInMonth);
		userInfo.moveInYear = parseInt(info.moveInYear);
		console.log(userInfo);
		callback();
	}
	factory.addNameAndEmail = function(info, callback){
		userInfo.firstName = info.firstName;
		userInfo.lastName = info.lastName;
		userInfo.email = info.email;
		console.log(userInfo);
		callback();
	}
	factory.addRentalInformation = function(info, callback){
		var landLordInfo = {};
		var userAddress = {};
		userInfo.birthday = info.birthday;
		userInfo.phone = info.phone;

		userAddress.addressOne = info.addressOne;
		userAddress.addressTwo = info.addressTwo;
		userAddress.city = info.city;
		userAddress.state = info.state;
		userAddress.zip = info.zip;

		if(info.landlordCompanyName){
			landLordInfo.companyName = info.landlordCompanyName;
		} else {
			landLordInfo.firstName = info.landlordFirstName;
			landLordInfo.lastName = info.landlordLastName;
			landLordInfo.phone = info.landlordPhoneNumber;
		}

		userInfo.landlordInfo = landLordInfo;
		userInfo.userAddress = userAddress;
		console.log(userInfo);
		callback();
	}

	factory.getUserInfo = function(callback){
		user = userInfo;
		callback(user);
	}

	return factory;
})