const { mockTests, mockResult } = require('../../data/mock-data.js');

Page({
  data: {
    testId: null,
    test: {},
    result: {},
    resultType: '',
    totalScore: 0
  },

  onLoad(options) {
    const testId = parseInt(options.id);
    this.setData({ testId });
    this.loadResultData(testId);
  },

  loadResultData(testId) {
    const test = mockTests.find(item => item.id === testId) || mockTests[0];
    const result = mockResult;

    let resultType = '';
    if (test.categoryId === 1) {
      resultType = '性格测试结果';
    } else if (test.categoryId === 2) {
      resultType = '心理健康评估结果';
    } else {
      resultType = '趣味测试结果';
    }

    const totalScore = Math.floor(Math.random() * 50) + 70;

    this.setData({
      test,
      result,
      resultType,
      totalScore
    });
  },

  onRetryTap() {
    const { testId } = this.data;
    wx.navigateTo({
      url: `/pages/test/test?id=${testId}`
    });
  },

  onSaveTap() {
    wx.showLoading({
      title: '保存中...'
    });

    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '报告已保存',
        icon: 'success'
      });
    }, 1000);
  },

  onShareTap() {
    const { test } = this.data;
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  onShareAppMessage() {
    const { test, result } = this.data;
    return {
      title: `我的${test.name}结果是：${result.title}`,
      desc: result.analysis.substring(0, 50) + '...',
      path: `/pages/result/result?id=${test.id}`
    };
  }
});