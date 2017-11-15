// pages/components/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countries: [
      {
        name: '中国',
        value: '1'
      }, {
        name: '美国',
        value: '2',
        checked: true
      }, {
        name: '日本',
        value: '3',
        disabled: true
      }, {
        name: '韩国',
        value: '4'
      }, {
        name: '俄罗斯',
        value: '5',
        checked: true
      },
    ]
  },

  checkboxChange: function (event) {
    console.log('你选中的项目有:' + event.detail.value);
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