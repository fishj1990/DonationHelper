Ext.define('DonationHelper.model.Place', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			'name',
			'lat',
			'long',
			'mission',
			'needed'
		]
	}
});