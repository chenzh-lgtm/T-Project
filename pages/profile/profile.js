Page({
  data: {
    avatarText: '心',
    stats: {
      testCount: 0,
      collectionCount: 0,
      reportCount: 0
    }
  },

  onLoad() {
    this.updateStats();
  },

  onShow() {
    this.updateStats();
  },

  updateStats() {
    try {
      const collections = wx.getStorageSync('collections') || [];
      const reports = wx.getStorageSync('savedReports') || [];
      const history = wx.getStorageSync('testHistory') || [];

      this.setData({
        'stats.testCount': history.length,
        'stats.collectionCount': collections.length,
        'stats.reportCount': reports.length
      });
    } catch (e) {
      console.error('更新统计数据失败', e);
    }
  },

  onHistoryTap() {
    wx.navigateTo({
      url: '/pages/history/history'
    });
  },

  onCollectionTap() {
    wx.navigateTo({
      url: '/pages/collection/collection'
    });
  },

  onReportsTap() {
    wx.navigateTo({
      url: '/pages/reports/reports'
    });
  },

  onAboutTap() {
    wx.showModal({
      title: '关于我们',
      content: '心理诊断测试小程序 v1.0\n\n为您提供专业的心理测评服务\n\n涵盖性格测试、心理健康测试等多种类型\n\n帮助您更好地了解自己',
      showCancel: false,
      confirmText: '知道了'
    });
  },

  onHelpTap() {
    wx.navigateTo({
      url: '/pages/help/help'
    });
  },

  onSettingsTap() {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  }
});