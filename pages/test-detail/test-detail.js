const { mockTests } = require('../../data/mock-data.js');
const storage = require('../../utils/storage.js');

Page({
  data: {
    test: {},
    isCollected: false
  },

  onLoad(options) {
    const testId = options.id ? parseInt(options.id) : 1;
    this.loadTestDetail(testId);
    this.checkCollectStatus(testId);
    
    wx.showShareMenu({
      withShareTicket: true,
      success: () => {
        console.log('分享菜单已显示');
      },
      fail: (err) => {
        console.log('分享菜单显示失败，继续运行', err);
      }
    });
  },

  loadTestDetail(testId) {
    const test = mockTests.find(item => item.id === testId) || mockTests[0];
    this.setData({ test });
  },

  checkCollectStatus(testId) {
    const isCollected = storage.isCollected(testId);
    this.setData({ isCollected });
  },

  onCollectTap() {
    const { test, isCollected } = this.data;
    if (isCollected) {
      storage.removeCollection(test.id);
      this.setData({ isCollected: false });
      wx.showToast({
        title: '已取消收藏',
        icon: 'success'
      });
    } else {
      storage.setCollection(test.id);
      this.setData({ isCollected: true });
      wx.showToast({
        title: '收藏成功',
        icon: 'success'
      });
    }
  },

  onShareTap() {
    wx.showToast({
      title: '点击右上角分享',
      icon: 'none',
      duration: 2000
    });
  },

  onStartTest() {
    // 检查是否登录
    if (!storage.isLoggedIn()) {
      wx.showModal({
        title: '提示',
        content: '需要先登录才能进行测试',
        confirmText: '去登录',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/profile/profile'
            });
          }
        }
      });
      return;
    }

    const { test } = this.data;
    if (test.id === 1) {
      wx.navigateTo({
        url: '/pages/mbti-select/mbti-select'
      });
    } else {
      wx.navigateTo({
        url: `/pages/test/test?id=${test.id}`
      });
    }
  },

  onShareAppMessage() {
    const { test } = this.data;
    return {
      title: test.name,
      desc: test.description,
      path: `/pages/test-detail/test-detail?id=${test.id}`
    };
  },

  onShareTimeline() {
    const { test } = this.data;
    return {
      title: test.name,
      query: `id=${test.id}`,
      imageUrl: ''
    };
  }
});
