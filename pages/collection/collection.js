const api = require('../../utils/api.js');
const { mockTests } = require('../../data/mock-data.js');
const { mockCategories } = require('../../data/mock-data.js');

Page({
  data: {
    collections: [],
    loading: true,
    tests: []
  },

  onLoad() {
    this.loadCollections();
  },

  onShow() {
    this.loadCollections();
  },

  onPullDownRefresh() {
    this.loadCollections();
  },

  getCategoryName(categoryId) {
    const category = mockCategories.find(c => c.id === categoryId);
    return category ? category.name : '性格测试';
  },

  loadCollections() {
    this.setData({ loading: true });

    try {
      const collections = wx.getStorageSync('collections') || [];
      const allTests = mockTests;
      const enrichedCollections = [];

      collections.forEach(item => {
        let testId = null;
        
        // 兼容数字ID和对象格式
        if (typeof item === 'number') {
          testId = item;
        } else if (typeof item === 'object') {
          testId = item.id || item.testId;
        }

        // 从mockTests中获取测试信息
        const matchedTest = allTests.find(t => t.id === testId);
        
        if (matchedTest) {
          enrichedCollections.push({
            id: matchedTest.id,
            name: matchedTest.name,
            description: matchedTest.description,
            coverImage: matchedTest.image,
            categoryName: this.getCategoryName(matchedTest.categoryId),
            estimatedTime: matchedTest.estimatedTime
          });
        } else if (testId) {
          // 如果找不到匹配的测试，显示默认信息
          enrichedCollections.push({
            id: testId,
            name: '未知测试',
            description: '',
            coverImage: '/images/default-test.png',
            categoryName: '性格测试',
            estimatedTime: 10
          });
        }
      });

      this.setData({
        collections: enrichedCollections,
        loading: false
      });

      wx.stopPullDownRefresh();

      if (collections.length === 0) {
        this.loadFromApi();
      }

    } catch (e) {
      console.error('加载收藏失败:', e);
      this.setData({
        collections: [],
        loading: false
      });
      wx.stopPullDownRefresh();
    }
  },

  loadFromApi() {
    api.getTests().then(res => {
      console.log('获取测试数据:', res);
      if (res.success && res.data) {
        this.setData({ tests: res.data.tests || [] });
      }
    }).catch(err => {
      console.error('获取测试数据失败:', err);
    });
  },

  onCollectionTap(e) {
    const item = e.currentTarget.dataset.item;
    console.log('点击收藏项:', item);

    wx.navigateTo({
      url: `/pages/test-detail/test-detail?id=${item.id}`
    });
  },

  onRemoveCollect(e) {
    const testId = e.currentTarget.dataset.id;
    console.log('取消收藏:', testId);

    wx.showModal({
      title: '确认取消收藏',
      content: '确定要取消收藏这个测试吗？',
      success: (res) => {
        if (res.confirm) {
          try {
            let collections = wx.getStorageSync('collections') || [];
            collections = collections.filter(item => {
              if (typeof item === 'number') {
                return item !== testId;
              }
              return (item.id || item.testId) !== testId;
            });
            wx.setStorageSync('collections', collections);

            this.loadCollections();

            wx.showToast({
              title: '已取消收藏',
              icon: 'success'
            });
          } catch (e) {
            wx.showToast({
              title: '操作失败',
              icon: 'none'
            });
          }
        }
      }
    });
  },

  onBrowseTests() {
    wx.switchTab({
      url: '/pages/test-list/test-list'
    });
  }
});