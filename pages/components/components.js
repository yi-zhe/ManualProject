// pages/components/components.js
Page({

  viewClick: function () {
    wx.navigateTo({
      url: '../components/view',
    })
  },

  scrollViewClick: function () {
    wx.navigateTo({
      url: '../components/scroll-view',
    })
  },

  swiperViewClick: function () {
    wx.navigateTo({
      url: '../components/swiper',
    })
  },

  iconClick: function () {
    wx.navigateTo({
      url: '../components/icon',
    })
  },
  textClick: function () {
    wx.navigateTo({
      url: '../components/text',
    })
  }, 
  progressClick: function () {
    wx.navigateTo({
      url: '../components/progress',
    })
  },
  radioClick: function () {
    wx.navigateTo({
      url: '../components/radio',
    })
  },
  checkBoxClick: function () {
    wx.navigateTo({
      url: '../components/checkbox',
    })
  },
  switchClick: function () {
    wx.navigateTo({
      url: '../components/switch',
    })
  },

  labelClick: function () {
    wx.navigateTo({
      url: '../components/label',
    })
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