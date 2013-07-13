Ext.define("DonationHelper.view.Home", {
	extend: 'Ext.navigation.View',
	xtype: 'home',
	
 	initialize: function() {
		this.callParent(arguments);
        var menuList = {
                    xtype: "catlist",
                    listeners: {
                        itemtap: {
                                fn: this.onCategoryTap,
                                scope: this
                        }
                    }
            };

            this.add([menuList]);
      },

	onCategoryTap: function(view, index, target, record, event){
		console.log(event);
		console.log(target);
		console.log(record);
	},

	config: {
			title: "ReMuse",
	}
});