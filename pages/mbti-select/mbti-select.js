Page({
  data: {
    mbtiStandardTestId: 1,
    mbtiAdvancedTestId: 22 // 进阶版测试的ID
  },

  onLoad(options) {
  },

  onSelectVersion(e) {
    const version = e.currentTarget.dataset.version;

    if (version === 'standard') {
      wx.navigateTo({
        url: `/pages/test/test?id=${this.data.mbtiStandardTestId}`
      });
    } else if (version === 'advanced') {
      wx.navigateTo({
        url: `/pages/test/test?id=${this.data.mbtiAdvancedTestId}`
      });
    }
  }
});
