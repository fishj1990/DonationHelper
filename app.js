//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'DonationHelper': 'app',
	'Ext.plugin': 'lib/plugin'
});
//</debug>

var catController = null;
var mapVar = null;

Ext.application({
    name: 'DonationHelper',

    requires: [
        'Ext.MessageBox',
		'Ext.plugin.google.Traffic',
		'Ext.plugin.google.Tracker'
    ],
	
	models: ['Place'],
    views: ['Start', 'CommitmentList', 'Commitments', 'Results', 'ResultList'],
	controllers: ['CategoryController'],
	stores: ['CommitmentStore', 'CatStore', 'PlaceStore', 'ResultStore'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },


    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		var catStore = Ext.create("DonationHelper.store.CatStore");
		
		
		var clothingCategory = new DonationHelper.model.CatItem({name:'Clothes'});
		var electronicsCategory = new DonationHelper.model.CatItem({name:'Electronics'});
		var furnitureCategory = new DonationHelper.model.CatItem({name: 'Furniture'});
		var houseHoldCategory = new DonationHelper.model.CatItem({name: 'Household,Toys,Books'});
		var OthersCategory = new DonationHelper.model.CatItem({name: 'Others'});
		
		Ext.getStore('CatStore').add(clothingCategory);
		Ext.getStore('CatStore').add(electronicsCategory);
		Ext.getStore('CatStore').add(furnitureCategory);
		Ext.getStore('CatStore').add(houseHoldCategory);
		Ext.getStore('CatStore').add(OthersCategory);
		
		catController = this.getController('CategoryController');
	
		console.log(this);
		
		// This is dumb for demo purposes -- NOT ENOUGH TIME :(
/*		var arkThrift = new DonationHelper.model.CatItem({
											name:'Ark Thrift Shop',
											lat: 41.907787,
											long: -87.676585,
											mission: "Refugees of Eastern Europe",
											needed: "all",
											address: "1302 N Milwaukee Ave",
											phone: "(773) 862-5011"
		}); */
		
		var arkThrift = new DonationHelper.model.CatItem({
													name:'Ark Thrift Shop',
													lat: 41.907787,
													long: -87.676585,
													mission: "Refugees of Eastern Europe",
													needed: "All",
													phone: "773-248-1117",
													address: "1302 N. Milwaukee Avenue, Chicago, IL"
				});
		var bridgeThrift = new DonationHelper.model.CatItem({
		                                            name:'Bridge to Success',
													lat: 41.866156,
													long: -87.647051,
													mission: "Low/no-income and Youth Job-seekers",
													needed: "Clothing",
													phone: "312-733-9742",
													address: "1236 S. Halsted, Chicago, IL"
				});
		var catholicThrift = new DonationHelper.model.CatItem({
		                                            name:'Catholic Charities Emergency Assistance',
													lat: 41.895178,
													long: -87.632375,
													mission: "The Needy",
													needed: "All",
													phone: "312-655-7510",
													address: " 721 N. LaSalle, Chicago, IL"
				});
		var abusedThrift = new DonationHelper.model.CatItem({
		                                            name:'Chicago Abused Women Coalition',
													lat: 41.902697,
													long: -87.706800,
													mission: "Abused Women",
													needed: "Others",
													phone: "773-489-9081",
													address: "1160 N. Kedzie, Chicago, IL"
				});
		var clearThrift = new DonationHelper.model.CatItem({
		                                            name:'Clearbrook',
													lat: 42.066630,
													long: -88.004502,
													mission: "Children and Adults with Developmental Disabilities",
													needed: "All",
													phone: "847-577-0267",
													address: "1815 W. Central Road, Arlington Heights, IL"
				});
		var computerThrift = new DonationHelper.model.CatItem({
		                                            name:'Computers for Schools',
													lat: 41.936390,
													long: -87.743112,
													mission: "Schools and Other Non-profits",
													needed: "Electronics",
													phone: "800-939-6000",
													address: "3053 N. Knox, Chicago, IL"
				});
		var encoreThrift = new DonationHelper.model.CatItem({
		                                            name:'Encore and More',
													lat: 42.076654,
													long: -87.688005,
													mission: "National Council for Jewish Women – Northshore Section",
													needed: "All",
													phone: "847-853-8888",
													address: "107 Central Avenue, Wilmette, IL"
				});
		var innerThrift = new DonationHelper.model.CatItem({
		                                            name:'The Inner Voice',
													lat: 41.885875,
													long: -87.667944,
													mission: "Chicago’s Emergency Shelter Network",
													needed: "All",
													phone: "312-666-8110",
													address: "1621 W. Walnut, Chicago, IL"
				});
		var lambThrift = new DonationHelper.model.CatItem({
		                                            name:'Lamb’s Farm Thrift Shop',
													lat: 42.282980,
													long: -87.953337,
													mission: "Residents of Lambs Farm",
													needed: "All",
													phone: "847-327-9053",
													address: "Hwy 176 & I94, Libertyville, IL"
				});
		var sinaiThrift = new DonationHelper.model.CatItem({
		                                            name:'Mt. Sinai Hospital Resale Shop',
													lat: 41.932807,
													long: -87.649751,
													mission: "Mt. Sinai Hospital",
													needed: "All",
													phone: "773-935-1434",
													address: " 814 W. Diversey, Chicago, IL"
				});
		var ortThrift = new DonationHelper.model.CatItem({
		                                            name:'ORT Thrift Shop',
													lat: 42.066318,
													long: -87.722676,
													mission: "Women’s American ORT Education/community Services",
													needed: "All",
													phone: "847-433-1697",
													address: "Park Pl & Highland Ave, Evanston, IL"
				});
		var pacificThrift =  new DonationHelper.model.CatItem({
		                                            name:'Pacific Garden Mission',
													lat: 41.862007,
													long: -87.639884,
													mission: "Homeless",
													needed: "Clothing",
													phone: "312-243-2480",
													address: "1458 S. Canal, Chicago, IL"
				});
		var poisedThrift = new DonationHelper.model.CatItem({
		                                            name:'Poised for Success',
													lat: 41.881920,
													long: -87.993640,
													mission: "Working Women on Financial Assistance",
													needed: "Clothing",
													phone: "630-691-1455",
													address: "312 S. Westmore Rd., Lombard, IL"
				});
		var sarahThrift = new DonationHelper.model.CatItem({
		                                            name:'Sarah’s Circle',
													lat: 41.968648,
													long: -87.655252,
													mission: "Homeless Women",
													needed: "Others",
													phone: "773-728-1991 ext. 301",
													address: "4750 N. Sheridan Road, Suite #220, Chicago, IL"
				});
		var sharingThrift = new DonationHelper.model.CatItem({
		                                            name:'The Sharing Connection',
													lat: 41.793667,
													long: -88.040492,
													mission: "Various Community Agencies",
													needed: "Furniture",
													phone: "630-971-0565",
													address: "5111 Chase Ave., Downers Grove, IL"
				});
		var triThrift = new DonationHelper.model.CatItem({
		                                            name:'Tri-County Thrift',
													lat: 42.257226,
													long: -88.149963,
													mission: "Tri-County Pregnancy & Parenting Services",
													needed: "All",
													phone: "847-526-0383",
													address: "457 W. Liberty, Waconda, IL"
				});
		var worldThrift = new DonationHelper.model.CatItem({
		                                            name:'World Computer Exchange',
													lat: 41.716882,
													long: -87.671773,
													mission: "Schools and Institutions in Developing Countries",
													needed: "Electronics",
													address: "9717 S. Damen Ave, Chicago, IL"
				});
		
				Ext.getStore('PlaceStore').add(arkThrift);
				Ext.getStore('PlaceStore').add(bridgeThrift);
				Ext.getStore('PlaceStore').add(catholicThrift);
				Ext.getStore('PlaceStore').add(abusedThrift);
				Ext.getStore('PlaceStore').add(clearThrift);
				Ext.getStore('PlaceStore').add(computerThrift);
				Ext.getStore('PlaceStore').add(encoreThrift);
				Ext.getStore('PlaceStore').add(innerThrift);
				Ext.getStore('PlaceStore').add(lambThrift);
				Ext.getStore('PlaceStore').add(sinaiThrift);
				Ext.getStore('PlaceStore').add(ortThrift);
				Ext.getStore('PlaceStore').add(pacificThrift);
				Ext.getStore('PlaceStore').add(poisedThrift);
				Ext.getStore('PlaceStore').add(sarahThrift);
				Ext.getStore('PlaceStore').add(sharingThrift);
				Ext.getStore('PlaceStore').add(triThrift);
				Ext.getStore('PlaceStore').add(worldThrift);

        // Initialize the main view
        Ext.Viewport.add(Ext.create('DonationHelper.view.Start'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
});

