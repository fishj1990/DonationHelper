Ext.define('DonationHelper.store.Result', {
	extend: 'Ext.data.Store',
	requires: ['DOnationHelper.model.Place'],
	
	config: {
		model: "DonationHelper.model.Place",
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'resultStore'
		}
	}
});