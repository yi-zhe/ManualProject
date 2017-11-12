Page({
	data : {
		countMine : 0
	},
	countClickMine : function() {
		this.setData({
      countMine: this.data.countMine + 1
		});
	}
}
);