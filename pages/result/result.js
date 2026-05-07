const { mockTests } = require('../../data/mock-data.js');
const api = require('../../utils/api.js');

Page({
  data: {
    testId: null,
    test: {},
    result: {},
    resultType: '',
    totalScore: 0,
    mbtiType: '',
    mbtiName: '',
    strengths: '',
    careers: '',
    showScore: true,
    savedReports: [],
    funType: '',
    saving: false,
    hasSaved: false
  },

  onLoad(options) {
    const testId = parseInt(options.testId) || parseInt(options.id) || 1;
    this.setData({ testId });

    if (options.data) {
      try {
        const resultData = JSON.parse(decodeURIComponent(options.data));
        this.loadResultData(testId, resultData);
      } catch (e) {
        console.error('解析结果失败', e);
      }
    }

    wx.showShareMenu({
      withShareTicket: true,
      success: () => {
        console.log('分享菜单已显示');
      },
      fail: (err) => {
        console.log('分享菜单显示失败，继续运行', err);
      }
    });
  },

  loadResultData(testId, resultData) {
    const test = mockTests.find(item => item.id === testId) || mockTests[0];
    
    // 兼容新的数据格式（calculator-factory返回）和旧格式（原始calculateResult返回）
    // 旧格式：{ type, result: { name, title, analysis, ... }, score }
    // 新格式：{ type, name, title, analysis, ... }
    const innerResult = resultData.result || {};
    const result = {
      name: resultData.name || innerResult.name || '',
      title: resultData.title || innerResult.title || '',
      analysis: resultData.analysis || innerResult.analysis || '',
      suggestion: resultData.suggestion || innerResult.suggestion || '',
      strengths: resultData.strengths || innerResult.strengths || '',
      careers: resultData.careers || innerResult.careers || '',
      loveAdvice: resultData.loveAdvice || innerResult.loveAdvice || '',
      careerAdvice: resultData.careerAdvice || innerResult.careerAdvice || '',
      personalityAnalysis: resultData.personalityAnalysis || innerResult.personalityAnalysis || '',
      weaknessesAnalysis: resultData.weaknessesAnalysis || innerResult.weaknessesAnalysis || ''
    };

    let resultType = test.name;

    this.setData({
      test: test,
      result: result,
      resultType: resultType,
      resultData: resultData
    });

    if (testId === 1) {
      this.setData({
        mbtiType: resultData.type || '',
        mbtiName: result.name || '',
        strengths: result.strengths || '',
        careers: result.careers || '',
        showScore: false
      });
    } else if (testId === 2) {
      this.setData({
        totalScore: resultData.totalScore || resultData.score || 0,
        showScore: true
      });
    } else if (testId === 18) {
      this.setData({
        totalScore: resultData.totalScore || resultData.score || 0,
        totalAverage: resultData.totalAverage || 0,
        positiveCount: resultData.positiveCount || 0,
        negativeCount: resultData.negativeCount || 0,
        positiveAverage: resultData.positiveAverage || 0,
        factorScores: resultData.factorScores || {},
        factorAverages: resultData.factorAverages || {},
        showScore: true,
        showSCL90Factors: true
      });
    } else {
      this.setData({
        funType: resultData.type || '',
        mbtiName: result.name || '',
        showScore: false
      });
    }
  },

  onRetryTap() {
    const { testId } = this.data;
    wx.navigateBack();
  },

  onSaveTap() {
    if (this.data.saving) {
      return;
    }

    // 检查当前测试结果是否已经保存过（同一次测试会话中）
    if (this.data.hasSaved) {
      wx.showToast({
        title: '该测试报告已保存',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    const { test, result, mbtiType, mbtiName, totalScore, resultData, funType } = this.data;

    let displayScore = '';
    if (test.id === 1) {
      displayScore = mbtiType;
    } else if (test.id === 2) {
      displayScore = `得分${totalScore}`;
    } else {
      displayScore = funType || result.title || '已完成';
    }

    const resultType = resultData.type || '';
    let reportData = {
      userId: 'test_user',
      testId: test.id,
      testName: test.name,
      mbtiType: mbtiType || '',
      funType: funType || '',
      totalScore: totalScore || 0,
      title: result.title || '',
      analysis: result.analysis || '',
      suggestion: result.suggestion || '',
      strengths: result.strengths || '',
      careers: result.careers || '',
      resultData: resultData,
      displayScore: displayScore,
      createdAt: new Date().toISOString()
    };

    // 根据不同的测试类型保存对应的类型字段
    const { getResultKey } = require('../../data/test-config.js');
    const resultKey = getResultKey(test.id);
    
    // 将resultKey转换为下划线命名格式作为字段名
    const typeFieldName = resultKey.replace(/Results$/, '_type');
    
    // 对于基于分数的测试（如SDS、SAS等），保存分数；其他测试保存类型
    const resultTypeValue = resultData.totalScore !== undefined ? resultData.totalScore : (resultData.type || '');
    reportData[typeFieldName] = resultTypeValue;

    this.setData({ saving: true });

    wx.showLoading({
      title: '保存中...',
      mask: true
    });

    api.saveReport(reportData).then(res => {
      console.log('保存成功:', res);
      wx.hideLoading();
      this.setData({ saving: false, hasSaved: true });
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 2000
      });
    }).catch(err => {
      console.error('保存失败:', err);
      wx.hideLoading();
      this.setData({ saving: false });
      wx.showToast({
        title: '保存失败',
        icon: 'none',
        duration: 2000
      });
    });
  },


  onShareTap() {
    wx.showToast({
      title: '点击右上角分享',
      icon: 'none',
      duration: 2000
    });
  },

  onShareTimelineTap() {
    wx.showToast({
      title: '点击右上角菜单分享到朋友圈',
      icon: 'none',
      duration: 2000
    });
  },

  onShareAppMessage() {
    const { test, mbtiType, funType, result } = this.data;
    let shareTitle = '';
    let shareDesc = '';

    if (test.id === 1 && mbtiType) {
      shareTitle = `我的MBTI性格类型是${mbtiType}，来看看你的吧！`;
      shareDesc = result.title || '点击查看详细分析';
    } else if (test.id === 2) {
      shareTitle = '我刚刚做了抑郁筛查测试，一起来测测吧！';
      shareDesc = result.title || '关注心理健康';
    } else {
      const type = funType || result.name || '';
      shareTitle = `我的性格测试结果是${type}，你也来试试吧！`;
      shareDesc = result.analysis ? result.analysis.substring(0, 50) + '...' : '';
    }

    return {
      title: shareTitle,
      desc: shareDesc,
      path: '/pages/index/index?from=share'
    };
  },

  onShareTimeline() {
    const { test, mbtiType, funType, result } = this.data;
    let shareTitle = '';

    if (test.id === 1 && mbtiType) {
      shareTitle = `我的MBTI是${mbtiType}，${result.title || ''}`;
    } else if (test.id === 2) {
      shareTitle = `我的心理健康状态：${result.title || ''}`;
    } else {
      const type = funType || result.name || test.name;
      shareTitle = `我的性格测试结果：${type}`;
    }

    return {
      title: shareTitle,
      query: `testId=${test.id}`,
      imageUrl: ''
    };
  }
});