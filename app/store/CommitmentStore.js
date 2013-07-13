Ext.define('DonationHelper.store.CommitmentStore', {
	extend: 'Ext.data.Store',
	requires: ['DonationHelper.model.Place', 'Ext.data.proxy.LocalStorage'],
	
	config: {
		model: 'DonationHelper.model.Place',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'CommitmentStore'
		}
	}
});