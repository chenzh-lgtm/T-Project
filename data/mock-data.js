const mockCategories = [
  {
    id: 1,
    name: '性格测试',
    description: '了解你的性格特点和行为倾向',
    icon: '/images/category-personality.png',
    sortOrder: 1
  },
  {
    id: 2,
    name: '心理健康测试',
    description: '评估你的心理状态和健康水平',
    icon: '/images/category-mental.png',
    sortOrder: 2
  },
  {
    id: 3,
    name: '趣味测试',
    description: '轻松有趣的各类小测试',
    icon: '/images/category-fun.png',
    sortOrder: 3
  }
];

const mockTests = [
  {
    id: 1,
    categoryId: 1,
    name: 'MBTI性格测试',
    description: '国际流行的性格评估工具，通过四个维度分析你的性格类型',
    coverImage: '/images/test-mbti.png',
    estimatedTime: 15,
    questionCount: 93,
    status: 1
  },
  {
    id: 2,
    categoryId: 1,
    name: '九型人格测试',
    description: '揭示人类九种基本性格类型，深入了解自我与他人的差异',
    coverImage: '/images/test-enneagram.png',
    estimatedTime: 20,
    questionCount: 108,
    status: 1
  },
  {
    id: 3,
    categoryId: 1,
    name: '大五人格测试',
    description: '评估人格的五个核心维度：开放性、尽责性、外向性、宜人性、神经质',
    coverImage: '/images/test-ocean.png',
    estimatedTime: 10,
    questionCount: 60,
    status: 1
  },
  {
    id: 4,
    categoryId: 1,
    name: 'DISC行为风格测试',
    description: '分析支配型、影响型、稳健型、谨慎型四种行为风格',
    coverImage: '/images/test-disc.png',
    estimatedTime: 8,
    questionCount: 40,
    status: 1
  },
  {
    id: 5,
    categoryId: 2,
    name: 'SCL-90症状自评量表',
    description: '评估躯体化、强迫症状、人际关系敏感度等十个心理症状维度',
    coverImage: '/images/test-scl90.png',
    estimatedTime: 25,
    questionCount: 90,
    status: 1
  },
  {
    id: 6,
    categoryId: 2,
    name: 'PHQ-9抑郁筛查量表',
    description: '国际通用的抑郁症状筛查工具，帮助你了解自己的情绪状态',
    coverImage: '/images/test-phq9.png',
    estimatedTime: 5,
    questionCount: 9,
    status: 1
  },
  {
    id: 7,
    categoryId: 2,
    name: 'DASS-21压力评估量表',
    description: '评估抑郁、焦虑和压力三个维度的心理状态',
    coverImage: '/images/test-dass.png',
    estimatedTime: 8,
    questionCount: 21,
    status: 1
  },
  {
    id: 8,
    categoryId: 3,
    name: '职业兴趣测试',
    description: '探索你的职业兴趣倾向，发现最适合你的职业方向',
    coverImage: '/images/test-career.png',
    estimatedTime: 10,
    questionCount: 60,
    status: 1
  },
  {
    id: 9,
    categoryId: 3,
    name: '人际关系测试',
    description: '分析你在人际交往中的特点和建议',
    coverImage: '/images/test-relationship.png',
    estimatedTime: 8,
    questionCount: 30,
    status: 1
  }
];

const mockQuestions = [
  {
    id: 1,
    testId: 1,
    content: '你在社交聚会中通常是怎样的表现？',
    type: 1,
    sortOrder: 1,
    options: [
      { id: 1, content: '主动与陌生人交流', score: 10 },
      { id: 2, content: '等待别人来打招呼', score: 5 },
      { id: 3, content: '观察一会儿再决定', score: 8 },
      { id: 4, content: '尽量避免社交', score: 2 }
    ]
  },
  {
    id: 2,
    testId: 1,
    content: '你更倾向于哪种工作方式？',
    type: 1,
    sortOrder: 2,
    options: [
      { id: 5, content: '与团队一起协作', score: 10 },
      { id: 6, content: '独立完成任务', score: 5 },
      { id: 7, content: '根据情况灵活选择', score: 8 },
      { id: 8, content: '喜欢带领团队', score: 10 }
    ]
  },
  {
    id: 3,
    testId: 1,
    content: '你做决定时更看重什么？',
    type: 1,
    sortOrder: 3,
    options: [
      { id: 9, content: '逻辑和事实', score: 5 },
      { id: 10, content: '情感和价值观', score: 10 },
      { id: 11, content: '权衡利弊后决定', score: 8 },
      { id: 12, content: '直觉和感受', score: 10 }
    ]
  }
];

const mockResult = {
  id: 1,
  testId: 1,
  name: 'ENFJ主人公型人格',
  minScore: 80,
  maxScore: 100,
  title: '你是温暖且有号召力的领导者',
  analysis: '你是一个充满热情、善于表达的人。你具有很强的人际交往能力，能够真诚地关心他人，并激励他们实现共同的目标。你喜欢帮助他人发挥潜力，是天生的领导者。',
  suggestion: '建议你在保持热情的同时，学会倾听不同的声音；在帮助他人的同时，也要关注自己的需求。尝试给自己一些独处的时间来反思和充电。'
};

module.exports = {
  mockCategories,
  mockTests,
  mockQuestions,
  mockResult
};