Ext.define('DonationHelper.store.PlaceStore', {
	extend: 'Ext.data.Store',
	requires: ['DonationHelper.model.Place'],
	
	config: {
		model: 'DonationHelper.model.Place',
		autoLoad: true,
		
		proxy: {
			type: 'localstorage',
			id: 'CommitmentStore'
		}
	}
});