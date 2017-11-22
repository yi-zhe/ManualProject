
var service = require('../../../service/douban/douban.js');
var utils = require('../../../utils/utils.js');
var _fn;


Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {},
        screen: {
            minHeight: 'auto'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var self = this;
        utils.showLoading();
        wx.getSystemInfo({
            success: function(res) {
                self.setData({
                    'screen.minHeight' : res.windowHeight + 'px'
                });
            },
        });

        service.getMovieDetail(options.id, function(data) {
            data = data || movieDetail;
            console.log(data);
            utils.hideLoading();
            _fn.render.call(self, data);
        });
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

_fn = {
    render : function(data) {
        data.genresStr = data.genres.join('/');
        data.staff = data.directors.concat(data.casts);
        this.setData({
            movie : data
        });
    }
}
