const storage = require('../../utils/storage.js');

Page({
  data: {
    userInfo: null,
    stats: {
      testCount: 5,
      collectionCount: 3,
      reportCount: 5
    }
  },

  onLoad() {
    this.loadUserInfo();
  },

  onShow() {
    this.loadUserInfo();
    this.updateStats();
  },

  loadUserInfo() {
    const userInfo = storage.getUserInfo();
    this.setData({ userInfo });
  },

  updateStats() {
    const collections = wx.getStorageSync('collections') || [];
    this.setData({
      'stats.collectionCount': collections.length
    });
  },

  onGetUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        const userInfo = {
          nickname: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl,
          gender: res.userInfo.gender
        };
        storage.setUserInfo(userInfo);
        this.setData({ userInfo });
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        });
      },
      fail: () => {
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        });
      }
    });
  },

  onHistoryTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  onCollectionTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  onReportsTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  onAboutTap() {
    wx.showModal({
      title: '关于我们',
      content: '心理诊断测试小程序 v1.0\n为您提供专业的心理测评服务',
      showCancel: false
    });
  },

  onHelpTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  onSettingsTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  }
});