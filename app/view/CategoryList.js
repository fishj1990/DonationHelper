Ext.define("DonationHelper.view.CategoryList", {
	extend: 'Ext.dataview.List',
	xtype: 'catlist',
	requires: ["DonationHelper.store.CatStore"],
	
	config: {
		title: 'Categories',
		loadingText: "Loading categories... ",
		store: 'CatStore',
		onItemDisclosure: true,
		itemTpl: '<div item="category">'+
					'<div>{name}</div>' +
					'</div>'
	}
});