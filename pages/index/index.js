const { mockCategories, mockTests } = require('../../data/mock-data.js');

Page({
  data: {
    categories: [],
    recommendTests: [],
    avatarText: '心'
  },

  onLoad() {
    this.loadData();
  },

  loadData() {
    const filteredTests = mockTests.filter(test => test.id !== 22);
    this.setData({
      categories: mockCategories,
      recommendTests: filteredTests
    });
  },

  onCategoryTap(e) {
    const categoryId = e.currentTarget.dataset.id;
    wx.setStorageSync('selectedCategoryId', categoryId);
    wx.switchTab({
      url: '/pages/test-list/test-list'
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