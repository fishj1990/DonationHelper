Ext.define('DonationHelper.view.Start', {
    extend: 'Ext.Panel',
    xtype: 'start',
    requires: [
        'Ext.TitleBar',
		'Ext.TabPanel',
		'DonationHelper.view.CommitmentList',
		'DonationHelper.view.Home',
		'DonationHelper.view.CategoryList'
    ],

	initialize: function() {
		
		this.callParent(arguments);
		
		var categoryList = {
			xtype: 'categoryList',
			fullscreen: true,
			height: 'auto',
			
		}; 

		var tabBar = {
			xtype: 'tabpanel',
			tabBarPosition: 'bottom',
		
			items: [
				{
					title: 'Home',
					iconCls: 'home',
					layout: 'fit',
					items: [
						{
							xtype: 'home'
						}
					]
				},
			/*	{
					title: 'Commitments',
					layout: 'fit',
					items: [
						{
							xtype: 'commitments'
						}
					]
				} */
			]
		};
		this.add([tabBar]);
	}, 
	
	config: {
		layout: {
			type: 'fit'
		},
		title: "reMuse"
	}

});
