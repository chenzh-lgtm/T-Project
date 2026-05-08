const { counselors, mentalHealthArticles } = require('../../data/mock-data.js');

Page({
  data: {
    articles: [],
    counselors: [],
    activeTab: 'articles'
  },

  onLoad() {
    this.setData({
      articles: mentalHealthArticles,
      counselors: counselors
    });
  },

  onShow() {
    this.loadData();
  },

  loadData() {
    this.setData({
      articles: mentalHealthArticles,
      counselors: counselors
    });
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ activeTab: tab });
  },

  onCounselorTap(e) {
    const counselorId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/counselor-detail/counselor-detail?id=${counselorId}`
    });
  },

  onArticleTap(e) {
    const articleId = e.currentTarget.dataset.id;
    wx.showToast({
      title: `查看文章 ${articleId}`,
      icon: 'none'
    });
  },

  onShareAppMessage() {
    return {
      title: '心理咨询预约服务',
      path: '/pages/consult/consult'
    };
  }
});