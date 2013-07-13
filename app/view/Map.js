Ext.define('DonationHelper.view.Map', {
	extend: 'Ext.Map',
	xtype: 'results',
	requires: [
		"DonationHelper.view.ResultList"
	],
	
	config: {
		StyleHtmlContent: true,
		items: [{
			xtype: 'resultlist'
		}]
	},
});