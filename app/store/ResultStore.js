Ext.define('DonationHelper.store.ResultStore', {
	extend: 'Ext.data.Store',
	requires: ['DonationHelper.model.Place'],
	
	config: {
		model: "DonationHelper.model.Place",
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'resultStore'
		}
	}
});