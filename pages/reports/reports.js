const api = require('../../utils/api.js');
const { getTypeNameByTestId } = require('../../data/type-name-mapper.js');
const { getResultKey } = require('../../data/test-config.js');

Page({
  data: {
    reports: [],
    loading: true
  },

  onLoad() {
    this.loadReports();
  },

  onShow() {
    this.loadReports();
  },

  onPullDownRefresh() {
    this.loadReports();
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

  loadReports() {
    this.setData({ loading: true });

    api.getReports().then(res => {
      console.log('获取报告成功:', res);
      if (res.success && res.data) {
        const formattedReports = res.data.map(report => {
          // 使用模块化配置获取类型名称
          const resultKey = getResultKey(report.test_id);
          const typeFieldName = resultKey.replace(/Results$/, '_type');
          const rawTypeValue = report[typeFieldName];
          const displayTypeName = getTypeNameByTestId(report.test_id, rawTypeValue);

          // 优先使用最可靠的时间字段
          let formattedTime = '未知时间';
          if (report.timestamp) {
            formattedTime = this.formatDate(new Date(report.timestamp));
          } else if (report.createdAtISO) {
            formattedTime = this.formatDate(report.createdAtISO);
          } else {
            formattedTime = this.formatDate(report.created_at || report.createdAt);
          }

          return {
            ...report,
            type_display: displayTypeName,
            created_at: formattedTime
          };
        });
        this.setData({
          reports: formattedReports,
          loading: false
        });
      } else {
        this.setData({
          reports: [],
          loading: false
        });
      }
      wx.stopPullDownRefresh();
    }).catch(err => {
      console.error('获取报告失败:', err);
      this.setData({
        reports: [],
        loading: false
      });
      wx.stopPullDownRefresh();
    });
  },

  onReportTap(e) {
    const report = e.currentTarget.dataset.report;
    const reportId = report.id;

    wx.navigateTo({
      url: `/pages/report-detail/report-detail?id=${reportId}`
    });
  },

  onDeleteTap(e) {
    const report = e.currentTarget.dataset.report;
    const reportId = report.id;

    wx.showModal({
      title: '确认删除',
      content: '确定要删除这份报告吗？',
      success: (res) => {
        if (res.confirm) {
          api.deleteReport(reportId).then(res => {
            console.log('删除成功:', res);
            this.loadReports();
            wx.showToast({
              title: '删除成功',
              icon: 'success'
            });
          }).catch(err => {
            console.error('删除失败:', err);
            wx.showToast({
              title: '删除失败',
              icon: 'none'
            });
          });
        }
      }
    });
  },

  onBackTap() {
    wx.navigateBack();
  }
});