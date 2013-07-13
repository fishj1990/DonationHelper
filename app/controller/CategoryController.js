Ext.define("DonationHelper.controller.CategoryController", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			home: "home",
			results: "results"
		},
		control: {
			home: {
				findDonationCenters: "findDonationCenters"
			}
		}
	},
	
	findClothingCenters: function(position){
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
		
		var placeStore = Ext.getStore('PlaceStore');
	
		for (var i=0; i < placeStore.getCount(); i++){
			console.log(placeStore.getAt(i).raw);
			var placeLat = placeStore.getAt(i).raw.lat;
			var placeLong = placeStore.getAt(i).raw.long;
			console.log(placeLat);
			console.log(placeLong)
		}
		
	},
	
	findSportCenters: function(position){
		
	},
	
	findFurnitureCenters: function(position){
		
	},
	
	findHouseHoldCenters: function(position){
		
		
	},
	error: function(msg){
		
	},
	
	findDonationCenters: function(target, item) {
		
		if (navigator.geolocation){
	
			if (item.data.name === "Clothes") {
				navigator.geolocation.getCurrentPosition(this.findClothingCenters, this.error);
			}
			
		} else {
			console.log("BOO!");
		}
	},


})