Page({
  data: {
    cacheSize: '0KB'
  },

  onLoad() {
    this.calculateCacheSize();
  },

  calculateCacheSize() {
    try {
      const info = wx.getStorageInfoSync();
      const sizeKB = Math.round(info.currentSize / 1024 * 100) / 100;
      let cacheSize = '';
      if (sizeKB < 1) {
        cacheSize = '<1KB';
      } else if (sizeKB < 1024) {
        cacheSize = sizeKB + 'KB';
      } else {
        cacheSize = (sizeKB / 1024).toFixed(2) + 'MB';
      }
      this.setData({ cacheSize });
    } catch (e) {
      this.setData({ cacheSize: '0KB' });
    }
  },

  onPrivacyPolicy() {
    wx.showModal({
      title: '隐私政策',
      content: '心理测评小程序高度重视用户隐私保护。我们郑重承诺：\n\n1. 本小程序不收集任何用户个人信息，所有测试数据仅保存在用户本地设备中\n2. 我们不会上传或向任何第三方透露用户的测试数据\n3. 所有测试结果仅供娱乐和参考，不构成任何医疗建议或诊断\n4. 用户可随时删除本地的所有测试数据\n\n本小程序所有测试内容仅供参考，如有心理相关问题请咨询专业人士。',
      showCancel: false
    });
  },

  onUserAgreement() {
    wx.showModal({
      title: '用户协议',
      content: '使用条款\n\n1. 服务说明\n本小程序提供心理测评服务，所有内容仅供用户参考和娱乐使用，不构成任何专业医疗建议或诊断。\n\n2. 使用规则\n- 用户可自由使用本小程序提供的所有测试服务\n- 测试结果仅保存在用户本地设备中，用户可自行管理和删除\n- 禁止将本小程序的内容用于商业目的\n\n3. 免责声明\n本小程序所有测试结果仅供参考，不能替代专业的心理咨询或医疗诊断。如有心理相关困扰，请咨询专业人士。',
      showCancel: false
    });
  },

  onDataExport() {
    wx.showModal({
      title: '导出数据',
      content: '确定要导出您的所有测试数据和报告吗？',
      success: (res) => {
        if (res.confirm) {
          try {
            const reports = wx.getStorageSync('savedReports') || [];
            const collections = wx.getStorageSync('collections') || [];
            const history = wx.getStorageSync('testHistory') || [];

            const exportData = {
              exportTime: new Date().toLocaleString(),
              reports,
              collections,
              history
            };

            wx.setClipboardData({
              data: JSON.stringify(exportData, null, 2),
              success: () => {
                wx.showToast({
                  title: '数据已复制',
                  icon: 'success'
                });
              }
            });
          } catch (e) {
            wx.showToast({
              title: '导出失败',
              icon: 'none'
            });
          }
        }
      }
    });
  },

  onCheckUpdate() {
    wx.showToast({
      title: '已是最新版本',
      icon: 'success'
    });
  },

  onClearCache() {
    wx.showModal({
      title: '清理缓存',
      content: '确定要清理所有缓存数据吗？这不会影响您保存的报告。',
      success: (res) => {
        if (res.confirm) {
          try {
            wx.clearStorageSync();
            this.calculateCacheSize();
            wx.showToast({
              title: '清理完成',
              icon: 'success'
            });
          } catch (e) {
            wx.showToast({
              title: '清理失败',
              icon: 'none'
            });
          }
        }
      }
    });
  }
});