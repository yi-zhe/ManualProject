// pages/components/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    sliderList: [
      {
        className: 'bg-red',
        name: 'slider1'
      },
      {
        className: 'bg-blue',
        name: 'slider2'
      },
      {
        className: 'bg-green',
        name: 'slider3'
      }
    ],
    sliderListCustom: [
      {
        selected: true,
        imageSource: '../../images/swipe/banner1.jpg'
      },
      {
        selected: false,
        imageSource: '../../images/swipe/banner2.jpg'
      },
      {
        selected: false,
        imageSource: '../../images/swipe/banner3.jpg'
      }
    ]
  },
  play: function () {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },

  change: function () {
    console.log('执行了滚动');
  },

  switchTab: function (e) {
    var sliederList = this.data.sliderListCustom;
    var i;
    var l;

    var item;
    for (i = 0; item = sliederList[i]; ++i) {
      item.selected = e.detail.current == i;
    }
    this.setData({
      sliderListCustom: sliederList
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