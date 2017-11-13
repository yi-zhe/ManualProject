Page({
  blockClick: function () {
    wx.navigateTo({
      url: "../layout/block",
    });
  },
  lineClick: function () {
    wx.navigateTo({
      url: '../layout/line',
    })
  }
});
