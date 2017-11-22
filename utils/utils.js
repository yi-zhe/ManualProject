var handle;

handle = {
    showLoading : function() {
        wx.showToast({
            title: '数据加载中...',
            icon : 'loading'
        });
    },

    hideLoading : function() {
        wx.hideToast();
    }
}

module.exports = handle;
