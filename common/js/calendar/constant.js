var constant = {
    taskStatus: {
        pending: 'pending',
        current: 'current',
        finish: 'finish'
        // cancel:'cancel',
    },
    orderType: {
        asc: 'asc',
        desc: 'desc'
    },
    calendar: {
        lunarInfo: new Array(
            0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
            0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
            0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
            0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
            0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
            0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
            0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
            0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
            0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
            0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
            0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
            0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
            0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
            0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
            0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
        ),
        Gan: new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"),
        Zhi: new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"),
        solarTerm: new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"),
        lFtv: new Array("0101*春节", "0115 元宵节", "0505 端午节", "0707 七夕情人节", "0715 中元节", "0815 中秋节", "0909 重阳节", "1208 腊八节", "1224 小年", "0100*除夕"),
        sFtv: new Array("0101*元旦", "0214 情人节", "0308 妇女节", "0312 植树节", "0315 消费者权益日", "0401 愚人节", "0501 劳动节", "0504 青年节", "0512 护士节", "0601 儿童节", "0701 建党节 香港回归纪念", "0801 建军节", "0808 父亲节", "0909 南晟网周年纪念日", "0910 教师节", "0928 孔子诞辰", "1001*国庆节", "1006 老人节", "1024 联合国日", "1112 孙中山诞辰", "1220 澳门回归纪念", "1225 圣诞节", "1226 毛主席诞辰"),
        day: new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"),
        dayShort: new Array("日", "一", "二", "三", "四", "五", "六")
    }

};
module.exports = constant;
