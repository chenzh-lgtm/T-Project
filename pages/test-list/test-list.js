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

  loadData() {
    this.setData({
      categories: mockCategories,
      allTests: mockTests,
      filteredTests: mockTests
    });
  },

  onTabChange(e) {
    const categoryId = e.currentTarget.dataset.id;
    this.setData({ currentCategoryId: categoryId });
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
    let filtered = allTests;

    if (currentCategoryId !== 0) {
      filtered = filtered.filter(test => test.categoryId === currentCategoryId);
    }

    if (searchKey) {
      filtered = filtered.filter(test =>
        test.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    }

    this.setData({ filteredTests: filtered });
  },

  onTestTap(e) {
    const testId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/test-detail/test-detail?id=${testId}`
    });
  }
});