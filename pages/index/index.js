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
  flexClick: function () {
    wx.navigateTo({
      url: '../layout/flex',
    })
  }
});
