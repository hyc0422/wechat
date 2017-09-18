App({
    
    globalData: {
        deviceInfo: {}
    },
    
    onLaunch: function() {
        try {
            var res = wx.getSystemInfoSync();
            this.globalData.deviceInfo = res;
        } catch (e) {}
    }
})
