Ext.define('DonationHelper.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    config: {
		tabBar: {
			docked: 'bottom',
			hidden: true
		},
		items: [
			{
				xtype: 'home'
			}
		]
	}
});