const storage = require('../../utils/storage.js');

Page({
  data: {
    mbtiStandardTestId: 1,
    mbtiAdvancedTestId: 22 // 进阶版测试的ID
  },

  onLoad(options) {
  },

  onSelectVersion(e) {
    const version = e.currentTarget.dataset.version;
    if (!storage.isLoggedIn()) {
      wx.showModal({
        title: '提示',
        content: '需要先登录才能进行测试',
        confirmText: '去登录',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/profile/profile'
            });
          }
        }
      });
      return;
    }

    if (version === 'standard') {
      wx.navigateTo({
        url: `/pages/test/test?id=${this.data.mbtiStandardTestId}`
      });
    } else if (version === 'advanced') {
      this.handleAdvancedVersion();
    }
  },

  handleAdvancedVersion() {
    wx.showModal({
      title: '支付确认',
      content: 'Step II Form Q (进阶版) 需要支付 ¥5.00',
      confirmText: '确认支付',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          this.processPayment();
        }
      }
    });
  },

  processPayment() {
    wx.showLoading({ title: '处理中...' });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '支付成功',
        icon: 'success',
        duration: 1500
      });
      setTimeout(() => {
        wx.navigateTo({
          url: `/pages/test/test?id=${this.data.mbtiAdvancedTestId}`
        });
      }, 1500);
    }, 800);
  }
});
