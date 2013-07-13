Ext.define("DonationHelper.store.CatStore", {
	extend: 'Ext.data.Store',
	requires: ['DonationHelper.model.CatItem', 'Ext.data.proxy.LocalStorage'],
	
	config: {
		model: 'DonationHelper.model.CatItem',
		autoload: true,
		
		proxy: {
			type: 'localstorage',
			id: 'CatItems'
		}
	}
});