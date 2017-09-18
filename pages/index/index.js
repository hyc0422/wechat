var app = getApp()
	
Page({

    data: {
        longitude: "",
    	latitude: "",    	
    	
    },

    onShow: function() {
        wx.getLocation({
            type: 'gcj02',
            success: this.handleGetLocationSucc.bind(this)
        })
    },

    handleGetLocationSucc: function(res) {
        this.setData({
            longitude: res.longitude,
            latitude: res.latitude
        })
    },

    onShareAppMessage: function() {
         return {
            title: '最酷炫的线下水族交易平台',
            path: 'page/index/index'
        }
    }
 
})
