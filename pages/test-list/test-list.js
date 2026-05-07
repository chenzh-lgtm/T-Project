const { mockCategories, mockTests } = require('../../data/mock-data.js');
const { debounce } = require('../../utils/utils.js');

Page({
  data: {
    categories: [],
    allTests: [],
    filteredTests: [],
    currentCategoryId: 0,
    searchKey: ''
  },

  onLoad(options) {
    this.loadData();
    if (options.categoryId) {
      this.setData({ currentCategoryId: parseInt(options.categoryId) });
      this.filterTests();
    }
  },

  onShow() {
    // 检查是否有从首页传递的分类ID
    const categoryId = wx.getStorageSync('selectedCategoryId');
    if (categoryId) {
      this.setData({ currentCategoryId: parseInt(categoryId) });
      this.filterTests();
      // 清除存储的分类ID，避免下次进入时仍然使用
      wx.removeStorageSync('selectedCategoryId');
    }
  },

  loadData() {
    // 过滤掉MBTI Step II Form Q测试(id=22)，不让它在分类页面显示
    const tests = JSON.parse(JSON.stringify(mockTests)).filter(test => test.id !== 22);
    const categories = JSON.parse(JSON.stringify(mockCategories));
    
    this.setData({
      categories: categories,
      allTests: tests,
      filteredTests: tests
    });
  },

  onTabChange(e) {
    const categoryId = e.currentTarget.dataset.id;
    const id = parseInt(categoryId);
    console.log('切换分类：', { categoryId, id });
    this.setData({ currentCategoryId: id, searchKey: '' });
    this.filterTests();
  },

  onSearchInput(e) {
    const searchKey = e.detail.value;
    this.setData({ searchKey });
    this.filterTests();
  },

  onSearchConfirm(e) {
    const searchKey = e.detail.value;
    this.setData({ searchKey });
    this.filterTests();
  },

  onClearSearch() {
    this.setData({ searchKey: '' });
    this.filterTests();
  },

  filterTests() {
    const { allTests, currentCategoryId, searchKey } = this.data;
    let filtered = [...allTests];

    console.log('筛选前：', { currentCategoryId, searchKey });

    if (currentCategoryId !== 0) {
      filtered = filtered.filter(test => test.categoryId === currentCategoryId);
    }

    if (searchKey && searchKey.trim() !== '') {
      const key = searchKey.toLowerCase().trim();
      filtered = filtered.filter(test => 
        (test.name && test.name.toLowerCase().includes(key)) ||
        (test.description && test.description.toLowerCase().includes(key))
      );
    }

    console.log('筛选后：', filtered);
    this.setData({ filteredTests: filtered });
  },

  onTestTap(e) {
    const testId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/test-detail/test-detail?id=${testId}`
    });
  }
});