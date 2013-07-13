Ext.define('DonationHelper.view.Results', {
	extend: 'Ext.form.Panel',
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