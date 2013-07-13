Ext.define("DonationHelper.view.CommitmentList", {
	extend: 'Ext.List',
	xtype: 'commitmentList',
	requires: ["DonationHelper.store.CommitmentStore"],
	
	config: {
		store: 'CommitmentStore',
		title: 'Commitment List',
		emptyText: 'You currently do not have any commitments! Be a hero.',
		itemTpl:
		
		'<div class="commitments">' +
			'<div>Test</div>' + 
			'</div>',
			
	}
	
	
});