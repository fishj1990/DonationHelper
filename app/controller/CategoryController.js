Ext.define("DonationHelper.controller.CategoryController", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			home: "home",
			results: "results",
		},
		control: {
			home: {
				findDonationCenters: "findDonationCenters"
			},
			test: {
				scope: this
			}
		}
	},
	findDistance: function(lat1,long1,lat2,long2) {
		var dx = lat1 - lat2;
		var dy = long1 - long2;
		var distance = Math.sqrt(dx * dx + dy * dy);
		return distance;
	},
	
	sorter: function(a,b) {
		return a.distance > b.distance ? 1: -1;
	},
	
	findClothingCenters: function(position){
		var lat = position.coords.latitude;
		var long = position.coords.longitude;
		
		var placesByDistance = [];
		
		var placeStore = Ext.getStore('PlaceStore');
	
		for (var i=0; i < placeStore.getCount(); i++){
			var place = placeStore.getAt(i).raw;
			
			if(place.needed == "clothes" || place.needed === 'all'){
				var placeLat = place.lat;
				var placeLong = place.long;
			
				var distance = catController.findDistance(lat,long,placeLat,placeLong);
				place.distance = distance;
				console.log(place.distance);
				placesByDistance.push(place);
			}
		}
		
		// sort array to locate closest centers
		placesByDistance.sort(catController.sorter);
		var max = 5;
		
		var resultStore = Ext.getStore("ResultStore");
		resultStore.removeAll();
	
		for( var i = 0; i < placesByDistance.length; i++){
			if(i === max) break;
	
			var place = new DonationHelper.model.Place({
				name: placesByDistance[i].name,
				lat: placesByDistance[i].lat,
				long: placesByDistance[i].long,
				mission: placesByDistance[i].mission,
				needed: placesByDistance[i].needed,
				address: placesByDistance[i].address,
				phone: placesByDistance[i].phone
			});
	
			resultStore.add(place);
		}
		
		catController.getHome().push({
			xtype:'resultlist'
		});
	},
	
	findElectronicCenters: function(position){
			var lat = position.coords.latitude;
			var long = position.coords.longitude;

			var placesByDistance = [];

			var placeStore = Ext.getStore('PlaceStore');

			for (var i=0; i < placeStore.getCount(); i++){
				var place = placeStore.getAt(i).raw;

				if(place.needed == "electronics" || place.needed === 'all'){
					var placeLat = place.lat;
					var placeLong = place.long;

					var distance = catController.findDistance(lat,long,placeLat,placeLong);
					place.distance = distance;
					console.log(place.distance);
					placesByDistance.push(place);
				}
			}

			// sort array to locate closest centers
			placesByDistance.sort(catController.sorter);
			var max = 5;

			var resultStore = Ext.getStore("ResultStore");
			resultStore.removeAll();

			for( var i = 0; i < placesByDistance.length; i++){
				if(i === max) break;

				var place = new DonationHelper.model.Place({
					name: placesByDistance[i].name,
					lat: placesByDistance[i].lat,
					long: placesByDistance[i].long,
					mission: placesByDistance[i].mission,
					needed: placesByDistance[i].needed,
					address: placesByDistance[i].address,
					phone: placesByDistance[i].phone
				});

				resultStore.add(place);
			}

			catController.getHome().push({
				xtype:'resultlist'
			});
	},
	
	findFurnitureCenters: function(position){
			var lat = position.coords.latitude;
			var long = position.coords.longitude;

			var placesByDistance = [];

			var placeStore = Ext.getStore('PlaceStore');

			for (var i=0; i < placeStore.getCount(); i++){
				var place = placeStore.getAt(i).raw;

				if(place.needed == "furniture" || place.needed === 'all'){
					var placeLat = place.lat;
					var placeLong = place.long;

					var distance = catController.findDistance(lat,long,placeLat,placeLong);
					place.distance = distance;
					console.log(place.distance);
					placesByDistance.push(place);
				}
			}

			// sort array to locate closest centers
			placesByDistance.sort(catController.sorter);
			var max = 5;

			var resultStore = Ext.getStore("ResultStore");
			resultStore.removeAll();

			for( var i = 0; i < placesByDistance.length; i++){
				if(i === max) break;

				var place = new DonationHelper.model.Place({
					name: placesByDistance[i].name,
					lat: placesByDistance[i].lat,
					long: placesByDistance[i].long,
					mission: placesByDistance[i].mission,
					needed: placesByDistance[i].needed,
					address: placesByDistance[i].address,
					phone: placesByDistance[i].phone
				});

				resultStore.add(place);
			}

			catController.getHome().push({
				xtype:'resultlist'
			});
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