const mockData = require('../data/mock-data.js');

// 纯本地存储实现，不需要后端服务
const api = {
  // 健康检查
  health() {
    return Promise.resolve({ status: 'ok', message: '本地服务正常运行' });
  },

  // 获取所有测试数据（从本地mock数据获取）
  getTests() {
    return Promise.resolve({
      success: true,
      data: {
        tests: mockData.mockTests,
        categories: mockData.mockCategories,
        questions: mockData.mockQuestions,
        options: mockData.mockOptions,
        templates: []
      }
    });
  },

  // 用户登录相关接口（本地模拟）
  login(code) {
    const userId = 'local_user_' + Date.now();
    return Promise.resolve({
      success: true,
      data: {
        userId,
        token: 'local_token_' + Date.now()
      }
    });
  },

  // 保存测试报告到本地存储
  saveReport(report) {
    try {
      let reports = wx.getStorageSync('savedReports') || [];
      const now = new Date();
      const newReport = {
        id: Date.now(), // 用时间戳作为唯一ID
        ...report,
        createdAt: now.toLocaleString(),
        createdAtISO: now.toISOString(), // 保存标准ISO格式，方便解析
        timestamp: now.getTime() // 保存时间戳，最可靠
      };
      reports.unshift(newReport);

      // 最多保存100份报告
      if (reports.length > 100) {
        reports = reports.slice(0, 100);
      }

      wx.setStorageSync('savedReports', reports);

      return Promise.resolve({
        success: true,
        message: '报告保存成功',
        data: { reportId: newReport.id }
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        message: '保存失败',
        error: error.message
      });
    }
  },

  // 获取用户的报告列表（从本地存储获取）
  getReports(userId = 'test_user') {
    try {
      const reports = wx.getStorageSync('savedReports') || [];
      return Promise.resolve({
        success: true,
        data: reports.map(report => ({
          id: report.id,
          test_id: report.testId,
          test_name: report.testName,
          mbti_type: report.mbtiType,
          fun_type: report.funType,
          type: report.type,
          disc_type: report.disc_type || report.discType,
          pdp_type: report.pdp_type || report.pdpType,
          enneagram_type: report.enneagram_type || report.enneagramType,
          jung_type: report.jung_type || report.jungType,
          ocean_type: report.ocean_type || report.oceanType,
          holland_type: report.holland_type || report.hollandType,
          epq_type: report.epq_type || report.epqType,
          sixteenPF_type: report.sixteenPF_type || report.sixteenPFType,
          constellation_type: report.constellation_type || report.constellationType,
          career_type: report.career_type || report.careerType,
          relationship_type: report.relationship_type || report.relationshipType,
          sds_type: report.sds_type || report.sdsType,
          sas_type: report.sas_type || report.sasType,
          dass21_type: report.dass21_type || report.dass21Type,
          bdi_type: report.bdi_type || report.bdiType,
          hama_type: report.hama_type || report.hamaType,
          hamd_type: report.hamd_type || report.hamdType,
          scl90_type: report.scl90_type || report.scl90Type,
          total_score: report.totalScore,
          title: report.title,
          created_at: report.createdAt,
          createdAtISO: report.createdAtISO,
          timestamp: report.timestamp
        }))
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        message: '获取报告失败',
        error: error.message
      });
    }
  },

  // 获取报告详情（从本地存储获取）
  getReportDetail(id) {
    try {
      const reports = wx.getStorageSync('savedReports') || [];
      const report = reports.find(r => r.id == id);

      if (!report) {
        return Promise.reject({
          success: false,
          message: '报告不存在'
        });
      }

      // 统一字段格式，和getReports保持一致
      const formattedReport = {
        id: report.id,
        test_id: report.testId,
        test_name: report.testName,
        mbti_type: report.mbtiType,
        fun_type: report.funType,
        type: report.type,
        disc_type: report.disc_type || report.discType,
        pdp_type: report.pdp_type || report.pdpType,
        enneagram_type: report.enneagram_type || report.enneagramType,
        jung_type: report.jung_type || report.jungType,
        ocean_type: report.ocean_type || report.oceanType,
        holland_type: report.holland_type || report.hollandType,
        epq_type: report.epq_type || report.epqType,
        sixteenPF_type: report.sixteenPF_type || report.sixteenPFType,
        constellation_type: report.constellation_type || report.constellationType,
        career_type: report.career_type || report.careerType,
        relationship_type: report.relationship_type || report.relationshipType,
        sds_type: report.sds_type || report.sdsType,
        sas_type: report.sas_type || report.sasType,
        dass21_type: report.dass21_type || report.dass21Type,
        bdi_type: report.bdi_type || report.bdiType,
        hama_type: report.hama_type || report.hamaType,
        hamd_type: report.hamd_type || report.hamdType,
        scl90_type: report.scl90_type || report.scl90Type,
        total_score: report.totalScore,
        title: report.title,
        analysis: report.analysis,
        suggestion: report.suggestion,
        strengths: report.strengths,
        careers: report.careers,
        resultData: report.resultData,
        created_at: report.createdAt
      };

      return Promise.resolve({
        success: true,
        data: formattedReport
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        message: '获取报告详情失败',
        error: error.message
      });
    }
  },

  // 删除报告（从本地存储删除）
  deleteReport(id) {
    try {
      let reports = wx.getStorageSync('savedReports') || [];
      reports = reports.filter(r => r.id != id);
      wx.setStorageSync('savedReports', reports);

      return Promise.resolve({
        success: true,
        message: '报告已删除'
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        message: '删除失败',
        error: error.message
      });
    }
  }
};

module.exports = api;