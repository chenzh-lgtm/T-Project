const { funResults, discResults, pdpResults, enneagramResults, jungResults } = require('../../data/mock-data.js');

Page({
  data: {
    records: [],
    loading: true
  },

  onLoad() {
    this.loadHistory();
  },

  onShow() {
    this.loadHistory();
  },

  onPullDownRefresh() {
    this.loadHistory();
  },

  getFunTypeName(type) {
    const result = funResults.find(r => r.type === type);
    return result ? result.name : type;
  },

  getDiscTypeName(type) {
    const result = discResults.find(r => r.type === type);
    return result ? result.name : type;
  },

  getPdpTypeName(type) {
    const result = pdpResults.find(r => r.type === type);
    return result ? result.name : type;
  },

  getEnneagramTypeName(type) {
    const result = enneagramResults.find(r => r.type === type);
    return result ? result.name : type;
  },

  getJungTypeName(type) {
    const result = jungResults.find(r => r.type === type);
    return result ? result.name : type;
  },

  loadHistory() {
    this.setData({ loading: true });

    try {
      const history = wx.getStorageSync('testHistory') || [];
      const formattedRecords = history.map((item, index) => {
        let funTypeName = '';
        let discTypeName = '';
        let pdpTypeName = '';
        let enneagramTypeName = '';
        let jungTypeName = '';

        if (item.funType) {
          funTypeName = this.getFunTypeName(item.funType);
        }

        if (item.discType) {
          discTypeName = this.getDiscTypeName(item.discType);
        }

        if (item.pdpType) {
          pdpTypeName = this.getPdpTypeName(item.pdpType);
        }

        if (item.enneagramType) {
          enneagramTypeName = this.getEnneagramTypeName(item.enneagramType);
        }

        if (item.jungType) {
          jungTypeName = this.getJungTypeName(item.jungType);
        }

        return {
          id: index,
          testId: item.testId,
          testName: item.testName,
          mbtiType: item.mbtiType,
          funType: item.funType,
          funTypeName: funTypeName,
          discType: item.discType,
          discTypeName: discTypeName,
          pdpType: item.pdpType,
          pdpTypeName: pdpTypeName,
          enneagramType: item.enneagramType,
          enneagramTypeName: enneagramTypeName,
          jungType: item.jungType,
          jungTypeName: jungTypeName,
          totalScore: item.totalScore,
          title: item.resultData?.result?.title || '已完成',
          completedAt: this.formatDate(item.completedAt || new Date().toLocaleString()),
          resultData: item.resultData
        };
      });

      this.setData({
        records: formattedRecords,
        loading: false
      });
    } catch (e) {
      console.error('加载历史失败:', e);
      this.setData({
        records: [],
        loading: false
      });
    }

    wx.stopPullDownRefresh();
  },

  formatDate(dateInput) {
    if (!dateInput) return '未知时间';

    // 如果已经是Date对象，直接使用
    let date;
    if (dateInput instanceof Date) {
      date = dateInput;
    } else {
      // 尝试解析日期
      date = new Date(dateInput);

      // 如果解析失败，尝试各种格式
      if (isNaN(date.getTime())) {
        if (typeof dateInput === 'string') {
          // 1. 处理纯数字时间戳字符串
          if (/^\d+$/.test(dateInput)) {
            const timestamp = parseInt(dateInput, 10);
            // 处理13位毫秒级时间戳和10位秒级时间戳
            date = new Date(timestamp.toString().length === 10 ? timestamp * 1000 : timestamp);
          }
          // 2. 处理包含"上午/下午"的中文格式
          else {
            let cleaned = dateInput.replace(/上午|下午/g, '').trim();
            date = new Date(cleaned);

            // 3. 尝试替换中文分隔符
            if (isNaN(date.getTime())) {
              cleaned = dateInput.replace(/年|月|日/g, '/').replace(/时|分/g, ':').replace(/秒/g, '').trim();
              date = new Date(cleaned);
            }

            // 4. 尝试处理YY-MM-DD格式
            if (isNaN(date.getTime())) {
              cleaned = dateInput.replace(/-/g, '/');
              date = new Date(cleaned);
            }

            // 5. 尝试处理YYYYMMDD格式
            if (isNaN(date.getTime()) && /^\d{8}$/.test(dateInput)) {
              const year = dateInput.substring(0, 4);
              const month = dateInput.substring(4, 6);
              const day = dateInput.substring(6, 8);
              date = new Date(`${year}/${month}/${day}`);
            }
          }
        } else if (typeof dateInput === 'number') {
          // 数字时间戳
          date = new Date(dateInput.toString().length === 10 ? dateInput * 1000 : dateInput);
        }
      }
    }

    // 如果仍然解析失败，返回友好提示
    if (isNaN(date.getTime())) {
      return '未知时间';
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // 中文格式：YYYY年MM月DD日 HH:mm
    return `${year}年${month}月${day}日 ${hours}:${minutes}`;
  },

  onRecordTap(e) {
    const record = e.currentTarget.dataset.record;
    console.log('点击历史记录:', record);

    // 跳转到报告详情页面
    if (record.resultData) {
      const resultStr = encodeURIComponent(JSON.stringify(record.resultData));
      wx.navigateTo({
        url: `/pages/report-detail/report-detail?data=${resultStr}&local=1`
      });
    } else {
      // 如果没有详细数据，显示简要信息
      wx.showModal({
        title: record.testName,
        content: `完成时间：${record.completedAt}`,
        showCancel: false
      });
    }
  },

  onStartTest() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  onClearHistory() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有测试历史吗？',
      success: (res) => {
        if (res.confirm) {
          try {
            wx.removeStorageSync('testHistory');
            this.setData({ records: [] });
            wx.showToast({
              title: '已清空',
              icon: 'success'
            });
          } catch (e) {
            wx.showToast({
              title: '清空失败',
              icon: 'none'
            });
          }
        }
      }
    });
  }
});