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
    selectDate: '2016-10-10',
    list2: [{
      date: '12月27日',
      selected: true,
      times: [{ time: '19:00' }, { time: '19:30' }, { time: '20:00' }, { time: '20:30' }, { time: '21:00' }]
    }, {
      date: '12月28日',
      selected: false,
      times: [{ time: '9:00' }, { time: '9:30' }, { time: '10:00' }, { time: '10:30' }, { time: '11:00' }]
    }, {
      date: '12月29日',
      selected: false,
      times: [{ time: '12:00' }, { time: '12:30' }, { time: '13:00' }, { time: '13:30' }, { time: '14:00' }]
    }
    ]
  },

  changeTime: function (e) {
    var index = e.detail.value[0];
    var list = this.data.list2;
    var i, d;

    for (i = 0; d = list[i]; ++i) {
      d.selected = i == index ? true : false;
    }
    this.setData(this.data);
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