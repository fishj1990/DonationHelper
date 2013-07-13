Ext.define("DonationHelper.view.Home", {
	extend: 'Ext.navigation.View',
	xtype: 'home',
	
 	initialize: function() {
		this.callParent(arguments);
        var menuList = {
                    xtype: "catlist",
                    listeners: {
                        itemtap: {
                                fn: this.onMenuListDisclose,
                                scope: this
                        }
                    }
            };

            this.add([menuList]);
      },

	config: {
			title: "ReMuse",
			
	}
});