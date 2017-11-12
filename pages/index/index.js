Page({
	data : {
		count : 0
	},
	countClick : function() {
		this.setData({
			count : this.data.count + 1
		});
	}
}
);