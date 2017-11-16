// pages/components/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  changeValue: function (e) {
    console.log(e.detail);
    var value = e.detail.value;
    var pos = e.detai.lcursor;
    var left;

    if (pos != -1) {
      left = value.slice(0, pos);
      pos = left.replace(/123/g, '2').length;
    }
    return {
      value: e.detail.value.replace(/123/g, '2'),
      cursor: pos
    };
  },

  hideKeyboard: function (e) {
    if (e.detail.value.length >= 3) {
      wx.hideKeyboard();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})