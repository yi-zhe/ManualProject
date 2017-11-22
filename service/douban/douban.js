var handle,
    URL,
    LISTTYPE,
    _fn;

URL = {
    movieList : 'https://api.douban.com/v2/movie/',
    movieDetail : 'https://api.douban.com/v2/movie/subject/'
}

LISTTYPE = {
    1 : 'in_theaters',
    2 : 'coming_soon'
}

handle = {
    getMovieList : function(type, callback) {
        var url = URL.movieList + LISTTYPE[type];
        _fn.getData({
            url : url,
        }, callback);
    },
    getMovieDetail : function(id, callback) {
        _fn.getData({
            url : URL.movieDetail + id
        }, callback);
    }
}

_fn = {
    getData : function(param, callback) {
        wx.request({
            url: param.url,
            method: 'GET',
            header: {
                "Content-Type": "x-www-form-urlencoded"
            },
            success: function (e) {
                callback(e.data);
            },
            fail: function (error) {
                callback();
            }
        })
    }
}

module.exports = handle;
