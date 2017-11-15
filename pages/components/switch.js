// pages/components/switch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switches: [{
      name: 'switch1',
      checked: false,
      type: 'switch',
      changeEventName: 'change'
    }, {
      name: 'switch2',
      checked: true,
      type: 'checkbox',
      changeEventName: 'change'
    }]
  },

  change: function (e) {
    var name = e.currentTarget.dataset.name;
    var switches = this.data.switches;
    var i, s;
    for (i = 0; s = switches[i]; ++i) {
      if (s.name == name) {
        s.checked = e.detail.value;
        break;
      }
    }
    console.log(name + '的选中状态为:' + e.detail.value);
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