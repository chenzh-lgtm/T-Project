App({
  globalData: {
    userInfo: null,
    token: null,
    baseUrl: 'http://localhost:8080/api'
  },
  onLaunch() {
    wx.login({
      success: res => {
        console.log('登录成功', res.code);
      }
    });
  }
});