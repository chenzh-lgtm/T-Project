const { mockTests, mockQuestions } = require('../../data/mock-data.js');
const storage = require('../../utils/storage.js');

Page({
  data: {
    testId: null,
    test: {},
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

  loadTestData(testId) {
    const test = mockTests.find(item => item.id === testId) || mockTests[0];
    const questions = mockQuestions.filter(q => q.testId === testId);

    this.setData({
      test,
      questions: questions.length > 0 ? questions : mockQuestions,
      totalCount: questions.length > 0 ? questions.length : mockQuestions.length,
      question: (questions.length > 0 ? questions[0] : mockQuestions[0]) || {}
    });

    this.updateProgress();
    this.loadSavedProgress();
  },

  loadSavedProgress() {
    const { testId } = this.data;
    const savedProgress = storage.getTestProgress(testId);
    if (savedProgress) {
      this.setData({
        answers: savedProgress.answers || {},
        currentIndex: savedProgress.currentIndex || 0
      });
      this.updateQuestion();
    }
  },

  updateProgress() {
    const { currentIndex, totalCount } = this.data;
    const progressPercent = totalCount > 0 ? ((currentIndex + 1) / totalCount) * 100 : 0;
    this.setData({ progressPercent });
  },

  updateQuestion() {
    const { questions, currentIndex } = this.data;
    if (questions.length > 0 && currentIndex < questions.length) {
      this.setData({
        question: questions[currentIndex],
        selectedOptionId: null,
        selectedScale: null
      });
    }
  },

  onOptionTap(e) {
    const optionId = e.currentTarget.dataset.id;
    const { question } = this.data;

    if (question.type === 3) {
      return;
    }

    this.setData({ selectedOptionId: optionId });
    this.saveAnswer(optionId);
  },

  onScaleTap(e) {
    const scale = e.currentTarget.dataset.scale;
    this.setData({ selectedScale: scale });
    this.saveAnswer(scale);
  },

  saveAnswer(answer) {
    const { currentIndex, answers } = this.data;
    answers[currentIndex] = answer;
    this.setData({ answers });
  },

  onPrevTap() {
    const { currentIndex } = this.data;
    if (currentIndex > 0) {
      this.setData({ currentIndex: currentIndex - 1 });
      this.updateQuestion();
      this.updateProgress();
      this.restoreAnswer();
    }
  },

  onNextTap() {
    const { currentIndex, totalCount } = this.data;
    if (currentIndex < totalCount - 1) {
      this.setData({ currentIndex: currentIndex + 1 });
      this.updateQuestion();
      this.updateProgress();
      this.restoreAnswer();
    }
  },

  restoreAnswer() {
    const { currentIndex, answers, question } = this.data;
    const savedAnswer = answers[currentIndex];
    if (savedAnswer !== undefined) {
      if (question.type === 3) {
        this.setData({ selectedScale: savedAnswer, selectedOptionId: null });
      } else {
        this.setData({ selectedOptionId: savedAnswer, selectedScale: null });
      }
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

  onSubmitTap() {
    wx.showModal({
      title: '确认提交',
      content: '确定要提交答案吗？提交后将无法修改。',
      success: (res) => {
        if (res.confirm) {
          const { testId } = this.data;
          storage.removeTestProgress(testId);
          wx.navigateTo({
            url: `/pages/result/result?id=${testId}`
          });
        }
      }
    });
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