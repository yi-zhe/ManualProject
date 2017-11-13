Page({
	data : {
		count : 0
	},
	countClick : function() {
			wx.navigateTo({
        url: "./mine/mine",
      });
	}
}
);