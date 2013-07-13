Ext.define('DonationHelper.view.Commitments', {
	extend: 'Ext.tab.Panel',
	xtype: 'commitments',
	requires: [
		"Ext.TitleBar",
		"DonationHelper.view.CommitmentList"
	],
	
	config: {
		items: [{
			xtype: 'commitmentList'
		}],
	}
	
});