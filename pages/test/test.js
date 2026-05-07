const { getQuestionsByTestId, calculateResult } = require('../../data/mock-data.js');
const storage = require('../../utils/storage.js');
const { mockTests } = require('../../data/mock-data.js');

Page({
  data: {
    testId: null,
    questions: [],
    currentIndex: 0,
    totalCount: 0,
    question: {},
    selectedOptionId: null,
    selectedScale: null,
    answers: {},
    letters: ['A', 'B', 'C', 'D', 'E', 'F'],
    progressPercent: 0
  },

  onLoad(options) {
    const testId = parseInt(options.id);
    this.setData({ testId });
    this.loadTestData(testId);
  },

  onShow() {
    const { testId } = this.data;
    if (testId) {
      this.loadSavedProgress();
    }
  },

  loadTestData(testId) {
    const questions = getQuestionsByTestId(testId);

    // 先按sortOrder排序确保原始顺序正确，然后再打乱
    const sortedQuestions = questions.sort((a, b) => a.sortOrder - b.sortOrder);
    const shuffledQuestions = this.shuffleArray([...sortedQuestions]);

    this.setData({
      questions: shuffledQuestions,
      totalCount: shuffledQuestions.length
    });

    this.loadSavedProgress();
  },

  // Fisher-Yates洗牌算法
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  loadSavedProgress() {
    const { testId } = this.data;
    const savedProgress = storage.getTestProgress(testId);

    if (savedProgress) {
      this.setData({
        answers: savedProgress.answers || {},
        currentIndex: savedProgress.currentIndex || 0
      });
    }

    this.updateQuestion();
    this.updateProgress();
  },

  updateProgress() {
    const { currentIndex, totalCount } = this.data;
    const progressPercent = totalCount > 0 ? ((currentIndex + 1) / totalCount) * 100 : 0;
    this.setData({ progressPercent });
  },

  updateQuestion() {
    const { questions, currentIndex, answers } = this.data;
    if (questions.length > 0 && currentIndex < questions.length) {
      const question = questions[currentIndex];
      const savedAnswer = answers[question.id];

      this.setData({
        question: question,
        selectedOptionId: null,
        selectedScale: null
      });

      if (savedAnswer !== undefined) {
        if (question.type === 3) {
          const scaleIndex = question.options.findIndex(opt => opt.id === savedAnswer);
          if (scaleIndex >= 0) {
            this.setData({
              selectedScale: scaleIndex,
              selectedOptionId: savedAnswer
            });
          }
        } else {
          this.setData({ selectedOptionId: savedAnswer });
        }
      }
    }
  },

  getTypeText(type) {
    switch(type) {
      case 1: return '单选题';
      case 2: return '多选题';
      case 3: return '量表题';
      default: return '单选题';
    }
  },

  onOptionTap(e) {
    const optionId = e.currentTarget.dataset.id;
    wx.vibrateShort({ type: 'heavy' });
    this.setData({ selectedOptionId: optionId });
    this.saveAnswer(optionId);
  },

  onScaleTap(e) {
    const index = e.currentTarget.dataset.index;
    const optionId = e.currentTarget.dataset.id;

    wx.vibrateShort({ type: 'heavy' });
    this.setData({
      selectedScale: index,
      selectedOptionId: optionId
    });

    this.saveAnswer(optionId);
  },

  saveAnswer(answerId) {
    const { currentIndex, answers, questions } = this.data;
    const question = questions[currentIndex];
    const newAnswers = { ...answers, [question.id]: answerId };

    this.setData({ answers: newAnswers });
    this.saveProgress();

    // 如果不是最后一题，自动跳转到下一题
    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        this.setData({ currentIndex: currentIndex + 1 });
        this.updateQuestion();
        this.updateProgress();
        this.saveProgress();
      }, 300); // 延迟300毫秒，让用户看到选择效果
    }
  },

  onPrevTap() {
    const { currentIndex } = this.data;
    if (currentIndex > 0) {
      this.setData({ currentIndex: currentIndex - 1 });
      this.updateQuestion();
      this.updateProgress();
      this.saveProgress();
    }
  },

  onNextTap() {
    const { currentIndex, totalCount, selectedOptionId, selectedScale } = this.data;

    if (selectedOptionId === null && selectedScale === null) {
      wx.showToast({
        title: '请选择答案',
        icon: 'none',
        duration: 1500
      });
      return;
    }

    if (currentIndex < totalCount - 1) {
      this.setData({ currentIndex: currentIndex + 1 });
      this.updateQuestion();
      this.updateProgress();
      this.saveProgress();
    }
  },

  onSaveExit() {
    wx.showModal({
      title: '提示',
      content: '确定要保存当前进度并退出吗？',
      success: (res) => {
        if (res.confirm) {
          this.saveProgress();
          wx.navigateBack();
        }
      }
    });
  },

  saveProgress() {
    const { testId, answers, currentIndex } = this.data;
    storage.setTestProgress(testId, { answers, currentIndex });
  },

  recordTestHistory(testId, resultData) {
    try {
      const test = mockTests.find(t => t.id === testId);
      const history = wx.getStorageSync('testHistory') || [];

      const record = {
        id: Date.now(),
        testId: testId,
        testName: test ? test.name : '未知测试',
        mbtiType: resultData.type || '',
        funType: resultData.type || '',
        discType: resultData.type || '',
        pdpType: resultData.type || '',
        enneagramType: resultData.type || '',
        jungType: resultData.type || '',
        totalScore: resultData.totalScore || resultData.score || 0,
        completedAt: new Date().toLocaleString()
      };

      // 根据不同测试类型设置对应的类型字段
      if (testId === 1) {
        record.mbtiType = resultData.type || '';
        record.funType = '';
        record.discType = '';
        record.pdpType = '';
        record.enneagramType = '';
        record.jungType = '';
      } else if (testId === 3) {
        record.mbtiType = '';
        record.funType = resultData.type || '';
        record.discType = '';
        record.pdpType = '';
        record.enneagramType = '';
        record.jungType = '';
      } else if (testId === 4) {
        record.mbtiType = '';
        record.funType = '';
        record.discType = '';
        record.pdpType = '';
        record.enneagramType = resultData.type || '';
        record.jungType = '';
      } else if (testId === 6) {
        record.mbtiType = '';
        record.funType = '';
        record.discType = resultData.type || '';
        record.pdpType = '';
        record.enneagramType = '';
        record.jungType = '';
      } else if (testId === 7) {
        record.mbtiType = '';
        record.funType = '';
        record.discType = '';
        record.pdpType = resultData.type || '';
        record.enneagramType = '';
        record.jungType = '';
      } else if (testId === 11) {
        record.mbtiType = '';
        record.funType = '';
        record.discType = '';
        record.pdpType = '';
        record.enneagramType = '';
        record.jungType = resultData.type || '';
      } else if (testId === 2) {
        // PHQ-9 只需要分数
        record.mbtiType = '';
        record.funType = '';
        record.discType = '';
        record.pdpType = '';
        record.enneagramType = '';
        record.jungType = '';
      }

      record.resultData = resultData;

      history.unshift(record);
      if (history.length > 50) {
        history.splice(50);
      }

      wx.setStorageSync('testHistory', history);
      console.log('测试历史已记录');
    } catch (e) {
      console.error('记录测试历史失败:', e);
    }
  },

  onSubmitTap() {
    const { currentIndex, selectedOptionId, selectedScale } = this.data;

    if (selectedOptionId === null && selectedScale === null) {
      wx.showToast({
        title: '请选择答案',
        icon: 'none',
        duration: 1500
      });
      return;
    }

    wx.showModal({
      title: '确认提交',
      content: '确定要提交答案吗？提交后将无法修改。',
      success: (res) => {
        if (res.confirm) {
          this.submitAnswers();
        }
      }
    });
  },

  submitAnswers() {
    const { testId, questions, answers } = this.data;

    wx.showLoading({
      title: '正在分析...',
      mask: true
    });

    setTimeout(() => {
      wx.hideLoading();

      // 先按sortOrder排序题目，然后提取对应答案
      const sortedQuestions = questions.sort((a, b) => a.sortOrder - b.sortOrder);
      const answerArray = sortedQuestions.map(q => answers[q.id]);

      const resultData = calculateResult(testId, answerArray);

      this.recordTestHistory(testId, resultData);

      storage.removeTestProgress(testId);

      const resultStr = encodeURIComponent(JSON.stringify(resultData));
      wx.redirectTo({
        url: `/pages/result/result?testId=${testId}&data=${resultStr}`
      });
    }, 1500);
  },

  onBackTap() {
    wx.showModal({
      title: '提示',
      content: '确定要退出测试吗？当前进度将自动保存。',
      success: (res) => {
        if (res.confirm) {
          this.saveProgress();
          wx.navigateBack();
        }
      }
    });
  }
});