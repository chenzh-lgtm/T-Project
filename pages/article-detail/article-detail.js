const { mentalHealthArticles } = require('../../data/mock-data.js');

Page({
  data: {
    article: null
  },

  onLoad(options) {
    const articleId = parseInt(options.id);
    const article = mentalHealthArticles.find(a => a.id === articleId);
    this.setData({ article });

    // 更新阅读计数
    if (article) {
      article.readCount = (article.readCount || 0) + 1;
    }

    wx.setNavigationBarTitle({
      title: article ? article.title : '文章详情'
    });
  },

  onShareAppMessage() {
    const { article } = this.data;
    return {
      title: article ? article.title : '心理访谈文章',
      path: `/pages/article-detail/article-detail?id=${article?.id}`
    };
  }
});
