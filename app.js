//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'DonationHelper': 'app'
});
//</debug>

var catController = null;

Ext.application({
    name: 'DonationHelper',

    requires: [
        'Ext.MessageBox'
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
		
		// This is dumb for demo purposes -- NOT ENOUGH TIME :(
		var arkThrift = new DonationHelper.model.CatItem({
											name:'Ark Thrift Shop',
											lat: 41.907787,
											long: -87.676585,
											mission: "Refugees of Eastern Europe",
											needed: "all",
											address: "1302 N Milwaukee Ave",
											phone: "(773) 862-5011"
		});
		
		Ext.getStore('PlaceStore').add(arkThrift);

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
    }
});
