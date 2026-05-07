const { mockTests } = require('../../data/mock-data.js');
const api = require('../../utils/api.js');
const { getTypeNameByTestId } = require('../../data/type-name-mapper.js');
const { getResultKey } = require('../../data/test-config.js');

Page({
  data: {
    reportId: null,
    report: null,
    result: null,
    testId: null,
    test: null,
    funTypeName: '',
    genericTypeName: '',
    loading: true
  },

  onLoad(options) {
    console.log('报告详情参数:', options);

    if (options.local === '1' && options.data) {
      try {
        const resultData = JSON.parse(decodeURIComponent(options.data));
        this.loadLocalReport(resultData);
      } catch (e) {
        console.error('解析本地数据失败:', e);
        wx.showToast({
          title: '数据加载失败',
          icon: 'none'
        });
      }
    } else if (options.id) {
      this.loadReportDetail(options.id);
    } else {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      });
    }
  },

  loadLocalReport(resultData) {
    console.log('加载本地报告:', resultData);
    const result = resultData.result || {};
    const testId = resultData.testId || 1;
    const test = mockTests.find(item => item.id === testId) || mockTests[0];

    // 使用模块化配置获取类型名称
    const resultKey = getResultKey(testId);
    const typeFieldName = resultKey.replace(/Results$/, '_type');
    const rawType = resultData[typeFieldName] || resultData.type || '';
    const displayTypeName = getTypeNameByTestId(testId, rawType);

    this.setData({
      report: resultData,
      result: result,
      testId: testId,
      test: test,
      funTypeName: testId === 3 ? displayTypeName : '',
      genericTypeName: testId !== 3 ? displayTypeName : '',
      loading: false
    });
  },

  loadReportDetail(reportId) {
    this.setData({ loading: true });

    api.getReportDetail(reportId).then(res => {
      console.log('获取报告详情成功:', res);
      if (res.success && res.data) {
        const report = res.data;
        let result = {};
        let testId = report.test_id;

        // 优先使用resultData里的完整数据
        if (report.resultData?.result) {
          result = report.resultData.result;
        } else {
          // 降级使用数据库字段
          result = {
            title: report.title || '',
            analysis: report.analysis || '',
            suggestion: report.suggestion || '',
            strengths: report.strengths || '',
            careers: report.careers || ''
          };
        }

        const test = mockTests.find(item => item.id === testId) || mockTests[0];

        // 使用模块化配置获取类型名称
        const resultKey = getResultKey(testId);
        const typeFieldName = resultKey.replace(/Results$/, '_type');
        const rawType = report[typeFieldName] || report.type || report.resultData?.type || '';
        const displayTypeName = getTypeNameByTestId(testId, rawType);

        const funTypeName = testId === 3 ? displayTypeName : '';
        const genericTypeName = testId !== 3 ? displayTypeName : '';
        
        let scl90Data = null;
        if (testId === 18 && report.resultData) {
          scl90Data = {
            totalScore: report.resultData.totalScore || 0,
            totalAverage: report.resultData.totalAverage || 0,
            positiveCount: report.resultData.positiveCount || 0,
            negativeCount: report.resultData.negativeCount || 0,
            positiveAverage: report.resultData.positiveAverage || 0,
            factorScores: report.resultData.factorScores || {},
            factorAverages: report.resultData.factorAverages || {}
          };
        }

        this.setData({
          report: report,
          result: result,
          testId: testId,
          test: test,
          funTypeName: funTypeName,
          genericTypeName: genericTypeName,
          scl90Data: scl90Data,
          loading: false
        });
      }
    }).catch(err => {
      console.error('获取报告详情失败:', err);
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
      this.setData({ loading: false });
    });
  },

  onRetryTap() {
    const { testId } = this.data;
    wx.redirectTo({
      url: `/pages/test/test?id=${testId}`
    });
  },

  onShareTap() {
    wx.showToast({
      title: '点击右上角分享',
      icon: 'none',
      duration: 2000
    });
  },

  onShareAppMessage() {
    const { test, report } = this.data;
    let shareTitle = test.name;
    let shareDesc = '';

    if (test.id === 1) {
      const mbtiType = report.mbti_type || report.mbtiType;
      if (mbtiType) {
        shareTitle = `我的MBTI性格类型是${mbtiType}，来看看你的吧！`;
      }
    }

    return {
      title: shareTitle,
      desc: shareDesc,
      path: '/pages/index/index?from=share'
    };
  },

  onBackTap() {
    wx.navigateBack();
  }
});