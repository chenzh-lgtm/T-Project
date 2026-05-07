// 测试类型配置文件 - 集中管理所有测试的元数据
// 修改单个测试类型不会影响其他测试

const testConfig = {
  // MBTI测试
  1: {
    name: 'MBTI性格测试',
    questionCount: 93,
    estimatedTime: 15,
    resultKey: 'mbtiResults',
    calculator: 'calculateMBTIResult'
  },
  
  // PHQ-9抑郁筛查
  2: {
    name: 'PHQ-9抑郁筛查量表',
    questionCount: 9,
    estimatedTime: 3,
    resultKey: 'phq9Results',
    calculator: 'calculatePHQ9Result'
  },
  
  // 趣味测试
  3: {
    name: '趣味性格测试',
    questionCount: 5,
    estimatedTime: 2,
    resultKey: 'funResults',
    calculator: 'calculateFunResult'
  },
  
  // 九型人格
  4: {
    name: '九型人格测试',
    questionCount: 36,
    estimatedTime: 10,
    resultKey: 'enneagramResults',
    calculator: 'calculateEnneagramResult'
  },
  
  // 大五人格
  5: {
    name: '大五人格测试',
    questionCount: 20,
    estimatedTime: 5,
    resultKey: 'oceanResults',
    calculator: 'calculateOCEANResult'
  },
  
  // DISC测试
  6: {
    name: 'DISC行为风格测试',
    questionCount: 16,
    estimatedTime: 4,
    resultKey: 'discResults',
    calculator: 'calculateDISCResult'
  },
  
  // PDP测试
  7: {
    name: 'PDP性格测试',
    questionCount: 15,
    estimatedTime: 4,
    resultKey: 'pdpResults',
    calculator: 'calculatePDPResult'
  },
  
  // 艾森克人格问卷
  8: {
    name: '艾森克人格问卷',
    questionCount: 18,
    estimatedTime: 5,
    resultKey: 'epqResults',
    calculator: 'calculateEPQResult'
  },
  
  // 卡特尔16PF
  9: {
    name: '卡特尔16PF测试',
    questionCount: 20,
    estimatedTime: 8,
    resultKey: 'sixteenPFResults',
    calculator: 'calculate16PFResult'
  },
  
  // 霍兰德职业兴趣
  10: {
    name: '霍兰德职业兴趣测试',
    questionCount: 18,
    estimatedTime: 5,
    resultKey: 'hollandResults',
    calculator: 'calculateHollandResult'
  },
  
  // 荣格类型
  11: {
    name: '荣格性格类型测试',
    questionCount: 20,
    estimatedTime: 6,
    resultKey: 'jungResults',
    calculator: 'calculateJungResult'
  },
  
  // SDS抑郁自评
  12: {
    name: 'SDS抑郁自评量表',
    questionCount: 20,
    estimatedTime: 3,
    resultKey: 'sdsResults',
    calculator: 'calculateSDSResult'
  },
  
  // SAS焦虑自评
  13: {
    name: 'SAS焦虑自评量表',
    questionCount: 20,
    estimatedTime: 3,
    resultKey: 'sasResults',
    calculator: 'calculateSASResult'
  },
  
  // DASS-21
  14: {
    name: 'DASS-21量表',
    questionCount: 21,
    estimatedTime: 5,
    resultKey: 'dass21Results',
    calculator: 'calculateDASS21Result'
  },
  
  // BDI贝克抑郁
  15: {
    name: 'BDI贝克抑郁量表',
    questionCount: 21,
    estimatedTime: 4,
    resultKey: 'bdiResults',
    calculator: 'calculateBDIResult'
  },
  
  // HAMA焦虑
  16: {
    name: 'HAMA焦虑量表',
    questionCount: 14,
    estimatedTime: 4,
    resultKey: 'hamaResults',
    calculator: 'calculateHAMAResult'
  },
  
  // HAMD抑郁
  17: {
    name: 'HAMD抑郁量表',
    questionCount: 17,
    estimatedTime: 4,
    resultKey: 'hamdResults',
    calculator: 'calculateHAMDResult'
  },
  
  // SCL-90
  18: {
    name: 'SCL-90症状自评量表',
    questionCount: 90,
    estimatedTime: 10,
    resultKey: 'scl90Results',
    calculator: 'calculateSCL90Result'
  },
  
  // 星座性格
  19: {
    name: '星座性格测试',
    questionCount: 10,
    estimatedTime: 3,
    resultKey: 'constellationResults',
    calculator: 'calculateConstellationResult'
  },
  
  // 职业倾向
  20: {
    name: '职业倾向测试',
    questionCount: 12,
    estimatedTime: 4,
    resultKey: 'careerResults',
    calculator: 'calculateCareerResult'
  },
  
  // 人际关系
  21: {
    name: '人际关系测试',
    questionCount: 8,
    estimatedTime: 3,
    resultKey: 'relationshipResults',
    calculator: 'calculateRelationshipResult'
  },
  
  // MBTI Step II
  22: {
    name: 'MBTI Step II Form Q',
    questionCount: 144,
    estimatedTime: 25,
    resultKey: 'mbtiResults',
    calculator: 'calculateMBTIResult',
    isPaid: true,
    price: 5
  }
};

module.exports = {
  testConfig,
  
  // 获取测试配置
  getTestConfig(testId) {
    return testConfig[testId] || null;
  },
  
  // 获取测试名称
  getTestName(testId) {
    const config = testConfig[testId];
    return config ? config.name : '未知测试';
  },
  
  // 获取题目数量
  getQuestionCount(testId) {
    const config = testConfig[testId];
    return config ? config.questionCount : 0;
  },
  
  // 获取预计时间
  getEstimatedTime(testId) {
    const config = testConfig[testId];
    return config ? config.estimatedTime : 5;
  },
  
  // 获取结果数据键名
  getResultKey(testId) {
    const config = testConfig[testId];
    return config ? config.resultKey : 'mbtiResults';
  },
  
  // 获取计算器函数名
  getCalculatorName(testId) {
    const config = testConfig[testId];
    return config ? config.calculator : 'calculateMBTIResult';
  },
  
  // 获取所有测试ID列表
  getAllTestIds() {
    return Object.keys(testConfig).map(id => parseInt(id));
  },
  
  // 获取所有配置
  getAllConfigs() {
    return Object.keys(testConfig).map(id => ({
      id: parseInt(id),
      ...testConfig[id]
    }));
  }
};