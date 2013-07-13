Ext.define("DonationHelper.controller.CategoryController", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			home: "home",
			results: "results"
		},
		control: {
			home: {
				findDonationCenter: "onCategoryTap"
			}
		}
	}

})