const storage = {
  setToken: (token) => {
    wx.setStorageSync('token', token);
  },

  getToken: () => {
    return wx.getStorageSync('token');
  },

  removeToken: () => {
    wx.removeStorageSync('token');
  },

  setUserInfo: (userInfo) => {
    wx.setStorageSync('userInfo', userInfo);
  },

  getUserInfo: () => {
    return wx.getStorageSync('userInfo');
  },

  setTestProgress: (testId, progress) => {
    wx.setStorageSync(`test_progress_${testId}`, progress);
  },

  getTestProgress: (testId) => {
    return wx.getStorageSync(`test_progress_${testId}`);
  },

  removeTestProgress: (testId) => {
    wx.removeStorageSync(`test_progress_${testId}`);
  },

  setCollection: (testId) => {
    let collections = wx.getStorageSync('collections') || [];
    if (!collections.includes(testId)) {
      collections.push(testId);
      wx.setStorageSync('collections', collections);
    }
  },

  removeCollection: (testId) => {
    let collections = wx.getStorageSync('collections') || [];
    collections = collections.filter(id => id !== testId);
    wx.setStorageSync('collections', collections);
  },

  isCollected: (testId) => {
    let collections = wx.getStorageSync('collections') || [];
    return collections.includes(testId);
  }
};

module.exports = storage;