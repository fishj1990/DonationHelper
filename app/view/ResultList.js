Ext.define('DonationHelper.view.ResultList', {
	extend: 'Ext.List',
	xtype: 'resultlist',
	requires: ['DonationHelper.store.ResultStore'],
	config: {
		store: 'ResultStore',
		title: 'Places near you',
		emptyText: "Nothing found.. oops.",
		itemTpl:
		'<div class="myContent">'+
			'<div>Place: {name}</div>' +
			'<div>Purpose: {mission}</div>' + 
			'<div>Address: {address}</div>' +
			'<div>Tel: {phone}</div>' +
			'</div>',
		onItemDiscosure: false,
		disableSelection: true
	}
})