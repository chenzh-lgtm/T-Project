const storage = {
  // Token相关
  setToken: (token) => {
    wx.setStorageSync('token', token);
  },

  getToken: () => {
    return wx.getStorageSync('token');
  },

  removeToken: () => {
    wx.removeStorageSync('token');
  },

  // 用户信息相关
  setUserInfo: (userInfo) => {
    wx.setStorageSync('userInfo', userInfo);
  },

  getUserInfo: () => {
    return wx.getStorageSync('userInfo');
  },

  removeUserInfo: () => {
    wx.removeStorageSync('userInfo');
  },

  // 检查用户是否已登录
  isLoggedIn: () => {
    const userInfo = wx.getStorageSync('userInfo');
    const token = wx.getStorageSync('token');
    return !!(userInfo && userInfo.id);
  },

  // 清除所有用户数据（用于退出登录）
  clearUserData: () => {
    wx.removeStorageSync('token');
    wx.removeStorageSync('userInfo');
    wx.removeStorageSync('appSettings');
  },

  // 测试进度相关
  setTestProgress: (testId, progress) => {
    wx.setStorageSync(`test_progress_${testId}`, progress);
  },

  getTestProgress: (testId) => {
    return wx.getStorageSync(`test_progress_${testId}`);
  },

  removeTestProgress: (testId) => {
    wx.removeStorageSync(`test_progress_${testId}`);
  },

  // 收藏相关
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
  },

  // 生成临时用户ID（用于演示）
  getTempUserId: () => {
    let tempId = wx.getStorageSync('tempUserId');
    if (!tempId) {
      tempId = 'user_' + Date.now();
      wx.setStorageSync('tempUserId', tempId);
    }
    return tempId;
  }
};

module.exports = storage;