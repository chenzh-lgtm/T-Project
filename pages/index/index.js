const { mockCategories, mockTests } = require('../../data/mock-data.js');
const storage = require('../../utils/storage.js');

Page({
  data: {
    userInfo: null,
    categories: [],
    recommendTests: []
  },

  onLoad() {
    this.loadUserInfo();
    this.loadData();
  },

  onShow() {
    this.loadUserInfo();
  },

  loadUserInfo() {
    const userInfo = storage.getUserInfo();
    this.setData({ userInfo });
  },

  loadData() {
    this.setData({
      categories: mockCategories,
      recommendTests: mockTests.slice(0, 4)
    });
  },

  onCategoryTap(e) {
    const categoryId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/test-list/test-list?categoryId=${categoryId}`
    });
  },

  onTestTap(e) {
    const testId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/test-detail/test-detail?id=${testId}`
    });
  },

  onMoreTap() {
    wx.switchTab({
      url: '/pages/test-list/test-list'
    });
  },

  onShareAppMessage() {
    return {
      title: '心理诊断测试 - 探索你的内心世界',
      path: '/pages/index/index'
    };
  }
});