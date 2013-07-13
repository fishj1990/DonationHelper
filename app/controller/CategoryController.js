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
			resultlist: {
				itemtap: 'onItemTap'
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
			
			if(place.needed == "Clothing" || place.needed === 'All'){
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

				if(place.needed == "Electronics" || place.needed === 'All'){
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

				if(place.needed == "Furniture" || place.needed === 'All'){
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
	
	findCommonCenters: function(position){
			var lat = position.coords.latitude;
			var long = position.coords.longitude;

			var placesByDistance = [];

			var placeStore = Ext.getStore('PlaceStore');

			for (var i=0; i < placeStore.getCount(); i++){
				var place = placeStore.getAt(i).raw;

				if(place.needed === 'All'){
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
	findOtherCenters: function(position){
			var lat = position.coords.latitude;
			var long = position.coords.longitude;

			var placesByDistance = [];

			var placeStore = Ext.getStore('PlaceStore');

			for (var i=0; i < placeStore.getCount(); i++){
				var place = placeStore.getAt(i).raw;

				if(place.needed === 'Others'){
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

	
	error: function(msg){
		
	},
	
	onItemTap: function(view,index,target,record,event) {
		
		console.log("HI!");
	},
	
	
	findDonationCenters: function(target, item) {
		
		if (navigator.geolocation){
	
			if (item.data.name === "Clothes") {
				navigator.geolocation.getCurrentPosition(this.findClothingCenters, this.error);
			}
			if (item.data.name === "Electronics"){
				navigator.geolocation.getCurrentPosition(this.findElectronicCenters, this.error);
			}
			if (item.data.name === "Furniture"){
				navigator.geolocation.getCurrentPosition(this.findFurnitureCenters, this.error);
			}
			if (item.data.name === "Household,Toys,Books"){
				navigator.geolocation.getCurrentPosition(this.findCommonCenters, this.error);
			}
			if (item.data.name === "Others"){
				navigator.geolocation.getCurrentPosition(this.findOtherCenters, this.error);
			}
			
		} else {
			console.log("BOO!");
		}
	},


})