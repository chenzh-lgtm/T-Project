const { mockTests } = require('../../data/mock-data.js');
const storage = require('../../utils/storage.js');

Page({
  data: {
    test: {},
    isCollected: false
  },

  onLoad(options) {
    const testId = parseInt(options.id);
    this.loadTestDetail(testId);
    this.checkCollectStatus(testId);
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
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  onStartTest() {
    const { test } = this.data;
    wx.navigateTo({
      url: `/pages/test/test?id=${test.id}`
    });
  },

  onShareAppMessage() {
    const { test } = this.data;
    return {
      title: test.name,
      desc: test.description,
      path: `/pages/test-detail/test-detail?id=${test.id}`
    };
  }
});