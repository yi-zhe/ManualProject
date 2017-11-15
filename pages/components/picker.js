// pages/components/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      '选项1',
      '选项2',
      '选项3'
    ],
    selectedIndex: 0,
    startTime: '00:00',
    endTime: '24:00',
    selectTime: '11:30',
    startDate: '2016-02-01',
    endDate: '2016-12-30',
    selectDate: '2016-10-10'
  },

  change1: function (e) {
    this.setData({
      selectedIndex: e.detail.value
    });
  },

  timechange: function (e) {
    this.setData({
      selectTime: e.detail.value
    });
  },
  datechange: function (e) {
    this.setData({
      selectDate: e.detail.value
    });
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