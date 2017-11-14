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
  },
  lineBlockClick: function () {
    wx.navigateTo({
      url: '../layout/line-block',
    })
  },
  floatingClick: function () {
    wx.navigateTo({
      url: '../layout/floating',
    })
  },
  positionClick: function () {
    wx.navigateTo({
      url: '../layout/position',
    })
  }
});
