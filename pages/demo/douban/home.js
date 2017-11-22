
var service = require('../../../service/douban/douban.js');
var utils = require('../../../utils/utils.js');
var _fn;

// pages/demo/douban/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies: {},
        tabs: {
            currentIndex: 0,
            list: [{
                text: '正在热映',
                type: '1'
            }, {
                text: '即将上映',
                type: '2'
            }],
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
        _fn.selectTab.call(this, 0);
    },

    changeTab: function (e) {
        var target = e.target;
        _fn.selectTab.call(this, target.dataset.index);
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
    selectTab: function (index) {
        var self = this;
        var tabs = self.data.tabs;
        self.setData({
            'tabs.currentIndex': index
        });

        utils.showLoading();

        service.getMovieList(tabs.list[index].type, function (data) {
            utils.hideLoading();
            _fn.renderList.call(self, data);
        });
    },

    renderList : function(data) {
        data = data || listData;
        this.setData({
            movies : data
        });
    }
}

/**
 data : {
    "count": 20,
    "start": 0,
    "total": 56,
    "subjects": [
        {
            "rating": {
                "max": 10,
                "average": 6.8,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "动作",
                "科幻",
                "奇幻"
            ],
            "title": "正义联盟",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1054417/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7622.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7622.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7622.webp"
                    },
                    "name": "本·阿弗莱克",
                    "id": "1054417"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1044713/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp"
                    },
                    "name": "亨利·卡维尔",
                    "id": "1044713"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1044996/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467908677.92.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467908677.92.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467908677.92.webp"
                    },
                    "name": "盖尔·加朵",
                    "id": "1044996"
                }
            ],
            "collect_count": 71493,
            "original_title": "Justice League",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1031904/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23346.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23346.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23346.webp"
                    },
                    "name": "扎克·施奈德",
                    "id": "1031904"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.webp"
            },
            "alt": "https://movie.douban.com/subject/2158490/",
            "id": "2158490"
        },
        {
            "rating": {
                "max": 10,
                "average": 0,
                "stars": "00",
                "min": 0
            },
            "genres": [
                "剧情"
            ],
            "title": "一路绽放",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1317197/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38960.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38960.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38960.webp"
                    },
                    "name": "张杨果而",
                    "id": "1317197"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1015186/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19172.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19172.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19172.webp"
                    },
                    "name": "孔琳",
                    "id": "1015186"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1360665/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1470297667.04.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1470297667.04.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1470297667.04.webp"
                    },
                    "name": "彭皓锋",
                    "id": "1360665"
                }
            ],
            "collect_count": 10,
            "original_title": "一路绽放",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1384441/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                        "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                        "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                    },
                    "name": "邵进",
                    "id": "1384441"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505357814.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505357814.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505357814.webp"
            },
            "alt": "https://movie.douban.com/subject/27191456/",
            "id": "27191456"
        },
        {
            "rating": {
                "max": 10,
                "average": 5.5,
                "stars": "30",
                "min": 0
            },
            "genres": [
                "剧情",
                "动作",
                "悬疑"
            ],
            "title": "追捕",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1274319/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49047.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49047.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49047.webp"
                    },
                    "name": "张涵予",
                    "id": "1274319"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1006103/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44691.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44691.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44691.webp"
                    },
                    "name": "福山雅治",
                    "id": "1006103"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1313916/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1388787839.83.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1388787839.83.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1388787839.83.webp"
                    },
                    "name": "戚薇",
                    "id": "1313916"
                }
            ],
            "collect_count": 749,
            "original_title": "追捕",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1027853/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p324.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p324.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p324.webp"
                    },
                    "name": "吴宇森",
                    "id": "1027853"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504984545.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504984545.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504984545.webp"
            },
            "alt": "https://movie.douban.com/subject/26348414/",
            "id": "26348414"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.1,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "剧情",
                "犯罪",
                "悬疑"
            ],
            "title": "东方快车谋杀案",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1036342/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.webp"
                    },
                    "name": "肯尼思·布拉纳",
                    "id": "1036342"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1005774/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2373.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2373.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2373.webp"
                    },
                    "name": "佩内洛普·克鲁兹",
                    "id": "1005774"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1010539/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9206.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9206.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9206.webp"
                    },
                    "name": "威廉·达福",
                    "id": "1010539"
                }
            ],
            "collect_count": 82215,
            "original_title": "Murder on the Orient Express",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1036342/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.webp"
                    },
                    "name": "肯尼思·布拉纳",
                    "id": "1036342"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502165084.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502165084.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502165084.webp"
            },
            "alt": "https://movie.douban.com/subject/25790761/",
            "id": "25790761"
        },
        {
            "rating": {
                "max": 10,
                "average": 9.2,
                "stars": "45",
                "min": 0
            },
            "genres": [
                "喜剧",
                "动画",
                "冒险"
            ],
            "title": "寻梦环游记",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1370411/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489594517.9.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489594517.9.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489594517.9.webp"
                    },
                    "name": "安东尼·冈萨雷斯",
                    "id": "1370411"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1041009/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510634028.69.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510634028.69.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510634028.69.webp"
                    },
                    "name": "盖尔·加西亚·贝纳尔",
                    "id": "1041009"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1036383/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416762292.89.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416762292.89.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416762292.89.webp"
                    },
                    "name": "本杰明·布拉特",
                    "id": "1036383"
                }
            ],
            "collect_count": 410,
            "original_title": "Coco",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1022678/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13830.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13830.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13830.webp"
                    },
                    "name": "李·昂克里奇",
                    "id": "1022678"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1370425/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497195148.21.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497195148.21.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497195148.21.webp"
                    },
                    "name": "阿德里安·莫利纳",
                    "id": "1370425"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.webp"
            },
            "alt": "https://movie.douban.com/subject/20495023/",
            "id": "20495023"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.2,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "剧情",
                "犯罪",
                "悬疑"
            ],
            "title": "暴雪将至",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1274291/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p829.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p829.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p829.webp"
                    },
                    "name": "段奕宏",
                    "id": "1274291"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1274286/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.webp"
                    },
                    "name": "江一燕",
                    "id": "1274286"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1316005/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34647.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34647.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34647.webp"
                    },
                    "name": "杜源",
                    "id": "1316005"
                }
            ],
            "collect_count": 18979,
            "original_title": "暴雪将至",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1382008/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509001149.89.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509001149.89.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509001149.89.webp"
                    },
                    "name": "董越",
                    "id": "1382008"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505160594.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505160594.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505160594.webp"
            },
            "alt": "https://movie.douban.com/subject/26775933/",
            "id": "26775933"
        },
        {
            "rating": {
                "max": 10,
                "average": 3.1,
                "stars": "15",
                "min": 0
            },
            "genres": [
                "喜剧",
                "奇幻"
            ],
            "title": "降魔传",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1275564/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp"
                    },
                    "name": "郑恺",
                    "id": "1275564"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1274494/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510497293.38.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510497293.38.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510497293.38.webp"
                    },
                    "name": "张雨绮",
                    "id": "1274494"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1319858/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372441031.49.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372441031.49.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372441031.49.webp"
                    },
                    "name": "谢依霖",
                    "id": "1319858"
                }
            ],
            "collect_count": 2944,
            "original_title": "降魔传",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1274331/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3237.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3237.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3237.webp"
                    },
                    "name": "王晶",
                    "id": "1274331"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1280632/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57262.webp"
                    },
                    "name": "钟少雄",
                    "id": "1280632"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503850915.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503850915.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503850915.webp"
            },
            "alt": "https://movie.douban.com/subject/22557335/",
            "id": "22557335"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.5,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "奇幻",
                "冒险"
            ],
            "title": "雷神3：诸神黄昏",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1021959/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.webp"
                    },
                    "name": "克里斯·海姆斯沃斯",
                    "id": "1021959"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1004596/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35625.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35625.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35625.webp"
                    },
                    "name": "汤姆·希德勒斯顿",
                    "id": "1004596"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1054441/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1593.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1593.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1593.webp"
                    },
                    "name": "凯特·布兰切特",
                    "id": "1054441"
                }
            ],
            "collect_count": 110611,
            "original_title": "Thor: Ragnarok",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1076354/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423172662.31.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423172662.31.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423172662.31.webp"
                    },
                    "name": "塔伊加·维迪提",
                    "id": "1076354"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500451074.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500451074.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500451074.webp"
            },
            "alt": "https://movie.douban.com/subject/25821634/",
            "id": "25821634"
        },
        {
            "rating": {
                "max": 10,
                "average": 8.1,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "剧情"
            ],
            "title": "不成问题的问题",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1051526/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480174773.98.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480174773.98.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480174773.98.webp"
                    },
                    "name": "范伟",
                    "id": "1051526"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1275049/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9366.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9366.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9366.webp"
                    },
                    "name": "殷桃",
                    "id": "1275049"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1325810/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415547909.6.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415547909.6.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415547909.6.webp"
                    },
                    "name": "张超",
                    "id": "1325810"
                }
            ],
            "collect_count": 6655,
            "original_title": "不成问题的问题",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1275132/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.webp"
                    },
                    "name": "梅峰",
                    "id": "1275132"
                }
            ],
            "year": "2016",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504993947.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504993947.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504993947.webp"
            },
            "alt": "https://movie.douban.com/subject/26657126/",
            "id": "26657126"
        },
        {
            "rating": {
                "max": 10,
                "average": 0,
                "stars": "00",
                "min": 0
            },
            "genres": [
                "动作",
                "犯罪"
            ],
            "title": "引爆者",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1274291/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p829.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p829.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p829.webp"
                    },
                    "name": "段奕宏",
                    "id": "1274291"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1050430/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52860.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52860.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52860.webp"
                    },
                    "name": "余男",
                    "id": "1050430"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1275934/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12560.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12560.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12560.webp"
                    },
                    "name": "王景春",
                    "id": "1275934"
                }
            ],
            "collect_count": 431,
            "original_title": "引爆者",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1317478/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40004.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40004.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40004.webp"
                    },
                    "name": "常征",
                    "id": "1317478"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503578746.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503578746.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503578746.webp"
            },
            "alt": "https://movie.douban.com/subject/26897427/",
            "id": "26897427"
        },
        {
            "rating": {
                "max": 10,
                "average": 6.6,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "剧情",
                "冒险"
            ],
            "title": "七十七天",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1274286/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.webp"
                    },
                    "name": "江一燕",
                    "id": "1274286"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1326525/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.webp"
                    },
                    "name": "赵汉唐",
                    "id": "1326525"
                }
            ],
            "collect_count": 13071,
            "original_title": "七十七天",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1326525/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.webp"
                    },
                    "name": "赵汉唐",
                    "id": "1326525"
                }
            ],
            "year": "2014",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503551480.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503551480.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503551480.webp"
            },
            "alt": "https://movie.douban.com/subject/26426026/",
            "id": "26426026"
        },
        {
            "rating": {
                "max": 10,
                "average": 8.7,
                "stars": "45",
                "min": 0
            },
            "genres": [
                "动作",
                "犯罪"
            ],
            "title": "英雄本色",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1044899/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p205.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p205.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p205.webp"
                    },
                    "name": "周润发",
                    "id": "1044899"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1025426/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28371.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28371.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28371.webp"
                    },
                    "name": "狄龙",
                    "id": "1025426"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1003494/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.webp"
                    },
                    "name": "张国荣",
                    "id": "1003494"
                }
            ],
            "collect_count": 212658,
            "original_title": "英雄本色",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1027853/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p324.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p324.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p324.webp"
                    },
                    "name": "吴宇森",
                    "id": "1027853"
                }
            ],
            "year": "1986",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.webp"
            },
            "alt": "https://movie.douban.com/subject/1297574/",
            "id": "1297574"
        },
        {
            "rating": {
                "max": 10,
                "average": 8.1,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "剧情",
                "历史",
                "惊悚"
            ],
            "title": "恐袭波士顿",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1035674/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407766093.88.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407766093.88.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407766093.88.webp"
                    },
                    "name": "马克·沃尔伯格",
                    "id": "1035674"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1009260/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367494961.56.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367494961.56.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367494961.56.webp"
                    },
                    "name": "凯文·贝肯",
                    "id": "1009260"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1017898/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360912229.81.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360912229.81.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360912229.81.webp"
                    },
                    "name": "约翰·古德曼",
                    "id": "1017898"
                }
            ],
            "collect_count": 27606,
            "original_title": "Patriots Day",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1031938/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30850.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30850.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30850.webp"
                    },
                    "name": "彼得·博格",
                    "id": "1031938"
                }
            ],
            "year": "2016",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502466029.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502466029.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502466029.webp"
            },
            "alt": "https://movie.douban.com/subject/26357945/",
            "id": "26357945"
        },
        {
            "rating": {
                "max": 10,
                "average": 6.7,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "剧情",
                "历史",
                "战争"
            ],
            "title": "刺杀盖世太保",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1040989/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40336.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40336.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40336.webp"
                    },
                    "name": "裴淳华",
                    "id": "1040989"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1025135/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26044.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26044.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26044.webp"
                    },
                    "name": "米娅·华希科沃斯卡",
                    "id": "1025135"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1305193/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1435850504.48.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1435850504.48.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1435850504.48.webp"
                    },
                    "name": "杰森·克拉克",
                    "id": "1305193"
                }
            ],
            "collect_count": 2499,
            "original_title": "HHhH",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1342984/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509688248.44.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509688248.44.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509688248.44.webp"
                    },
                    "name": "塞德里克·吉门内兹",
                    "id": "1342984"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503580704.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503580704.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503580704.webp"
            },
            "alt": "https://movie.douban.com/subject/26383923/",
            "id": "26383923"
        },
        {
            "rating": {
                "max": 10,
                "average": 0,
                "stars": "00",
                "min": 0
            },
            "genres": [
                "剧情",
                "悬疑"
            ],
            "title": "推理笔记",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1342249/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426053054.79.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426053054.79.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426053054.79.webp"
                    },
                    "name": "陈都灵",
                    "id": "1342249"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1275324/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425307712.95.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425307712.95.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425307712.95.webp"
                    },
                    "name": "林柏宏",
                    "id": "1275324"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1352236/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1465649501.19.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1465649501.19.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1465649501.19.webp"
                    },
                    "name": "汪铎",
                    "id": "1352236"
                }
            ],
            "collect_count": 321,
            "original_title": "推理笔记",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1348447/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502851941.87.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502851941.87.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502851941.87.webp"
                    },
                    "name": "张天辉",
                    "id": "1348447"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2500062407.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2500062407.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2500062407.webp"
            },
            "alt": "https://movie.douban.com/subject/26890502/",
            "id": "26890502"
        },
        {
            "rating": {
                "max": 10,
                "average": 7.2,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "喜剧",
                "奇幻"
            ],
            "title": "羞羞的铁拳",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1350408/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031126.82.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031126.82.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031126.82.webp"
                    },
                    "name": "艾伦",
                    "id": "1350408"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1319032/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1444800807.11.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1444800807.11.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1444800807.11.webp"
                    },
                    "name": "马丽",
                    "id": "1319032"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1325700/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356510694.28.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356510694.28.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356510694.28.webp"
                    },
                    "name": "沈腾",
                    "id": "1325700"
                }
            ],
            "collect_count": 223187,
            "original_title": "羞羞的铁拳",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1350407/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031175.04.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031175.04.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031175.04.webp"
                    },
                    "name": "宋阳",
                    "id": "1350407"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1381643/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508159049.11.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508159049.11.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508159049.11.webp"
                    },
                    "name": "张吃鱼",
                    "id": "1381643"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.webp"
            },
            "alt": "https://movie.douban.com/subject/27038183/",
            "id": "27038183"
        },
        {
            "rating": {
                "max": 10,
                "average": 8.6,
                "stars": "45",
                "min": 0
            },
            "genres": [
                "剧情",
                "爱情"
            ],
            "title": "相爱相亲",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1012646/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494561948.78.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494561948.78.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494561948.78.webp"
                    },
                    "name": "张艾嘉",
                    "id": "1012646"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1274287/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.webp"
                    },
                    "name": "田壮壮",
                    "id": "1274287"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1330484/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372053646.57.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372053646.57.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372053646.57.webp"
                    },
                    "name": "郎月婷",
                    "id": "1330484"
                }
            ],
            "collect_count": 31184,
            "original_title": "相爱相亲",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1012646/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494561948.78.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494561948.78.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494561948.78.webp"
                    },
                    "name": "张艾嘉",
                    "id": "1012646"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502311890.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502311890.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502311890.webp"
            },
            "alt": "https://movie.douban.com/subject/26773744/",
            "id": "26773744"
        },
        {
            "rating": {
                "max": 10,
                "average": 5.1,
                "stars": "25",
                "min": 0
            },
            "genres": [
                "剧情",
                "动作",
                "犯罪"
            ],
            "title": "狂兽",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1318005/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1436716618.28.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1436716618.28.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1436716618.28.webp"
                    },
                    "name": "张晋",
                    "id": "1318005"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1041510/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p802.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p802.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p802.webp"
                    },
                    "name": "余文乐",
                    "id": "1041510"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1275670/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1405999893.92.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1405999893.92.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1405999893.92.webp"
                    },
                    "name": "文咏珊",
                    "id": "1275670"
                }
            ],
            "collect_count": 3069,
            "original_title": "狂獸",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1304551/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499433870.47.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499433870.47.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499433870.47.webp"
                    },
                    "name": "李子俊",
                    "id": "1304551"
                }
            ],
            "year": "2017",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502374737.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502374737.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2502374737.webp"
            },
            "alt": "https://movie.douban.com/subject/26747274/",
            "id": "26747274"
        },
        {
            "rating": {
                "max": 10,
                "average": 6.4,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "动画",
                "奇幻",
                "冒险"
            ],
            "title": "精灵宝可梦：波尔凯尼恩与机巧的玛机雅娜",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1040476/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19636.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19636.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19636.webp"
                    },
                    "name": "松本梨香",
                    "id": "1040476"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1025401/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7451.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7451.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7451.webp"
                    },
                    "name": "大谷育江",
                    "id": "1025401"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1014846/",
                    "avatars": {
                        "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7007.webp",
                        "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7007.webp",
                        "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7007.webp"
                    },
                    "name": "市川染五郎",
                    "id": "1014846"
                }
            ],
            "collect_count": 2604,
            "original_title": "ポケモン・ザ・ムービーXY&Z ボルケニオンと機巧のマギアナ",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1029060/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367142083.06.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367142083.06.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367142083.06.webp"
                    },
                    "name": "汤山邦彦",
                    "id": "1029060"
                }
            ],
            "year": "2016",
            "images": {
                "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503056709.webp",
                "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503056709.webp",
                "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503056709.webp"
            },
            "alt": "https://movie.douban.com/subject/26683354/",
            "id": "26683354"
        },
        {
            "rating": {
                "max": 10,
                "average": 0,
                "stars": "00",
                "min": 0
            },
            "genres": [
                "悬疑",
                "惊悚"
            ],
            "title": "深宫怨灵",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1355169/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468826376.6.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468826376.6.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468826376.6.webp"
                    },
                    "name": "凯蒂·萨瓦",
                    "id": "1355169"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1376601/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506507411.56.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506507411.56.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506507411.56.webp"
                    },
                    "name": "凯瑟琳·希金斯",
                    "id": "1376601"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1327225/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510831039.93.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510831039.93.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510831039.93.webp"
                    },
                    "name": "克瑞姆·柏辛",
                    "id": "1327225"
                }
            ],
            "collect_count": 142,
            "original_title": "深宫怨灵",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1037643/",
                    "avatars": {
                        "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486647391.31.webp",
                        "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486647391.31.webp",
                        "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486647391.31.webp"
                    },
                    "name": "司徒永华",
                    "id": "1037643"
                }
            ],
            "year": "2013",
            "images": {
                "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504313040.webp",
                "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504313040.webp",
                "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504313040.webp"
            },
            "alt": "https://movie.douban.com/subject/24754062/",
            "id": "24754062"
        }
    ],
    "title": "正在上映的电影-北京"
}
 */
