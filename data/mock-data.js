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
    description: '探索你的人格密码，发现真实的自我！国际权威的MBTI性格测评，帮助你深入了解自己的性格类型、优势特质与潜在天赋，找到最适合你的成长与发展方向',
    coverImage: '/images/test-mbti.png',
    emoji: '🧠',
    gradient: '#6C5CE7, #a29bfe',
    estimatedTime: 15,
    questionCount: 93,
    status: 1
  },
  {
    id: 2,
    categoryId: 2,
    name: 'PHQ-9抑郁筛查量表',
    description: '国际通用的抑郁症状筛查工具，帮助你了解自己的情绪状态',
    coverImage: '/images/test-phq9.png',
    emoji: '📝',
    gradient: '#00b894, #55efc4',
    estimatedTime: 3,
    questionCount: 9,
    status: 1
  },
  {
    id: 3,
    categoryId: 3,
    name: '趣味性格测试',
    description: '通过简单问题了解你的性格特点',
    coverImage: '/images/test-career.png',
    emoji: '🎮',
    gradient: '#fdcb6e, #f39c12',
    estimatedTime: 2,
    questionCount: 5,
    status: 1
  },
  {
    id: 4,
    categoryId: 1,
    name: '九型人格测试',
    description: 'RHETI Sampler (官方精简版)，探索你的核心动机和恐惧，发现真实的自我',
    coverImage: '/images/test-enneagram.png',
    emoji: '🔮',
    gradient: '#e17055, #fab1a0',
    estimatedTime: 10,
    questionCount: 36,
    status: 1
  },
  {
    id: 5,
    categoryId: 1,
    name: '大五人格测试',
    description: '评估人格的五个核心维度，了解你的性格特征',
    coverImage: '/images/test-ocean.png',
    emoji: '🌊',
    gradient: '#0984e3, #74b9ff',
    estimatedTime: 5,
    questionCount: 20,
    status: 1
  },
  {
    id: 6,
    categoryId: 1,
    name: 'DISC行为风格测试',
    description: '分析你的行为倾向，提升人际沟通能力',
    coverImage: '/images/test-disc.png',
    emoji: '🎯',
    gradient: '#00b894, #00cec9',
    estimatedTime: 4,
    questionCount: 16,
    status: 1
  },
  {
    id: 7,
    categoryId: 1,
    name: 'PDP性格测试',
    description: '识别你的性格动物类型，发挥个人优势',
    coverImage: '/images/test-pdp.png',
    emoji: '🦁',
    gradient: '#d63031, #ff7675',
    estimatedTime: 4,
    questionCount: 15,
    status: 1
  },
  {
    id: 8,
    categoryId: 1,
    name: '艾森克人格问卷',
    description: '评估你的内外向、神经质和精神质维度',
    coverImage: '/images/test-epq.png',
    emoji: '🧩',
    gradient: '#6c5ce7, #a29bfe',
    estimatedTime: 5,
    questionCount: 18,
    status: 1
  },
  {
    id: 9,
    categoryId: 1,
    name: '卡特尔16PF测试',
    description: '测量16种根源人格特质，全面了解自我',
    coverImage: '/images/test-16pf.png',
    emoji: '📊',
    gradient: '#fdcb6e, #f39c12',
    estimatedTime: 8,
    questionCount: 20,
    status: 1
  },
  {
    id: 10,
    categoryId: 1,
    name: '霍兰德职业兴趣测试',
    description: '发现你的职业兴趣类型，找到理想职业方向',
    coverImage: '/images/test-holland.png',
    emoji: '💼',
    gradient: '#00b894, #55efc4',
    estimatedTime: 5,
    questionCount: 18,
    status: 1
  },
  {
    id: 11,
    categoryId: 1,
    name: '荣格性格类型测试',
    description: '基于荣格心理学，探索你的心理类型',
    coverImage: '/images/test-jung.png',
    emoji: '🔮',
    gradient: '#e17055, #fdcb6e',
    estimatedTime: 6,
    questionCount: 20,
    status: 1
  },
  {
    id: 12,
    categoryId: 2,
    name: 'SDS抑郁自评量表',
    description: 'Zung氏抑郁自评量表，评估您的抑郁状态',
    coverImage: '/images/test-sds.png',
    emoji: '🌙',
    gradient: '#0984e3, #74b9ff',
    estimatedTime: 3,
    questionCount: 20,
    status: 1
  },
  {
    id: 13,
    categoryId: 2,
    name: 'SAS焦虑自评量表',
    description: 'Zung氏焦虑自评量表，评估您的焦虑状态',
    coverImage: '/images/test-sas.png',
    emoji: '😰',
    gradient: '#fdcb6e, #f39c12',
    estimatedTime: 3,
    questionCount: 20,
    status: 1
  },
  {
    id: 14,
    categoryId: 2,
    name: 'DASS-21量表',
    description: '抑郁-焦虑-压力量表，全面评估您的心理健康',
    coverImage: '/images/test-dass21.png',
    emoji: '📊',
    gradient: '#6c5ce7, #a29bfe',
    estimatedTime: 5,
    questionCount: 21,
    status: 1
  },
  {
    id: 15,
    categoryId: 2,
    name: 'BDI贝克抑郁量表',
    description: '贝克抑郁自评量表，专业评估抑郁症状',
    coverImage: '/images/test-bdi.png',
    emoji: '📋',
    gradient: '#00b894, #00cec9',
    estimatedTime: 4,
    questionCount: 21,
    status: 1
  },
  {
    id: 16,
    categoryId: 2,
    name: 'HAMA焦虑量表',
    description: '汉密尔顿焦虑量表，评估焦虑症状程度',
    coverImage: '/images/test-hama.png',
    emoji: '💭',
    gradient: '#d63031, #ff7675',
    estimatedTime: 4,
    questionCount: 14,
    status: 1
  },
  {
    id: 17,
    categoryId: 2,
    name: 'HAMD抑郁量表',
    description: '汉密尔顿抑郁量表，评估抑郁症状程度',
    coverImage: '/images/test-hamd.png',
    emoji: '🌸',
    gradient: '#e17055, #fab1a0',
    estimatedTime: 4,
    questionCount: 17,
    status: 1
  },
  {
    id: 18,
    categoryId: 2,
    name: 'SCL-90症状自评量表',
    description: '90项症状清单，全面评估您的心理健康状况',
    coverImage: '/images/test-scl90.png',
    emoji: '🧠',
    gradient: '#2d3436, #636e72',
    estimatedTime: 10,
    questionCount: 90,
    status: 1
  },
  {
    id: 19,
    categoryId: 3,
    name: '星座性格测试',
    description: '通过简单问题探索你的星座性格特点',
    coverImage: '/images/test-career.png',
    emoji: '⭐',
    gradient: '#0984e3, #74b9ff',
    estimatedTime: 3,
    questionCount: 10,
    status: 1
  },
  {
    id: 20,
    categoryId: 3,
    name: '职业倾向测试',
    description: '发现你最适合的职业发展方向',
    coverImage: '/images/test-career.png',
    emoji: '💼',
    gradient: '#00b894, #55efc4',
    estimatedTime: 4,
    questionCount: 12,
    status: 1
  },
  {
    id: 21,
    categoryId: 3,
    name: '人际关系测试',
    description: '评估你的社交能力和人际关系模式',
    coverImage: '/images/test-career.png',
    emoji: '🤝',
    gradient: '#e17055, #fab1a0',
    estimatedTime: 3,
    questionCount: 8,
    status: 1
  },
  {
    id: 22,
    categoryId: 1,
    name: 'MBTI Step II Form Q',
    description: '深入探索人格偏好的细微差异，20个层面的详细分析',
    coverImage: '/images/test-mbti.png',
    emoji: '🔮',
    gradient: '#6C5CE7, #a29bfe',
    estimatedTime: 25,
    questionCount: 144,
    status: 1,
    isPaid: true,
    price: 5
  }
];

const mockQuestions = [
  { id: 1, testId: 1, content: '你通常如何与他人相处？', type: 1, sortOrder: 1, dimension: 'EI', options: [{ id: 1, content: '轻松自如地与陌生人交流', score: 'E' }, { id: 2, content: '与熟悉的人交流更自在', score: 'I' }] },
  { id: 2, testId: 1, content: '你更喜欢什么样的环境？', type: 1, sortOrder: 2, dimension: 'EI', options: [{ id: 3, content: '热闹、充满刺激的环境', score: 'E' }, { id: 4, content: '安静平和的环境', score: 'I' }] },
  { id: 3, testId: 1, content: '在聚会中，你通常是：', type: 1, sortOrder: 3, dimension: 'EI', options: [{ id: 5, content: '主动与他人交谈', score: 'E' }, { id: 6, content: '在一旁观察他人', score: 'I' }] },
  { id: 4, testId: 1, content: '你从哪种活动中获得更多能量？', type: 1, sortOrder: 4, dimension: 'EI', options: [{ id: 7, content: '与他人交流讨论', score: 'E' }, { id: 8, content: '独自思考和反省', score: 'I' }] },
  { id: 5, testId: 1, content: '你更愿意在哪种场合发言？', type: 1, sortOrder: 5, dimension: 'EI', options: [{ id: 9, content: '在小组讨论中发言', score: 'E' }, { id: 10, content: '只在需要时才发言', score: 'I' }] },
  { id: 6, testId: 1, content: '当你独自一人时，你会：', type: 1, sortOrder: 6, dimension: 'EI', options: [{ id: 11, content: '感到有点不自在', score: 'E' }, { id: 12, content: '享受独处的时光', score: 'I' }] },
  { id: 7, testId: 1, content: '你更喜欢什么样的社交方式？', type: 1, sortOrder: 7, dimension: 'EI', options: [{ id: 13, content: '和一群朋友一起', score: 'E' }, { id: 14, content: '和一到两个亲密朋友在一起', score: 'I' }] },
  { id: 8, testId: 1, content: '在业余时间，你更倾向于：', type: 1, sortOrder: 8, dimension: 'EI', options: [{ id: 15, content: '参加社交活动', score: 'E' }, { id: 16, content: '阅读或独自思考', score: 'I' }] },
  { id: 9, testId: 1, content: '你通常在团队中扮演什么角色？', type: 1, sortOrder: 9, dimension: 'EI', options: [{ id: 17, content: '协调者和组织者', score: 'E' }, { id: 18, content: '执行者和专业人士', score: 'I' }] },
  { id: 10, testId: 1, content: '当遇到问题时，你首先会：', type: 1, sortOrder: 10, dimension: 'EI', options: [{ id: 19, content: '和他人讨论解决方案', score: 'E' }, { id: 20, content: '先自己想一想', score: 'I' }] },
  { id: 11, testId: 1, content: '你更关注事物的哪个方面？', type: 1, sortOrder: 11, dimension: 'SN', options: [{ id: 21, content: '具体的、实际的信息', score: 'S' }, { id: 22, content: '抽象的、理论的概念', score: 'N' }] },
  { id: 12, testId: 1, content: '在学习新知识时，你更喜欢：', type: 1, sortOrder: 12, dimension: 'SN', options: [{ id: 23, content: '具体的例子和实践', score: 'S' }, { id: 24, content: '理论分析和推理', score: 'N' }] },
  { id: 13, testId: 1, content: '你更倾向于相信：', type: 1, sortOrder: 13, dimension: 'SN', options: [{ id: 25, content: '自己的亲身经历', score: 'S' }, { id: 26, content: '自己的想法和直觉', score: 'N' }] },
  { id: 14, testId: 1, content: '当阅读一本书时，你更关注：', type: 1, sortOrder: 14, dimension: 'SN', options: [{ id: 27, content: '具体的情节和细节', score: 'S' }, { id: 28, content: '背后的含义和主题', score: 'N' }] },
  { id: 15, testId: 1, content: '你更喜欢什么样的描述方式？', type: 1, sortOrder: 15, dimension: 'SN', options: [{ id: 29, content: '详细、具体的描述', score: 'S' }, { id: 30, content: '简洁、概括性的描述', score: 'N' }] },
  { id: 16, testId: 1, content: '当你学习一项新技能时，你希望：', type: 1, sortOrder: 16, dimension: 'SN', options: [{ id: 31, content: '有具体的步骤说明', score: 'S' }, { id: 32, content: '了解基本原理后自己摸索', score: 'N' }] },
  { id: 17, testId: 1, content: '你更容易记住：', type: 1, sortOrder: 17, dimension: 'SN', options: [{ id: 33, content: '具体的事实和日期', score: 'S' }, { id: 34, content: '概念和它们之间的关系', score: 'N' }] },
  { id: 18, testId: 1, content: '在解决问题时，你更倾向于：', type: 1, sortOrder: 18, dimension: 'SN', options: [{ id: 35, content: '使用已被验证的方法', score: 'S' }, { id: 36, content: '尝试新的、非传统的方法', score: 'N' }] },
  { id: 19, testId: 1, content: '你更喜欢什么样的老师？', type: 1, sortOrder: 19, dimension: 'SN', options: [{ id: 37, content: '给出具体例子和事实的老师', score: 'S' }, { id: 38, content: '讲解原理和概念的老师', score: 'N' }] },
  { id: 20, testId: 1, content: '当解释一个想法时，你更倾向于：', type: 1, sortOrder: 20, dimension: 'SN', options: [{ id: 39, content: '使用具体的例子', score: 'S' }, { id: 40, content: '使用抽象的原理', score: 'N' }] },
  { id: 21, testId: 1, content: '你更看重：', type: 1, sortOrder: 21, dimension: 'SN', options: [{ id: 41, content: '事实和现实', score: 'S' }, { id: 42, content: '可能性和潜力', score: 'N' }] },
  { id: 22, testId: 1, content: '当做一个项目时，你更喜欢：', type: 1, sortOrder: 22, dimension: 'SN', options: [{ id: 43, content: '遵循既定的程序', score: 'S' }, { id: 44, content: '探索新的方法', score: 'N' }] },
  { id: 23, testId: 1, content: '你更容易被什么吸引？', type: 1, sortOrder: 23, dimension: 'SN', options: [{ id: 45, content: '实际可行的方案', score: 'S' }, { id: 46, content: '富有创意的想法', score: 'N' }] },
  { id: 24, testId: 1, content: '当你遇到新问题时，你的第一反应是：', type: 1, sortOrder: 24, dimension: 'SN', options: [{ id: 47, content: '寻找类似问题的解决方法', score: 'S' }, { id: 48, content: '思考全新的解决方案', score: 'N' }] },
  { id: 25, testId: 1, content: '你更喜欢什么样的信息？', type: 1, sortOrder: 25, dimension: 'SN', options: [{ id: 49, content: '详细的事实和数据', score: 'S' }, { id: 50, content: '整体的概念和理论', score: 'N' }] },
  { id: 26, testId: 1, content: '当你做决定时，你更依赖：', type: 1, sortOrder: 26, dimension: 'TF', options: [{ id: 51, content: '逻辑和分析', score: 'T' }, { id: 52, content: '情感和价值观', score: 'F' }] },
  { id: 27, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 27, dimension: 'TF', options: [{ id: 53, content: '公平和正义', score: 'T' }, { id: 54, content: '仁慈和关怀', score: 'F' }] },
  { id: 28, testId: 1, content: '当你评价他人时，你更看重：', type: 1, sortOrder: 28, dimension: 'TF', options: [{ id: 55, content: '能力和效率', score: 'T' }, { id: 56, content: '善良和体贴', score: 'F' }] },
  { id: 29, testId: 1, content: '在争论中，你通常：', type: 1, sortOrder: 29, dimension: 'TF', options: [{ id: 57, content: '强调逻辑和事实', score: 'T' }, { id: 58, content: '考虑对方的感受', score: 'F' }] },
  { id: 30, testId: 1, content: '你更愿意被他人描述为：', type: 1, sortOrder: 30, dimension: 'TF', options: [{ id: 59, content: '理性且客观的', score: 'T' }, { id: 60, content: '富有同情心的', score: 'F' }] },
  { id: 31, testId: 1, content: '当制定规则时，你更倾向于：', type: 1, sortOrder: 31, dimension: 'TF', options: [{ id: 61, content: '确保规则的一致性', score: 'T' }, { id: 62, content: '考虑特殊情况', score: 'F' }] },
  { id: 32, testId: 1, content: '你认为管理他人最好的方式是：', type: 1, sortOrder: 32, dimension: 'TF', options: [{ id: 63, content: '明确的规则和标准', score: 'T' }, { id: 64, content: '关心员工的需求', score: 'F' }] },
  { id: 33, testId: 1, content: '当你给他人建议时，你更关注：', type: 1, sortOrder: 33, dimension: 'TF', options: [{ id: 65, content: '最有效的解决方案', score: 'T' }, { id: 66, content: '对方能接受的方式', score: 'F' }] },
  { id: 34, testId: 1, content: '你更容易被什么打动？', type: 1, sortOrder: 34, dimension: 'TF', options: [{ id: 67, content: '一个合乎逻辑的论点', score: 'T' }, { id: 68, content: '一个感人的故事', score: 'F' }] },
  { id: 35, testId: 1, content: '当与他人有分歧时，你倾向于：', type: 1, sortOrder: 35, dimension: 'TF', options: [{ id: 69, content: '坚持自己的立场', score: 'T' }, { id: 70, content: '寻找共同点', score: 'F' }] },
  { id: 36, testId: 1, content: '你更看重：', type: 1, sortOrder: 36, dimension: 'TF', options: [{ id: 71, content: '诚实', score: 'T' }, { id: 72, content: '善良', score: 'F' }] },
  { id: 37, testId: 1, content: '你认为什么更公平？', type: 1, sortOrder: 37, dimension: 'TF', options: [{ id: 73, content: '每个人都按规则行事', score: 'T' }, { id: 74, content: '考虑每个人的情况', score: 'F' }] },
  { id: 38, testId: 1, content: '当帮助他人时，你更关注：', type: 1, sortOrder: 38, dimension: 'TF', options: [{ id: 75, content: '解决他们的问题', score: 'T' }, { id: 76, content: '理解他们的感受', score: 'F' }] },
  { id: 39, testId: 1, content: '你更容易受到什么影响？', type: 1, sortOrder: 39, dimension: 'TF', options: [{ id: 77, content: '数据和事实', score: 'T' }, { id: 78, content: '人际关系', score: 'F' }] },
  { id: 40, testId: 1, content: '你认为法律的存在主要是为了：', type: 1, sortOrder: 40, dimension: 'TF', options: [{ id: 79, content: '维护社会秩序', score: 'T' }, { id: 80, content: '保护个人权利', score: 'F' }] },
  { id: 41, testId: 1, content: '你更喜欢什么样的生活？', type: 1, sortOrder: 41, dimension: 'JP', options: [{ id: 81, content: '有计划、有组织的', score: 'J' }, { id: 82, content: '灵活、自由的', score: 'P' }] },
  { id: 42, testId: 1, content: '当你计划旅行时，你通常会：', type: 1, sortOrder: 42, dimension: 'JP', options: [{ id: 83, content: '提前预订好所有行程', score: 'J' }, { id: 84, content: '随心情决定去哪里', score: 'P' }] },
  { id: 43, testId: 1, content: '你更喜欢什么时候完成任务？', type: 1, sortOrder: 43, dimension: 'JP', options: [{ id: 85, content: '提前完成', score: 'J' }, { id: 86, content: '最后一刻完成', score: 'P' }] },
  { id: 44, testId: 1, content: '你更倾向于：', type: 1, sortOrder: 44, dimension: 'JP', options: [{ id: 87, content: '按照清单做事', score: 'J' }, { id: 88, content: '随机应变', score: 'P' }] },
  { id: 45, testId: 1, content: '你更喜欢什么样的工作方式？', type: 1, sortOrder: 45, dimension: 'JP', options: [{ id: 89, content: '按计划进行', score: 'J' }, { id: 90, content: '随时调整', score: 'P' }] },
  { id: 46, testId: 1, content: '当你有一个重要项目时，你会：', type: 1, sortOrder: 46, dimension: 'JP', options: [{ id: 91, content: '制定详细的计划', score: 'J' }, { id: 92, content: '边做边想', score: 'P' }] },
  { id: 47, testId: 1, content: '你通常如何管理你的时间？', type: 1, sortOrder: 47, dimension: 'JP', options: [{ id: 93, content: '使用日程表和待办事项', score: 'J' }, { id: 94, content: '随心而动', score: 'P' }] },
  { id: 48, testId: 1, content: '你更喜欢什么样的规则？', type: 1, sortOrder: 48, dimension: 'JP', options: [{ id: 95, content: '明确的规则', score: 'J' }, { id: 96, content: '灵活的指导原则', score: 'P' }] },
  { id: 49, testId: 1, content: '当面对多个任务时，你通常：', type: 1, sortOrder: 49, dimension: 'JP', options: [{ id: 97, content: '按优先级一项一项完成', score: 'J' }, { id: 98, content: '同时处理多个任务', score: 'P' }] },
  { id: 50, testId: 1, content: '你更喜欢什么样的生活方式？', type: 1, sortOrder: 50, dimension: 'JP', options: [{ id: 99, content: '稳定有序', score: 'J' }, { id: 100, content: '充满变化', score: 'P' }] },
  { id: 51, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 51, dimension: 'JP', options: [{ id: 101, content: '按时完成任务', score: 'J' }, { id: 102, content: '灵活应变', score: 'P' }] },
  { id: 52, testId: 1, content: '你通常如何准备会议？', type: 1, sortOrder: 52, dimension: 'JP', options: [{ id: 103, content: '准备详细的议程', score: 'J' }, { id: 104, content: '临场发挥', score: 'P' }] },
  { id: 53, testId: 1, content: '你更喜欢什么样的决策方式？', type: 1, sortOrder: 53, dimension: 'JP', options: [{ id: 105, content: '经过深思熟虑后决定', score: 'J' }, { id: 106, content: '根据情况随机决定', score: 'P' }] },
  { id: 54, testId: 1, content: '当有人说"计划赶不上变化"时，你通常会：', type: 1, sortOrder: 54, dimension: 'JP', options: [{ id: 107, content: '同意，但仍然做计划', score: 'J' }, { id: 108, content: '完全同意，随机应变', score: 'P' }] },
  { id: 55, testId: 1, content: '你更喜欢什么样的约会方式？', type: 1, sortOrder: 55, dimension: 'JP', options: [{ id: 109, content: '提前安排好活动', score: 'J' }, { id: 110, content: '临时决定去哪里', score: 'P' }] },
  { id: 56, testId: 1, content: '你通常如何处理日常事务？', type: 1, sortOrder: 56, dimension: 'JP', options: [{ id: 111, content: '按照优先级处理', score: 'J' }, { id: 112, content: '想到什么做什么', score: 'P' }] },
  { id: 57, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 57, dimension: 'JP', options: [{ id: 113, content: '有清晰的目标', score: 'J' }, { id: 114, content: '保持开放的心态', score: 'P' }] },
  { id: 58, testId: 1, content: '当你到达一个城市，你通常会：', type: 1, sortOrder: 58, dimension: 'JP', options: [{ id: 115, content: '提前研究好要去的景点', score: 'J' }, { id: 116, content: '到了当地再问人', score: 'P' }] },
  { id: 59, testId: 1, content: '你更喜欢什么样的朋友？', type: 1, sortOrder: 59, dimension: 'JP', options: [{ id: 117, content: '计划周全的', score: 'J' }, { id: 118, content: '随和有趣的', score: 'P' }] },
  { id: 60, testId: 1, content: '你认为工作效率取决于什么？', type: 1, sortOrder: 60, dimension: 'JP', options: [{ id: 119, content: '良好的计划和组织', score: 'J' }, { id: 120, content: '适应变化的能力', score: 'P' }] },
  { id: 61, testId: 1, content: '你通常什么时候起床？', type: 1, sortOrder: 61, dimension: 'JP', options: [{ id: 121, content: '每天固定的时间', score: 'J' }, { id: 122, content: '看情况决定', score: 'P' }] },
  { id: 62, testId: 1, content: '你更喜欢什么样的工作环境？', type: 1, sortOrder: 62, dimension: 'JP', options: [{ id: 123, content: '整洁有序的', score: 'J' }, { id: 124, content: '舒适随意的', score: 'P' }] },
  { id: 63, testId: 1, content: '当你做家务时，你通常会：', type: 1, sortOrder: 63, dimension: 'JP', options: [{ id: 125, content: '制定清洁计划', score: 'J' }, { id: 126, content: '看心情做', score: 'P' }] },
  { id: 64, testId: 1, content: '你更喜欢什么样的度假方式？', type: 1, sortOrder: 64, dimension: 'JP', options: [{ id: 127, content: '提前规划好行程', score: 'J' }, { id: 128, content: '完全放松，随意安排', score: 'P' }] },
  { id: 65, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 65, dimension: 'JP', options: [{ id: 129, content: '守时', score: 'J' }, { id: 130, content: '灵活', score: 'P' }] },
  { id: 66, testId: 1, content: '你通常如何购物？', type: 1, sortOrder: 66, dimension: 'JP', options: [{ id: 131, content: '列好清单再购物', score: 'J' }, { id: 132, content: '看到喜欢就买', score: 'P' }] },
  { id: 67, testId: 1, content: '你更喜欢什么样的学习方法？', type: 1, sortOrder: 67, dimension: 'JP', options: [{ id: 133, content: '按照教材系统学习', score: 'J' }, { id: 134, content: '通过实践摸索学习', score: 'P' }] },
  { id: 68, testId: 1, content: '你通常什么时候开始准备考试？', type: 1, sortOrder: 68, dimension: 'JP', options: [{ id: 135, content: '提前很久开始复习', score: 'J' }, { id: 136, content: '考试前临时抱佛脚', score: 'P' }] },
  { id: 69, testId: 1, content: '你更喜欢什么样的生活方式？', type: 1, sortOrder: 69, dimension: 'JP', options: [{ id: 137, content: '每天都有计划', score: 'J' }, { id: 138, content: '每天都有新鲜感', score: 'P' }] },
  { id: 70, testId: 1, content: '当你参加活动时，你通常会：', type: 1, sortOrder: 70, dimension: 'JP', options: [{ id: 139, content: '提前了解活动内容', score: 'J' }, { id: 140, content: '到了再说', score: 'P' }] },
  { id: 71, testId: 1, content: '你更喜欢什么样的决策？', type: 1, sortOrder: 71, dimension: 'JP', options: [{ id: 141, content: '经过深思熟虑的', score: 'J' }, { id: 142, content: '即兴的', score: 'P' }] },
  { id: 72, testId: 1, content: '你通常如何处理deadline？', type: 1, sortOrder: 72, dimension: 'JP', options: [{ id: 143, content: '提前完成', score: 'J' }, { id: 144, content: '踩点完成', score: 'P' }] },
  { id: 73, testId: 1, content: '你更喜欢什么样的工作节奏？', type: 1, sortOrder: 73, dimension: 'JP', options: [{ id: 145, content: '稳定可预测的', score: 'J' }, { id: 146, content: '多变的', score: 'P' }] },
  { id: 74, testId: 1, content: '当你搬家时，你通常会：', type: 1, sortOrder: 74, dimension: 'JP', options: [{ id: 147, content: '提前几周开始整理', score: 'J' }, { id: 148, content: '最后一刻才开始', score: 'P' }] },
  { id: 75, testId: 1, content: '你更喜欢什么样的社交活动？', type: 1, sortOrder: 75, dimension: 'JP', options: [{ id: 149, content: '有组织的小组活动', score: 'J' }, { id: 150, content: '自发的聚会', score: 'P' }] },
  { id: 76, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 76, dimension: 'JP', options: [{ id: 151, content: '准备充分', score: 'J' }, { id: 152, content: '随机应变', score: 'P' }] },
  { id: 77, testId: 1, content: '你通常如何安排周末？', type: 1, sortOrder: 77, dimension: 'JP', options: [{ id: 153, content: '提前计划好活动', score: 'J' }, { id: 154, content: '看心情决定', score: 'P' }] },
  { id: 78, testId: 1, content: '你更喜欢什么样的生活方式？', type: 1, sortOrder: 78, dimension: 'JP', options: [{ id: 155, content: '有目标有计划', score: 'J' }, { id: 156, content: '自由随意', score: 'P' }] },
  { id: 79, testId: 1, content: '当你收到邀请时，你通常会：', type: 1, sortOrder: 79, dimension: 'JP', options: [{ id: 157, content: '立刻回复', score: 'J' }, { id: 158, content: '等一等再回复', score: 'P' }] },
  { id: 80, testId: 1, content: '你更喜欢什么样的工作？', type: 1, sortOrder: 80, dimension: 'JP', options: [{ id: 159, content: '有明确职责的', score: 'J' }, { id: 160, content: '职责灵活的', score: 'P' }] },
  { id: 81, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 81, dimension: 'JP', options: [{ id: 161, content: '按规则办事', score: 'J' }, { id: 162, content: '视情况而定', score: 'P' }] },
  { id: 82, testId: 1, content: '你通常如何准备一次旅行？', type: 1, sortOrder: 82, dimension: 'JP', options: [{ id: 163, content: '制定详细的行程表', score: 'J' }, { id: 164, content: '只订好住宿，其他随缘', score: 'P' }] },
  { id: 83, testId: 1, content: '你更喜欢什么样的生活方式？', type: 1, sortOrder: 83, dimension: 'JP', options: [{ id: 165, content: '有秩序、可预期', score: 'J' }, { id: 166, content: '开放、灵活', score: 'P' }] },
  { id: 84, testId: 1, content: '你通常什么时候完成重要任务？', type: 1, sortOrder: 84, dimension: 'JP', options: [{ id: 167, content: '提前完成', score: 'J' }, { id: 168, content: '截止日期前完成', score: 'P' }] },
  { id: 85, testId: 1, content: '你更喜欢什么样的学习方法？', type: 1, sortOrder: 85, dimension: 'JP', options: [{ id: 169, content: '按照课程安排学习', score: 'J' }, { id: 170, content: '自己决定学习内容', score: 'P' }] },
  { id: 86, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 86, dimension: 'JP', options: [{ id: 171, content: '组织和秩序', score: 'J' }, { id: 172, content: '自由和创新', score: 'P' }] },
  { id: 87, testId: 1, content: '你通常如何管理财务？', type: 1, sortOrder: 87, dimension: 'JP', options: [{ id: 173, content: '制定预算并执行', score: 'J' }, { id: 174, content: '随心消费', score: 'P' }] },
  { id: 88, testId: 1, content: '你更喜欢什么样的工作环境？', type: 1, sortOrder: 88, dimension: 'JP', options: [{ id: 175, content: '结构清晰、流程明确', score: 'J' }, { id: 176, content: '自由开放、鼓励创新', score: 'P' }] },
  { id: 89, testId: 1, content: '你通常如何开始一个新项目？', type: 1, sortOrder: 89, dimension: 'JP', options: [{ id: 177, content: '制定详细计划', score: 'J' }, { id: 178, content: '先开始，边做边调整', score: 'P' }] },
  { id: 90, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 90, dimension: 'JP', options: [{ id: 179, content: '完成任务的方式', score: 'J' }, { id: 180, content: '适应变化的能力', score: 'P' }] },
  { id: 91, testId: 1, content: '你更喜欢什么样的生活方式？', type: 1, sortOrder: 91, dimension: 'JP', options: [{ id: 181, content: '有计划、有目标', score: 'J' }, { id: 182, content: '灵活、随性', score: 'P' }] },
  { id: 92, testId: 1, content: '你通常如何处理日常事务？', type: 1, sortOrder: 92, dimension: 'JP', options: [{ id: 183, content: '列好清单，按清单执行', score: 'J' }, { id: 184, content: '想到什么做什么', score: 'P' }] },
  { id: 93, testId: 1, content: '你认为什么更重要？', type: 1, sortOrder: 93, dimension: 'JP', options: [{ id: 185, content: '可靠和可预测', score: 'J' }, { id: 186, content: '适应和灵活', score: 'P' }] },
  {
    id: 51,
    testId: 2,
    content: '做事时毫无兴趣或乐趣',
    type: 3,
    sortOrder: 1,
    options: [
      { id: 51, content: '完全没有', score: 0 },
      { id: 52, content: '好几天', score: 1 },
      { id: 53, content: '一半以上的天数', score: 2 },
      { id: 54, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 52,
    testId: 2,
    content: '心情低落、沮丧或绝望',
    type: 3,
    sortOrder: 2,
    options: [
      { id: 55, content: '完全没有', score: 0 },
      { id: 56, content: '好几天', score: 1 },
      { id: 57, content: '一半以上的天数', score: 2 },
      { id: 58, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 53,
    testId: 2,
    content: '入睡困难、睡不安稳或睡眠过多',
    type: 3,
    sortOrder: 3,
    options: [
      { id: 59, content: '完全没有', score: 0 },
      { id: 60, content: '好几天', score: 1 },
      { id: 61, content: '一半以上的天数', score: 2 },
      { id: 62, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 54,
    testId: 2,
    content: '感觉疲倦或没有活力',
    type: 3,
    sortOrder: 4,
    options: [
      { id: 63, content: '完全没有', score: 0 },
      { id: 64, content: '好几天', score: 1 },
      { id: 65, content: '一半以上的天数', score: 2 },
      { id: 66, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 55,
    testId: 2,
    content: '食欲不振或吃得太多',
    type: 3,
    sortOrder: 5,
    options: [
      { id: 67, content: '完全没有', score: 0 },
      { id: 68, content: '好几天', score: 1 },
      { id: 69, content: '一半以上的天数', score: 2 },
      { id: 70, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 56,
    testId: 2,
    content: '对自己感到失望，或觉得自己是失败者',
    type: 3,
    sortOrder: 6,
    options: [
      { id: 71, content: '完全没有', score: 0 },
      { id: 72, content: '好几天', score: 1 },
      { id: 73, content: '一半以上的天数', score: 2 },
      { id: 74, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 57,
    testId: 2,
    content: '做事时难以集中注意力',
    type: 3,
    sortOrder: 7,
    options: [
      { id: 75, content: '完全没有', score: 0 },
      { id: 76, content: '好几天', score: 1 },
      { id: 77, content: '一半以上的天数', score: 2 },
      { id: 78, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 58,
    testId: 2,
    content: '动作或说话速度缓慢，或相反',
    type: 3,
    sortOrder: 8,
    options: [
      { id: 79, content: '完全没有', score: 0 },
      { id: 80, content: '好几天', score: 1 },
      { id: 81, content: '一半以上的天数', score: 2 },
      { id: 82, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 59,
    testId: 2,
    content: '有不如死掉或伤害自己的念头',
    type: 3,
    sortOrder: 9,
    options: [
      { id: 83, content: '完全没有', score: 0 },
      { id: 84, content: '好几天', score: 1 },
      { id: 85, content: '一半以上的天数', score: 2 },
      { id: 86, content: '几乎每天', score: 3 }
    ]
  },
  {
    id: 60,
    testId: 3,
    content: '你更喜欢什么样的团队项目？',
    type: 1,
    sortOrder: 1,
    options: [
      { id: 87, content: '大家一起头脑风暴，想出创意', score: 'A' },
      { id: 88, content: '分工明确，各自负责自己的部分', score: 'B' },
      { id: 89, content: '有领导者指挥，大家配合执行', score: 'C' },
      { id: 90, content: '完全独立完成自己的工作', score: 'D' }
    ]
  },
  {
    id: 61,
    testId: 3,
    content: '当面对压力时，你会？',
    type: 1,
    sortOrder: 2,
    options: [
      { id: 91, content: '找朋友倾诉，释放情绪', score: 'A' },
      { id: 92, content: '分析问题，找出解决方案', score: 'B' },
      { id: 93, content: '制定详细的计划来应对', score: 'C' },
      { id: 94, content: '先休息一下，等状态好了再说', score: 'D' }
    ]
  },
  {
    id: 62,
    testId: 3,
    content: '你理想中的周末是？',
    type: 1,
    sortOrder: 3,
    options: [
      { id: 95, content: '和朋友一起参加各种活动', score: 'A' },
      { id: 96, content: '安静地看书或学习新技能', score: 'B' },
      { id: 97, content: '整理房间，让生活更有条理', score: 'C' },
      { id: 98, content: '睡到自然醒，随便做点什么', score: 'D' }
    ]
  },
  {
    id: 63,
    testId: 3,
    content: '在选择工作时，你更看重？',
    type: 1,
    sortOrder: 4,
    options: [
      { id: 99, content: '能够结识新朋友，扩展人脉', score: 'A' },
      { id: 100, content: '有挑战性，能提升能力', score: 'B' },
      { id: 101, content: '稳定有保障，福利好', score: 'C' },
      { id: 102, content: '自由灵活，可以做自己想做的事', score: 'D' }
    ]
  },
  {
    id: 64,
    testId: 3,
    content: '你更愿意为什么样的活动付出时间？',
    type: 1,
    sortOrder: 5,
    options: [
      { id: 103, content: '社交活动、聚会、公益', score: 'A' },
      { id: 104, content: '学习、阅读、研究', score: 'B' },
      { id: 105, content: '运动健身、户外活动', score: 'C' },
      { id: 106, content: '创意项目、艺术创作', score: 'D' }
    ]
  },
  {
    id: 200,
    testId: 4,
    content: '我更倾向于：',
    type: 1,
    sortOrder: 1,
    dimension: 'enneagram',
    options: [
      { id: 300, content: '独立、自主，依靠自己', score: '8' },
      { id: 301, content: '温暖、友善，关心他人需要', score: '2' }
    ]
  },
  {
    id: 201,
    testId: 4,
    content: '我更看重：',
    type: 1,
    sortOrder: 2,
    dimension: 'enneagram',
    options: [
      { id: 302, content: '成就、成功，出人头地', score: '3' },
      { id: 303, content: '平静、和谐，随遇而安', score: '9' }
    ]
  },
  {
    id: 202,
    testId: 4,
    content: '面对生活，我更：',
    type: 1,
    sortOrder: 3,
    dimension: 'enneagram',
    options: [
      { id: 304, content: '务实、谨慎，做好万全准备', score: '6' },
      { id: 305, content: '浪漫、幻想，追求独特体验', score: '4' }
    ]
  },
  {
    id: 203,
    testId: 4,
    content: '我更喜欢：',
    type: 1,
    sortOrder: 4,
    dimension: 'enneagram',
    options: [
      { id: 306, content: '深入学习、研究，积累知识', score: '5' },
      { id: 307, content: '广泛体验、尝试，寻找乐趣', score: '7' }
    ]
  },
  {
    id: 204,
    testId: 4,
    content: '我做事更：',
    type: 1,
    sortOrder: 5,
    dimension: 'enneagram',
    options: [
      { id: 308, content: '认真负责，遵守规则和标准', score: '1' },
      { id: 309, content: '自由随性，不喜欢受约束', score: '7' }
    ]
  },
  {
    id: 205,
    testId: 4,
    content: '对待他人，我更：',
    type: 1,
    sortOrder: 6,
    dimension: 'enneagram',
    options: [
      { id: 310, content: '严格要求，坚持原则', score: '1' },
      { id: 311, content: '包容理解，容易妥协', score: '9' }
    ]
  },
  {
    id: 206,
    testId: 4,
    content: '我更希望自己：',
    type: 1,
    sortOrder: 7,
    dimension: 'enneagram',
    options: [
      { id: 312, content: '优秀、出色，被人认可', score: '3' },
      { id: 313, content: '善良、温暖，被人喜爱', score: '2' }
    ]
  },
  {
    id: 207,
    testId: 4,
    content: '面对权威，我更：',
    type: 1,
    sortOrder: 8,
    dimension: 'enneagram',
    options: [
      { id: 314, content: '敢于挑战，质疑不合理的地方', score: '8' },
      { id: 315, content: '尊重服从，相信传统的价值', score: '6' }
    ]
  },
  {
    id: 208,
    testId: 4,
    content: '我是一个：',
    type: 1,
    sortOrder: 9,
    dimension: 'enneagram',
    options: [
      { id: 316, content: '乐观开朗，喜欢新鲜刺激的人', score: '7' },
      { id: 317, content: '内敛沉静，喜欢独处思考的人', score: '5' }
    ]
  },
  {
    id: 209,
    testId: 4,
    content: '我更在意：',
    type: 1,
    sortOrder: 10,
    dimension: 'enneagram',
    options: [
      { id: 318, content: '保持独特，做与众不同的自己', score: '4' },
      { id: 319, content: '融入群体，获得归属感和支持', score: '6' }
    ]
  },
  {
    id: 210,
    testId: 4,
    content: '做决定时，我更：',
    type: 1,
    sortOrder: 11,
    dimension: 'enneagram',
    options: [
      { id: 320, content: '果断直接，快速做出判断', score: '8' },
      { id: 321, content: '谨慎周全，充分思考后再决定', score: '5' }
    ]
  },
  {
    id: 211,
    testId: 4,
    content: '在群体中，我更倾向于：',
    type: 1,
    sortOrder: 12,
    dimension: 'enneagram',
    options: [
      { id: 322, content: '展现自己，成为焦点', score: '3' },
      { id: 323, content: '支持他人，默默付出', score: '2' }
    ]
  },
  {
    id: 212,
    testId: 4,
    content: '我经常会：',
    type: 1,
    sortOrder: 13,
    dimension: 'enneagram',
    options: [
      { id: 324, content: '担心可能出现的风险，提前准备', score: '6' },
      { id: 325, content: '沉浸在自己的想象和情感世界里', score: '4' }
    ]
  },
  {
    id: 213,
    testId: 4,
    content: '我的生活态度更：',
    type: 1,
    sortOrder: 14,
    dimension: 'enneagram',
    options: [
      { id: 326, content: '积极进取，努力追求目标', score: '3' },
      { id: 327, content: '随遇而安，享受当下的平静', score: '9' }
    ]
  },
  {
    id: 214,
    testId: 4,
    content: '与人沟通时，我更：',
    type: 1,
    sortOrder: 15,
    dimension: 'enneagram',
    options: [
      { id: 328, content: '直接坦率，有话直说', score: '8' },
      { id: 329, content: '温和委婉，尽量避免冲突', score: '9' }
    ]
  },
  {
    id: 215,
    testId: 4,
    content: '我对______更有强烈渴望：',
    type: 1,
    sortOrder: 16,
    dimension: 'enneagram',
    options: [
      { id: 330, content: '知识和信息，了解事物本质', score: '5' },
      { id: 331, content: '体验和快乐，享受生活美好', score: '7' }
    ]
  },
  {
    id: 216,
    testId: 4,
    content: '当他人需要帮助时，我更倾向于：',
    type: 1,
    sortOrder: 17,
    dimension: 'enneagram',
    options: [
      { id: 332, content: '即使牺牲自己利益也会帮忙', score: '2' },
      { id: 333, content: '先考虑原则和合理性再决定', score: '1' }
    ]
  },
  {
    id: 217,
    testId: 4,
    content: '我的优点更偏向于：',
    type: 1,
    sortOrder: 18,
    dimension: 'enneagram',
    options: [
      { id: 334, content: '创造力强，有很多新奇想法', score: '4' },
      { id: 335, content: '条理性好，做事严谨有规划', score: '1' }
    ]
  },
  {
    id: 218,
    testId: 4,
    content: '在团队中，我更倾向于：',
    type: 1,
    sortOrder: 19,
    dimension: 'enneagram',
    options: [
      { id: 336, content: '掌控局面，带领大家前进', score: '8' },
      { id: 337, content: '支持配合，帮助团队成功', score: '2' }
    ]
  },
  {
    id: 219,
    testId: 4,
    content: '面对未来，我更：',
    type: 1,
    sortOrder: 20,
    dimension: 'enneagram',
    options: [
      { id: 338, content: '乐观积极，相信总会有好事发生', score: '7' },
      { id: 339, content: '谨慎警惕，提前考虑最坏的情况', score: '6' }
    ]
  },
  {
    id: 220,
    testId: 4,
    content: '我更在意：',
    type: 1,
    sortOrder: 21,
    dimension: 'enneagram',
    options: [
      { id: 340, content: '他人的认可和赞赏，维护好形象', score: '3' },
      { id: 341, content: '自我的独特和真实，不随波逐流', score: '4' }
    ]
  },
  {
    id: 221,
    testId: 4,
    content: '做事情时，我更：',
    type: 1,
    sortOrder: 22,
    dimension: 'enneagram',
    options: [
      { id: 342, content: '坚持到底，有毅力不轻易放弃', score: '6' },
      { id: 343, content: '灵活变通，喜欢尝试新的可能', score: '7' }
    ]
  },
  {
    id: 222,
    testId: 4,
    content: '我更偏向于：',
    type: 1,
    sortOrder: 23,
    dimension: 'enneagram',
    options: [
      { id: 344, content: '内向安静，不太善于表达情感', score: '5' },
      { id: 345, content: '外向热情，很容易和人打成一片', score: '2' }
    ]
  },
  {
    id: 223,
    testId: 4,
    content: '我对自己和他人：',
    type: 1,
    sortOrder: 24,
    dimension: 'enneagram',
    options: [
      { id: 346, content: '要求严格，经常自我批评和批评他人', score: '1' },
      { id: 347, content: '宽容随和，容易原谅自己和他人', score: '9' }
    ]
  },
  {
    id: 224,
    testId: 4,
    content: '我对自己的能力：',
    type: 1,
    sortOrder: 25,
    dimension: 'enneagram',
    options: [
      { id: 348, content: '很有信心，相信自己能做好大多数事', score: '8' },
      { id: 349, content: '比较谦虚，经常觉得自己还有很多不足', score: '6' }
    ]
  },
  {
    id: 225,
    testId: 4,
    content: '我做事情更看重：',
    type: 1,
    sortOrder: 26,
    dimension: 'enneagram',
    options: [
      { id: 350, content: '结果和效率，能不能完成目标', score: '3' },
      { id: 351, content: '过程和体验，有没有独特的感受', score: '4' }
    ]
  },
  {
    id: 226,
    testId: 4,
    content: '对待资源，我更倾向于：',
    type: 1,
    sortOrder: 27,
    dimension: 'enneagram',
    options: [
      { id: 352, content: '慷慨分享，乐于帮助他人', score: '2' },
      { id: 353, content: '珍惜节省，尽量不浪费资源', score: '5' }
    ]
  },
  {
    id: 227,
    testId: 4,
    content: '我更倾向于：',
    type: 1,
    sortOrder: 28,
    dimension: 'enneagram',
    options: [
      { id: 354, content: '追求完美，努力做到最好', score: '1' },
      { id: 355, content: '避免冲突，维持和谐关系', score: '9' }
    ]
  },
  {
    id: 228,
    testId: 4,
    content: '面对不公平的事情，我更倾向于：',
    type: 1,
    sortOrder: 29,
    dimension: 'enneagram',
    options: [
      { id: 356, content: '挺身而出，指出问题并纠正', score: '8' },
      { id: 357, content: '小心谨慎，尽量避免引火烧身', score: '6' }
    ]
  },
  {
    id: 229,
    testId: 4,
    content: '我更喜欢：',
    type: 1,
    sortOrder: 30,
    dimension: 'enneagram',
    options: [
      { id: 358, content: '尝试各种新鲜事物，寻找乐趣', score: '7' },
      { id: 359, content: '深入研究感兴趣的领域，成为专家', score: '5' }
    ]
  },
  {
    id: 230,
    testId: 4,
    content: '与人交往时，我更：',
    type: 1,
    sortOrder: 31,
    dimension: 'enneagram',
    options: [
      { id: 360, content: '热心主动，关心别人的需要', score: '2' },
      { id: 361, content: '客观理性，注重事实和逻辑', score: '1' }
    ]
  },
  {
    id: 231,
    testId: 4,
    content: '我更偏向于：',
    type: 1,
    sortOrder: 32,
    dimension: 'enneagram',
    options: [
      { id: 362, content: '浪漫感性，重视情感体验', score: '4' },
      { id: 363, content: '实际理性，重视现实利益', score: '3' }
    ]
  },
  {
    id: 232,
    testId: 4,
    content: '我更符合：',
    type: 1,
    sortOrder: 33,
    dimension: 'enneagram',
    options: [
      { id: 364, content: '有责任感，做事可靠值得信赖', score: '6' },
      { id: 365, content: '灵活多变，适应各种不同环境', score: '7' }
    ]
  },
  {
    id: 233,
    testId: 4,
    content: '业余时间我更愿意：',
    type: 1,
    sortOrder: 34,
    dimension: 'enneagram',
    options: [
      { id: 366, content: '独处，做自己喜欢的事情', score: '5' },
      { id: 367, content: '和朋友在一起，参加社交活动', score: '3' }
    ]
  },
  {
    id: 234,
    testId: 4,
    content: '看到别人受委屈时，我更倾向于：',
    type: 1,
    sortOrder: 35,
    dimension: 'enneagram',
    options: [
      { id: 368, content: '打抱不平，为他争取公道', score: '8' },
      { id: 369, content: '同情安慰，理解他的感受', score: '2' }
    ]
  },
  {
    id: 235,
    testId: 4,
    content: '遇到问题时，我更：',
    type: 1,
    sortOrder: 36,
    dimension: 'enneagram',
    options: [
      { id: 370, content: '乐观积极，总能看到好的一面', score: '7' },
      { id: 371, content: '理性客观，全面分析利弊', score: '5' }
    ]
  },
  {
    id: 84,
    testId: 5,
    content: '我很容易和人熟络起来',
    type: 3,
    sortOrder: 1,
    dimension: 'E',
    options: [
      { id: 179, content: '非常符合', score: 5 },
      { id: 180, content: '比较符合', score: 4 },
      { id: 181, content: '一般', score: 3 },
      { id: 182, content: '不太符合', score: 2 },
      { id: 183, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 85,
    testId: 5,
    content: '我倾向于从外部世界寻找刺激和活动',
    type: 3,
    sortOrder: 2,
    dimension: 'E',
    options: [
      { id: 184, content: '非常符合', score: 5 },
      { id: 185, content: '比较符合', score: 4 },
      { id: 186, content: '一般', score: 3 },
      { id: 187, content: '不太符合', score: 2 },
      { id: 188, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 86,
    testId: 5,
    content: '我很容易担心一些事情',
    type: 3,
    sortOrder: 3,
    dimension: 'N',
    options: [
      { id: 189, content: '非常符合', score: 5 },
      { id: 190, content: '比较符合', score: 4 },
      { id: 191, content: '一般', score: 3 },
      { id: 192, content: '不太符合', score: 2 },
      { id: 193, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 87,
    testId: 5,
    content: '我很容易感到害怕',
    type: 3,
    sortOrder: 4,
    dimension: 'N',
    options: [
      { id: 194, content: '非常符合', score: 5 },
      { id: 195, content: '比较符合', score: 4 },
      { id: 196, content: '一般', score: 3 },
      { id: 197, content: '不太符合', score: 2 },
      { id: 198, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 88,
    testId: 5,
    content: '我非常喜欢思考和想象',
    type: 3,
    sortOrder: 5,
    dimension: 'O',
    options: [
      { id: 199, content: '非常符合', score: 5 },
      { id: 200, content: '比较符合', score: 4 },
      { id: 201, content: '一般', score: 3 },
      { id: 202, content: '不太符合', score: 2 },
      { id: 203, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 89,
    testId: 5,
    content: '我喜欢尝试新事物',
    type: 3,
    sortOrder: 6,
    dimension: 'O',
    options: [
      { id: 204, content: '非常符合', score: 5 },
      { id: 205, content: '比较符合', score: 4 },
      { id: 206, content: '一般', score: 3 },
      { id: 207, content: '不太符合', score: 2 },
      { id: 208, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 90,
    testId: 5,
    content: '我相信自己是个有价值的人',
    type: 3,
    sortOrder: 7,
    dimension: 'A',
    options: [
      { id: 209, content: '非常符合', score: 5 },
      { id: 210, content: '比较符合', score: 4 },
      { id: 211, content: '一般', score: 3 },
      { id: 212, content: '不太符合', score: 2 },
      { id: 213, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 91,
    testId: 5,
    content: '我倾向于相信他人',
    type: 3,
    sortOrder: 8,
    dimension: 'A',
    options: [
      { id: 214, content: '非常符合', score: 5 },
      { id: 215, content: '比较符合', score: 4 },
      { id: 216, content: '一般', score: 3 },
      { id: 217, content: '不太符合', score: 2 },
      { id: 218, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 92,
    testId: 5,
    content: '我做事很有条理',
    type: 3,
    sortOrder: 9,
    dimension: 'C',
    options: [
      { id: 219, content: '非常符合', score: 5 },
      { id: 220, content: '比较符合', score: 4 },
      { id: 221, content: '一般', score: 3 },
      { id: 222, content: '不太符合', score: 2 },
      { id: 223, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 93,
    testId: 5,
    content: '我很容易记住事情',
    type: 3,
    sortOrder: 10,
    dimension: 'C',
    options: [
      { id: 224, content: '非常符合', score: 5 },
      { id: 225, content: '比较符合', score: 4 },
      { id: 226, content: '一般', score: 3 },
      { id: 227, content: '不太符合', score: 2 },
      { id: 228, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 94,
    testId: 5,
    content: '在社交聚会中，我通常是说话较多的那个',
    type: 3,
    sortOrder: 11,
    dimension: 'E',
    options: [
      { id: 229, content: '非常符合', score: 5 },
      { id: 230, content: '比较符合', score: 4 },
      { id: 231, content: '一般', score: 3 },
      { id: 232, content: '不太符合', score: 2 },
      { id: 233, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 95,
    testId: 5,
    content: '我很少感到忧郁或沮丧',
    type: 3,
    sortOrder: 12,
    dimension: 'N',
    options: [
      { id: 234, content: '非常符合', score: 5 },
      { id: 235, content: '比较符合', score: 4 },
      { id: 236, content: '一般', score: 3 },
      { id: 237, content: '不太符合', score: 2 },
      { id: 238, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 96,
    testId: 5,
    content: '我有丰富的想象力和创意',
    type: 3,
    sortOrder: 13,
    dimension: 'O',
    options: [
      { id: 239, content: '非常符合', score: 5 },
      { id: 240, content: '比较符合', score: 4 },
      { id: 241, content: '一般', score: 3 },
      { id: 242, content: '不太符合', score: 2 },
      { id: 243, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 97,
    testId: 5,
    content: '我对别人很有礼貌和体贴',
    type: 3,
    sortOrder: 14,
    dimension: 'A',
    options: [
      { id: 244, content: '非常符合', score: 5 },
      { id: 245, content: '比较符合', score: 4 },
      { id: 246, content: '一般', score: 3 },
      { id: 247, content: '不太符合', score: 2 },
      { id: 248, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 98,
    testId: 5,
    content: '我是一个勤奋工作的人',
    type: 3,
    sortOrder: 15,
    dimension: 'C',
    options: [
      { id: 249, content: '非常符合', score: 5 },
      { id: 250, content: '比较符合', score: 4 },
      { id: 251, content: '一般', score: 3 },
      { id: 252, content: '不太符合', score: 2 },
      { id: 253, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 99,
    testId: 5,
    content: '我能很好地与他人合作',
    type: 3,
    sortOrder: 16,
    dimension: 'A',
    options: [
      { id: 254, content: '非常符合', score: 5 },
      { id: 255, content: '比较符合', score: 4 },
      { id: 256, content: '一般', score: 3 },
      { id: 257, content: '不太符合', score: 2 },
      { id: 258, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 100,
    testId: 5,
    content: '我很容易分心',
    type: 3,
    sortOrder: 17,
    dimension: 'C',
    options: [
      { id: 259, content: '非常符合', score: 5 },
      { id: 260, content: '比较符合', score: 4 },
      { id: 261, content: '一般', score: 3 },
      { id: 262, content: '不太符合', score: 2 },
      { id: 263, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 101,
    testId: 5,
    content: '我对艺术和美学有强烈兴趣',
    type: 3,
    sortOrder: 18,
    dimension: 'O',
    options: [
      { id: 264, content: '非常符合', score: 5 },
      { id: 265, content: '比较符合', score: 4 },
      { id: 266, content: '一般', score: 3 },
      { id: 267, content: '不太符合', score: 2 },
      { id: 268, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 102,
    testId: 5,
    content: '我常常感到精力充沛',
    type: 3,
    sortOrder: 19,
    dimension: 'E',
    options: [
      { id: 269, content: '非常符合', score: 5 },
      { id: 270, content: '比较符合', score: 4 },
      { id: 271, content: '一般', score: 3 },
      { id: 272, content: '不太符合', score: 2 },
      { id: 273, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 103,
    testId: 5,
    content: '我能冷静地面对压力',
    type: 3,
    sortOrder: 20,
    dimension: 'N',
    options: [
      { id: 274, content: '非常符合', score: 5 },
      { id: 275, content: '比较符合', score: 4 },
      { id: 276, content: '一般', score: 3 },
      { id: 277, content: '不太符合', score: 2 },
      { id: 278, content: '完全不符合', score: 1 }
    ]
  },
  {
    id: 104,
    testId: 6,
    content: '当你完成一个项目时，你更关注：',
    type: 1,
    sortOrder: 1,
    dimension: 'DISC',
    options: [
      { id: 279, content: '最终结果和成就', score: 'D' },
      { id: 280, content: '团队协作和人际关系', score: 'I' },
      { id: 281, content: '规则、流程和稳定性', score: 'S' },
      { id: 282, content: '数据和细节的准确性', score: 'C' }
    ]
  },
  {
    id: 105,
    testId: 6,
    content: '在会议上，你通常会：',
    type: 1,
    sortOrder: 2,
    dimension: 'DISC',
    options: [
      { id: 283, content: '直接提出问题和解决方案', score: 'D' },
      { id: 284, content: '分享想法，激励团队', score: 'I' },
      { id: 285, content: '倾听他人，寻求共识', score: 'S' },
      { id: 286, content: '提供数据和事实支持', score: 'C' }
    ]
  },
  {
    id: 106,
    testId: 6,
    content: '你更喜欢的工作环境是：',
    type: 1,
    sortOrder: 3,
    dimension: 'DISC',
    options: [
      { id: 287, content: '快速变化，充满挑战', score: 'D' },
      { id: 288, content: '友好开放，重视人际交往', score: 'I' },
      { id: 289, content: '稳定有序，可预测', score: 'S' },
      { id: 290, content: '精确、有标准流程', score: 'C' }
    ]
  },
  {
    id: 107,
    testId: 6,
    content: '当遇到困难时，你通常会：',
    type: 1,
    sortOrder: 4,
    dimension: 'DISC',
    options: [
      { id: 291, content: '立即采取行动解决', score: 'D' },
      { id: 292, content: '寻求他人的支持和鼓励', score: 'I' },
      { id: 293, content: '耐心分析问题根源', score: 'S' },
      { id: 294, content: '收集信息，制定详细计划', score: 'C' }
    ]
  },
  {
    id: 108,
    testId: 6,
    content: '你在团队中的角色通常是：',
    type: 1,
    sortOrder: 5,
    dimension: 'DISC',
    options: [
      { id: 295, content: '领导者和决策者', score: 'D' },
      { id: 296, content: '协调者和联络人', score: 'I' },
      { id: 297, content: '支持者和执行者', score: 'S' },
      { id: 298, content: '质量控制和审核者', score: 'C' }
    ]
  },
  {
    id: 109,
    testId: 6,
    content: '你如何处理截止日期的压力？',
    type: 1,
    sortOrder: 6,
    dimension: 'DISC',
    options: [
      { id: 299, content: '快速行动，优先完成', score: 'D' },
      { id: 300, content: '与团队共同面对', score: 'I' },
      { id: 301, content: '按部就班，稳扎稳打', score: 'S' },
      { id: 302, content: '制定详细计划，有条不紊', score: 'C' }
    ]
  },
  {
    id: 110,
    testId: 6,
    content: '你更倾向于通过什么方式沟通？',
    type: 1,
    sortOrder: 7,
    dimension: 'DISC',
    options: [
      { id: 303, content: '简洁直接，重点突出', score: 'D' },
      { id: 304, content: '生动有趣，富有感染力', score: 'I' },
      { id: 305, content: '耐心倾听，温和友好', score: 'S' },
      { id: 306, content: '准确完整，有理有据', score: 'C' }
    ]
  },
  {
    id: 111,
    testId: 6,
    content: '当需要改变计划时，你的反应是：',
    type: 1,
    sortOrder: 8,
    dimension: 'DISC',
    options: [
      { id: 307, content: '快速调整，立即执行', score: 'D' },
      { id: 308, content: '期待变化，与人分享', score: 'I' },
      { id: 309, content: '需要时间适应', score: 'S' },
      { id: 310, content: '分析影响后再决定', score: 'C' }
    ]
  },
  {
    id: 112,
    testId: 6,
    content: '你更喜欢什么样的任务？',
    type: 1,
    sortOrder: 9,
    dimension: 'DISC',
    options: [
      { id: 311, content: '有挑战性，需要决断力', score: 'D' },
      { id: 312, content: '需要创意和表达能力', score: 'I' },
      { id: 313, content: '需要耐心和持久性', score: 'S' },
      { id: 314, content: '需要精确和分析能力', score: 'C' }
    ]
  },
  {
    id: 113,
    testId: 6,
    content: '当与他人意见不合时，你会：',
    type: 1,
    sortOrder: 10,
    dimension: 'DISC',
    options: [
      { id: 315, content: '坚持己见，争取胜利', score: 'D' },
      { id: 316, content: '试图说服和影响对方', score: 'I' },
      { id: 317, content: '避免冲突，寻求妥协', score: 'S' },
      { id: 318, content: '用事实和逻辑证明', score: 'C' }
    ]
  },
  {
    id: 114,
    testId: 6,
    content: '你的工作风格更像是：',
    type: 1,
    sortOrder: 11,
    dimension: 'DISC',
    options: [
      { id: 319, content: '开创者，敢于冒险', score: 'D' },
      { id: 320, content: '激励者，富有热情', score: 'I' },
      { id: 321, content: '稳定者，可靠踏实', score: 'S' },
      { id: 322, content: '完美主义者，注重质量', score: 'C' }
    ]
  },
  {
    id: 115,
    testId: 6,
    content: '你希望别人如何描述你？',
    type: 1,
    sortOrder: 12,
    dimension: 'DISC',
    options: [
      { id: 323, content: '果断、有魄力、善于指挥', score: 'D' },
      { id: 324, content: '热情、有魅力、善于交际', score: 'I' },
      { id: 325, content: '忠诚、耐心、善解人意', score: 'S' },
      { id: 326, content: '严谨、细致、追求完美', score: 'C' }
    ]
  },
  {
    id: 116,
    testId: 6,
    content: '你如何面对风险和不确定性？',
    type: 1,
    sortOrder: 13,
    dimension: 'DISC',
    options: [
      { id: 327, content: '接受挑战，敢于承担', score: 'D' },
      { id: 328, content: '乐观对待，相信运气', score: 'I' },
      { id: 329, content: '谨慎行事，避免风险', score: 'S' },
      { id: 330, content: '分析评估，降低风险', score: 'C' }
    ]
  },
  {
    id: 117,
    testId: 6,
    content: '你更关注工作中的：',
    type: 1,
    sortOrder: 14,
    dimension: 'DISC',
    options: [
      { id: 331, content: '结果、效率、业绩', score: 'D' },
      { id: 332, content: '氛围、关系、认可', score: 'I' },
      { id: 333, content: '稳定、安全、保障', score: 'S' },
      { id: 334, content: '准确、质量、标准', score: 'C' }
    ]
  },
  {
    id: 118,
    testId: 6,
    content: '当别人需要帮助时，你会：',
    type: 1,
    sortOrder: 15,
    dimension: 'DISC',
    options: [
      { id: 335, content: '立即行动，快速解决', score: 'D' },
      { id: 336, content: '热情回应，给予支持', score: 'I' },
      { id: 337, content: '无私帮助，不求回报', score: 'S' },
      { id: 338, content: '按规则和程序帮助', score: 'C' }
    ]
  },
  {
    id: 119,
    testId: 6,
    content: '你的决策方式是：',
    type: 1,
    sortOrder: 16,
    dimension: 'DISC',
    options: [
      { id: 339, content: '快速果断，先做后想', score: 'D' },
      { id: 340, content: '参考他人意见再做', score: 'I' },
      { id: 341, content: '深思熟虑再做决定', score: 'S' },
      { id: 342, content: '基于事实和分析决策', score: 'C' }
    ]
  },
  {
    id: 120,
    testId: 7,
    content: '在团队项目中，我更愿意扮演：',
    type: 1,
    sortOrder: 1,
    dimension: 'PDP',
    options: [
      { id: 343, content: '领袖角色，推动项目前进', score: '老虎' },
      { id: 344, content: '社交核心，活跃团队气氛', score: '孔雀' },
      { id: 345, content: '稳定力量，确保项目质量', score: '考拉' },
      { id: 346, content: '分析专家，提供技术支持', score: '猫头鹰' }
    ]
  },
  {
    id: 121,
    testId: 7,
    content: '面对压力时，我会：',
    type: 1,
    sortOrder: 2,
    dimension: 'PDP',
    options: [
      { id: 347, content: '迎难而上，解决问题', score: '老虎' },
      { id: 348, content: '倾诉分享，释放压力', score: '孔雀' },
      { id: 349, content: '保持冷静，按步执行', score: '考拉' },
      { id: 350, content: '分析原因，制定对策', score: '猫头鹰' }
    ]
  },
  {
    id: 122,
    testId: 7,
    content: '我理想的职业环境是：',
    type: 1,
    sortOrder: 3,
    dimension: 'PDP',
    options: [
      { id: 351, content: '充满挑战，有晋升机会', score: '老虎' },
      { id: 352, content: '开放自由，人际交往频繁', score: '孔雀' },
      { id: 353, content: '稳定和谐，工作生活平衡', score: '考拉' },
      { id: 354, content: '专业严谨，技术导向', score: '猫头鹰' }
    ]
  },
  {
    id: 123,
    testId: 7,
    content: '我做决定时更倾向于：',
    type: 1,
    sortOrder: 4,
    dimension: 'PDP',
    options: [
      { id: 355, content: '快速决策，敢于承担风险', score: '老虎' },
      { id: 356, content: '综合考虑大家的想法', score: '孔雀' },
      { id: 357, content: '谨慎评估，三思后行', score: '考拉' },
      { id: 358, content: '基于数据和事实判断', score: '猫头鹰' }
    ]
  },
  {
    id: 124,
    testId: 7,
    content: '在工作中，我最看重：',
    type: 1,
    sortOrder: 5,
    dimension: 'PDP',
    options: [
      { id: 359, content: '成就、认可和影响力', score: '老虎' },
      { id: 360, content: '人际关系和归属感', score: '孔雀' },
      { id: 361, content: '稳定、安全和可预测性', score: '考拉' },
      { id: 362, content: '精确、专业和高质量', score: '猫头鹰' }
    ]
  },
  {
    id: 125,
    testId: 7,
    content: '我与他人沟通的方式通常是：',
    type: 1,
    sortOrder: 6,
    dimension: 'PDP',
    options: [
      { id: 363, content: '直接明确，效率优先', score: '老虎' },
      { id: 364, content: '热情友好，善于倾听', score: '孔雀' },
      { id: 365, content: '温和耐心，稳重可靠', score: '考拉' },
      { id: 366, content: '逻辑清晰，有理有据', score: '猫头鹰' }
    ]
  },
  {
    id: 126,
    testId: 7,
    content: '当我犯错误时，我会：',
    type: 1,
    sortOrder: 7,
    dimension: 'PDP',
    options: [
      { id: 367, content: '承认错误，迅速改正', score: '老虎' },
      { id: 368, content: '反思自省，寻求改进', score: '孔雀' },
      { id: 369, content: '认真检讨，避免再犯', score: '考拉' },
      { id: 370, content: '分析原因，完善流程', score: '猫头鹰' }
    ]
  },
  {
    id: 127,
    testId: 7,
    content: '我的工作风格更像是：',
    type: 1,
    sortOrder: 8,
    dimension: 'PDP',
    options: [
      { id: 371, content: '目标导向，行动迅速', score: '老虎' },
      { id: 372, content: '富有创意，灵活应变', score: '孔雀' },
      { id: 373, content: '踏实稳定，按部就班', score: '考拉' },
      { id: 374, content: '注重细节，精益求精', score: '猫头鹰' }
    ]
  },
  {
    id: 128,
    testId: 7,
    content: '我更喜欢什么样的任务类型？',
    type: 1,
    sortOrder: 9,
    dimension: 'PDP',
    options: [
      { id: 375, content: '有挑战性，需要领导力', score: '老虎' },
      { id: 376, content: '需要创意和表达能力', score: '孔雀' },
      { id: 377, content: '需要耐心和持久性', score: '考拉' },
      { id: 378, content: '需要专业技术和分析', score: '猫头鹰' }
    ]
  },
  {
    id: 129,
    testId: 7,
    content: '在业余时间，我更喜欢：',
    type: 1,
    sortOrder: 10,
    dimension: 'PDP',
    options: [
      { id: 379, content: '竞争性运动或创业活动', score: '老虎' },
      { id: 380, content: '社交活动和朋友聚会', score: '孔雀' },
      { id: 381, content: '安静的活动如阅读或园艺', score: '考拉' },
      { id: 382, content: '研究性活动或学习新技能', score: '猫头鹰' }
    ]
  },
  {
    id: 130,
    testId: 7,
    content: '当团队遇到困难时，我会：',
    type: 1,
    sortOrder: 11,
    dimension: 'PDP',
    options: [
      { id: 383, content: '挺身而出，带领团队突破', score: '老虎' },
      { id: 384, content: '鼓励大家，重建信心', score: '孔雀' },
      { id: 385, content: '默默支持，坚守岗位', score: '考拉' },
      { id: 386, content: '分析问题，提供方案', score: '猫头鹰' }
    ]
  },
  {
    id: 131,
    testId: 7,
    content: '我对成功的定义是：',
    type: 1,
    sortOrder: 12,
    dimension: 'PDP',
    options: [
      { id: 387, content: '达成目标，获得成就', score: '老虎' },
      { id: 388, content: '受人欢迎，有好人缘', score: '孔雀' },
      { id: 389, content: '生活稳定，内心平静', score: '考拉' },
      { id: 390, content: '专业精深，受人尊敬', score: '猫头鹰' }
    ]
  },
  {
    id: 132,
    testId: 7,
    content: '我倾向于如何表达自己：',
    type: 1,
    sortOrder: 13,
    dimension: 'PDP',
    options: [
      { id: 391, content: '直接坦率，有话就说', score: '老虎' },
      { id: 392, content: '生动有趣，善于表达', score: '孔雀' },
      { id: 393, content: '含蓄内敛，谨言慎行', score: '考拉' },
      { id: 394, content: '深思熟虑，有条不紊', score: '猫头鹰' }
    ]
  },
  {
    id: 133,
    testId: 7,
    content: '当制定计划时，我会：',
    type: 1,
    sortOrder: 14,
    dimension: 'PDP',
    options: [
      { id: 395, content: '设定高目标，立即行动', score: '老虎' },
      { id: 396, content: '灵活调整，随机应变', score: '孔雀' },
      { id: 397, content: '详细规划，考虑周全', score: '考拉' },
      { id: 398, content: '科学分析，数据支撑', score: '猫头鹰' }
    ]
  },
  {
    id: 134,
    testId: 7,
    content: '我希望别人如何评价我：',
    type: 1,
    sortOrder: 15,
    dimension: 'PDP',
    options: [
      { id: 399, content: '有魄力，有领导力', score: '老虎' },
      { id: 400, content: '有魅力，受欢迎', score: '孔雀' },
      { id: 401, content: '可靠，值得信赖', score: '考拉' },
      { id: 402, content: '专业，值得尊敬', score: '猫头鹰' }
    ]
  },
  {
    id: 403, testId: 8, content: '你是否能以抽象思维的方式思考问题？', type: 1, sortOrder: 1,
    options: [
      { id: 4031, content: '是', score: 'N' },
      { id: 4032, content: '否', score: 'E' }
    ]
  },
  {
    id: 404, testId: 8, content: '你通常更喜欢参加社交活动吗？', type: 1, sortOrder: 2,
    options: [
      { id: 4041, content: '是', score: 'E' },
      { id: 4042, content: '否', score: 'I' }
    ]
  },
  {
    id: 405, testId: 8, content: '你容易感到焦虑或担心吗？', type: 1, sortOrder: 3,
    options: [
      { id: 4051, content: '是', score: 'N' },
      { id: 4052, content: '否', score: 'P' }
    ]
  },
  {
    id: 406, testId: 8, content: '你喜欢独自工作而不是团队合作吗？', type: 1, sortOrder: 4,
    options: [
      { id: 4061, content: '是', score: 'I' },
      { id: 4062, content: '否', score: 'E' }
    ]
  },
  {
    id: 407, testId: 8, content: '你是否有强烈的同理心？', type: 1, sortOrder: 5,
    options: [
      { id: 4071, content: '是', score: 'E' },
      { id: 4072, content: '否', score: 'P' }
    ]
  },
  {
    id: 408, testId: 8, content: '你经常做梦吗？', type: 1, sortOrder: 6,
    options: [
      { id: 4081, content: '是', score: 'N' },
      { id: 4082, content: '否', score: 'S' }
    ]
  },
  {
    id: 409, testId: 8, content: '你喜欢户外活动吗？', type: 1, sortOrder: 7,
    options: [
      { id: 4091, content: '是', score: 'E' },
      { id: 4092, content: '否', score: 'I' }
    ]
  },
  {
    id: 410, testId: 8, content: '你容易情绪波动吗？', type: 1, sortOrder: 8,
    options: [
      { id: 4101, content: '是', score: 'N' },
      { id: 4102, content: '否', score: 'P' }
    ]
  },
  {
    id: 411, testId: 8, content: '你喜欢尝试新事物吗？', type: 1, sortOrder: 9,
    options: [
      { id: 4111, content: '是', score: 'E' },
      { id: 4112, content: '否', score: 'I' }
    ]
  },
  {
    id: 412, testId: 8, content: '你容易感到沮丧吗？', type: 1, sortOrder: 10,
    options: [
      { id: 4121, content: '是', score: 'N' },
      { id: 4122, content: '否', score: 'P' }
    ]
  },
  {
    id: 413, testId: 8, content: '你喜欢成为注意力的中心吗？', type: 1, sortOrder: 11,
    options: [
      { id: 4131, content: '是', score: 'E' },
      { id: 4132, content: '否', score: 'I' }
    ]
  },
  {
    id: 414, testId: 8, content: '你经常担心自己的健康吗？', type: 1, sortOrder: 12,
    options: [
      { id: 4141, content: '是', score: 'N' },
      { id: 4142, content: '否', score: 'P' }
    ]
  },
  {
    id: 415, testId: 8, content: '你喜欢阅读吗？', type: 1, sortOrder: 13,
    options: [
      { id: 4151, content: '是', score: 'I' },
      { id: 4152, content: '否', score: 'E' }
    ]
  },
  {
    id: 416, testId: 8, content: '你容易感到孤独吗？', type: 1, sortOrder: 14,
    options: [
      { id: 4161, content: '是', score: 'N' },
      { id: 4162, content: '否', score: 'P' }
    ]
  },
  {
    id: 417, testId: 8, content: '你喜欢计划和组织吗？', type: 1, sortOrder: 15,
    options: [
      { id: 4171, content: '是', score: 'E' },
      { id: 4172, content: '否', score: 'I' }
    ]
  },
  {
    id: 418, testId: 8, content: '你经常感到紧张吗？', type: 1, sortOrder: 16,
    options: [
      { id: 4181, content: '是', score: 'N' },
      { id: 4182, content: '否', score: 'P' }
    ]
  },
  {
    id: 419, testId: 8, content: '你喜欢与人交谈吗？', type: 1, sortOrder: 17,
    options: [
      { id: 4191, content: '是', score: 'E' },
      { id: 4192, content: '否', score: 'I' }
    ]
  },
  {
    id: 420, testId: 8, content: '你是否有创造力？', type: 1, sortOrder: 18,
    options: [
      { id: 4201, content: '是', score: 'N' },
      { id: 4202, content: '否', score: 'S' }
    ]
  },
  { id: 421, testId: 9, content: '你通常如何描述自己的社交能力？', type: 1, sortOrder: 1, options: [{ id: 4211, content: '非常擅长社交', score: 'A' }, { id: 4212, content: '一般', score: 'C' }] },
  { id: 422, testId: 9, content: '面对压力时，你通常会：', type: 1, sortOrder: 2, options: [{ id: 4221, content: '保持冷静', score: 'C' }, { id: 4222, content: '容易紧张', score: 'O' }] },
  { id: 423, testId: 9, content: '在团队中，你通常扮演什么角色？', type: 1, sortOrder: 3, options: [{ id: 4231, content: '领导者', score: 'E' }, { id: 4232, content: '跟随者', score: 'Q2' }] },
  { id: 424, testId: 9, content: '你是一个幽默的人吗？', type: 1, sortOrder: 4, options: [{ id: 4241, content: '是', score: 'F' }, { id: 4242, content: '否', score: 'C' }] },
  { id: 425, testId: 9, content: '你完成任务的风格是：', type: 1, sortOrder: 5, options: [{ id: 4251, content: '有恒负责', score: 'G' }, { id: 4252, content: '比较随性', score: 'Q3' }] },
  { id: 426, testId: 9, content: '你在社交场合的表现是：', type: 1, sortOrder: 6, options: [{ id: 4261, content: '大胆自信', score: 'H' }, { id: 4262, content: '害羞谨慎', score: 'I' }] },
  { id: 427, testId: 9, content: '你更看重：', type: 1, sortOrder: 7, options: [{ id: 4271, content: '情感和感受', score: 'I' }, { id: 4272, content: '逻辑和事实', score: 'L' }] },
  { id: 428, testId: 9, content: '你对他人的信任程度是：', type: 1, sortOrder: 8, options: [{ id: 4281, content: '容易信任', score: 'L' }, { id: 4282, content: '持怀疑态度', score: 'N' }] },
  { id: 429, testId: 9, content: '你的思维方式更倾向于：', type: 1, sortOrder: 9, options: [{ id: 4291, content: '富有想象', score: 'M' }, { id: 4292, content: '务实', score: 'C' }] },
  { id: 430, testId: 9, content: '你处理事情的方式是：', type: 1, sortOrder: 10, options: [{ id: 4301, content: '精明老练', score: 'N' }, { id: 4302, content: '天真直率', score: 'O' }] },
  { id: 431, testId: 9, content: '你经常担心吗？', type: 1, sortOrder: 11, options: [{ id: 4311, content: '是', score: 'O' }, { id: 4312, content: '否', score: 'Q4' }] },
  { id: 432, testId: 9, content: '你愿意尝试新事物吗？', type: 1, sortOrder: 12, options: [{ id: 4321, content: '是', score: 'Q1' }, { id: 4322, content: '否', score: 'G' }] },
  { id: 433, testId: 9, content: '你喜欢独自工作吗？', type: 1, sortOrder: 13, options: [{ id: 4331, content: '是', score: 'Q2' }, { id: 4332, content: '否', score: 'A' }] },
  { id: 434, testId: 9, content: '你有多自律？', type: 1, sortOrder: 14, options: [{ id: 4341, content: '非常自律', score: 'Q3' }, { id: 4342, content: '比较随性', score: 'M' }] },
  { id: 435, testId: 9, content: '你容易紧张吗？', type: 1, sortOrder: 15, options: [{ id: 4351, content: '是', score: 'Q4' }, { id: 4352, content: '否', score: 'C' }] },
  { id: 436, testId: 9, content: '你对自己要求高吗？', type: 1, sortOrder: 16, options: [{ id: 4361, content: '是', score: 'G' }, { id: 4362, content: '否', score: 'Q3' }] },
  { id: 437, testId: 9, content: '你喜欢户外运动吗？', type: 1, sortOrder: 17, options: [{ id: 4371, content: '是', score: 'H' }, { id: 4372, content: '否', score: 'I' }] },
  { id: 438, testId: 9, content: '你经常改变计划吗？', type: 1, sortOrder: 18, options: [{ id: 4381, content: '是', score: 'Q1' }, { id: 4382, content: '否', score: 'G' }] },
  { id: 439, testId: 9, content: '你容易适应新环境吗？', type: 1, sortOrder: 19, options: [{ id: 4391, content: '是', score: 'C' }, { id: 4392, content: '否', score: 'O' }] },
  { id: 440, testId: 9, content: '你喜欢规划未来吗？', type: 1, sortOrder: 20, options: [{ id: 4401, content: '是', score: 'J' }, { id: 4402, content: '否', score: 'M' }] },
  { id: 441, testId: 10, content: '你喜欢机械或电子设备吗？', type: 1, sortOrder: 1, options: [{ id: 4411, content: '是', score: 'R' }, { id: 4412, content: '否', score: 'S' }] },
  { id: 442, testId: 10, content: '你喜欢进行科学实验吗？', type: 1, sortOrder: 2, options: [{ id: 4421, content: '是', score: 'I' }, { id: 4422, content: '否', score: 'E' }] },
  { id: 443, testId: 10, content: '你擅长绘画或设计吗？', type: 1, sortOrder: 3, options: [{ id: 4431, content: '是', score: 'A' }, { id: 4432, content: '否', score: 'C' }] },
  { id: 444, testId: 10, content: '你喜欢帮助他人解决问题吗？', type: 1, sortOrder: 4, options: [{ id: 4441, content: '是', score: 'S' }, { id: 4442, content: '否', score: 'R' }] },
  { id: 445, testId: 10, content: '你喜欢组织和规划活动吗？', type: 1, sortOrder: 5, options: [{ id: 4451, content: '是', score: 'E' }, { id: 4452, content: '否', score: 'I' }] },
  { id: 446, testId: 10, content: '你擅长处理数据吗？', type: 1, sortOrder: 6, options: [{ id: 4461, content: '是', score: 'C' }, { id: 4462, content: '否', score: 'A' }] },
  { id: 447, testId: 10, content: '你喜欢户外工作吗？', type: 1, sortOrder: 7, options: [{ id: 4471, content: '是', score: 'R' }, { id: 4472, content: '否', score: 'I' }] },
  { id: 448, testId: 10, content: '你喜欢阅读科学书籍吗？', type: 1, sortOrder: 8, options: [{ id: 4481, content: '是', score: 'I' }, { id: 4482, content: '否', score: 'E' }] },
  { id: 449, testId: 10, content: '你擅长创意写作吗？', type: 1, sortOrder: 9, options: [{ id: 4491, content: '是', score: 'A' }, { id: 4492, content: '否', score: 'C' }] },
  { id: 450, testId: 10, content: '你喜欢教学或培训他人吗？', type: 1, sortOrder: 10, options: [{ id: 4501, content: '是', score: 'S' }, { id: 4502, content: '否', score: 'R' }] },
  { id: 451, testId: 10, content: '你喜欢销售或说服他人吗？', type: 1, sortOrder: 11, options: [{ id: 4511, content: '是', score: 'E' }, { id: 4512, content: '否', score: 'I' }] },
  { id: 452, testId: 10, content: '你擅长会计或财务管理吗？', type: 1, sortOrder: 12, options: [{ id: 4521, content: '是', score: 'C' }, { id: 4522, content: '否', score: 'A' }] },
  { id: 453, testId: 10, content: '你喜欢修理东西吗？', type: 1, sortOrder: 13, options: [{ id: 4531, content: '是', score: 'R' }, { id: 4532, content: '否', score: 'S' }] },
  { id: 454, testId: 10, content: '你喜欢分析问题吗？', type: 1, sortOrder: 14, options: [{ id: 4541, content: '是', score: 'I' }, { id: 4542, content: '否', score: 'E' }] },
  { id: 455, testId: 10, content: '你喜欢表演或展示吗？', type: 1, sortOrder: 15, options: [{ id: 4551, content: '是', score: 'A' }, { id: 4552, content: '否', score: 'C' }] },
  { id: 456, testId: 10, content: '你喜欢照顾他人吗？', type: 1, sortOrder: 16, options: [{ id: 4561, content: '是', score: 'S' }, { id: 4562, content: '否', score: 'R' }] },
  { id: 457, testId: 10, content: '你喜欢领导团队吗？', type: 1, sortOrder: 17, options: [{ id: 4571, content: '是', score: 'E' }, { id: 4572, content: '否', score: 'I' }] },
  { id: 458, testId: 10, content: '你喜欢遵循规则和程序吗？', type: 1, sortOrder: 18, options: [{ id: 4581, content: '是', score: 'C' }, { id: 4582, content: '否', score: 'A' }] },
  { id: 459, testId: 11, content: '你更关注外部世界还是内心世界？', type: 1, sortOrder: 1, options: [{ id: 4591, content: '外部世界', score: 'E' }, { id: 4592, content: '内心世界', score: 'I' }] },
  { id: 460, testId: 11, content: '你更容易注意到什么？', type: 1, sortOrder: 2, options: [{ id: 4601, content: '具体的事实和细节', score: 'S' }, { id: 4602, content: '可能性和想象', score: 'N' }] },
  { id: 461, testId: 11, content: '做决定时，你更依赖什么？', type: 1, sortOrder: 3, options: [{ id: 4611, content: '逻辑和客观分析', score: 'T' }, { id: 4612, content: '情感和个人价值观', score: 'F' }] },
  { id: 462, testId: 11, content: '你更喜欢什么样的生活方式？', type: 1, sortOrder: 4, options: [{ id: 4621, content: '有计划、有秩序', score: 'J' }, { id: 4622, content: '灵活、随性', score: 'P' }] },
  { id: 463, testId: 11, content: '社交活动让你感到：', type: 1, sortOrder: 5, options: [{ id: 4631, content: '充满能量', score: 'E' }, { id: 4632, content: '消耗能量', score: 'I' }] },
  { id: 464, testId: 11, content: '你更相信什么？', type: 1, sortOrder: 6, options: [{ id: 4641, content: '经验和事实', score: 'S' }, { id: 4642, content: '直觉和灵感', score: 'N' }] },
  { id: 465, testId: 11, content: '你认为什么更重要？', type: 1, sortOrder: 7, options: [{ id: 4651, content: '客观真理', score: 'T' }, { id: 4652, content: '人文关怀', score: 'F' }] },
  { id: 466, testId: 11, content: '你更喜欢：', type: 1, sortOrder: 8, options: [{ id: 4661, content: '决定并执行', score: 'J' }, { id: 4662, content: '保持开放', score: 'P' }] },
  { id: 467, testId: 11, content: '你更喜欢什么样的工作环境？', type: 1, sortOrder: 9, options: [{ id: 4671, content: '与他人合作', score: 'E' }, { id: 4672, content: '独立工作', score: 'I' }] },
  { id: 468, testId: 11, content: '学习新知识时，你倾向于：', type: 1, sortOrder: 10, options: [{ id: 4681, content: '从具体例子入手', score: 'S' }, { id: 4682, content: '先理解整体概念', score: 'N' }] },
  { id: 469, testId: 11, content: '当与他人发生分歧时，你会：', type: 1, sortOrder: 11, options: [{ id: 4691, content: '分析对错', score: 'T' }, { id: 4692, content: '考虑对方感受', score: 'F' }] },
  { id: 470, testId: 11, content: '你更喜欢：', type: 1, sortOrder: 12, options: [{ id: 4701, content: '按计划行事', score: 'J' }, { id: 4702, content: '随情况变化', score: 'P' }] },
  { id: 471, testId: 11, content: '你通常从哪里获得能量？', type: 1, sortOrder: 13, options: [{ id: 4711, content: '与他人的互动', score: 'E' }, { id: 4712, content: '独处和反思', score: 'I' }] },
  { id: 472, testId: 11, content: '你更容易被什么吸引？', type: 1, sortOrder: 14, options: [{ id: 4721, content: '现实可行的事物', score: 'S' }, { id: 4722, content: '富有创意的事物', score: 'N' }] },
  { id: 473, testId: 11, content: '你如何评价一个人？', type: 1, sortOrder: 15, options: [{ id: 4731, content: '基于能力和成就', score: 'T' }, { id: 4732, content: '基于品德和善良', score: 'F' }] },
  { id: 474, testId: 11, content: '你更喜欢的生活节奏是：', type: 1, sortOrder: 16, options: [{ id: 4741, content: '稳定有序', score: 'J' }, { id: 4742, content: '灵活多变', score: 'P' }] },
  { id: 475, testId: 11, content: '在聚会中，你通常是：', type: 1, sortOrder: 17, options: [{ id: 4751, content: '主动与他人交谈', score: 'E' }, { id: 4752, content: '在一旁观察', score: 'I' }] },
  { id: 476, testId: 11, content: '你更相信什么？', type: 1, sortOrder: 18, options: [{ id: 4761, content: '自己的感官体验', score: 'S' }, { id: 4762, content: '自己的第六感', score: 'N' }] },
  { id: 477, testId: 11, content: '当需要做决定时，你更看重：', type: 1, sortOrder: 19, options: [{ id: 4771, content: '逻辑和一致性', score: 'T' }, { id: 4772, content: '和谐与共识', score: 'F' }] },
  { id: 478, testId: 11, content: '你更喜欢：', type: 1, sortOrder: 20, options: [{ id: 4781, content: '确定的事情', score: 'J' }, { id: 4782, content: '新的可能性', score: 'P' }] },
  { id: 501, testId: 12, content: '我感到情绪沮丧、郁闷', type: 3, sortOrder: 1, options: [{ id: 5011, content: '没有或很少时间', score: 1 }, { id: 5012, content: '小部分时间', score: 2 }, { id: 5013, content: '相当多时间', score: 3 }, { id: 5014, content: '绝大部分或全部时间', score: 4 }] },
  { id: 502, testId: 12, content: '我感到早晨心情最好', type: 3, sortOrder: 2, options: [{ id: 5021, content: '没有或很少时间', score: 4 }, { id: 5022, content: '小部分时间', score: 3 }, { id: 5023, content: '相当多时间', score: 2 }, { id: 5024, content: '绝大部分或全部时间', score: 1 }] },
  { id: 503, testId: 12, content: '我要哭或想哭', type: 3, sortOrder: 3, options: [{ id: 5031, content: '没有或很少时间', score: 1 }, { id: 5032, content: '小部分时间', score: 2 }, { id: 5033, content: '相当多时间', score: 3 }, { id: 5034, content: '绝大部分或全部时间', score: 4 }] },
  { id: 504, testId: 12, content: '我夜间睡眠不好', type: 3, sortOrder: 4, options: [{ id: 5041, content: '没有或很少时间', score: 1 }, { id: 5042, content: '小部分时间', score: 2 }, { id: 5043, content: '相当多时间', score: 3 }, { id: 5044, content: '绝大部分或全部时间', score: 4 }] },
  { id: 505, testId: 12, content: '我吃饭像平时一样多', type: 3, sortOrder: 5, options: [{ id: 5051, content: '没有或很少时间', score: 4 }, { id: 5052, content: '小部分时间', score: 3 }, { id: 5053, content: '相当多时间', score: 2 }, { id: 5054, content: '绝大部分或全部时间', score: 1 }] },
  { id: 506, testId: 12, content: '我的性功能正常', type: 3, sortOrder: 6, options: [{ id: 5061, content: '没有或很少时间', score: 4 }, { id: 5062, content: '小部分时间', score: 3 }, { id: 5063, content: '相当多时间', score: 2 }, { id: 5064, content: '绝大部分或全部时间', score: 1 }] },
  { id: 507, testId: 12, content: '我感到体重减轻', type: 3, sortOrder: 7, options: [{ id: 5071, content: '没有或很少时间', score: 1 }, { id: 5072, content: '小部分时间', score: 2 }, { id: 5073, content: '相当多时间', score: 3 }, { id: 5074, content: '绝大部分或全部时间', score: 4 }] },
  { id: 508, testId: 12, content: '我为便秘烦恼', type: 3, sortOrder: 8, options: [{ id: 5081, content: '没有或很少时间', score: 1 }, { id: 5082, content: '小部分时间', score: 2 }, { id: 5083, content: '相当多时间', score: 3 }, { id: 5084, content: '绝大部分或全部时间', score: 4 }] },
  { id: 509, testId: 12, content: '我的心跳比平时快', type: 3, sortOrder: 9, options: [{ id: 5091, content: '没有或很少时间', score: 1 }, { id: 5092, content: '小部分时间', score: 2 }, { id: 5093, content: '相当多时间', score: 3 }, { id: 5094, content: '绝大部分或全部时间', score: 4 }] },
  { id: 510, testId: 12, content: '我无故感到疲劳', type: 3, sortOrder: 10, options: [{ id: 5101, content: '没有或很少时间', score: 1 }, { id: 5102, content: '小部分时间', score: 2 }, { id: 5103, content: '相当多时间', score: 3 }, { id: 5104, content: '绝大部分或全部时间', score: 4 }] },
  { id: 511, testId: 12, content: '我的头脑像往常一样清楚', type: 3, sortOrder: 11, options: [{ id: 5111, content: '没有或很少时间', score: 4 }, { id: 5112, content: '小部分时间', score: 3 }, { id: 5113, content: '相当多时间', score: 2 }, { id: 5114, content: '绝大部分或全部时间', score: 1 }] },
  { id: 512, testId: 12, content: '我做事情像平时一样不感到困难', type: 3, sortOrder: 12, options: [{ id: 5121, content: '没有或很少时间', score: 4 }, { id: 5122, content: '小部分时间', score: 3 }, { id: 5123, content: '相当多时间', score: 2 }, { id: 5124, content: '绝大部分或全部时间', score: 1 }] },
  { id: 513, testId: 12, content: '我坐卧不安、难以保持平静', type: 3, sortOrder: 13, options: [{ id: 5131, content: '没有或很少时间', score: 1 }, { id: 5132, content: '小部分时间', score: 2 }, { id: 5133, content: '相当多时间', score: 3 }, { id: 5134, content: '绝大部分或全部时间', score: 4 }] },
  { id: 514, testId: 12, content: '我对未来感到有希望', type: 3, sortOrder: 14, options: [{ id: 5141, content: '没有或很少时间', score: 4 }, { id: 5142, content: '小部分时间', score: 3 }, { id: 5143, content: '相当多时间', score: 2 }, { id: 5144, content: '绝大部分或全部时间', score: 1 }] },
  { id: 515, testId: 12, content: '我比平时更容易激怒', type: 3, sortOrder: 15, options: [{ id: 5151, content: '没有或很少时间', score: 1 }, { id: 5152, content: '小部分时间', score: 2 }, { id: 5153, content: '相当多时间', score: 3 }, { id: 5154, content: '绝大部分或全部时间', score: 4 }] },
  { id: 516, testId: 12, content: '我觉得决定什么事很容易', type: 3, sortOrder: 16, options: [{ id: 5161, content: '没有或很少时间', score: 4 }, { id: 5162, content: '小部分时间', score: 3 }, { id: 5163, content: '相当多时间', score: 2 }, { id: 5164, content: '绝大部分或全部时间', score: 1 }] },
  { id: 517, testId: 12, content: '我感到自己是有用的和不可缺少的人', type: 3, sortOrder: 17, options: [{ id: 5171, content: '没有或很少时间', score: 4 }, { id: 5172, content: '小部分时间', score: 3 }, { id: 5173, content: '相当多时间', score: 2 }, { id: 5174, content: '绝大部分或全部时间', score: 1 }] },
  { id: 518, testId: 12, content: '我的生活很有意义', type: 3, sortOrder: 18, options: [{ id: 5181, content: '没有或很少时间', score: 4 }, { id: 5182, content: '小部分时间', score: 3 }, { id: 5183, content: '相当多时间', score: 2 }, { id: 5184, content: '绝大部分或全部时间', score: 1 }] },
  { id: 519, testId: 12, content: '假如我死了别人会过得更好', type: 3, sortOrder: 19, options: [{ id: 5191, content: '没有或很少时间', score: 1 }, { id: 5192, content: '小部分时间', score: 2 }, { id: 5193, content: '相当多时间', score: 3 }, { id: 5194, content: '绝大部分或全部时间', score: 4 }] },
  { id: 520, testId: 12, content: '我仍旧喜爱自己平时喜爱的东西', type: 3, sortOrder: 20, options: [{ id: 5201, content: '没有或很少时间', score: 4 }, { id: 5202, content: '小部分时间', score: 3 }, { id: 5203, content: '相当多时间', score: 2 }, { id: 5204, content: '绝大部分或全部时间', score: 1 }] },
  { id: 521, testId: 13, content: '我感到比往常更加神经过敏和焦虑', type: 3, sortOrder: 1, options: [{ id: 5211, content: '没有或很少时间', score: 1 }, { id: 5212, content: '小部分时间', score: 2 }, { id: 5213, content: '相当多时间', score: 3 }, { id: 5214, content: '绝大部分或全部时间', score: 4 }] },
  { id: 522, testId: 13, content: '我无缘无故感到担心', type: 3, sortOrder: 2, options: [{ id: 5221, content: '没有或很少时间', score: 1 }, { id: 5222, content: '小部分时间', score: 2 }, { id: 5223, content: '相当多时间', score: 3 }, { id: 5224, content: '绝大部分或全部时间', score: 4 }] },
  { id: 523, testId: 13, content: '我容易心烦意乱或感到恐慌', type: 3, sortOrder: 3, options: [{ id: 5231, content: '没有或很少时间', score: 1 }, { id: 5232, content: '小部分时间', score: 2 }, { id: 5233, content: '相当多时间', score: 3 }, { id: 5234, content: '绝大部分或全部时间', score: 4 }] },
  { id: 524, testId: 13, content: '我感到我的身体好像分成几块', type: 3, sortOrder: 4, options: [{ id: 5241, content: '没有或很少时间', score: 1 }, { id: 5242, content: '小部分时间', score: 2 }, { id: 5243, content: '相当多时间', score: 3 }, { id: 5244, content: '绝大部分或全部时间', score: 4 }] },
  { id: 525, testId: 13, content: '我感到一切都很好，不会发生什么不幸', type: 3, sortOrder: 5, options: [{ id: 5251, content: '没有或很少时间', score: 4 }, { id: 5252, content: '小部分时间', score: 3 }, { id: 5253, content: '相当多时间', score: 2 }, { id: 5254, content: '绝大部分或全部时间', score: 1 }] },
  { id: 526, testId: 13, content: '我的手脚发抖打颤', type: 3, sortOrder: 6, options: [{ id: 5261, content: '没有或很少时间', score: 1 }, { id: 5262, content: '小部分时间', score: 2 }, { id: 5263, content: '相当多时间', score: 3 }, { id: 5264, content: '绝大部分或全部时间', score: 4 }] },
  { id: 527, testId: 13, content: '我因头痛、颈痛和背痛而烦恼', type: 3, sortOrder: 7, options: [{ id: 5271, content: '没有或很少时间', score: 1 }, { id: 5272, content: '小部分时间', score: 2 }, { id: 5273, content: '相当多时间', score: 3 }, { id: 5274, content: '绝大部分或全部时间', score: 4 }] },
  { id: 528, testId: 13, content: '我感到无力且容易疲劳', type: 3, sortOrder: 8, options: [{ id: 5281, content: '没有或很少时间', score: 1 }, { id: 5282, content: '小部分时间', score: 2 }, { id: 5283, content: '相当多时间', score: 3 }, { id: 5284, content: '绝大部分或全部时间', score: 4 }] },
  { id: 529, testId: 13, content: '我能安静地坐下来并轻松地放松自己', type: 3, sortOrder: 9, options: [{ id: 5291, content: '没有或很少时间', score: 4 }, { id: 5292, content: '小部分时间', score: 3 }, { id: 5293, content: '相当多时间', score: 2 }, { id: 5294, content: '绝大部分或全部时间', score: 1 }] },
  { id: 530, testId: 13, content: '我感到我的心跳很快', type: 3, sortOrder: 10, options: [{ id: 5301, content: '没有或很少时间', score: 1 }, { id: 5302, content: '小部分时间', score: 2 }, { id: 5303, content: '相当多时间', score: 3 }, { id: 5304, content: '绝大部分或全部时间', score: 4 }] },
  { id: 531, testId: 13, content: '我因阵阵的眩晕而不舒服', type: 3, sortOrder: 11, options: [{ id: 5311, content: '没有或很少时间', score: 1 }, { id: 5312, content: '小部分时间', score: 2 }, { id: 5313, content: '相当多时间', score: 3 }, { id: 5314, content: '绝大部分或全部时间', score: 4 }] },
  { id: 532, testId: 13, content: '我有晕厥发作，或觉得要晕厥', type: 3, sortOrder: 12, options: [{ id: 5321, content: '没有或很少时间', score: 1 }, { id: 5322, content: '小部分时间', score: 2 }, { id: 5323, content: '相当多时间', score: 3 }, { id: 5324, content: '绝大部分或全部时间', score: 4 }] },
  { id: 533, testId: 13, content: '我能深呼吸而不感到费力', type: 3, sortOrder: 13, options: [{ id: 5331, content: '没有或很少时间', score: 4 }, { id: 5332, content: '小部分时间', score: 3 }, { id: 5333, content: '相当多时间', score: 2 }, { id: 5334, content: '绝大部分或全部时间', score: 1 }] },
  { id: 534, testId: 13, content: '我感到手脚麻木和刺痛', type: 3, sortOrder: 14, options: [{ id: 5341, content: '没有或很少时间', score: 1 }, { id: 5342, content: '小部分时间', score: 2 }, { id: 5343, content: '相当多时间', score: 3 }, { id: 5344, content: '绝大部分或全部时间', score: 4 }] },
  { id: 535, testId: 13, content: '我因胃痛和消化不良而苦恼', type: 3, sortOrder: 15, options: [{ id: 5351, content: '没有或很少时间', score: 1 }, { id: 5352, content: '小部分时间', score: 2 }, { id: 5353, content: '相当多时间', score: 3 }, { id: 5354, content: '绝大部分或全部时间', score: 4 }] },
  { id: 536, testId: 13, content: '我必须常常排尿', type: 3, sortOrder: 16, options: [{ id: 5361, content: '没有或很少时间', score: 1 }, { id: 5362, content: '小部分时间', score: 2 }, { id: 5363, content: '相当多时间', score: 3 }, { id: 5364, content: '绝大部分或全部时间', score: 4 }] },
  { id: 537, testId: 13, content: '我的手常常是干燥温暖的', type: 3, sortOrder: 17, options: [{ id: 5371, content: '没有或很少时间', score: 4 }, { id: 5372, content: '小部分时间', score: 3 }, { id: 5373, content: '相当多时间', score: 2 }, { id: 5374, content: '绝大部分或全部时间', score: 1 }] },
  { id: 538, testId: 13, content: '我脸红发热', type: 3, sortOrder: 18, options: [{ id: 5381, content: '没有或很少时间', score: 1 }, { id: 5382, content: '小部分时间', score: 2 }, { id: 5383, content: '相当多时间', score: 3 }, { id: 5384, content: '绝大部分或全部时间', score: 4 }] },
  { id: 539, testId: 13, content: '我容易入睡并且一夜睡得很好', type: 3, sortOrder: 19, options: [{ id: 5391, content: '没有或很少时间', score: 4 }, { id: 5392, content: '小部分时间', score: 3 }, { id: 5393, content: '相当多时间', score: 2 }, { id: 5394, content: '绝大部分或全部时间', score: 1 }] },
  { id: 540, testId: 13, content: '我做噩梦', type: 3, sortOrder: 20, options: [{ id: 5401, content: '没有或很少时间', score: 1 }, { id: 5402, content: '小部分时间', score: 2 }, { id: 5403, content: '相当多时间', score: 3 }, { id: 5404, content: '绝大部分或全部时间', score: 4 }] },
  { id: 541, testId: 14, content: '我感到低落', type: 3, sortOrder: 1, options: [{ id: 5411, content: '从不', score: 0 }, { id: 5412, content: '有时', score: 1 }, { id: 5413, content: '经常', score: 2 }, { id: 5414, content: '总是', score: 3 }] },
  { id: 542, testId: 14, content: '我觉得不开心', type: 3, sortOrder: 2, options: [{ id: 5421, content: '从不', score: 0 }, { id: 5422, content: '有时', score: 1 }, { id: 5423, content: '经常', score: 2 }, { id: 5424, content: '总是', score: 3 }] },
  { id: 543, testId: 14, content: '我觉得没有希望', type: 3, sortOrder: 3, options: [{ id: 5431, content: '从不', score: 0 }, { id: 5432, content: '有时', score: 1 }, { id: 5433, content: '经常', score: 2 }, { id: 5434, content: '总是', score: 3 }] },
  { id: 544, testId: 14, content: '我感到无助', type: 3, sortOrder: 4, options: [{ id: 5441, content: '从不', score: 0 }, { id: 5442, content: '有时', score: 1 }, { id: 5443, content: '经常', score: 2 }, { id: 5444, content: '总是', score: 3 }] },
  { id: 545, testId: 14, content: '我感到自卑', type: 3, sortOrder: 5, options: [{ id: 5451, content: '从不', score: 0 }, { id: 5452, content: '有时', score: 1 }, { id: 5453, content: '经常', score: 2 }, { id: 5454, content: '总是', score: 3 }] },
  { id: 546, testId: 14, content: '我感到自责', type: 3, sortOrder: 6, options: [{ id: 5461, content: '从不', score: 0 }, { id: 5462, content: '有时', score: 1 }, { id: 5463, content: '经常', score: 2 }, { id: 5464, content: '总是', score: 3 }] },
  { id: 547, testId: 14, content: '我感到焦虑', type: 3, sortOrder: 7, options: [{ id: 5471, content: '从不', score: 0 }, { id: 5472, content: '有时', score: 1 }, { id: 5473, content: '经常', score: 2 }, { id: 5474, content: '总是', score: 3 }] },
  { id: 548, testId: 14, content: '我感到紧张', type: 3, sortOrder: 8, options: [{ id: 5481, content: '从不', score: 0 }, { id: 5482, content: '有时', score: 1 }, { id: 5483, content: '经常', score: 2 }, { id: 5484, content: '总是', score: 3 }] },
  { id: 549, testId: 14, content: '我感到恐慌', type: 3, sortOrder: 9, options: [{ id: 5491, content: '从不', score: 0 }, { id: 5492, content: '有时', score: 1 }, { id: 5493, content: '经常', score: 2 }, { id: 5494, content: '总是', score: 3 }] },
  { id: 550, testId: 14, content: '我心跳加速', type: 3, sortOrder: 10, options: [{ id: 5501, content: '从不', score: 0 }, { id: 5502, content: '有时', score: 1 }, { id: 5503, content: '经常', score: 2 }, { id: 5504, content: '总是', score: 3 }] },
  { id: 551, testId: 14, content: '我感到坐立不安', type: 3, sortOrder: 11, options: [{ id: 5511, content: '从不', score: 0 }, { id: 5512, content: '有时', score: 1 }, { id: 5513, content: '经常', score: 2 }, { id: 5514, content: '总是', score: 3 }] },
  { id: 552, testId: 14, content: '我感到肌肉紧张', type: 3, sortOrder: 12, options: [{ id: 5521, content: '从不', score: 0 }, { id: 5522, content: '有时', score: 1 }, { id: 5523, content: '经常', score: 2 }, { id: 5524, content: '总是', score: 3 }] },
  { id: 553, testId: 14, content: '我感到压力很大', type: 3, sortOrder: 13, options: [{ id: 5531, content: '从不', score: 0 }, { id: 5532, content: '有时', score: 1 }, { id: 5533, content: '经常', score: 2 }, { id: 5534, content: '总是', score: 3 }] },
  { id: 554, testId: 14, content: '我感到难以放松', type: 3, sortOrder: 14, options: [{ id: 5541, content: '从不', score: 0 }, { id: 5542, content: '有时', score: 1 }, { id: 5543, content: '经常', score: 2 }, { id: 5544, content: '总是', score: 3 }] },
  { id: 555, testId: 14, content: '我感到易怒', type: 3, sortOrder: 15, options: [{ id: 5551, content: '从不', score: 0 }, { id: 5552, content: '有时', score: 1 }, { id: 5553, content: '经常', score: 2 }, { id: 5554, content: '总是', score: 3 }] },
  { id: 556, testId: 14, content: '我感到疲倦', type: 3, sortOrder: 16, options: [{ id: 5561, content: '从不', score: 0 }, { id: 5562, content: '有时', score: 1 }, { id: 5563, content: '经常', score: 2 }, { id: 5564, content: '总是', score: 3 }] },
  { id: 557, testId: 14, content: '我睡眠不好', type: 3, sortOrder: 17, options: [{ id: 5571, content: '从不', score: 0 }, { id: 5572, content: '有时', score: 1 }, { id: 5573, content: '经常', score: 2 }, { id: 5574, content: '总是', score: 3 }] },
  { id: 558, testId: 14, content: '我食欲减退', type: 3, sortOrder: 18, options: [{ id: 5581, content: '从不', score: 0 }, { id: 5582, content: '有时', score: 1 }, { id: 5583, content: '经常', score: 2 }, { id: 5584, content: '总是', score: 3 }] },
  { id: 559, testId: 14, content: '我难以集中注意力', type: 3, sortOrder: 19, options: [{ id: 5591, content: '从不', score: 0 }, { id: 5592, content: '有时', score: 1 }, { id: 5593, content: '经常', score: 2 }, { id: 5594, content: '总是', score: 3 }] },
  { id: 560, testId: 14, content: '我对未来感到悲观', type: 3, sortOrder: 20, options: [{ id: 5601, content: '从不', score: 0 }, { id: 5602, content: '有时', score: 1 }, { id: 5603, content: '经常', score: 2 }, { id: 5604, content: '总是', score: 3 }] },
  { id: 561, testId: 14, content: '我有自杀念头', type: 3, sortOrder: 21, options: [{ id: 5611, content: '从不', score: 0 }, { id: 5612, content: '有时', score: 1 }, { id: 5613, content: '经常', score: 2 }, { id: 5614, content: '总是', score: 3 }] },
  { id: 562, testId: 15, content: '悲伤', type: 3, sortOrder: 1, options: [{ id: 5621, content: '我不感到悲伤', score: 0 }, { id: 5622, content: '我感到悲伤', score: 1 }, { id: 5623, content: '我一直感到悲伤，无法摆脱', score: 2 }, { id: 5624, content: '我如此悲伤或不快乐，以至于难以忍受', score: 3 }] },
  { id: 563, testId: 15, content: '悲观', type: 3, sortOrder: 2, options: [{ id: 5631, content: '我不感到失望', score: 0 }, { id: 5632, content: '我对未来感到失望', score: 1 }, { id: 5633, content: '我感到没有希望', score: 2 }, { id: 5634, content: '我感到未来毫无希望，情况也不可能改善', score: 3 }] },
  { id: 564, testId: 15, content: '失败感', type: 3, sortOrder: 3, options: [{ id: 5641, content: '我没有感到失败', score: 0 }, { id: 5642, content: '我感到我比别人失败得更多', score: 1 }, { id: 5643, content: '回顾过去，我看到的都是失败', score: 2 }, { id: 5644, content: '我感到我是一个完全失败的人', score: 3 }] },
  { id: 565, testId: 15, content: '不满', type: 3, sortOrder: 4, options: [{ id: 5651, content: '我对自己并不不满', score: 0 }, { id: 5652, content: '我对自己感到失望', score: 1 }, { id: 5653, content: '我讨厌自己', score: 2 }, { id: 5654, content: '我恨自己', score: 3 }] },
  { id: 566, testId: 15, content: '自责', type: 3, sortOrder: 5, options: [{ id: 5661, content: '我没有特别感到有罪', score: 0 }, { id: 5662, content: '我感到自己有罪', score: 1 }, { id: 5663, content: '我大部分时间感到有罪', score: 2 }, { id: 5664, content: '我一直感到有罪', score: 3 }] },
  { id: 567, testId: 15, content: '惩罚感', type: 3, sortOrder: 6, options: [{ id: 5671, content: '我没有感到受罚', score: 0 }, { id: 5672, content: '我感到可能会受到惩罚', score: 1 }, { id: 5673, content: '我期望受到惩罚', score: 2 }, { id: 5674, content: '我感到正在受到惩罚', score: 3 }] },
  { id: 568, testId: 15, content: '自杀念头', type: 3, sortOrder: 7, options: [{ id: 5681, content: '我没有自杀念头', score: 0 }, { id: 5682, content: '我有自杀念头但不会实施', score: 1 }, { id: 5683, content: '我想自杀', score: 2 }, { id: 5684, content: '如果有机会我会自杀', score: 3 }] },
  { id: 569, testId: 15, content: '睡眠障碍', type: 3, sortOrder: 8, options: [{ id: 5691, content: '我睡眠像平时一样好', score: 0 }, { id: 5692, content: '我睡眠不如平时好', score: 1 }, { id: 5693, content: '我比平时早醒1-2小时，难以再睡', score: 2 }, { id: 5694, content: '我比平时早醒几小时，无法再睡', score: 3 }] },
  { id: 570, testId: 15, content: '易醒', type: 3, sortOrder: 9, options: [{ id: 5701, content: '我不感到疲倦', score: 0 }, { id: 5702, content: '我比平时更容易疲倦', score: 1 }, { id: 5703, content: '我做任何事情都感到疲倦', score: 2 }, { id: 5704, content: '我太疲倦了，以至于无法做任何事情', score: 3 }] },
  { id: 571, testId: 15, content: '食欲减退', type: 3, sortOrder: 10, options: [{ id: 5711, content: '我的食欲和平时一样', score: 0 }, { id: 5712, content: '我的食欲不如平时', score: 1 }, { id: 5713, content: '我的食欲很差', score: 2 }, { id: 5714, content: '我完全没有食欲', score: 3 }] },
  { id: 572, testId: 15, content: '体重减轻', type: 3, sortOrder: 11, options: [{ id: 5721, content: '我没有明显体重减轻', score: 0 }, { id: 5722, content: '我可能体重减轻了2公斤', score: 1 }, { id: 5723, content: '我体重减轻了5公斤以上', score: 2 }, { id: 5724, content: '我体重减轻了7公斤以上', score: 3 }] },
  { id: 573, testId: 15, content: '注意力不集中', type: 3, sortOrder: 12, options: [{ id: 5731, content: '我能够像平时一样集中注意力', score: 0 }, { id: 5732, content: '我难以集中注意力', score: 1 }, { id: 5733, content: '做任何事情都难以集中注意力', score: 2 }, { id: 5734, content: '我完全无法集中注意力', score: 3 }] },
  { id: 574, testId: 15, content: '犹豫不决', type: 3, sortOrder: 13, options: [{ id: 5741, content: '我做决定和平时一样容易', score: 0 }, { id: 5742, content: '我做决定比平时困难', score: 1 }, { id: 5743, content: '我做任何决定都很困难', score: 2 }, { id: 5744, content: '我完全无法做决定', score: 3 }] },
  { id: 575, testId: 15, content: '自我价值感', type: 3, sortOrder: 14, options: [{ id: 5751, content: '我对自己的看法和平时一样', score: 0 }, { id: 5752, content: '我觉得自己不如别人', score: 1 }, { id: 5753, content: '我觉得自己一无是处', score: 2 }, { id: 5754, content: '我觉得自己是一个完全无用的人', score: 3 }] },
  { id: 576, testId: 15, content: '工作困难', type: 3, sortOrder: 15, options: [{ id: 5761, content: '我工作和平时一样好', score: 0 }, { id: 5762, content: '我工作不如平时好', score: 1 }, { id: 5763, content: '我很难开始工作', score: 2 }, { id: 5764, content: '我完全无法工作', score: 3 }] },
  { id: 577, testId: 15, content: '社交退缩', type: 3, sortOrder: 16, options: [{ id: 5771, content: '我和平时一样社交', score: 0 }, { id: 5772, content: '我比平时社交少', score: 1 }, { id: 5773, content: '我社交非常少', score: 2 }, { id: 5774, content: '我完全不社交', score: 3 }] },
  { id: 578, testId: 15, content: '兴趣减退', type: 3, sortOrder: 17, options: [{ id: 5781, content: '我对兴趣爱好和平时一样感兴趣', score: 0 }, { id: 5782, content: '我对兴趣爱好不如平时感兴趣', score: 1 }, { id: 5783, content: '我对兴趣爱好兴趣很少', score: 2 }, { id: 5784, content: '我对兴趣爱好完全失去兴趣', score: 3 }] },
  { id: 579, testId: 15, content: '性欲减退', type: 3, sortOrder: 18, options: [{ id: 5791, content: '我的性欲和平时一样', score: 0 }, { id: 5792, content: '我的性欲不如平时', score: 1 }, { id: 5793, content: '我的性欲很差', score: 2 }, { id: 5794, content: '我完全没有性欲', score: 3 }] },
  { id: 580, testId: 15, content: '哭泣', type: 3, sortOrder: 19, options: [{ id: 5801, content: '我不哭泣', score: 0 }, { id: 5802, content: '我比平时更容易哭泣', score: 1 }, { id: 5803, content: '我大部分时间都在哭泣', score: 2 }, { id: 5804, content: '我一直哭泣，无法停止', score: 3 }] },
  { id: 581, testId: 15, content: '易怒', type: 3, sortOrder: 20, options: [{ id: 5811, content: '我不感到易怒', score: 0 }, { id: 5812, content: '我比平时更容易易怒', score: 1 }, { id: 5813, content: '我经常感到易怒', score: 2 }, { id: 5814, content: '我一直感到易怒', score: 3 }] },
  { id: 582, testId: 15, content: '躯体症状', type: 3, sortOrder: 21, options: [{ id: 5821, content: '我没有任何躯体症状', score: 0 }, { id: 5822, content: '我有一些躯体症状', score: 1 }, { id: 5823, content: '我有很多躯体症状', score: 2 }, { id: 5824, content: '我有非常严重的躯体症状', score: 3 }] },
  { id: 583, testId: 16, content: '焦虑心境', type: 3, sortOrder: 1, options: [{ id: 5831, content: '没有', score: 0 }, { id: 5832, content: '轻度', score: 1 }, { id: 5833, content: '中度', score: 2 }, { id: 5834, content: '重度', score: 3 }] },
  { id: 584, testId: 16, content: '紧张', type: 3, sortOrder: 2, options: [{ id: 5841, content: '没有', score: 0 }, { id: 5842, content: '轻度', score: 1 }, { id: 5843, content: '中度', score: 2 }, { id: 5844, content: '重度', score: 3 }] },
  { id: 585, testId: 16, content: '害怕', type: 3, sortOrder: 3, options: [{ id: 5851, content: '没有', score: 0 }, { id: 5852, content: '轻度', score: 1 }, { id: 5853, content: '中度', score: 2 }, { id: 5854, content: '重度', score: 3 }] },
  { id: 586, testId: 16, content: '失眠', type: 3, sortOrder: 4, options: [{ id: 5861, content: '没有', score: 0 }, { id: 5862, content: '轻度', score: 1 }, { id: 5863, content: '中度', score: 2 }, { id: 5864, content: '重度', score: 3 }] },
  { id: 587, testId: 16, content: '认知功能', type: 3, sortOrder: 5, options: [{ id: 5871, content: '没有', score: 0 }, { id: 5872, content: '轻度', score: 1 }, { id: 5873, content: '中度', score: 2 }, { id: 5874, content: '重度', score: 3 }] },
  { id: 588, testId: 16, content: '抑郁心境', type: 3, sortOrder: 6, options: [{ id: 5881, content: '没有', score: 0 }, { id: 5882, content: '轻度', score: 1 }, { id: 5883, content: '中度', score: 2 }, { id: 5884, content: '重度', score: 3 }] },
  { id: 589, testId: 16, content: '躯体症状-肌肉系统', type: 3, sortOrder: 7, options: [{ id: 5891, content: '没有', score: 0 }, { id: 5892, content: '轻度', score: 1 }, { id: 5893, content: '中度', score: 2 }, { id: 5894, content: '重度', score: 3 }] },
  { id: 590, testId: 16, content: '躯体症状-感觉系统', type: 3, sortOrder: 8, options: [{ id: 5901, content: '没有', score: 0 }, { id: 5902, content: '轻度', score: 1 }, { id: 5903, content: '中度', score: 2 }, { id: 5904, content: '重度', score: 3 }] },
  { id: 591, testId: 16, content: '心血管系统症状', type: 3, sortOrder: 9, options: [{ id: 5911, content: '没有', score: 0 }, { id: 5912, content: '轻度', score: 1 }, { id: 5913, content: '中度', score: 2 }, { id: 5914, content: '重度', score: 3 }] },
  { id: 592, testId: 16, content: '呼吸系统症状', type: 3, sortOrder: 10, options: [{ id: 5921, content: '没有', score: 0 }, { id: 5922, content: '轻度', score: 1 }, { id: 5923, content: '中度', score: 2 }, { id: 5924, content: '重度', score: 3 }] },
  { id: 593, testId: 16, content: '胃肠道症状', type: 3, sortOrder: 11, options: [{ id: 5931, content: '没有', score: 0 }, { id: 5932, content: '轻度', score: 1 }, { id: 5933, content: '中度', score: 2 }, { id: 5934, content: '重度', score: 3 }] },
  { id: 594, testId: 16, content: '生殖泌尿系统症状', type: 3, sortOrder: 12, options: [{ id: 5941, content: '没有', score: 0 }, { id: 5942, content: '轻度', score: 1 }, { id: 5943, content: '中度', score: 2 }, { id: 5944, content: '重度', score: 3 }] },
  { id: 595, testId: 16, content: '自主神经系统症状', type: 3, sortOrder: 13, options: [{ id: 5951, content: '没有', score: 0 }, { id: 5952, content: '轻度', score: 1 }, { id: 5953, content: '中度', score: 2 }, { id: 5954, content: '重度', score: 3 }] },
  { id: 596, testId: 16, content: '会谈时行为表现', type: 3, sortOrder: 14, options: [{ id: 5961, content: '没有', score: 0 }, { id: 5962, content: '轻度', score: 1 }, { id: 5963, content: '中度', score: 2 }, { id: 5964, content: '重度', score: 3 }] },
  { id: 597, testId: 17, content: '抑郁情绪', type: 3, sortOrder: 1, options: [{ id: 5971, content: '没有', score: 0 }, { id: 5972, content: '轻度', score: 1 }, { id: 5973, content: '中度', score: 2 }, { id: 5974, content: '重度', score: 3 }] },
  { id: 598, testId: 17, content: '有罪感', type: 3, sortOrder: 2, options: [{ id: 5981, content: '没有', score: 0 }, { id: 5982, content: '轻度', score: 1 }, { id: 5983, content: '中度', score: 2 }, { id: 5984, content: '重度', score: 3 }] },
  { id: 599, testId: 17, content: '自杀', type: 3, sortOrder: 3, options: [{ id: 5991, content: '没有', score: 0 }, { id: 5992, content: '轻度', score: 1 }, { id: 5993, content: '中度', score: 2 }, { id: 5994, content: '重度', score: 3 }] },
  { id: 600, testId: 17, content: '入睡困难', type: 3, sortOrder: 4, options: [{ id: 6001, content: '没有', score: 0 }, { id: 6002, content: '轻度', score: 1 }, { id: 6003, content: '中度', score: 2 }, { id: 6004, content: '重度', score: 3 }] },
  { id: 601, testId: 17, content: '睡眠不深', type: 3, sortOrder: 5, options: [{ id: 6011, content: '没有', score: 0 }, { id: 6012, content: '轻度', score: 1 }, { id: 6013, content: '中度', score: 2 }, { id: 6014, content: '重度', score: 3 }] },
  { id: 602, testId: 17, content: '早醒', type: 3, sortOrder: 6, options: [{ id: 6021, content: '没有', score: 0 }, { id: 6022, content: '轻度', score: 1 }, { id: 6023, content: '中度', score: 2 }, { id: 6024, content: '重度', score: 3 }] },
  { id: 603, testId: 17, content: '工作和兴趣', type: 3, sortOrder: 7, options: [{ id: 6031, content: '没有', score: 0 }, { id: 6032, content: '轻度', score: 1 }, { id: 6033, content: '中度', score: 2 }, { id: 6034, content: '重度', score: 3 }] },
  { id: 604, testId: 17, content: '迟缓', type: 3, sortOrder: 8, options: [{ id: 6041, content: '没有', score: 0 }, { id: 6042, content: '轻度', score: 1 }, { id: 6043, content: '中度', score: 2 }, { id: 6044, content: '重度', score: 3 }] },
  { id: 605, testId: 17, content: '激越', type: 3, sortOrder: 9, options: [{ id: 6051, content: '没有', score: 0 }, { id: 6052, content: '轻度', score: 1 }, { id: 6053, content: '中度', score: 2 }, { id: 6054, content: '重度', score: 3 }] },
  { id: 606, testId: 17, content: '精神性焦虑', type: 3, sortOrder: 10, options: [{ id: 6061, content: '没有', score: 0 }, { id: 6062, content: '轻度', score: 1 }, { id: 6063, content: '中度', score: 2 }, { id: 6064, content: '重度', score: 3 }] },
  { id: 607, testId: 17, content: '躯体性焦虑', type: 3, sortOrder: 11, options: [{ id: 6071, content: '没有', score: 0 }, { id: 6072, content: '轻度', score: 1 }, { id: 6073, content: '中度', score: 2 }, { id: 6074, content: '重度', score: 3 }] },
  { id: 608, testId: 17, content: '胃肠道症状', type: 3, sortOrder: 12, options: [{ id: 6081, content: '没有', score: 0 }, { id: 6082, content: '轻度', score: 1 }, { id: 6083, content: '中度', score: 2 }, { id: 6084, content: '重度', score: 3 }] },
  { id: 609, testId: 17, content: '全身症状', type: 3, sortOrder: 13, options: [{ id: 6091, content: '没有', score: 0 }, { id: 6092, content: '轻度', score: 1 }, { id: 6093, content: '中度', score: 2 }, { id: 6094, content: '重度', score: 3 }] },
  { id: 610, testId: 17, content: '性症状', type: 3, sortOrder: 14, options: [{ id: 6101, content: '没有', score: 0 }, { id: 6102, content: '轻度', score: 1 }, { id: 6103, content: '中度', score: 2 }, { id: 6104, content: '重度', score: 3 }] },
  { id: 611, testId: 17, content: '疑病', type: 3, sortOrder: 15, options: [{ id: 6111, content: '没有', score: 0 }, { id: 6112, content: '轻度', score: 1 }, { id: 6113, content: '中度', score: 2 }, { id: 6114, content: '重度', score: 3 }] },
  { id: 612, testId: 17, content: '体重减轻', type: 3, sortOrder: 16, options: [{ id: 6121, content: '没有', score: 0 }, { id: 6122, content: '轻度', score: 1 }, { id: 6123, content: '中度', score: 2 }, { id: 6124, content: '重度', score: 3 }] },
  { id: 613, testId: 17, content: '自知力', type: 3, sortOrder: 17, options: [{ id: 6131, content: '完整', score: 0 }, { id: 6132, content: '轻度缺损', score: 1 }, { id: 6133, content: '中度缺损', score: 2 }, { id: 6134, content: '重度缺损', score: 3 }] },
  { id: 614, testId: 18, content: '头痛', type: 3, sortOrder: 1, options: [{ id: 6141, content: '没有', score: 1 }, { id: 6142, content: '很轻', score: 2 }, { id: 6143, content: '中等', score: 3 }, { id: 6144, content: '偏重', score: 4 }, { id: 6145, content: '严重', score: 5 }] },
  { id: 615, testId: 18, content: '神经过敏，心中不踏实', type: 3, sortOrder: 2, options: [{ id: 6151, content: '没有', score: 1 }, { id: 6152, content: '很轻', score: 2 }, { id: 6153, content: '中等', score: 3 }, { id: 6154, content: '偏重', score: 4 }, { id: 6155, content: '严重', score: 5 }] },
  { id: 616, testId: 18, content: '头脑中有不必要的想法或字句盘旋', type: 3, sortOrder: 3, options: [{ id: 6161, content: '没有', score: 1 }, { id: 6162, content: '很轻', score: 2 }, { id: 6163, content: '中等', score: 3 }, { id: 6164, content: '偏重', score: 4 }, { id: 6165, content: '严重', score: 5 }] },
  { id: 617, testId: 18, content: '头晕或晕倒', type: 3, sortOrder: 4, options: [{ id: 6171, content: '没有', score: 1 }, { id: 6172, content: '很轻', score: 2 }, { id: 6173, content: '中等', score: 3 }, { id: 6174, content: '偏重', score: 4 }, { id: 6175, content: '严重', score: 5 }] },
  { id: 618, testId: 18, content: '对异性的兴趣减退', type: 3, sortOrder: 5, options: [{ id: 6181, content: '没有', score: 1 }, { id: 6182, content: '很轻', score: 2 }, { id: 6183, content: '中等', score: 3 }, { id: 6184, content: '偏重', score: 4 }, { id: 6185, content: '严重', score: 5 }] },
  { id: 619, testId: 18, content: '对旁人求全责备', type: 3, sortOrder: 6, options: [{ id: 6191, content: '没有', score: 1 }, { id: 6192, content: '很轻', score: 2 }, { id: 6193, content: '中等', score: 3 }, { id: 6194, content: '偏重', score: 4 }, { id: 6195, content: '严重', score: 5 }] },
  { id: 620, testId: 18, content: '感到别人能控制你的思想', type: 3, sortOrder: 7, options: [{ id: 6201, content: '没有', score: 1 }, { id: 6202, content: '很轻', score: 2 }, { id: 6203, content: '中等', score: 3 }, { id: 6204, content: '偏重', score: 4 }, { id: 6205, content: '严重', score: 5 }] },
  { id: 621, testId: 18, content: '责怪别人制造麻烦', type: 3, sortOrder: 8, options: [{ id: 6211, content: '没有', score: 1 }, { id: 6212, content: '很轻', score: 2 }, { id: 6213, content: '中等', score: 3 }, { id: 6214, content: '偏重', score: 4 }, { id: 6215, content: '严重', score: 5 }] },
  { id: 622, testId: 18, content: '忘性大', type: 3, sortOrder: 9, options: [{ id: 6221, content: '没有', score: 1 }, { id: 6222, content: '很轻', score: 2 }, { id: 6223, content: '中等', score: 3 }, { id: 6224, content: '偏重', score: 4 }, { id: 6225, content: '严重', score: 5 }] },
  { id: 623, testId: 18, content: '担心自己的衣饰整齐及仪态的端正', type: 3, sortOrder: 10, options: [{ id: 6231, content: '没有', score: 1 }, { id: 6232, content: '很轻', score: 2 }, { id: 6233, content: '中等', score: 3 }, { id: 6234, content: '偏重', score: 4 }, { id: 6235, content: '严重', score: 5 }] },
  { id: 624, testId: 18, content: '容易烦恼和激动', type: 3, sortOrder: 11, options: [{ id: 6241, content: '没有', score: 1 }, { id: 6242, content: '很轻', score: 2 }, { id: 6243, content: '中等', score: 3 }, { id: 6244, content: '偏重', score: 4 }, { id: 6245, content: '严重', score: 5 }] },
  { id: 625, testId: 18, content: '胸痛', type: 3, sortOrder: 12, options: [{ id: 6251, content: '没有', score: 1 }, { id: 6252, content: '很轻', score: 2 }, { id: 6253, content: '中等', score: 3 }, { id: 6254, content: '偏重', score: 4 }, { id: 6255, content: '严重', score: 5 }] },
  { id: 626, testId: 18, content: '害怕空旷的场所或街道', type: 3, sortOrder: 13, options: [{ id: 6261, content: '没有', score: 1 }, { id: 6262, content: '很轻', score: 2 }, { id: 6263, content: '中等', score: 3 }, { id: 6264, content: '偏重', score: 4 }, { id: 6265, content: '严重', score: 5 }] },
  { id: 627, testId: 18, content: '感到自己的精力下降，活动减慢', type: 3, sortOrder: 14, options: [{ id: 6271, content: '没有', score: 1 }, { id: 6272, content: '很轻', score: 2 }, { id: 6273, content: '中等', score: 3 }, { id: 6274, content: '偏重', score: 4 }, { id: 6275, content: '严重', score: 5 }] },
  { id: 628, testId: 18, content: '想结束自己的生命', type: 3, sortOrder: 15, options: [{ id: 6281, content: '没有', score: 1 }, { id: 6282, content: '很轻', score: 2 }, { id: 6283, content: '中等', score: 3 }, { id: 6284, content: '偏重', score: 4 }, { id: 6285, content: '严重', score: 5 }] },
  { id: 629, testId: 18, content: '听到旁人听不到的声音', type: 3, sortOrder: 16, options: [{ id: 6291, content: '没有', score: 1 }, { id: 6292, content: '很轻', score: 2 }, { id: 6293, content: '中等', score: 3 }, { id: 6294, content: '偏重', score: 4 }, { id: 6295, content: '严重', score: 5 }] },
  { id: 630, testId: 18, content: '发抖', type: 3, sortOrder: 17, options: [{ id: 6301, content: '没有', score: 1 }, { id: 6302, content: '很轻', score: 2 }, { id: 6303, content: '中等', score: 3 }, { id: 6304, content: '偏重', score: 4 }, { id: 6305, content: '严重', score: 5 }] },
  { id: 631, testId: 18, content: '感到大多数人都不可信任', type: 3, sortOrder: 18, options: [{ id: 6311, content: '没有', score: 1 }, { id: 6312, content: '很轻', score: 2 }, { id: 6313, content: '中等', score: 3 }, { id: 6314, content: '偏重', score: 4 }, { id: 6315, content: '严重', score: 5 }] },
  { id: 632, testId: 18, content: '胃口不好', type: 3, sortOrder: 19, options: [{ id: 6321, content: '没有', score: 1 }, { id: 6322, content: '很轻', score: 2 }, { id: 6323, content: '中等', score: 3 }, { id: 6324, content: '偏重', score: 4 }, { id: 6325, content: '严重', score: 5 }] },
  { id: 633, testId: 18, content: '容易哭泣', type: 3, sortOrder: 20, options: [{ id: 6331, content: '没有', score: 1 }, { id: 6332, content: '很轻', score: 2 }, { id: 6333, content: '中等', score: 3 }, { id: 6334, content: '偏重', score: 4 }, { id: 6335, content: '严重', score: 5 }] },
  { id: 634, testId: 18, content: '同异性相处时感到害羞不自在', type: 3, sortOrder: 21, options: [{ id: 6341, content: '没有', score: 1 }, { id: 6342, content: '很轻', score: 2 }, { id: 6343, content: '中等', score: 3 }, { id: 6344, content: '偏重', score: 4 }, { id: 6345, content: '严重', score: 5 }] },
  { id: 635, testId: 18, content: '感到受骗，中了圈套或有人想抓您', type: 3, sortOrder: 22, options: [{ id: 6351, content: '没有', score: 1 }, { id: 6352, content: '很轻', score: 2 }, { id: 6353, content: '中等', score: 3 }, { id: 6354, content: '偏重', score: 4 }, { id: 6355, content: '严重', score: 5 }] },
  { id: 636, testId: 18, content: '无缘无故地突然感到害怕', type: 3, sortOrder: 23, options: [{ id: 6361, content: '没有', score: 1 }, { id: 6362, content: '很轻', score: 2 }, { id: 6363, content: '中等', score: 3 }, { id: 6364, content: '偏重', score: 4 }, { id: 6365, content: '严重', score: 5 }] },
  { id: 637, testId: 18, content: '自己不能控制地大发脾气', type: 3, sortOrder: 24, options: [{ id: 6371, content: '没有', score: 1 }, { id: 6372, content: '很轻', score: 2 }, { id: 6373, content: '中等', score: 3 }, { id: 6374, content: '偏重', score: 4 }, { id: 6375, content: '严重', score: 5 }] },
  { id: 638, testId: 18, content: '怕单独出门', type: 3, sortOrder: 25, options: [{ id: 6381, content: '没有', score: 1 }, { id: 6382, content: '很轻', score: 2 }, { id: 6383, content: '中等', score: 3 }, { id: 6384, content: '偏重', score: 4 }, { id: 6385, content: '严重', score: 5 }] },
  { id: 639, testId: 18, content: '经常责怪自己', type: 3, sortOrder: 26, options: [{ id: 6391, content: '没有', score: 1 }, { id: 6392, content: '很轻', score: 2 }, { id: 6393, content: '中等', score: 3 }, { id: 6394, content: '偏重', score: 4 }, { id: 6395, content: '严重', score: 5 }] },
  { id: 640, testId: 18, content: '腰痛', type: 3, sortOrder: 27, options: [{ id: 6401, content: '没有', score: 1 }, { id: 6402, content: '很轻', score: 2 }, { id: 6403, content: '中等', score: 3 }, { id: 6404, content: '偏重', score: 4 }, { id: 6405, content: '严重', score: 5 }] },
  { id: 641, testId: 18, content: '感到难以完成任务', type: 3, sortOrder: 28, options: [{ id: 6411, content: '没有', score: 1 }, { id: 6412, content: '很轻', score: 2 }, { id: 6413, content: '中等', score: 3 }, { id: 6414, content: '偏重', score: 4 }, { id: 6415, content: '严重', score: 5 }] },
  { id: 642, testId: 18, content: '感到孤独', type: 3, sortOrder: 29, options: [{ id: 6421, content: '没有', score: 1 }, { id: 6422, content: '很轻', score: 2 }, { id: 6423, content: '中等', score: 3 }, { id: 6424, content: '偏重', score: 4 }, { id: 6425, content: '严重', score: 5 }] },
  { id: 643, testId: 18, content: '感到苦闷', type: 3, sortOrder: 30, options: [{ id: 6431, content: '没有', score: 1 }, { id: 6432, content: '很轻', score: 2 }, { id: 6433, content: '中等', score: 3 }, { id: 6434, content: '偏重', score: 4 }, { id: 6435, content: '严重', score: 5 }] },
  { id: 644, testId: 18, content: '过分担忧', type: 3, sortOrder: 31, options: [{ id: 6441, content: '没有', score: 1 }, { id: 6442, content: '很轻', score: 2 }, { id: 6443, content: '中等', score: 3 }, { id: 6444, content: '偏重', score: 4 }, { id: 6445, content: '严重', score: 5 }] },
  { id: 645, testId: 18, content: '对事物不感兴趣', type: 3, sortOrder: 32, options: [{ id: 6451, content: '没有', score: 1 }, { id: 6452, content: '很轻', score: 2 }, { id: 6453, content: '中等', score: 3 }, { id: 6454, content: '偏重', score: 4 }, { id: 6455, content: '严重', score: 5 }] },
  { id: 646, testId: 18, content: '感到害怕', type: 3, sortOrder: 33, options: [{ id: 6461, content: '没有', score: 1 }, { id: 6462, content: '很轻', score: 2 }, { id: 6463, content: '中等', score: 3 }, { id: 6464, content: '偏重', score: 4 }, { id: 6465, content: '严重', score: 5 }] },
  { id: 647, testId: 18, content: '您的感情容易受到伤害', type: 3, sortOrder: 34, options: [{ id: 6471, content: '没有', score: 1 }, { id: 6472, content: '很轻', score: 2 }, { id: 6473, content: '中等', score: 3 }, { id: 6474, content: '偏重', score: 4 }, { id: 6475, content: '严重', score: 5 }] },
  { id: 648, testId: 18, content: '旁人能知道您的私下想法', type: 3, sortOrder: 35, options: [{ id: 6481, content: '没有', score: 1 }, { id: 6482, content: '很轻', score: 2 }, { id: 6483, content: '中等', score: 3 }, { id: 6484, content: '偏重', score: 4 }, { id: 6485, content: '严重', score: 5 }] },
  { id: 649, testId: 18, content: '感到别人不理解您、不同情您', type: 3, sortOrder: 36, options: [{ id: 6491, content: '没有', score: 1 }, { id: 6492, content: '很轻', score: 2 }, { id: 6493, content: '中等', score: 3 }, { id: 6494, content: '偏重', score: 4 }, { id: 6495, content: '严重', score: 5 }] },
  { id: 650, testId: 18, content: '感到人们对您不友好，不喜欢您', type: 3, sortOrder: 37, options: [{ id: 6501, content: '没有', score: 1 }, { id: 6502, content: '很轻', score: 2 }, { id: 6503, content: '中等', score: 3 }, { id: 6504, content: '偏重', score: 4 }, { id: 6505, content: '严重', score: 5 }] },
  { id: 651, testId: 18, content: '做事必须做得很慢以保证做得正确', type: 3, sortOrder: 38, options: [{ id: 6511, content: '没有', score: 1 }, { id: 6512, content: '很轻', score: 2 }, { id: 6513, content: '中等', score: 3 }, { id: 6514, content: '偏重', score: 4 }, { id: 6515, content: '严重', score: 5 }] },
  { id: 652, testId: 18, content: '心跳得很厉害', type: 3, sortOrder: 39, options: [{ id: 6521, content: '没有', score: 1 }, { id: 6522, content: '很轻', score: 2 }, { id: 6523, content: '中等', score: 3 }, { id: 6524, content: '偏重', score: 4 }, { id: 6525, content: '严重', score: 5 }] },
  { id: 653, testId: 18, content: '恶心或胃部不舒服', type: 3, sortOrder: 40, options: [{ id: 6531, content: '没有', score: 1 }, { id: 6532, content: '很轻', score: 2 }, { id: 6533, content: '中等', score: 3 }, { id: 6534, content: '偏重', score: 4 }, { id: 6535, content: '严重', score: 5 }] },
  { id: 654, testId: 18, content: '感到比不上他人', type: 3, sortOrder: 41, options: [{ id: 6541, content: '没有', score: 1 }, { id: 6542, content: '很轻', score: 2 }, { id: 6543, content: '中等', score: 3 }, { id: 6544, content: '偏重', score: 4 }, { id: 6545, content: '严重', score: 5 }] },
  { id: 655, testId: 18, content: '肌肉酸痛', type: 3, sortOrder: 42, options: [{ id: 6551, content: '没有', score: 1 }, { id: 6552, content: '很轻', score: 2 }, { id: 6553, content: '中等', score: 3 }, { id: 6554, content: '偏重', score: 4 }, { id: 6555, content: '严重', score: 5 }] },
  { id: 656, testId: 18, content: '感到有人在监视您、谈论您', type: 3, sortOrder: 43, options: [{ id: 6561, content: '没有', score: 1 }, { id: 6562, content: '很轻', score: 2 }, { id: 6563, content: '中等', score: 3 }, { id: 6564, content: '偏重', score: 4 }, { id: 6565, content: '严重', score: 5 }] },
  { id: 657, testId: 18, content: '难以入睡', type: 3, sortOrder: 44, options: [{ id: 6571, content: '没有', score: 1 }, { id: 6572, content: '很轻', score: 2 }, { id: 6573, content: '中等', score: 3 }, { id: 6574, content: '偏重', score: 4 }, { id: 6575, content: '严重', score: 5 }] },
  { id: 658, testId: 18, content: '做事必须反复检查', type: 3, sortOrder: 45, options: [{ id: 6581, content: '没有', score: 1 }, { id: 6582, content: '很轻', score: 2 }, { id: 6583, content: '中等', score: 3 }, { id: 6584, content: '偏重', score: 4 }, { id: 6585, content: '严重', score: 5 }] },
  { id: 659, testId: 18, content: '难以做出决定', type: 3, sortOrder: 46, options: [{ id: 6591, content: '没有', score: 1 }, { id: 6592, content: '很轻', score: 2 }, { id: 6593, content: '中等', score: 3 }, { id: 6594, content: '偏重', score: 4 }, { id: 6595, content: '严重', score: 5 }] },
  { id: 660, testId: 18, content: '怕乘电车、公共汽车、地铁或火车', type: 3, sortOrder: 47, options: [{ id: 6601, content: '没有', score: 1 }, { id: 6602, content: '很轻', score: 2 }, { id: 6603, content: '中等', score: 3 }, { id: 6604, content: '偏重', score: 4 }, { id: 6605, content: '严重', score: 5 }] },
  { id: 661, testId: 18, content: '呼吸有困难', type: 3, sortOrder: 48, options: [{ id: 6611, content: '没有', score: 1 }, { id: 6612, content: '很轻', score: 2 }, { id: 6613, content: '中等', score: 3 }, { id: 6614, content: '偏重', score: 4 }, { id: 6615, content: '严重', score: 5 }] },
  { id: 662, testId: 18, content: '一阵阵发冷或发热', type: 3, sortOrder: 49, options: [{ id: 6621, content: '没有', score: 1 }, { id: 6622, content: '很轻', score: 2 }, { id: 6623, content: '中等', score: 3 }, { id: 6624, content: '偏重', score: 4 }, { id: 6625, content: '严重', score: 5 }] },
  { id: 663, testId: 18, content: '因为感到害怕而避开某些东西、场合或活动', type: 3, sortOrder: 50, options: [{ id: 6631, content: '没有', score: 1 }, { id: 6632, content: '很轻', score: 2 }, { id: 6633, content: '中等', score: 3 }, { id: 6634, content: '偏重', score: 4 }, { id: 6635, content: '严重', score: 5 }] },
  { id: 664, testId: 18, content: '脑子变空了', type: 3, sortOrder: 51, options: [{ id: 6641, content: '没有', score: 1 }, { id: 6642, content: '很轻', score: 2 }, { id: 6643, content: '中等', score: 3 }, { id: 6644, content: '偏重', score: 4 }, { id: 6645, content: '严重', score: 5 }] },
  { id: 665, testId: 18, content: '身体发麻或刺痛', type: 3, sortOrder: 52, options: [{ id: 6651, content: '没有', score: 1 }, { id: 6652, content: '很轻', score: 2 }, { id: 6653, content: '中等', score: 3 }, { id: 6654, content: '偏重', score: 4 }, { id: 6655, content: '严重', score: 5 }] },
  { id: 666, testId: 18, content: '喉咙有梗塞感', type: 3, sortOrder: 53, options: [{ id: 6661, content: '没有', score: 1 }, { id: 6662, content: '很轻', score: 2 }, { id: 6663, content: '中等', score: 3 }, { id: 6664, content: '偏重', score: 4 }, { id: 6665, content: '严重', score: 5 }] },
  { id: 667, testId: 18, content: '感到前途没有希望', type: 3, sortOrder: 54, options: [{ id: 6671, content: '没有', score: 1 }, { id: 6672, content: '很轻', score: 2 }, { id: 6673, content: '中等', score: 3 }, { id: 6674, content: '偏重', score: 4 }, { id: 6675, content: '严重', score: 5 }] },
  { id: 668, testId: 18, content: '不能集中注意力', type: 3, sortOrder: 55, options: [{ id: 6681, content: '没有', score: 1 }, { id: 6682, content: '很轻', score: 2 }, { id: 6683, content: '中等', score: 3 }, { id: 6684, content: '偏重', score: 4 }, { id: 6685, content: '严重', score: 5 }] },
  { id: 669, testId: 18, content: '感到身体的某一部分软弱无力', type: 3, sortOrder: 56, options: [{ id: 6691, content: '没有', score: 1 }, { id: 6692, content: '很轻', score: 2 }, { id: 6693, content: '中等', score: 3 }, { id: 6694, content: '偏重', score: 4 }, { id: 6695, content: '严重', score: 5 }] },
  { id: 670, testId: 18, content: '感到紧张或容易紧张', type: 3, sortOrder: 57, options: [{ id: 6701, content: '没有', score: 1 }, { id: 6702, content: '很轻', score: 2 }, { id: 6703, content: '中等', score: 3 }, { id: 6704, content: '偏重', score: 4 }, { id: 6705, content: '严重', score: 5 }] },
  { id: 671, testId: 18, content: '感到手或脚发重', type: 3, sortOrder: 58, options: [{ id: 6711, content: '没有', score: 1 }, { id: 6712, content: '很轻', score: 2 }, { id: 6713, content: '中等', score: 3 }, { id: 6714, content: '偏重', score: 4 }, { id: 6715, content: '严重', score: 5 }] },
  { id: 672, testId: 18, content: '想到死亡的事', type: 3, sortOrder: 59, options: [{ id: 6721, content: '没有', score: 1 }, { id: 6722, content: '很轻', score: 2 }, { id: 6723, content: '中等', score: 3 }, { id: 6724, content: '偏重', score: 4 }, { id: 6725, content: '严重', score: 5 }] },
  { id: 673, testId: 18, content: '吃得太多', type: 3, sortOrder: 60, options: [{ id: 6731, content: '没有', score: 1 }, { id: 6732, content: '很轻', score: 2 }, { id: 6733, content: '中等', score: 3 }, { id: 6734, content: '偏重', score: 4 }, { id: 6735, content: '严重', score: 5 }] },
  { id: 674, testId: 18, content: '当别人看着您或谈论您时感到不自在', type: 3, sortOrder: 61, options: [{ id: 6741, content: '没有', score: 1 }, { id: 6742, content: '很轻', score: 2 }, { id: 6743, content: '中等', score: 3 }, { id: 6744, content: '偏重', score: 4 }, { id: 6745, content: '严重', score: 5 }] },
  { id: 675, testId: 18, content: '有一些不属于您自己的想法', type: 3, sortOrder: 62, options: [{ id: 6751, content: '没有', score: 1 }, { id: 6752, content: '很轻', score: 2 }, { id: 6753, content: '中等', score: 3 }, { id: 6754, content: '偏重', score: 4 }, { id: 6755, content: '严重', score: 5 }] },
  { id: 676, testId: 18, content: '有想打人或伤害他人的冲动', type: 3, sortOrder: 63, options: [{ id: 6761, content: '没有', score: 1 }, { id: 6762, content: '很轻', score: 2 }, { id: 6763, content: '中等', score: 3 }, { id: 6764, content: '偏重', score: 4 }, { id: 6765, content: '严重', score: 5 }] },
  { id: 677, testId: 18, content: '醒得太早', type: 3, sortOrder: 64, options: [{ id: 6771, content: '没有', score: 1 }, { id: 6772, content: '很轻', score: 2 }, { id: 6773, content: '中等', score: 3 }, { id: 6774, content: '偏重', score: 4 }, { id: 6775, content: '严重', score: 5 }] },
  { id: 678, testId: 18, content: '必须反复洗手、点数目或触摸某些东西', type: 3, sortOrder: 65, options: [{ id: 6781, content: '没有', score: 1 }, { id: 6782, content: '很轻', score: 2 }, { id: 6783, content: '中等', score: 3 }, { id: 6784, content: '偏重', score: 4 }, { id: 6785, content: '严重', score: 5 }] },
  { id: 679, testId: 18, content: '睡得不深不稳', type: 3, sortOrder: 66, options: [{ id: 6791, content: '没有', score: 1 }, { id: 6792, content: '很轻', score: 2 }, { id: 6793, content: '中等', score: 3 }, { id: 6794, content: '偏重', score: 4 }, { id: 6795, content: '严重', score: 5 }] },
  { id: 680, testId: 18, content: '有想摔坏或破坏东西的冲动', type: 3, sortOrder: 67, options: [{ id: 6801, content: '没有', score: 1 }, { id: 6802, content: '很轻', score: 2 }, { id: 6803, content: '中等', score: 3 }, { id: 6804, content: '偏重', score: 4 }, { id: 6805, content: '严重', score: 5 }] },
  { id: 681, testId: 18, content: '有一些别人没有的想法', type: 3, sortOrder: 68, options: [{ id: 6811, content: '没有', score: 1 }, { id: 6812, content: '很轻', score: 2 }, { id: 6813, content: '中等', score: 3 }, { id: 6814, content: '偏重', score: 4 }, { id: 6815, content: '严重', score: 5 }] },
  { id: 682, testId: 18, content: '感到对别人神经过敏', type: 3, sortOrder: 69, options: [{ id: 6821, content: '没有', score: 1 }, { id: 6822, content: '很轻', score: 2 }, { id: 6823, content: '中等', score: 3 }, { id: 6824, content: '偏重', score: 4 }, { id: 6825, content: '严重', score: 5 }] },
  { id: 683, testId: 18, content: '在商店或电影院等人多的地方感到不自在', type: 3, sortOrder: 70, options: [{ id: 6831, content: '没有', score: 1 }, { id: 6832, content: '很轻', score: 2 }, { id: 6833, content: '中等', score: 3 }, { id: 6834, content: '偏重', score: 4 }, { id: 6835, content: '严重', score: 5 }] },
  { id: 684, testId: 18, content: '感到任何事情都很困难', type: 3, sortOrder: 71, options: [{ id: 6841, content: '没有', score: 1 }, { id: 6842, content: '很轻', score: 2 }, { id: 6843, content: '中等', score: 3 }, { id: 6844, content: '偏重', score: 4 }, { id: 6845, content: '严重', score: 5 }] },
  { id: 685, testId: 18, content: '一阵阵恐惧或惊恐', type: 3, sortOrder: 72, options: [{ id: 6851, content: '没有', score: 1 }, { id: 6852, content: '很轻', score: 2 }, { id: 6853, content: '中等', score: 3 }, { id: 6854, content: '偏重', score: 4 }, { id: 6855, content: '严重', score: 5 }] },
  { id: 686, testId: 18, content: '感到在公共场合吃东西很不舒服', type: 3, sortOrder: 73, options: [{ id: 6861, content: '没有', score: 1 }, { id: 6862, content: '很轻', score: 2 }, { id: 6863, content: '中等', score: 3 }, { id: 6864, content: '偏重', score: 4 }, { id: 6865, content: '严重', score: 5 }] },
  { id: 687, testId: 18, content: '经常与人争论', type: 3, sortOrder: 74, options: [{ id: 6871, content: '没有', score: 1 }, { id: 6872, content: '很轻', score: 2 }, { id: 6873, content: '中等', score: 3 }, { id: 6874, content: '偏重', score: 4 }, { id: 6875, content: '严重', score: 5 }] },
  { id: 688, testId: 18, content: '单独一人时神经很紧张', type: 3, sortOrder: 75, options: [{ id: 6881, content: '没有', score: 1 }, { id: 6882, content: '很轻', score: 2 }, { id: 6883, content: '中等', score: 3 }, { id: 6884, content: '偏重', score: 4 }, { id: 6885, content: '严重', score: 5 }] },
  { id: 689, testId: 18, content: '别人对您的成绩没有做出恰当的评价', type: 3, sortOrder: 76, options: [{ id: 6891, content: '没有', score: 1 }, { id: 6892, content: '很轻', score: 2 }, { id: 6893, content: '中等', score: 3 }, { id: 6894, content: '偏重', score: 4 }, { id: 6895, content: '严重', score: 5 }] },
  { id: 690, testId: 18, content: '即使和别人在一起也感到孤单', type: 3, sortOrder: 77, options: [{ id: 6901, content: '没有', score: 1 }, { id: 6902, content: '很轻', score: 2 }, { id: 6903, content: '中等', score: 3 }, { id: 6904, content: '偏重', score: 4 }, { id: 6905, content: '严重', score: 5 }] },
  { id: 691, testId: 18, content: '感到坐立不安、心神不定', type: 3, sortOrder: 78, options: [{ id: 6911, content: '没有', score: 1 }, { id: 6912, content: '很轻', score: 2 }, { id: 6913, content: '中等', score: 3 }, { id: 6914, content: '偏重', score: 4 }, { id: 6915, content: '严重', score: 5 }] },
  { id: 692, testId: 18, content: '感到自己没有什么价值', type: 3, sortOrder: 79, options: [{ id: 6921, content: '没有', score: 1 }, { id: 6922, content: '很轻', score: 2 }, { id: 6923, content: '中等', score: 3 }, { id: 6924, content: '偏重', score: 4 }, { id: 6925, content: '严重', score: 5 }] },
  { id: 693, testId: 18, content: '感到熟悉的东西变成陌生或不像是真的', type: 3, sortOrder: 80, options: [{ id: 6931, content: '没有', score: 1 }, { id: 6932, content: '很轻', score: 2 }, { id: 6933, content: '中等', score: 3 }, { id: 6934, content: '偏重', score: 4 }, { id: 6935, content: '严重', score: 5 }] },
  { id: 694, testId: 18, content: '大叫或摔东西', type: 3, sortOrder: 81, options: [{ id: 6941, content: '没有', score: 1 }, { id: 6942, content: '很轻', score: 2 }, { id: 6943, content: '中等', score: 3 }, { id: 6944, content: '偏重', score: 4 }, { id: 6945, content: '严重', score: 5 }] },
  { id: 695, testId: 18, content: '害怕会在公共场合晕倒', type: 3, sortOrder: 82, options: [{ id: 6951, content: '没有', score: 1 }, { id: 6952, content: '很轻', score: 2 }, { id: 6953, content: '中等', score: 3 }, { id: 6954, content: '偏重', score: 4 }, { id: 6955, content: '严重', score: 5 }] },
  { id: 696, testId: 18, content: '感到别人想占您的便宜', type: 3, sortOrder: 83, options: [{ id: 6961, content: '没有', score: 1 }, { id: 6962, content: '很轻', score: 2 }, { id: 6963, content: '中等', score: 3 }, { id: 6964, content: '偏重', score: 4 }, { id: 6965, content: '严重', score: 5 }] },
  { id: 697, testId: 18, content: '为一些有关性的想法而很苦恼', type: 3, sortOrder: 84, options: [{ id: 6971, content: '没有', score: 1 }, { id: 6972, content: '很轻', score: 2 }, { id: 6973, content: '中等', score: 3 }, { id: 6974, content: '偏重', score: 4 }, { id: 6975, content: '严重', score: 5 }] },
  { id: 698, testId: 18, content: '您认为应该因为自己的过错而受到惩罚', type: 3, sortOrder: 85, options: [{ id: 6981, content: '没有', score: 1 }, { id: 6982, content: '很轻', score: 2 }, { id: 6983, content: '中等', score: 3 }, { id: 6984, content: '偏重', score: 4 }, { id: 6985, content: '严重', score: 5 }] },
  { id: 699, testId: 18, content: '感到要很快把事情做完', type: 3, sortOrder: 86, options: [{ id: 6991, content: '没有', score: 1 }, { id: 6992, content: '很轻', score: 2 }, { id: 6993, content: '中等', score: 3 }, { id: 6994, content: '偏重', score: 4 }, { id: 6995, content: '严重', score: 5 }] },
  { id: 700, testId: 18, content: '感到自己的身体有严重问题', type: 3, sortOrder: 87, options: [{ id: 7001, content: '没有', score: 1 }, { id: 7002, content: '很轻', score: 2 }, { id: 7003, content: '中等', score: 3 }, { id: 7004, content: '偏重', score: 4 }, { id: 7005, content: '严重', score: 5 }] },
  { id: 701, testId: 18, content: '从未感到和其他人很亲近', type: 3, sortOrder: 88, options: [{ id: 7011, content: '没有', score: 1 }, { id: 7012, content: '很轻', score: 2 }, { id: 7013, content: '中等', score: 3 }, { id: 7014, content: '偏重', score: 4 }, { id: 7015, content: '严重', score: 5 }] },
  { id: 702, testId: 18, content: '感到自己有罪', type: 3, sortOrder: 89, options: [{ id: 7021, content: '没有', score: 1 }, { id: 7022, content: '很轻', score: 2 }, { id: 7023, content: '中等', score: 3 }, { id: 7024, content: '偏重', score: 4 }, { id: 7025, content: '严重', score: 5 }] },
  { id: 703, testId: 18, content: '感到自己的脑子有毛病', type: 3, sortOrder: 90, options: [{ id: 7031, content: '没有', score: 1 }, { id: 7032, content: '很轻', score: 2 }, { id: 7033, content: '中等', score: 3 }, { id: 7034, content: '偏重', score: 4 }, { id: 7035, content: '严重', score: 5 }] },
  { id: 704, testId: 19, content: '你更喜欢的生活方式是？', type: 1, sortOrder: 1, options: [{ id: 7041, content: '安静独处', score: 1 }, { id: 7042, content: '热闹社交', score: 2 }, { id: 7043, content: '平衡兼顾', score: 3 }, { id: 7044, content: '随性而为', score: 4 }] },
  { id: 705, testId: 19, content: '遇到困难时你会？', type: 1, sortOrder: 2, options: [{ id: 7051, content: '积极面对', score: 1 }, { id: 7052, content: '寻求帮助', score: 2 }, { id: 7053, content: '先放一放', score: 3 }, { id: 7054, content: '容易焦虑', score: 4 }] },
  { id: 706, testId: 19, content: '做决定时你更看重？', type: 1, sortOrder: 3, options: [{ id: 7061, content: '逻辑分析', score: 1 }, { id: 7062, content: '感觉判断', score: 2 }, { id: 7063, content: '他人意见', score: 3 }, { id: 7064, content: '直觉决定', score: 4 }] },
  { id: 707, testId: 19, content: '周末你更愿意？', type: 1, sortOrder: 4, options: [{ id: 7071, content: '宅在家里', score: 1 }, { id: 7072, content: '约朋友见面', score: 2 }, { id: 7073, content: '户外活动', score: 3 }, { id: 7074, content: '看剧休息', score: 4 }] },
  { id: 708, testId: 19, content: '你对新事物的态度是？', type: 1, sortOrder: 5, options: [{ id: 7081, content: '充满好奇', score: 1 }, { id: 7082, content: '谨慎观望', score: 2 }, { id: 7083, content: '保持现状', score: 3 }, { id: 7084, content: '看心情而定', score: 4 }] },
  { id: 709, testId: 19, content: '你更看重哪种品质？', type: 1, sortOrder: 6, options: [{ id: 7091, content: '聪明智慧', score: 1 }, { id: 7092, content: '真诚善良', score: 2 }, { id: 7093, content: '勇敢坚强', score: 3 }, { id: 7094, content: '温和友善', score: 4 }] },
  { id: 710, testId: 19, content: '面对压力你会？', type: 1, sortOrder: 7, options: [{ id: 7101, content: '冷静应对', score: 1 }, { id: 7102, content: '找人倾诉', score: 2 }, { id: 7103, content: '自我调节', score: 3 }, { id: 7104, content: '容易情绪化', score: 4 }] },
  { id: 711, testId: 19, content: '你喜欢的颜色风格是？', type: 1, sortOrder: 8, options: [{ id: 7111, content: '鲜艳活泼', score: 1 }, { id: 7112, content: '稳重深色', score: 2 }, { id: 7113, content: '清新淡雅', score: 3 }, { id: 7114, content: '个性奇特', score: 4 }] },
  { id: 712, testId: 19, content: '你更认同哪种说法？', type: 1, sortOrder: 9, options: [{ id: 7121, content: '人生要有目标', score: 1 }, { id: 7122, content: '享受当下最重要', score: 2 }, { id: 7123, content: '随遇而安', score: 3 }, { id: 7124, content: '努力才有收获', score: 4 }] },
  { id: 713, testId: 19, content: '你最想拥有的超能力是？', type: 1, sortOrder: 10, options: [{ id: 7131, content: '读心术', score: 1 }, { id: 7132, content: '隐身术', score: 2 }, { id: 7133, content: '飞行术', score: 3 }, { id: 7134, content: '预知未来', score: 4 }] },
  { id: 714, testId: 20, content: '你更感兴趣的工作领域是？', type: 1, sortOrder: 1, options: [{ id: 7141, content: '创意设计', score: 1 }, { id: 7142, content: '商业管理', score: 2 }, { id: 7143, content: '技术研发', score: 3 }, { id: 7144, content: '公共服务', score: 4 }] },
  { id: 715, testId: 20, content: '在团队中你更愿意？', type: 1, sortOrder: 2, options: [{ id: 7151, content: '领导指挥', score: 1 }, { id: 7152, content: '出谋划策', score: 2 }, { id: 7153, content: '执行任务', score: 3 }, { id: 7154, content: '协调沟通', score: 4 }] },
  { id: 716, testId: 20, content: '工作中你更看重？', type: 1, sortOrder: 3, options: [{ id: 7161, content: '收入高低', score: 1 }, { id: 7162, content: '发展空间', score: 2 }, { id: 7163, content: '工作氛围', score: 3 }, { id: 7164, content: '工作稳定', score: 4 }] },
  { id: 717, testId: 20, content: '你更喜欢的工作环境是？', type: 1, sortOrder: 4, options: [{ id: 7171, content: '自由灵活', score: 1 }, { id: 7172, content: '规范有序', score: 2 }, { id: 7173, content: '充满挑战', score: 3 }, { id: 7174, content: '轻松舒适', score: 4 }] },
  { id: 718, testId: 20, content: '面对工作难题你会？', type: 1, sortOrder: 5, options: [{ id: 7181, content: '独立研究解决', score: 1 }, { id: 7182, content: '找人讨论合作', score: 2 }, { id: 7183, content: '先做其他事', score: 3 }, { id: 7184, content: '请示上级', score: 4 }] },
  { id: 719, testId: 20, content: '你更希望工作中？', type: 1, sortOrder: 6, options: [{ id: 7191, content: '有很多创新机会', score: 1 }, { id: 7192, content: '获得认可和尊重', score: 2 }, { id: 7193, content: '学到新东西', score: 3 }, { id: 7194, content: '和同事关系好', score: 4 }] },
  { id: 720, testId: 20, content: '你对职业规划的态度是？', type: 1, sortOrder: 7, options: [{ id: 7201, content: '目标清晰，按计划进行', score: 1 }, { id: 7202, content: '有大方向，边走边看', score: 2 }, { id: 7203, content: '走一步算一步', score: 3 }, { id: 7204, content: '看机会发展', score: 4 }] },
  { id: 721, testId: 20, content: '你更擅长的工作方式是？', type: 1, sortOrder: 8, options: [{ id: 7211, content: '创意构思', score: 1 }, { id: 7212, content: '数据分析', score: 2 }, { id: 7213, content: '沟通协调', score: 3 }, { id: 7214, content: '操作执行', score: 4 }] },
  { id: 722, testId: 20, content: '工作中你更在意？', type: 1, sortOrder: 9, options: [{ id: 7221, content: '工作结果', score: 1 }, { id: 7222, content: '工作过程', score: 2 }, { id: 7223, content: '和同事关系', score: 3 }, { id: 7224, content: '个人成长', score: 4 }] },
  { id: 723, testId: 20, content: '你对加班的态度是？', type: 1, sortOrder: 10, options: [{ id: 7231, content: '可以接受，为了目标', score: 1 }, { id: 7232, content: '偶尔可以，但不要经常', score: 2 }, { id: 7233, content: '尽量避免，生活工作要平衡', score: 3 }, { id: 7234, content: '完全不能接受', score: 4 }] },
  { id: 724, testId: 20, content: '工作中你更看重什么类型的任务？', type: 1, sortOrder: 11, options: [{ id: 7241, content: '具有挑战性的', score: 1 }, { id: 7242, content: '有意义的', score: 2 }, { id: 7243, content: '能发挥专长的', score: 3 }, { id: 7244, content: '稳妥可靠的', score: 4 }] },
  { id: 725, testId: 20, content: '你更希望未来的工作能带来？', type: 1, sortOrder: 12, options: [{ id: 7251, content: '成就感', score: 1 }, { id: 7252, content: '稳定生活', score: 2 }, { id: 7253, content: '快乐和满足', score: 3 }, { id: 7254, content: '良好社交', score: 4 }] },
  { id: 726, testId: 21, content: '在社交场合你通常是？', type: 1, sortOrder: 1, options: [{ id: 7261, content: '积极活跃', score: 1 }, { id: 7262, content: '倾听观察', score: 2 }, { id: 7263, content: '看心情而定', score: 3 }, { id: 7264, content: '喜欢独处', score: 4 }] },
  { id: 727, testId: 21, content: '朋友遇到困难找你倾诉时，你会？', type: 1, sortOrder: 2, options: [{ id: 7271, content: '给出解决方案', score: 1 }, { id: 7272, content: '倾听陪伴', score: 2 }, { id: 7273, content: '给出建议但让他自己决定', score: 3 }, { id: 7274, content: '一起吐槽', score: 4 }] },
  { id: 728, testId: 21, content: '你更看重朋友的什么品质？', type: 1, sortOrder: 3, options: [{ id: 7281, content: '真诚守信', score: 1 }, { id: 7282, content: '聪明有趣', score: 2 }, { id: 7283, content: '善解人意', score: 3 }, { id: 7284, content: '仗义可靠', score: 4 }] },
  { id: 729, testId: 21, content: '与人相处时你更在意？', type: 1, sortOrder: 4, options: [{ id: 7291, content: '对方感受', score: 1 }, { id: 7292, content: '自己感受', score: 2 }, { id: 7293, content: '平等尊重', score: 3 }, { id: 7294, content: '开心就好', score: 4 }] },
  { id: 730, testId: 21, content: '你更喜欢什么样的社交方式？', type: 1, sortOrder: 5, options: [{ id: 7301, content: '多人聚会', score: 1 }, { id: 7302, content: '小聚聊天', score: 2 }, { id: 7303, content: '一对一深谈', score: 3 }, { id: 7304, content: '网络社交', score: 4 }] },
  { id: 731, testId: 21, content: '发生分歧时你会？', type: 1, sortOrder: 6, options: [{ id: 7311, content: '直接沟通解决', score: 1 }, { id: 7312, content: '找第三方协调', score: 2 }, { id: 7313, content: '先冷静再谈', score: 3 }, { id: 7314, content: '避而不谈', score: 4 }] },
  { id: 732, testId: 21, content: '你更希望身边的人是？', type: 1, sortOrder: 7, options: [{ id: 7321, content: '志同道合', score: 1 }, { id: 7322, content: '性格互补', score: 2 }, { id: 7323, content: '能帮助自己', score: 3 }, { id: 7324, content: '单纯相处舒服', score: 4 }] },
  { id: 733, testId: 21, content: '你对待新朋友的态度是？', type: 1, sortOrder: 8, options: [{ id: 7331, content: '主动热情', score: 1 }, { id: 7332, content: '慢慢了解', score: 2 }, { id: 7333, content: '随缘相处', score: 3 }, { id: 7334, content: '保持距离', score: 4 }] },
  { id: 801, testId: 22, content: '在社交聚会中，你通常会主动与陌生人交谈', type: 1, sortOrder: 1, dimension: 'EI-Initiating', options: [{ id: 8011, content: '非常同意', score: 'E' }, { id: 8012, content: '比较同意', score: 'E' }, { id: 8013, content: '比较不同意', score: 'I' }, { id: 8014, content: '非常不同意', score: 'I' }] },
  { id: 802, testId: 22, content: '你喜欢成为社交场合的焦点', type: 1, sortOrder: 2, dimension: 'EI-Initiating', options: [{ id: 8021, content: '非常同意', score: 'E' }, { id: 8022, content: '比较同意', score: 'E' }, { id: 8023, content: '比较不同意', score: 'I' }, { id: 8024, content: '非常不同意', score: 'I' }] },
  { id: 803, testId: 22, content: '你很容易主动结交新朋友', type: 1, sortOrder: 3, dimension: 'EI-Initiating', options: [{ id: 8031, content: '非常同意', score: 'E' }, { id: 8032, content: '比较同意', score: 'E' }, { id: 8033, content: '比较不同意', score: 'I' }, { id: 8034, content: '非常不同意', score: 'I' }] },
  { id: 804, testId: 22, content: '在社交活动中，你通常积极参与对话', type: 1, sortOrder: 4, dimension: 'EI-Initiating', options: [{ id: 8041, content: '非常同意', score: 'E' }, { id: 8042, content: '比较同意', score: 'E' }, { id: 8043, content: '比较不同意', score: 'I' }, { id: 8044, content: '非常不同意', score: 'I' }] },
  { id: 805, testId: 22, content: '你喜欢在社交场合主动介绍自己', type: 1, sortOrder: 5, dimension: 'EI-Initiating', options: [{ id: 8051, content: '非常同意', score: 'E' }, { id: 8052, content: '比较同意', score: 'E' }, { id: 8053, content: '比较不同意', score: 'I' }, { id: 8054, content: '非常不同意', score: 'I' }] },
  { id: 806, testId: 22, content: '你喜欢通过与人交谈来思考问题', type: 1, sortOrder: 6, dimension: 'EI-Expressive', options: [{ id: 8061, content: '非常同意', score: 'E' }, { id: 8062, content: '比较同意', score: 'E' }, { id: 8063, content: '比较不同意', score: 'I' }, { id: 8064, content: '非常不同意', score: 'I' }] },
  { id: 807, testId: 22, content: '你很容易表达自己的想法和感受', type: 1, sortOrder: 7, dimension: 'EI-Expressive', options: [{ id: 8071, content: '非常同意', score: 'E' }, { id: 8072, content: '比较同意', score: 'E' }, { id: 8073, content: '比较不同意', score: 'I' }, { id: 8074, content: '非常不同意', score: 'I' }] },
  { id: 808, testId: 22, content: '你说话时通常很有感染力', type: 1, sortOrder: 8, dimension: 'EI-Expressive', options: [{ id: 8081, content: '非常同意', score: 'E' }, { id: 8082, content: '比较同意', score: 'E' }, { id: 8083, content: '比较不同意', score: 'I' }, { id: 8084, content: '非常不同意', score: 'I' }] },
  { id: 809, testId: 22, content: '你喜欢分享自己的经历和故事', type: 1, sortOrder: 9, dimension: 'EI-Expressive', options: [{ id: 8091, content: '非常同意', score: 'E' }, { id: 8092, content: '比较同意', score: 'E' }, { id: 8093, content: '比较不同意', score: 'I' }, { id: 8094, content: '非常不同意', score: 'I' }] },
  { id: 810, testId: 22, content: '你觉得与人交流是一件轻松的事', type: 1, sortOrder: 10, dimension: 'EI-Expressive', options: [{ id: 8101, content: '非常同意', score: 'E' }, { id: 8102, content: '比较同意', score: 'E' }, { id: 8103, content: '比较不同意', score: 'I' }, { id: 8104, content: '非常不同意', score: 'I' }] },
  { id: 811, testId: 22, content: '你喜欢参加热闹的社交活动', type: 1, sortOrder: 11, dimension: 'EI-Gregarious', options: [{ id: 8111, content: '非常同意', score: 'E' }, { id: 8112, content: '比较同意', score: 'E' }, { id: 8113, content: '比较不同意', score: 'I' }, { id: 8114, content: '非常不同意', score: 'I' }] },
  { id: 812, testId: 22, content: '你喜欢和很多人一起工作和娱乐', type: 1, sortOrder: 12, dimension: 'EI-Gregarious', options: [{ id: 8121, content: '非常同意', score: 'E' }, { id: 8122, content: '比较同意', score: 'E' }, { id: 8123, content: '比较不同意', score: 'I' }, { id: 8124, content: '非常不同意', score: 'I' }] },
  { id: 813, testId: 22, content: '你觉得人越多越有趣', type: 1, sortOrder: 13, dimension: 'EI-Gregarious', options: [{ id: 8131, content: '非常同意', score: 'E' }, { id: 8132, content: '比较同意', score: 'E' }, { id: 8133, content: '比较不同意', score: 'I' }, { id: 8134, content: '非常不同意', score: 'I' }] },
  { id: 814, testId: 22, content: '你喜欢参加大型聚会和活动', type: 1, sortOrder: 14, dimension: 'EI-Gregarious', options: [{ id: 8141, content: '非常同意', score: 'E' }, { id: 8142, content: '比较同意', score: 'E' }, { id: 8143, content: '比较不同意', score: 'I' }, { id: 8144, content: '非常不同意', score: 'I' }] },
  { id: 815, testId: 22, content: '你觉得与一群人在一起比独处更有活力', type: 1, sortOrder: 15, dimension: 'EI-Gregarious', options: [{ id: 8151, content: '非常同意', score: 'E' }, { id: 8152, content: '比较同意', score: 'E' }, { id: 8153, content: '比较不同意', score: 'I' }, { id: 8154, content: '非常不同意', score: 'I' }] },
  { id: 816, testId: 22, content: '你喜欢在热闹的环境中工作', type: 1, sortOrder: 16, dimension: 'EI-Active', options: [{ id: 8161, content: '非常同意', score: 'E' }, { id: 8162, content: '比较同意', score: 'E' }, { id: 8163, content: '比较不同意', score: 'I' }, { id: 8164, content: '非常不同意', score: 'I' }] },
  { id: 817, testId: 22, content: '你喜欢快节奏、充满活力的生活', type: 1, sortOrder: 17, dimension: 'EI-Active', options: [{ id: 8171, content: '非常同意', score: 'E' }, { id: 8172, content: '比较同意', score: 'E' }, { id: 8173, content: '比较不同意', score: 'I' }, { id: 8174, content: '非常不同意', score: 'I' }] },
  { id: 818, testId: 22, content: '你总是主动寻找新的活动和体验', type: 1, sortOrder: 18, dimension: 'EI-Active', options: [{ id: 8181, content: '非常同意', score: 'E' }, { id: 8182, content: '比较同意', score: 'E' }, { id: 8183, content: '比较不同意', score: 'I' }, { id: 8184, content: '非常不同意', score: 'I' }] },
  { id: 819, testId: 22, content: '你喜欢参与各种活动而不只是旁观', type: 1, sortOrder: 19, dimension: 'EI-Active', options: [{ id: 8191, content: '非常同意', score: 'E' }, { id: 8192, content: '比较同意', score: 'E' }, { id: 8193, content: '比较不同意', score: 'I' }, { id: 8194, content: '非常不同意', score: 'I' }] },
  { id: 820, testId: 22, content: '你觉得忙碌的生活让你感到充实', type: 1, sortOrder: 20, dimension: 'EI-Active', options: [{ id: 8201, content: '非常同意', score: 'E' }, { id: 8202, content: '比较同意', score: 'E' }, { id: 8203, content: '比较不同意', score: 'I' }, { id: 8204, content: '非常不同意', score: 'I' }] },
  { id: 821, testId: 22, content: '你更注重现实而非可能性', type: 1, sortOrder: 21, dimension: 'SN-Concrete', options: [{ id: 8211, content: '非常同意', score: 'S' }, { id: 8212, content: '比较同意', score: 'S' }, { id: 8213, content: '比较不同意', score: 'N' }, { id: 8214, content: '非常不同意', score: 'N' }] },
  { id: 822, testId: 22, content: '你喜欢处理具体的事实和细节', type: 1, sortOrder: 22, dimension: 'SN-Concrete', options: [{ id: 8221, content: '非常同意', score: 'S' }, { id: 8222, content: '比较同意', score: 'S' }, { id: 8223, content: '比较不同意', score: 'N' }, { id: 8224, content: '非常不同意', score: 'N' }] },
  { id: 823, testId: 22, content: '你更相信亲身经历而非理论', type: 1, sortOrder: 23, dimension: 'SN-Concrete', options: [{ id: 8231, content: '非常同意', score: 'S' }, { id: 8232, content: '比较同意', score: 'S' }, { id: 8233, content: '比较不同意', score: 'N' }, { id: 8234, content: '非常不同意', score: 'N' }] },
  { id: 824, testId: 22, content: '你喜欢有明确步骤和方法的任务', type: 1, sortOrder: 24, dimension: 'SN-Concrete', options: [{ id: 8241, content: '非常同意', score: 'S' }, { id: 8242, content: '比较同意', score: 'S' }, { id: 8243, content: '比较不同意', score: 'N' }, { id: 8244, content: '非常不同意', score: 'N' }] },
  { id: 825, testId: 22, content: '你更关注眼前的实际问题', type: 1, sortOrder: 25, dimension: 'SN-Concrete', options: [{ id: 8251, content: '非常同意', score: 'S' }, { id: 8252, content: '比较同意', score: 'S' }, { id: 8253, content: '比较不同意', score: 'N' }, { id: 8254, content: '非常不同意', score: 'N' }] },
  { id: 826, testId: 22, content: '你喜欢按部就班地工作', type: 1, sortOrder: 26, dimension: 'SN-Practical', options: [{ id: 8261, content: '非常同意', score: 'S' }, { id: 8262, content: '比较同意', score: 'S' }, { id: 8263, content: '比较不同意', score: 'N' }, { id: 8264, content: '非常不同意', score: 'N' }] },
  { id: 827, testId: 22, content: '你更看重实用性而非创新性', type: 1, sortOrder: 27, dimension: 'SN-Practical', options: [{ id: 8271, content: '非常同意', score: 'S' }, { id: 8272, content: '比较同意', score: 'S' }, { id: 8273, content: '比较不同意', score: 'N' }, { id: 8274, content: '非常不同意', score: 'N' }] },
  { id: 828, testId: 22, content: '你喜欢使用已经验证有效的方法', type: 1, sortOrder: 28, dimension: 'SN-Practical', options: [{ id: 8281, content: '非常同意', score: 'S' }, { id: 8282, content: '比较同意', score: 'S' }, { id: 8283, content: '比较不同意', score: 'N' }, { id: 8284, content: '非常不同意', score: 'N' }] },
  { id: 829, testId: 22, content: '你更倾向于做现成的事而非尝试新事物', type: 1, sortOrder: 29, dimension: 'SN-Practical', options: [{ id: 8291, content: '非常同意', score: 'S' }, { id: 8292, content: '比较同意', score: 'S' }, { id: 8293, content: '比较不同意', score: 'N' }, { id: 8294, content: '非常不同意', score: 'N' }] },
  { id: 830, testId: 22, content: '你觉得稳定比变化更重要', type: 1, sortOrder: 30, dimension: 'SN-Practical', options: [{ id: 8301, content: '非常同意', score: 'S' }, { id: 8302, content: '比较同意', score: 'S' }, { id: 8303, content: '比较不同意', score: 'N' }, { id: 8304, content: '非常不同意', score: 'N' }] },
  { id: 831, testId: 22, content: '你更关注事物的细节而非整体', type: 1, sortOrder: 31, dimension: 'SN-Experiential', options: [{ id: 8311, content: '非常同意', score: 'S' }, { id: 8312, content: '比较同意', score: 'S' }, { id: 8313, content: '比较不同意', score: 'N' }, { id: 8314, content: '非常不同意', score: 'N' }] },
  { id: 832, testId: 22, content: '你喜欢亲身体验来了解事物', type: 1, sortOrder: 32, dimension: 'SN-Experiential', options: [{ id: 8321, content: '非常同意', score: 'S' }, { id: 8322, content: '比较同意', score: 'S' }, { id: 8323, content: '比较不同意', score: 'N' }, { id: 8324, content: '非常不同意', score: 'N' }] },
  { id: 833, testId: 22, content: '你对周围环境的变化很敏感', type: 1, sortOrder: 33, dimension: 'SN-Experiential', options: [{ id: 8331, content: '非常同意', score: 'S' }, { id: 8332, content: '比较同意', score: 'S' }, { id: 8333, content: '比较不同意', score: 'N' }, { id: 8334, content: '非常不同意', score: 'N' }] },
  { id: 834, testId: 22, content: '你喜欢观察事物的实际运作方式', type: 1, sortOrder: 34, dimension: 'SN-Experiential', options: [{ id: 8341, content: '非常同意', score: 'S' }, { id: 8342, content: '比较同意', score: 'S' }, { id: 8343, content: '比较不同意', score: 'N' }, { id: 8344, content: '非常不同意', score: 'N' }] },
  { id: 835, testId: 22, content: '你更相信自己看到和摸到的东西', type: 1, sortOrder: 35, dimension: 'SN-Experiential', options: [{ id: 8351, content: '非常同意', score: 'S' }, { id: 8352, content: '比较同意', score: 'S' }, { id: 8353, content: '比较不同意', score: 'N' }, { id: 8354, content: '非常不同意', score: 'N' }] },
  { id: 836, testId: 22, content: '你更享受当下而非想象未来', type: 1, sortOrder: 36, dimension: 'SN-Traditional', options: [{ id: 8361, content: '非常同意', score: 'S' }, { id: 8362, content: '比较同意', score: 'S' }, { id: 8363, content: '比较不同意', score: 'N' }, { id: 8364, content: '非常不同意', score: 'N' }] },
  { id: 837, testId: 22, content: '你尊重传统和习惯', type: 1, sortOrder: 37, dimension: 'SN-Traditional', options: [{ id: 8371, content: '非常同意', score: 'S' }, { id: 8372, content: '比较同意', score: 'S' }, { id: 8373, content: '比较不同意', score: 'N' }, { id: 8374, content: '非常不同意', score: 'N' }] },
  { id: 838, testId: 22, content: '你喜欢保持事情原来的样子', type: 1, sortOrder: 38, dimension: 'SN-Traditional', options: [{ id: 8381, content: '非常同意', score: 'S' }, { id: 8382, content: '比较同意', score: 'S' }, { id: 8383, content: '比较不同意', score: 'N' }, { id: 8384, content: '非常不同意', score: 'N' }] },
  { id: 839, testId: 22, content: '你更看重过去的经验而非未来的可能', type: 1, sortOrder: 39, dimension: 'SN-Traditional', options: [{ id: 8391, content: '非常同意', score: 'S' }, { id: 8392, content: '比较同意', score: 'S' }, { id: 8393, content: '比较不同意', score: 'N' }, { id: 8394, content: '非常不同意', score: 'N' }] },
  { id: 840, testId: 22, content: '你喜欢有固定的日常规律', type: 1, sortOrder: 40, dimension: 'SN-Traditional', options: [{ id: 8401, content: '非常同意', score: 'S' }, { id: 8402, content: '比较同意', score: 'S' }, { id: 8403, content: '比较不同意', score: 'N' }, { id: 8404, content: '非常不同意', score: 'N' }] },
  { id: 841, testId: 22, content: '你更看重逻辑分析而非人情世故', type: 1, sortOrder: 41, dimension: 'TF-Analytical', options: [{ id: 8411, content: '非常同意', score: 'T' }, { id: 8412, content: '比较同意', score: 'T' }, { id: 8413, content: '比较不同意', score: 'F' }, { id: 8414, content: '非常不同意', score: 'F' }] },
  { id: 842, testId: 22, content: '你做决定时更依赖事实和数据', type: 1, sortOrder: 42, dimension: 'TF-Analytical', options: [{ id: 8421, content: '非常同意', score: 'T' }, { id: 8422, content: '比较同意', score: 'T' }, { id: 8423, content: '比较不同意', score: 'F' }, { id: 8424, content: '非常不同意', score: 'F' }] },
  { id: 843, testId: 22, content: '你喜欢分析问题的因果关系', type: 1, sortOrder: 43, dimension: 'TF-Analytical', options: [{ id: 8431, content: '非常同意', score: 'T' }, { id: 8432, content: '比较同意', score: 'T' }, { id: 8433, content: '比较不同意', score: 'F' }, { id: 8434, content: '非常不同意', score: 'F' }] },
  { id: 844, testId: 22, content: '你认为理性比感性更重要', type: 1, sortOrder: 44, dimension: 'TF-Analytical', options: [{ id: 8441, content: '非常同意', score: 'T' }, { id: 8442, content: '比较同意', score: 'T' }, { id: 8443, content: '比较不同意', score: 'F' }, { id: 8444, content: '非常不同意', score: 'F' }] },
  { id: 845, testId: 22, content: '你容易发现事物中的逻辑漏洞', type: 1, sortOrder: 45, dimension: 'TF-Analytical', options: [{ id: 8451, content: '非常同意', score: 'T' }, { id: 8452, content: '比较同意', score: 'T' }, { id: 8453, content: '比较不同意', score: 'F' }, { id: 8454, content: '非常不同意', score: 'F' }] },
  { id: 846, testId: 22, content: '你认为公平比仁慈更重要', type: 1, sortOrder: 46, dimension: 'TF-Objective', options: [{ id: 8461, content: '非常同意', score: 'T' }, { id: 8462, content: '比较同意', score: 'T' }, { id: 8463, content: '比较不同意', score: 'F' }, { id: 8464, content: '非常不同意', score: 'F' }] },
  { id: 847, testId: 22, content: '你能客观地批评他人而不感到内疚', type: 1, sortOrder: 47, dimension: 'TF-Objective', options: [{ id: 8471, content: '非常同意', score: 'T' }, { id: 8472, content: '比较同意', score: 'T' }, { id: 8473, content: '比较不同意', score: 'F' }, { id: 8474, content: '非常不同意', score: 'F' }] },
  { id: 848, testId: 22, content: '你认为规则应该一视同仁', type: 1, sortOrder: 48, dimension: 'TF-Objective', options: [{ id: 8481, content: '非常同意', score: 'T' }, { id: 8482, content: '比较同意', score: 'T' }, { id: 8483, content: '比较不同意', score: 'F' }, { id: 8484, content: '非常不同意', score: 'F' }] },
  { id: 849, testId: 22, content: '你觉得做决定时不应该受个人感情影响', type: 1, sortOrder: 49, dimension: 'TF-Objective', options: [{ id: 8491, content: '非常同意', score: 'T' }, { id: 8492, content: '比较同意', score: 'T' }, { id: 8493, content: '比较不同意', score: 'F' }, { id: 8494, content: '非常不同意', score: 'F' }] },
  { id: 850, testId: 22, content: '你更看重真相而非和谐', type: 1, sortOrder: 50, dimension: 'TF-Objective', options: [{ id: 8501, content: '非常同意', score: 'T' }, { id: 8502, content: '比较同意', score: 'T' }, { id: 8503, content: '比较不同意', score: 'F' }, { id: 8504, content: '非常不同意', score: 'F' }] },
  { id: 851, testId: 22, content: '你不太容易表现出自己的情感', type: 1, sortOrder: 51, dimension: 'TF-Reserved', options: [{ id: 8511, content: '非常同意', score: 'T' }, { id: 8512, content: '比较同意', score: 'T' }, { id: 8513, content: '比较不同意', score: 'F' }, { id: 8514, content: '非常不同意', score: 'F' }] },
  { id: 852, testId: 22, content: '你更喜欢自己处理问题而非求助他人', type: 1, sortOrder: 52, dimension: 'TF-Reserved', options: [{ id: 8521, content: '非常同意', score: 'T' }, { id: 8522, content: '比较同意', score: 'T' }, { id: 8523, content: '比较不同意', score: 'F' }, { id: 8524, content: '非常不同意', score: 'F' }] },
  { id: 853, testId: 22, content: '你觉得表达情感会让你感到不自在', type: 1, sortOrder: 53, dimension: 'TF-Reserved', options: [{ id: 8531, content: '非常同意', score: 'T' }, { id: 8532, content: '比较同意', score: 'T' }, { id: 8533, content: '比较不同意', score: 'F' }, { id: 8534, content: '非常不同意', score: 'F' }] },
  { id: 854, testId: 22, content: '你更倾向于保持客观中立', type: 1, sortOrder: 54, dimension: 'TF-Reserved', options: [{ id: 8541, content: '非常同意', score: 'T' }, { id: 8542, content: '比较同意', score: 'T' }, { id: 8543, content: '比较不同意', score: 'F' }, { id: 8544, content: '非常不同意', score: 'F' }] },
  { id: 855, testId: 22, content: '你不太容易被煽情的故事感动', type: 1, sortOrder: 55, dimension: 'TF-Reserved', options: [{ id: 8551, content: '非常同意', score: 'T' }, { id: 8552, content: '比较同意', score: 'T' }, { id: 8553, content: '比较不同意', score: 'F' }, { id: 8554, content: '非常不同意', score: 'F' }] },
  { id: 856, testId: 22, content: '你喜欢用逻辑来解决争论', type: 1, sortOrder: 56, dimension: 'TF-Critical', options: [{ id: 8561, content: '非常同意', score: 'T' }, { id: 8562, content: '比较同意', score: 'T' }, { id: 8563, content: '比较不同意', score: 'F' }, { id: 8564, content: '非常不同意', score: 'F' }] },
  { id: 857, testId: 22, content: '你能直接指出问题而不绕弯子', type: 1, sortOrder: 57, dimension: 'TF-Critical', options: [{ id: 8571, content: '非常同意', score: 'T' }, { id: 8572, content: '比较同意', score: 'T' }, { id: 8573, content: '比较不同意', score: 'F' }, { id: 8574, content: '非常不同意', score: 'F' }] },
  { id: 858, testId: 22, content: '你更喜欢直接的沟通方式', type: 1, sortOrder: 58, dimension: 'TF-Critical', options: [{ id: 8581, content: '非常同意', score: 'T' }, { id: 8582, content: '比较同意', score: 'T' }, { id: 8583, content: '比较不同意', score: 'F' }, { id: 8584, content: '非常不同意', score: 'F' }] },
  { id: 859, testId: 22, content: '你认为建设性的批评是必要的', type: 1, sortOrder: 59, dimension: 'TF-Critical', options: [{ id: 8591, content: '非常同意', score: 'T' }, { id: 8592, content: '比较同意', score: 'T' }, { id: 8593, content: '比较不同意', score: 'F' }, { id: 8594, content: '非常不同意', score: 'F' }] },
  { id: 860, testId: 22, content: '你觉得指出错误是对事不对人', type: 1, sortOrder: 60, dimension: 'TF-Critical', options: [{ id: 8601, content: '非常同意', score: 'T' }, { id: 8602, content: '比较同意', score: 'T' }, { id: 8603, content: '比较不同意', score: 'F' }, { id: 8604, content: '非常不同意', score: 'F' }] },
  { id: 861, testId: 22, content: '你很容易理解他人的感受', type: 1, sortOrder: 61, dimension: 'TF-Empathetic', options: [{ id: 8611, content: '非常同意', score: 'F' }, { id: 8612, content: '比较同意', score: 'F' }, { id: 8613, content: '比较不同意', score: 'T' }, { id: 8614, content: '非常不同意', score: 'T' }] },
  { id: 862, testId: 22, content: '你总是考虑自己的行为对他人的影响', type: 1, sortOrder: 62, dimension: 'TF-Empathetic', options: [{ id: 8621, content: '非常同意', score: 'F' }, { id: 8622, content: '比较同意', score: 'F' }, { id: 8623, content: '比较不同意', score: 'T' }, { id: 8624, content: '非常不同意', score: 'T' }] },
  { id: 863, testId: 22, content: '你很容易与他人产生共鸣', type: 1, sortOrder: 63, dimension: 'TF-Empathetic', options: [{ id: 8631, content: '非常同意', score: 'F' }, { id: 8632, content: '比较同意', score: 'F' }, { id: 8633, content: '比较不同意', score: 'T' }, { id: 8634, content: '非常不同意', score: 'T' }] },
  { id: 864, testId: 22, content: '你能敏锐地察觉他人的情绪变化', type: 1, sortOrder: 64, dimension: 'TF-Empathetic', options: [{ id: 8641, content: '非常同意', score: 'F' }, { id: 8642, content: '比较同意', score: 'F' }, { id: 8643, content: '比较不同意', score: 'T' }, { id: 8644, content: '非常不同意', score: 'T' }] },
  { id: 865, testId: 22, content: '你经常关心他人的感受和需求', type: 1, sortOrder: 65, dimension: 'TF-Empathetic', options: [{ id: 8651, content: '非常同意', score: 'F' }, { id: 8652, content: '比较同意', score: 'F' }, { id: 8653, content: '比较不同意', score: 'T' }, { id: 8654, content: '非常不同意', score: 'T' }] },
  { id: 866, testId: 22, content: '你重视和谐的人际关系', type: 1, sortOrder: 66, dimension: 'TF-Compassionate', options: [{ id: 8661, content: '非常同意', score: 'F' }, { id: 8662, content: '比较同意', score: 'F' }, { id: 8663, content: '比较不同意', score: 'T' }, { id: 8664, content: '非常不同意', score: 'T' }] },
  { id: 867, testId: 22, content: '你总是尽量避免伤害他人的感情', type: 1, sortOrder: 67, dimension: 'TF-Compassionate', options: [{ id: 8671, content: '非常同意', score: 'F' }, { id: 8672, content: '比较同意', score: 'F' }, { id: 8673, content: '比较不同意', score: 'T' }, { id: 8674, content: '非常不同意', score: 'T' }] },
  { id: 868, testId: 22, content: '你更容易注意到他人需要帮助', type: 1, sortOrder: 68, dimension: 'TF-Compassionate', options: [{ id: 8681, content: '非常同意', score: 'F' }, { id: 8682, content: '比较同意', score: 'F' }, { id: 8683, content: '比较不同意', score: 'T' }, { id: 8684, content: '非常不同意', score: 'T' }] },
  { id: 869, testId: 22, content: '你觉得让他人快乐是一件重要的事', type: 1, sortOrder: 69, dimension: 'TF-Compassionate', options: [{ id: 8691, content: '非常同意', score: 'F' }, { id: 8692, content: '比较同意', score: 'F' }, { id: 8693, content: '比较不同意', score: 'T' }, { id: 8694, content: '非常不同意', score: 'T' }] },
  { id: 870, testId: 22, content: '你很容易对他人的不幸感到同情', type: 1, sortOrder: 70, dimension: 'TF-Compassionate', options: [{ id: 8701, content: '非常同意', score: 'F' }, { id: 8702, content: '比较同意', score: 'F' }, { id: 8703, content: '比较不同意', score: 'T' }, { id: 8704, content: '非常不同意', score: 'T' }] },
  { id: 871, testId: 22, content: '你喜欢自然地表达自己的情感', type: 1, sortOrder: 71, dimension: 'TF-Warm', options: [{ id: 8711, content: '非常同意', score: 'F' }, { id: 8712, content: '比较同意', score: 'F' }, { id: 8713, content: '比较不同意', score: 'T' }, { id: 8714, content: '非常不同意', score: 'T' }] },
  { id: 872, testId: 22, content: '你很容易与他人建立温暖的关系', type: 1, sortOrder: 72, dimension: 'TF-Warm', options: [{ id: 8721, content: '非常同意', score: 'F' }, { id: 8722, content: '比较同意', score: 'F' }, { id: 8723, content: '比较不同意', score: 'T' }, { id: 8724, content: '非常不同意', score: 'T' }] },
  { id: 873, testId: 22, content: '你喜欢表达对他人的关心和喜爱', type: 1, sortOrder: 73, dimension: 'TF-Warm', options: [{ id: 8731, content: '非常同意', score: 'F' }, { id: 8732, content: '比较同意', score: 'F' }, { id: 8733, content: '比较不同意', score: 'T' }, { id: 8734, content: '非常不同意', score: 'T' }] },
  { id: 874, testId: 22, content: '你觉得人与人之间的情感连接很重要', type: 1, sortOrder: 74, dimension: 'TF-Warm', options: [{ id: 8741, content: '非常同意', score: 'F' }, { id: 8742, content: '比较同意', score: 'F' }, { id: 8743, content: '比较不同意', score: 'T' }, { id: 8744, content: '非常不同意', score: 'T' }] },
  { id: 875, testId: 22, content: '你很容易对他人产生好感', type: 1, sortOrder: 75, dimension: 'TF-Warm', options: [{ id: 8751, content: '非常同意', score: 'F' }, { id: 8752, content: '比较同意', score: 'F' }, { id: 8753, content: '比较不同意', score: 'T' }, { id: 8754, content: '非常不同意', score: 'T' }] },
  { id: 876, testId: 22, content: '你喜欢提前规划好事情', type: 1, sortOrder: 76, dimension: 'JP-Planful', options: [{ id: 8761, content: '非常同意', score: 'J' }, { id: 8762, content: '比较同意', score: 'J' }, { id: 8763, content: '比较不同意', score: 'P' }, { id: 8764, content: '非常不同意', score: 'P' }] },
  { id: 877, testId: 22, content: '你喜欢有明确的时间表', type: 1, sortOrder: 77, dimension: 'JP-Planful', options: [{ id: 8771, content: '非常同意', score: 'J' }, { id: 8772, content: '比较同意', score: 'J' }, { id: 8773, content: '比较不同意', score: 'P' }, { id: 8774, content: '非常不同意', score: 'P' }] },
  { id: 878, testId: 22, content: '你总是提前做好准备', type: 1, sortOrder: 78, dimension: 'JP-Planful', options: [{ id: 8781, content: '非常同意', score: 'J' }, { id: 8782, content: '比较同意', score: 'J' }, { id: 8783, content: '比较不同意', score: 'P' }, { id: 8784, content: '非常不同意', score: 'P' }] },
  { id: 879, testId: 22, content: '你喜欢把事情安排得井井有条', type: 1, sortOrder: 79, dimension: 'JP-Planful', options: [{ id: 8791, content: '非常同意', score: 'J' }, { id: 8792, content: '比较同意', score: 'J' }, { id: 8793, content: '比较不同意', score: 'P' }, { id: 8794, content: '非常不同意', score: 'P' }] },
  { id: 880, testId: 22, content: '你觉得没有计划会让你感到不安', type: 1, sortOrder: 80, dimension: 'JP-Planful', options: [{ id: 8801, content: '非常同意', score: 'J' }, { id: 8802, content: '比较同意', score: 'J' }, { id: 8803, content: '比较不同意', score: 'P' }, { id: 8804, content: '非常不同意', score: 'P' }] },
  { id: 881, testId: 22, content: '你喜欢尽快做出决定', type: 1, sortOrder: 81, dimension: 'JP-Decisive', options: [{ id: 8811, content: '非常同意', score: 'J' }, { id: 8812, content: '比较同意', score: 'J' }, { id: 8813, content: '比较不同意', score: 'P' }, { id: 8814, content: '非常不同意', score: 'P' }] },
  { id: 882, testId: 22, content: '你不喜欢事情悬而未决', type: 1, sortOrder: 82, dimension: 'JP-Decisive', options: [{ id: 8821, content: '非常同意', score: 'J' }, { id: 8822, content: '比较同意', score: 'J' }, { id: 8823, content: '比较不同意', score: 'P' }, { id: 8824, content: '非常不同意', score: 'P' }] },
  { id: 883, testId: 22, content: '你觉得做决定比保持开放更重要', type: 1, sortOrder: 83, dimension: 'JP-Decisive', options: [{ id: 8831, content: '非常同意', score: 'J' }, { id: 8832, content: '比较同意', score: 'J' }, { id: 8833, content: '比较不同意', score: 'P' }, { id: 8834, content: '非常不同意', score: 'P' }] },
  { id: 884, testId: 22, content: '你总是尽快完成任务', type: 1, sortOrder: 84, dimension: 'JP-Decisive', options: [{ id: 8841, content: '非常同意', score: 'J' }, { id: 8842, content: '比较同意', score: 'J' }, { id: 8843, content: '比较不同意', score: 'P' }, { id: 8844, content: '非常不同意', score: 'P' }] },
  { id: 885, testId: 22, content: '你喜欢把事情确定下来', type: 1, sortOrder: 85, dimension: 'JP-Decisive', options: [{ id: 8851, content: '非常同意', score: 'J' }, { id: 8852, content: '比较同意', score: 'J' }, { id: 8853, content: '比较不同意', score: 'P' }, { id: 8854, content: '非常不同意', score: 'P' }] },
  { id: 886, testId: 22, content: '你喜欢有秩序的环境', type: 1, sortOrder: 86, dimension: 'JP-Organized', options: [{ id: 8861, content: '非常同意', score: 'J' }, { id: 8862, content: '比较同意', score: 'J' }, { id: 8863, content: '比较不同意', score: 'P' }, { id: 8864, content: '非常不同意', score: 'P' }] },
  { id: 887, testId: 22, content: '你总是保持整洁有条理', type: 1, sortOrder: 87, dimension: 'JP-Organized', options: [{ id: 8871, content: '非常同意', score: 'J' }, { id: 8872, content: '比较同意', score: 'J' }, { id: 8873, content: '比较不同意', score: 'P' }, { id: 8874, content: '非常不同意', score: 'P' }] },
  { id: 888, testId: 22, content: '你喜欢把东西放在固定的位置', type: 1, sortOrder: 88, dimension: 'JP-Organized', options: [{ id: 8881, content: '非常同意', score: 'J' }, { id: 8882, content: '比较同意', score: 'J' }, { id: 8883, content: '比较不同意', score: 'P' }, { id: 8884, content: '非常不同意', score: 'P' }] },
  { id: 889, testId: 22, content: '你觉得有组织的工作方式更高效', type: 1, sortOrder: 89, dimension: 'JP-Organized', options: [{ id: 8891, content: '非常同意', score: 'J' }, { id: 8892, content: '比较同意', score: 'J' }, { id: 8893, content: '比较不同意', score: 'P' }, { id: 8894, content: '非常不同意', score: 'P' }] },
  { id: 890, testId: 22, content: '你喜欢列清单和待办事项', type: 1, sortOrder: 90, dimension: 'JP-Organized', options: [{ id: 8901, content: '非常同意', score: 'J' }, { id: 8902, content: '比较同意', score: 'J' }, { id: 8903, content: '比较不同意', score: 'P' }, { id: 8904, content: '非常不同意', score: 'P' }] },
  { id: 891, testId: 22, content: '你总是准时完成任务', type: 1, sortOrder: 91, dimension: 'JP-Early', options: [{ id: 8911, content: '非常同意', score: 'J' }, { id: 8912, content: '比较同意', score: 'J' }, { id: 8913, content: '比较不同意', score: 'P' }, { id: 8914, content: '非常不同意', score: 'P' }] },
  { id: 892, testId: 22, content: '你喜欢提前完成工作', type: 1, sortOrder: 92, dimension: 'JP-Early', options: [{ id: 8921, content: '非常同意', score: 'J' }, { id: 8922, content: '比较同意', score: 'J' }, { id: 8923, content: '比较不同意', score: 'P' }, { id: 8924, content: '非常不同意', score: 'P' }] },
  { id: 893, testId: 22, content: '你不喜欢赶最后期限', type: 1, sortOrder: 93, dimension: 'JP-Early', options: [{ id: 8931, content: '非常同意', score: 'J' }, { id: 8932, content: '比较同意', score: 'J' }, { id: 8933, content: '比较不同意', score: 'P' }, { id: 8934, content: '非常不同意', score: 'P' }] },
  { id: 894, testId: 22, content: '你觉得提前完成让你更安心', type: 1, sortOrder: 94, dimension: 'JP-Early', options: [{ id: 8941, content: '非常同意', score: 'J' }, { id: 8942, content: '比较同意', score: 'J' }, { id: 8943, content: '比较不同意', score: 'P' }, { id: 8944, content: '非常不同意', score: 'P' }] },
  { id: 895, testId: 22, content: '你总是提前到达约会地点', type: 1, sortOrder: 95, dimension: 'JP-Early', options: [{ id: 8951, content: '非常同意', score: 'J' }, { id: 8952, content: '比较同意', score: 'J' }, { id: 8953, content: '比较不同意', score: 'P' }, { id: 8954, content: '非常不同意', score: 'P' }] },
  { id: 896, testId: 22, content: '你喜欢有条理的生活方式', type: 1, sortOrder: 96, dimension: 'JP-Systematic', options: [{ id: 8961, content: '非常同意', score: 'J' }, { id: 8962, content: '比较同意', score: 'J' }, { id: 8963, content: '比较不同意', score: 'P' }, { id: 8964, content: '非常不同意', score: 'P' }] },
  { id: 897, testId: 22, content: '你喜欢按固定的方式做事', type: 1, sortOrder: 97, dimension: 'JP-Systematic', options: [{ id: 8971, content: '非常同意', score: 'J' }, { id: 8972, content: '比较同意', score: 'J' }, { id: 8973, content: '比较不同意', score: 'P' }, { id: 8974, content: '非常不同意', score: 'P' }] },
  { id: 898, testId: 22, content: '你觉得系统的方法比随性更有效', type: 1, sortOrder: 98, dimension: 'JP-Systematic', options: [{ id: 8981, content: '非常同意', score: 'J' }, { id: 8982, content: '比较同意', score: 'J' }, { id: 8983, content: '比较不同意', score: 'P' }, { id: 8984, content: '非常不同意', score: 'P' }] },
  { id: 899, testId: 22, content: '你喜欢建立一套自己的做事方法', type: 1, sortOrder: 99, dimension: 'JP-Systematic', options: [{ id: 8991, content: '非常同意', score: 'J' }, { id: 8992, content: '比较同意', score: 'J' }, { id: 8993, content: '比较不同意', score: 'P' }, { id: 8994, content: '非常不同意', score: 'P' }] },
  { id: 900, testId: 22, content: '你觉得遵循常规是件好事', type: 1, sortOrder: 100, dimension: 'JP-Systematic', options: [{ id: 9001, content: '非常同意', score: 'J' }, { id: 9002, content: '比较同意', score: 'J' }, { id: 9003, content: '比较不同意', score: 'P' }, { id: 9004, content: '非常不同意', score: 'P' }] },
  { id: 901, testId: 22, content: '你喜欢保持选项的开放性', type: 1, sortOrder: 101, dimension: 'JP-Open-Ended', options: [{ id: 9011, content: '非常同意', score: 'P' }, { id: 9012, content: '比较同意', score: 'P' }, { id: 9013, content: '比较不同意', score: 'J' }, { id: 9014, content: '非常不同意', score: 'J' }] },
  { id: 902, testId: 22, content: '你喜欢灵活应对各种情况', type: 1, sortOrder: 102, dimension: 'JP-Open-Ended', options: [{ id: 9021, content: '非常同意', score: 'P' }, { id: 9022, content: '比较同意', score: 'P' }, { id: 9023, content: '比较不同意', score: 'J' }, { id: 9024, content: '非常不同意', score: 'J' }] },
  { id: 903, testId: 22, content: '你不喜欢把事情定得太死', type: 1, sortOrder: 103, dimension: 'JP-Open-Ended', options: [{ id: 9031, content: '非常同意', score: 'P' }, { id: 9032, content: '比较同意', score: 'P' }, { id: 9033, content: '比较不同意', score: 'J' }, { id: 9034, content: '非常不同意', score: 'J' }] },
  { id: 904, testId: 22, content: '你觉得保持开放能发现更多可能', type: 1, sortOrder: 104, dimension: 'JP-Open-Ended', options: [{ id: 9041, content: '非常同意', score: 'P' }, { id: 9042, content: '比较同意', score: 'P' }, { id: 9043, content: '比较不同意', score: 'J' }, { id: 9044, content: '非常不同意', score: 'J' }] },
  { id: 905, testId: 22, content: '你喜欢让事情自然发展', type: 1, sortOrder: 105, dimension: 'JP-Open-Ended', options: [{ id: 9051, content: '非常同意', score: 'P' }, { id: 9052, content: '比较同意', score: 'P' }, { id: 9053, content: '比较不同意', score: 'J' }, { id: 9054, content: '非常不同意', score: 'J' }] },
  { id: 906, testId: 22, content: '你喜欢轻松随意的生活方式', type: 1, sortOrder: 106, dimension: 'JP-Casual', options: [{ id: 9061, content: '非常同意', score: 'P' }, { id: 9062, content: '比较同意', score: 'P' }, { id: 9063, content: '比较不同意', score: 'J' }, { id: 9064, content: '非常不同意', score: 'J' }] },
  { id: 907, testId: 22, content: '你不喜欢过于严格的规则', type: 1, sortOrder: 107, dimension: 'JP-Casual', options: [{ id: 9071, content: '非常同意', score: 'P' }, { id: 9072, content: '比较同意', score: 'P' }, { id: 9073, content: '比较不同意', score: 'J' }, { id: 9074, content: '非常不同意', score: 'J' }] },
  { id: 908, testId: 22, content: '你觉得太过计划会错过惊喜', type: 1, sortOrder: 108, dimension: 'JP-Casual', options: [{ id: 9081, content: '非常同意', score: 'P' }, { id: 9082, content: '比较同意', score: 'P' }, { id: 9083, content: '比较不同意', score: 'J' }, { id: 9084, content: '非常不同意', score: 'J' }] },
  { id: 909, testId: 22, content: '你喜欢随性地度过一天', type: 1, sortOrder: 109, dimension: 'JP-Casual', options: [{ id: 9091, content: '非常同意', score: 'P' }, { id: 9092, content: '比较同意', score: 'P' }, { id: 9093, content: '比较不同意', score: 'J' }, { id: 9094, content: '非常不同意', score: 'J' }] },
  { id: 910, testId: 22, content: '你觉得轻松的态度让你更有创造力', type: 1, sortOrder: 110, dimension: 'JP-Casual', options: [{ id: 9101, content: '非常同意', score: 'P' }, { id: 9102, content: '比较同意', score: 'P' }, { id: 9103, content: '比较不同意', score: 'J' }, { id: 9104, content: '非常不同意', score: 'J' }] },
  { id: 911, testId: 22, content: '你喜欢探索新的可能性', type: 1, sortOrder: 111, dimension: 'SN-Imaginative', options: [{ id: 9111, content: '非常同意', score: 'N' }, { id: 9112, content: '比较同意', score: 'N' }, { id: 9113, content: '比较不同意', score: 'S' }, { id: 9114, content: '非常不同意', score: 'S' }] },
  { id: 912, testId: 22, content: '你的想象力很丰富', type: 1, sortOrder: 112, dimension: 'SN-Imaginative', options: [{ id: 9121, content: '非常同意', score: 'N' }, { id: 9122, content: '比较同意', score: 'N' }, { id: 9123, content: '比较不同意', score: 'S' }, { id: 9124, content: '非常不同意', score: 'S' }] },
  { id: 913, testId: 22, content: '你喜欢思考事物的深层含义', type: 1, sortOrder: 113, dimension: 'SN-Imaginative', options: [{ id: 9131, content: '非常同意', score: 'N' }, { id: 9132, content: '比较同意', score: 'N' }, { id: 9133, content: '比较不同意', score: 'S' }, { id: 9134, content: '非常不同意', score: 'S' }] },
  { id: 914, testId: 22, content: '你对未来充满好奇和想象', type: 1, sortOrder: 114, dimension: 'SN-Imaginative', options: [{ id: 9141, content: '非常同意', score: 'N' }, { id: 9142, content: '比较同意', score: 'N' }, { id: 9143, content: '比较不同意', score: 'S' }, { id: 9144, content: '非常不同意', score: 'S' }] },
  { id: 915, testId: 22, content: '你喜欢用比喻和象征来表达想法', type: 1, sortOrder: 115, dimension: 'SN-Imaginative', options: [{ id: 9151, content: '非常同意', score: 'N' }, { id: 9152, content: '比较同意', score: 'N' }, { id: 9153, content: '比较不同意', score: 'S' }, { id: 9154, content: '非常不同意', score: 'S' }] },
  { id: 916, testId: 22, content: '你总是看到事物的多种可能性', type: 1, sortOrder: 116, dimension: 'SN-Original', options: [{ id: 9161, content: '非常同意', score: 'N' }, { id: 9162, content: '比较同意', score: 'N' }, { id: 9163, content: '比较不同意', score: 'S' }, { id: 9164, content: '非常不同意', score: 'S' }] },
  { id: 917, testId: 22, content: '你喜欢创新的想法和方案', type: 1, sortOrder: 117, dimension: 'SN-Original', options: [{ id: 9171, content: '非常同意', score: 'N' }, { id: 9172, content: '比较同意', score: 'N' }, { id: 9173, content: '比较不同意', score: 'S' }, { id: 9174, content: '非常不同意', score: 'S' }] },
  { id: 918, testId: 22, content: '你总是能想到别人想不到的点子', type: 1, sortOrder: 118, dimension: 'SN-Original', options: [{ id: 9181, content: '非常同意', score: 'N' }, { id: 9182, content: '比较同意', score: 'N' }, { id: 9183, content: '比较不同意', score: 'S' }, { id: 9184, content: '非常不同意', score: 'S' }] },
  { id: 919, testId: 22, content: '你喜欢做与众不同的事', type: 1, sortOrder: 119, dimension: 'SN-Original', options: [{ id: 9191, content: '非常同意', score: 'N' }, { id: 9192, content: '比较同意', score: 'N' }, { id: 9193, content: '比较不同意', score: 'S' }, { id: 9194, content: '非常不同意', score: 'S' }] },
  { id: 920, testId: 22, content: '你觉得创新比传统更重要', type: 1, sortOrder: 120, dimension: 'SN-Original', options: [{ id: 9201, content: '非常同意', score: 'N' }, { id: 9202, content: '比较同意', score: 'N' }, { id: 9203, content: '比较不同意', score: 'S' }, { id: 9204, content: '非常不同意', score: 'S' }] },
  { id: 921, testId: 22, content: '你喜欢思考抽象的概念和理论', type: 1, sortOrder: 121, dimension: 'SN-Conceptual', options: [{ id: 9211, content: '非常同意', score: 'N' }, { id: 9212, content: '比较同意', score: 'N' }, { id: 9213, content: '比较不同意', score: 'S' }, { id: 9214, content: '非常不同意', score: 'S' }] },
  { id: 922, testId: 22, content: '你喜欢看到事物之间的联系', type: 1, sortOrder: 122, dimension: 'SN-Conceptual', options: [{ id: 9221, content: '非常同意', score: 'N' }, { id: 9222, content: '比较同意', score: 'N' }, { id: 9223, content: '比较不同意', score: 'S' }, { id: 9224, content: '非常不同意', score: 'S' }] },
  { id: 923, testId: 22, content: '你对理论和模型很感兴趣', type: 1, sortOrder: 123, dimension: 'SN-Conceptual', options: [{ id: 9231, content: '非常同意', score: 'N' }, { id: 9232, content: '比较同意', score: 'N' }, { id: 9233, content: '比较不同意', score: 'S' }, { id: 9234, content: '非常不同意', score: 'S' }] },
  { id: 924, testId: 22, content: '你喜欢从整体角度看问题', type: 1, sortOrder: 124, dimension: 'SN-Conceptual', options: [{ id: 9241, content: '非常同意', score: 'N' }, { id: 9242, content: '比较同意', score: 'N' }, { id: 9243, content: '比较不同意', score: 'S' }, { id: 9244, content: '非常不同意', score: 'S' }] },
  { id: 925, testId: 22, content: '你喜欢思考事物的本质', type: 1, sortOrder: 125, dimension: 'SN-Conceptual', options: [{ id: 9251, content: '非常同意', score: 'N' }, { id: 9252, content: '比较同意', score: 'N' }, { id: 9253, content: '比较不同意', score: 'S' }, { id: 9254, content: '非常不同意', score: 'S' }] },
  { id: 926, testId: 22, content: '你总是对未来充满期待', type: 1, sortOrder: 126, dimension: 'SN-Future-Focused', options: [{ id: 9261, content: '非常同意', score: 'N' }, { id: 9262, content: '比较同意', score: 'N' }, { id: 9263, content: '比较不同意', score: 'S' }, { id: 9264, content: '非常不同意', score: 'S' }] },
  { id: 927, testId: 22, content: '你更关注未来会怎样而非现在是怎样', type: 1, sortOrder: 127, dimension: 'SN-Future-Focused', options: [{ id: 9271, content: '非常同意', score: 'N' }, { id: 9272, content: '比较同意', score: 'N' }, { id: 9273, content: '比较不同意', score: 'S' }, { id: 9274, content: '非常不同意', score: 'S' }] },
  { id: 928, testId: 22, content: '你喜欢思考未来的发展趋势', type: 1, sortOrder: 128, dimension: 'SN-Future-Focused', options: [{ id: 9281, content: '非常同意', score: 'N' }, { id: 9282, content: '比较同意', score: 'N' }, { id: 9283, content: '比较不同意', score: 'S' }, { id: 9284, content: '非常不同意', score: 'S' }] },
  { id: 929, testId: 22, content: '你觉得未来比过去和现在更令人兴奋', type: 1, sortOrder: 129, dimension: 'SN-Future-Focused', options: [{ id: 9291, content: '非常同意', score: 'N' }, { id: 9292, content: '比较同意', score: 'N' }, { id: 9293, content: '比较不同意', score: 'S' }, { id: 9294, content: '非常不同意', score: 'S' }] },
  { id: 930, testId: 22, content: '你总是在为未来做准备', type: 1, sortOrder: 130, dimension: 'SN-Future-Focused', options: [{ id: 9301, content: '非常同意', score: 'N' }, { id: 9302, content: '比较同意', score: 'N' }, { id: 9303, content: '比较不同意', score: 'S' }, { id: 9304, content: '非常不同意', score: 'S' }] },
  { id: 931, testId: 22, content: '你享受社交活动给你带来的能量', type: 1, sortOrder: 131, dimension: 'EI-Enthusiastic', options: [{ id: 9311, content: '非常同意', score: 'E' }, { id: 9312, content: '比较同意', score: 'E' }, { id: 9313, content: '比较不同意', score: 'I' }, { id: 9314, content: '非常不同意', score: 'I' }] },
  { id: 932, testId: 22, content: '你喜欢在他人面前表现自己', type: 1, sortOrder: 132, dimension: 'EI-Enthusiastic', options: [{ id: 9321, content: '非常同意', score: 'E' }, { id: 9322, content: '比较同意', score: 'E' }, { id: 9323, content: '比较不同意', score: 'I' }, { id: 9324, content: '非常不同意', score: 'I' }] },
  { id: 933, testId: 22, content: '你对生活充满热情', type: 1, sortOrder: 133, dimension: 'EI-Enthusiastic', options: [{ id: 9331, content: '非常同意', score: 'E' }, { id: 9332, content: '比较同意', score: 'E' }, { id: 9333, content: '比较不同意', score: 'I' }, { id: 9334, content: '非常不同意', score: 'I' }] },
  { id: 934, testId: 22, content: '你喜欢与他人分享你的兴奋', type: 1, sortOrder: 134, dimension: 'EI-Enthusiastic', options: [{ id: 9341, content: '非常同意', score: 'E' }, { id: 9342, content: '比较同意', score: 'E' }, { id: 9343, content: '比较不同意', score: 'I' }, { id: 9344, content: '非常不同意', score: 'I' }] },
  { id: 935, testId: 22, content: '你觉得和别人在一起让你更有活力', type: 1, sortOrder: 135, dimension: 'EI-Enthusiastic', options: [{ id: 9351, content: '非常同意', score: 'E' }, { id: 9352, content: '比较同意', score: 'E' }, { id: 9353, content: '比较不同意', score: 'I' }, { id: 9354, content: '非常不同意', score: 'I' }] },
  { id: 936, testId: 22, content: '你需要独处来恢复能量', type: 1, sortOrder: 136, dimension: 'EI-Quiet', options: [{ id: 9361, content: '非常同意', score: 'I' }, { id: 9362, content: '比较同意', score: 'I' }, { id: 9363, content: '比较不同意', score: 'E' }, { id: 9364, content: '非常不同意', score: 'E' }] },
  { id: 937, testId: 22, content: '你喜欢安静的环境', type: 1, sortOrder: 137, dimension: 'EI-Quiet', options: [{ id: 9371, content: '非常同意', score: 'I' }, { id: 9372, content: '比较同意', score: 'I' }, { id: 9373, content: '比较不同意', score: 'E' }, { id: 9374, content: '非常不同意', score: 'E' }] },
  { id: 938, testId: 22, content: '你在独处时感到最放松', type: 1, sortOrder: 138, dimension: 'EI-Quiet', options: [{ id: 9381, content: '非常同意', score: 'I' }, { id: 9382, content: '比较同意', score: 'I' }, { id: 9383, content: '比较不同意', score: 'E' }, { id: 9384, content: '非常不同意', score: 'E' }] },
  { id: 939, testId: 22, content: '你喜欢思考过后再发言', type: 1, sortOrder: 139, dimension: 'EI-Quiet', options: [{ id: 9391, content: '非常同意', score: 'I' }, { id: 9392, content: '比较同意', score: 'I' }, { id: 9393, content: '比较不同意', score: 'E' }, { id: 9394, content: '非常不同意', score: 'E' }] },
  { id: 940, testId: 22, content: '你觉得内心世界比外部世界更丰富', type: 1, sortOrder: 140, dimension: 'EI-Quiet', options: [{ id: 9401, content: '非常同意', score: 'I' }, { id: 9402, content: '比较同意', score: 'I' }, { id: 9403, content: '比较不同意', score: 'E' }, { id: 9404, content: '非常不同意', score: 'E' }] },
  { id: 941, testId: 22, content: '你喜欢与少数几个亲密朋友共度时光', type: 1, sortOrder: 141, dimension: 'EI-Intimate', options: [{ id: 9411, content: '非常同意', score: 'I' }, { id: 9412, content: '比较同意', score: 'I' }, { id: 9413, content: '比较不同意', score: 'E' }, { id: 9414, content: '非常不同意', score: 'E' }] },
  { id: 942, testId: 22, content: '你重视深入的人际关系', type: 1, sortOrder: 142, dimension: 'EI-Intimate', options: [{ id: 9421, content: '非常同意', score: 'I' }, { id: 9422, content: '比较同意', score: 'I' }, { id: 9423, content: '比较不同意', score: 'E' }, { id: 9424, content: '非常不同意', score: 'E' }] },
  { id: 943, testId: 22, content: '你觉得少数几个好朋友就够了', type: 1, sortOrder: 143, dimension: 'EI-Intimate', options: [{ id: 9431, content: '非常同意', score: 'I' }, { id: 9432, content: '比较同意', score: 'I' }, { id: 9433, content: '比较不同意', score: 'E' }, { id: 9434, content: '非常不同意', score: 'E' }] },
  { id: 944, testId: 22, content: '你喜欢和朋友进行深入的交谈', type: 1, sortOrder: 144, dimension: 'EI-Intimate', options: [{ id: 9441, content: '非常同意', score: 'I' }, { id: 9442, content: '比较同意', score: 'I' }, { id: 9443, content: '比较不同意', score: 'E' }, { id: 9444, content: '非常不同意', score: 'E' }] }
];

const mbtiResults = [
  {
    id: 1,
    testId: 1,
    type: 'ENFJ',
    name: '主人公型',
    title: '你是温暖且有号召力的领导者',
    personalityAnalysis: '你是一个充满热情、善于表达的人。你具有很强的人际交往能力，能够真诚地关心他人，并激励他们实现共同的目标。你善于观察他人的情绪和需求，总能在恰当的时候给予支持。你天生具有感染力，能够带动团队的积极性，是凝聚人心的核心人物。',
    loveAdvice: '在恋爱关系中，你非常注重情感的深度连接和相互成长。你会全心全意地投入，关心伴侣的梦想和需求，并积极支持对方实现目标。建议你在关爱伴侣的同时，也要学会坦诚表达自己的需求，不要过度付出而忽略自己。找到一位能够欣赏你的敏感和理想主义，并愿意与你共同成长的伴侣。',
    careerAdvice: '你适合能够发挥影响力并帮助他人成长的职业。推荐职业包括：教育工作者、心理咨询师、人力资源管理、企业培训师、非营利组织负责人、社会工作者、公关传播等。在工作中，你善于营造积极和谐的团队氛围，激励同事共同进步，但要注意不要过度承担不属于自己的责任。',
    strengthsAnalysis: '【性格优势】1. 极强的同理心和洞察力，能够敏锐感知他人需求；2. 出色的沟通和影响力，善于激励和带动他人；3. 富有理想主义和社会责任感；4. 组织协调能力强，善于凝聚团队；5. 做事认真负责，值得信赖。',
    weaknessesAnalysis: '【成长建议】1. 有时会过度关注他人而忽略自己，学会设定健康的边界；2. 可能会过度理想化人和事，学会接受现实的不完美；3. 做决定时可能过于情感化，需要更多理性分析；4. 对批评较为敏感，学会从反馈中成长而不是回避；5. 偶尔会过度承担责任，学会适当放手和信任他人。',
    analysis: '你是一个充满热情、善于表达的人。你具有很强的人际交往能力，能够真诚地关心他人，并激励他们实现共同的目标。你喜欢帮助他人发挥潜力，是天生的领导者。',
    suggestion: '建议你在保持热情的同时，学会倾听不同的声音；在帮助他人的同时，也要关注自己的需求。',
    strengths: '同理心、领导能力、沟通能力、理想主义',
    careers: '教育、咨询、人力资源、公共服务、管理培训'
  },
  {
    id: 2,
    testId: 1,
    type: 'ENFP',
    name: '竞选者型',
    title: '你是充满热情的创新者',
    personalityAnalysis: '你是一个自由、热情、富有想象力的人。你的思维活跃，创意无限，总能在平凡中发现可能性。你善于激励他人，享受与人交流和思想碰撞的过程。你对新事物充满好奇心，喜欢探索未知的领域，不愿被传统和规则束缚。你的热情和积极性能量感染身边的每一个人。',
    loveAdvice: '在恋爱中，你追求精神层面的深度连接和真诚的情感交流。你会为伴侣带来惊喜和浪漫，善于营造充满激情的关系氛围。建议你在享受新鲜感的同时，也要学会经营长期关系，在自由和承诺之间找到平衡。找到一位能够理解你对自由的需求，同时能和你一起探索生活的伴侣。',
    careerAdvice: '你适合能够发挥创造力并带来新鲜感的职业。推荐职业包括：创意设计、市场营销、活动策划、媒体传播、心理咨询、教育培训、创业等。在工作中，你善于带来创新思路和活力，但需要注意避免频繁改变方向，学会专注和坚持。',
    strengthsAnalysis: '【性格优势】1. 富有创造力和想象力，善于发现新可能性；2. 出色的社交能力，能快速与人建立连接；3. 充满热情和感染力，积极乐观；4. 适应性强，能够灵活应对变化；5. 善于激励和鼓舞他人，带来正能量。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于追求新鲜感，难以长期专注；2. 容易过度兴奋或承诺过多，需要更实际的规划；3. 对批评和拒绝较为敏感，学会建立内在的稳定感；4. 可能避免处理冲突和负面情绪，学会直面问题；5. 时间管理和执行力有待提升，学会设定优先级。',
    analysis: '你是一个自由、热情、富有想象力的人。你思维活跃，创意无限，总能看到各种可能性。你喜欢激励他人，享受当下的体验。',
    suggestion: '建议你在保持热情的同时，学会专注于一件事并坚持到底。',
    strengths: '热情、想象力、创造力、社交能力',
    careers: '创意行业、市场营销、咨询、写作、旅游'
  },
  {
    id: 3,
    testId: 1,
    type: 'ENTJ',
    name: '指挥官型',
    title: '你是果断自信的领导者',
    personalityAnalysis: '你是一个天生具有领导才能的人。思维敏捷，决策果断，善于从宏观战略角度分析问题。对效率有极高追求，喜欢制定长远计划并强力推动执行。你自信、有魄力，敢于承担风险和责任，面对困难从不退缩，能够带领团队攻克难关。',
    loveAdvice: '在恋爱关系中，你倾向于主动规划和推动关系的发展。你会为伴侣设定目标并一起奋斗，但有时可能会把工作中的强势带入感情。建议你在关系中学会柔软表达，多倾听伴侣的感受，而不是一味追求效率和结果。找到一位能够欣赏你的领导力，同时又能给予你温暖支持的伴侣。',
    careerAdvice: '你适合能够发挥领导力和战略思维的高层职位。推荐职业包括：企业高管、创业创始人、管理咨询、投资银行、律师、政治家、项目总监等。你善于制定战略并推动执行，但需要注意不要过度强调效率而忽略团队成员的感受。',
    strengthsAnalysis: '【性格优势】1. 出色的战略思维和领导能力；2. 决策果断，不拖泥带水；3. 目标导向，执行力极强；4. 自信有魄力，敢于挑战；5. 善于组织和管理复杂局面。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于强势和不耐烦，学会耐心和倾听；2. 对效率的过度追求可能忽略人情味儿；3. 容易过于理性而忽视情感需求；4. 对达不到标准的人可能缺乏耐心；5. 需要学会授权，而不是事必躬亲。',
    analysis: '你是一个天生具有领导才能的人。你思维敏捷，决策果断，善于从宏观角度分析问题。',
    suggestion: '建议你在追求目标的同时，多关注他人的感受和需求。',
    strengths: '领导能力、决策力、战略思维、自信',
    careers: '企业管理、创业、法律、投资、咨询'
  },
  {
    id: 4,
    testId: 1,
    type: 'ENTP',
    name: '辩论家型',
    title: '你是聪明好奇的创新者',
    personalityAnalysis: '你是一个思维敏捷、好奇心旺盛的人。喜欢辩论和探讨各种观点，总能从独特的角度发现新可能性。思维灵活，能快速适应变化，擅长在复杂局面中找到突破口。你喜欢挑战传统，追求创新，讨厌被规则束缚，享受智力上的较量。',
    loveAdvice: '在恋爱中，你需要能够进行智力交流的伴侣。你喜欢探讨各种想法，享受思维的碰撞，但有时可能会过于喜欢辩论而忽略伴侣感受。建议你在关系中学会适时关闭辩论模式，更多关注情感交流。找到一位能理解你跳脱思维，又能带来稳定感的伴侣。',
    careerAdvice: '你适合能够发挥创新能力并解决复杂问题的工作。推荐职业包括：创业、战略咨询、产品经理、律师、金融分析师、研发、市场营销策划等。你善于提出创新思路，但需要团队成员帮你落地执行，注意不要频繁改变方向。',
    strengthsAnalysis: '【性格优势】1. 思维敏捷，富有创新能力；2. 快速学习，适应能力强；3. 善于发现机会和可能性；4. 辩论和说服能力出色；5. 敢于挑战传统，突破常规。',
    weaknessesAnalysis: '【成长建议】1. 容易跳脱，需要提升专注力和持久度；2. 可能过于喜欢辩论，容易引起冲突；3. 兴趣过多，难以深耕；4. 有时会忽略细节和执行力；5. 需要学会完成项目而不是不断开新项目。',
    analysis: '你是一个思维敏捷、好奇心强的人。你喜欢辩论和探讨各种观点，善于发现新的可能性。',
    suggestion: '建议你在探索新想法的同时，也要学会把一些想法落实到行动。',
    strengths: '创新能力、适应性、好奇心、分析能力',
    careers: '创业、咨询、研发、法律、金融分析'
  },
  {
    id: 5,
    testId: 1,
    type: 'ESFJ',
    name: '执政官型',
    title: '你是热情友好的支持者',
    personalityAnalysis: '你是一个温暖、热情、善于社交的人。非常在意他人的感受和评价，喜欢照顾和帮助别人，从中获得满足感。你有很强的责任感和服务精神，善于维护和谐的人际关系。喜欢组织活动，关心他人福祉，是团队中贴心的支持者。',
    loveAdvice: '在恋爱中，你非常愿意为伴侣付出，会细致地照顾对方的生活和情感需求。但有时可能会过度付出而忽略自己，或者把自己的期望强加给对方。建议你建立健康的边界，学会爱自己，找到一位能够珍惜并回应你的付出，同时也给你足够关爱的伴侣。',
    careerAdvice: '你适合能够服务他人并发挥社交能力的职业。推荐职业包括：教师、护士/医生、人力资源、行政管理、销售、客户服务、社会工作者、公关等。你善于营造和谐氛围，但需要注意不要过度承担他人的情绪和责任。',
    strengthsAnalysis: '【性格优势】1. 温暖有爱心，善于照顾他人；2. 出色的社交和协调能力；3. 责任心强，值得信赖；4. 注重和谐，善于调解；5. 细致体贴，关注他人需求。',
    weaknessesAnalysis: '【成长建议】1. 容易过度付出和承担，学会设定边界；2. 可能过于在意他人评价，需要建立内在认同；3. 有时会回避冲突，学会健康表达不同意见；4. 对批评较为敏感，需要更客观看待；5. 可能过于固守传统，尝试接受新事物。',
    analysis: '你是一个温暖、热情、善于社交的人。你非常在意他人的感受，喜欢照顾和帮助别人。',
    suggestion: '建议你在照顾他人的同时，也要注意照顾自己的需求。学会说"不"。',
    strengths: '社交能力、同理心、责任感、组织能力',
    careers: '教育、医疗、人力资源、销售、行政'
  },
  {
    id: 6,
    testId: 1,
    type: 'ESFP',
    name: '表演者型',
    title: '你是热情洋溢的活力源泉',
    personalityAnalysis: '你是一个充满活力、热爱生活的人。你喜欢与人交往，享受当下的每一刻。你善于观察他人，能够轻松适应各种环境和情境。你是派对的灵魂人物，总能带动气氛，让周围的人感到快乐和放松。你富有同情心，关心他人，是很好的陪伴者。',
    loveAdvice: '在恋爱中，你会给对方带来很多欢乐和惊喜。你喜欢享受当下的浪漫时刻，善于营造轻松愉快的氛围。建议你在享受激情的同时，也要关注关系的长期稳定。学会与伴侣一起规划未来，这会让你的感情更加稳固。找到一位能够欣赏你的活力，同时又能给你安全感的伴侣。',
    careerAdvice: '你适合能够与人互动并带来快乐的职业。推荐职业包括：表演艺术、销售、公关、活动策划、旅游顾问、幼儿教育、健身教练等。你善于调动气氛和激励他人，但需要注意避免过于冲动的决策，学会规划和坚持。',
    strengthsAnalysis: '【性格优势】1. 热情开朗，善于社交，能快速融入新环境；2. 活在当下，善于享受生活；3. 富有同情心，关心他人感受；4. 适应力强，灵活应变；5. 善于观察，对他人情绪敏感。',
    weaknessesAnalysis: '【成长建议】1. 有时过于关注当下，缺乏长远规划；2. 容易回避冲突和深入的情感交流；3. 对批评和拒绝较为敏感；4. 可能会过度追求刺激；5. 有时会缺乏耐心和持久力。',
    analysis: '你是一个充满活力、热爱生活的人。你喜欢与人交往，享受当下的每一刻。你善于观察他人，能够轻松适应各种环境和情境。你是派对的灵魂人物，总能带动气氛。',
    suggestion: '建议你在享受当下的同时，也为未来做一些规划。适当的规划会让你的生活更加稳定，也能更好地实现你的目标。',
    strengths: '热情、适应力、社交能力、乐观',
    careers: '表演艺术、销售、公关、旅游、教育'
  },
  {
    id: 7,
    testId: 1,
    type: 'ESTJ',
    name: '总经理型',
    title: '你是天生的管理者和组织者',
    personalityAnalysis: '你是一个务实、有条理、逻辑清晰的人。你善于组织和管理，擅长处理具体的事务和细节。你重视传统和规则，在稳定的环境中能发挥最大的能力。你做事果断，有很强的执行力，是可靠的领导者和伙伴。你诚实守信，重视承诺。',
    loveAdvice: '在恋爱关系中，你通常会承担起责任，为伴侣提供稳定和安全感。你可能会比较传统，重视家庭和婚姻。建议你在保持务实的同时，也要学会表达浪漫和情感，不要让工作中的严肃影响感情。找到一位能够欣赏你的可靠，同时又能给你带来生活情趣的伴侣。',
    careerAdvice: '你适合能够发挥组织和管理能力的职业。推荐职业包括：企业管理、行政管理、金融、法律、军事、项目管理、公务员、审计等。你善于建立秩序和流程，但需要注意不要过于固执，学会接受新的方法和观点。',
    strengthsAnalysis: '【性格优势】1. 强大的组织和管理能力；2. 务实可靠，值得信赖；3. 责任感强，承诺必达；4. 逻辑清晰，决策果断；5. 注重细节，做事认真。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于固执，不够灵活；2. 可能会过于看重规则和传统；3. 对情感表达可能较为生疏；4. 有时会过于严厉或直接；5. 对变化的适应能力需要提升。',
    analysis: '你是一个务实、有条理、逻辑清晰的人。你善于组织和管理，擅长处理具体的事务和细节。你重视传统和规则，在稳定的环境中能发挥最大的能力。你做事果断，有很强的执行力。',
    suggestion: '建议你在保持条理的同时，也尝试接受一些变化和不确定性。学会理解和包容不同的观点，会让你的领导能力更加全面。',
    strengths: '组织能力、责任感、务实、可靠',
    careers: '管理岗位、行政、金融、法律、军事'
  },
  {
    id: 8,
    testId: 1,
    type: 'ESTP',
    name: '企业家型',
    title: '你是行动派的冒险家',
    personalityAnalysis: '你是一个务实、灵活、喜欢冒险的人。你善于把握机会，能够在压力下保持冷静。你喜欢动手实践，通过尝试和犯错来学习。你享受刺激和挑战，生活态度积极。你思维敏捷，善于解决实际问题，是天生的行动派。',
    loveAdvice: '在恋爱中，你会给对方带来很多新鲜和刺激的体验。你喜欢活在当下，善于发现生活中的乐趣。建议你在享受冒险的同时，也要给伴侣足够的安全感。学会为感情做出长期承诺，这会让你的关系更加稳定。找到一位能够理解你对自由的需求，同时又能给你稳定支持的伴侣。',
    careerAdvice: '你适合能够快速行动并应对挑战的职业。推荐职业包括：创业、销售、投资、体育、执法、应急管理、工程技术、飞行员等。你善于在压力下工作，但需要注意避免过于冲动，学会三思而后行。',
    strengthsAnalysis: '【性格优势】1. 强大的行动力和执行力；2. 务实灵活，适应力强；3. 危机处理能力出色；4. 善于发现和把握机会；5. 社交能力强，善于谈判。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于冲动，缺乏规划；2. 可能会回避长期承诺；3. 对理论和抽象概念缺乏耐心；4. 有时会过于冒险；5. 可能会忽略他人的感受。',
    analysis: '你是一个务实、灵活、喜欢冒险的人。你善于把握机会，能够在压力下保持冷静。你喜欢动手实践，通过尝试和犯错来学习。你享受刺激和挑战，生活态度积极。',
    suggestion: '建议你在追求刺激的同时，也要考虑长远的后果。尝试在行动前做一些规划，这会让你更好地把握机会。',
    strengths: '行动力、务实、危机处理能力、社交能力',
    careers: '创业、销售、体育、金融、执法'
  },
  {
    id: 9,
    testId: 1,
    type: 'INFJ',
    name: '提倡者型',
    title: '你是富有洞察力的理想主义者',
    personalityAnalysis: '你是一个思维深刻、富有洞察力的人。你有强烈的价值观和理想，对帮助他人充满热情。你善于理解他人的感受和动机，能够预见问题并提出创新的解决方案。你安静但有影响力，对自己相信的事业非常执着。你富有创造力和直觉力。',
    loveAdvice: '在恋爱中，你追求深度的情感连接和精神共鸣。你会非常投入，关心伴侣的内心世界和成长。建议你在付出的同时，也要学会照顾自己的需求，不要过度消耗自己。找到一位能够理解你的理想主义，同时又能给你现实支持的伴侣。',
    careerAdvice: '你适合能够发挥影响力并帮助他人的职业。推荐职业包括：心理咨询师、作家、艺术家、教师、社会工作者、非营利组织负责人、人力资源、公关传播等。你善于理解和帮助他人，但需要注意设定健康的边界，避免过度承担。',
    strengthsAnalysis: '【性格优势】1. 深刻的洞察力和直觉力；2. 富有理想主义和使命感；3. 强大的同理心和理解力；4. 创造力和创新能力；5. 坚定的信念和毅力。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于理想化人和事；2. 可能会过度承担他人的情绪；3. 对批评和负面反馈较为敏感；4. 容易感到疲惫和倦怠；5. 有时会过于固执于自己的信念。',
    analysis: '你是一个思维深刻、富有洞察力的人。你有强烈的价值观和理想，对帮助他人充满热情。你善于理解他人的感受和动机，能够预见问题并提出创新的解决方案。你安静但有影响力。',
    suggestion: '建议你在追求理想的同时，也要学会接受现实的不完美。适当放松对自己的要求，给自己一些时间来享受生活。',
    strengths: '洞察力、创造力、理想主义、同理心',
    careers: '咨询、艺术、心理学、写作、社会工作'
  },
  {
    id: 10,
    testId: 1,
    type: 'INFP',
    name: '调停者型',
    title: '你是理想主义的思想家',
    personalityAnalysis: '你是一个浪漫、理想化、富有同理心的人。你重视内心的价值观，追求真实的自我表达。你善于理解他人的情感和动机，是很好的倾听者。你富有想象力和创造力，喜欢探索可能性。你温和善良，重视和谐，是很好的朋友和伙伴。',
    loveAdvice: '在恋爱中，你追求深度的情感连接和真诚的理解。你会为伴侣创造一个温暖、支持的空间，但有时可能会过于理想化对方。建议你在保持理想的同时，也要学会接受伴侣的不完美。找到一位能够理解你的敏感，同时又能给你安全感的伴侣。',
    careerAdvice: '你适合能够发挥创造力并帮助他人的职业。推荐职业包括：写作、艺术、心理咨询、教育、社会工作、图书管理、非营利组织、创意设计等。你善于理解和支持他人，但需要注意不要过度牺牲自己，学会设定边界。',
    strengthsAnalysis: '【性格优势】1. 富有同理心，善于理解他人；2. 创造力和想象力丰富；3. 坚定的理想主义和价值观；4. 善于调解冲突，维护和谐；5. 适应力强，灵活开放。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于理想化，脱离现实；2. 可能会回避冲突和批评；3. 容易感到不被理解；4. 执行力和行动力需要提升；5. 有时会过于自我反思。',
    analysis: '你是一个浪漫、理想化、富有同理心的人。你重视内心的价值观，追求真实的自我表达。你善于理解他人的情感和动机，是很好的倾听者。你富有想象力和创造力，喜欢探索可能性。',
    suggestion: '建议你在坚持理想的同时，也要学会面对现实中的困难。尝试表达自己的想法和感受，这会让你获得更多的支持。',
    strengths: '同理心、创造力、理想主义、适应性',
    careers: '写作、艺术、咨询、心理、教育'
  },
  {
    id: 11,
    testId: 1,
    type: 'INTJ',
    name: '建筑师型',
    title: '你是独立思考的战略家',
    personalityAnalysis: '你是一个思维敏捷、逻辑性强的人。你善于制定长期战略，追求完美和效率。你独立思考，有自己的主见，不轻易受他人影响。你对知识有强烈的渴求，喜欢在专业领域深入钻研。你善于预见未来，有很强的规划能力。',
    loveAdvice: '在恋爱中，你可能会比较理性，重视思想的交流和默契。你会为关系设定目标并努力实现，但有时可能会忽略情感表达。建议你学会更多地表达自己的感受，而不仅仅是思考。找到一位能够理解你的独立，同时又能给你温暖支持的伴侣。',
    careerAdvice: '你适合能够发挥战略思维和专业能力的职业。推荐职业包括：科学研究、技术开发、金融投资、战略咨询、律师、企业高管、建筑师、科学家等。你善于制定长远规划，但需要注意不要过于追求完美，学会接受足够好的结果。',
    strengthsAnalysis: '【性格优势】1. 出色的战略思维和规划能力；2. 强大的分析和逻辑思维；3. 独立自主，有主见；4. 追求卓越，自我要求高；5. 善于学习和钻研。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于追求完美，不够灵活；2. 可能会显得冷漠或高傲；3. 对他人可能缺乏耐心；4. 有时会过于固执；5. 可能会过度思考而拖延行动。',
    analysis: '你是一个思维敏捷、逻辑性强的人。你善于制定长期战略，追求完美和效率。你独立思考，有自己的主见，不轻易受他人影响。你对知识有强烈的渴求，喜欢在专业领域深入钻研。',
    suggestion: '建议你在追求完美的同时，也要学会欣赏他人的贡献。尝试更多地表达赞赏和感谢，这会让你的人际关系更加和谐。',
    strengths: '战略思维、分析能力、独立性、智慧',
    careers: '科研、技术、金融、战略咨询、法律'
  },
  {
    id: 12,
    testId: 1,
    type: 'INTP',
    name: '逻辑学家型',
    title: '你是热爱思考的探索者',
    personalityAnalysis: '你是一个热爱思考、追求真理的人。你对逻辑和理论充满兴趣，善于分析和解决复杂问题。你喜欢独立工作，在学术和技术领域往往有很好的发展。你思维敏捷，喜欢探索新概念，对世界充满好奇心。你善于发现规律和联系。',
    loveAdvice: '在恋爱中，你重视智力上的交流和理解。你可能需要自己的空间，喜欢独立思考。建议你学会更多地表达情感，不要让思考代替了感受。找到一位能够理解你对思考的热爱，同时又能给你温暖陪伴的伴侣。',
    careerAdvice: '你适合能够发挥分析和研究能力的职业。推荐职业包括：科学研究、软件开发、数学、哲学、数据分析、工程设计、学术研究、发明创造等。你善于解决复杂问题，但需要注意不要过度沉浸在思考中，学会将想法付诸实践。',
    strengthsAnalysis: '【性格优势】1. 强大的分析和逻辑思维能力；2. 富有创造力和想象力；3. 独立思考，不盲从；4. 学习能力强，好奇心旺盛；5. 善于发现问题和解决问题。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于沉浸在思考中，缺乏行动；2. 可能会显得冷漠或不善社交；3. 对批评可能较为敏感；4. 有时会过于理想化；5. 执行力和持久力需要提升。',
    analysis: '你是一个热爱思考、追求真理的人。你对逻辑和理论充满兴趣，善于分析和解决复杂问题。你喜欢独立工作，在学术和技术领域往往有很好的发展。你思维敏捷，喜欢探索新概念。',
    suggestion: '建议你在享受思考的同时，也尝试将想法付诸实践。学会与他人分享你的见解，会让你的思想产生更大的影响。',
    strengths: '分析能力、创造力、逻辑性、独立思考',
    careers: '科学研究、软件开发、数学、哲学、写作'
  },
  {
    id: 13,
    testId: 1,
    type: 'ISFJ',
    name: '守卫者型',
    title: '你是温暖而可靠的守护者',
    personalityAnalysis: '你是一个安静、友好、有责任感的人。你非常关心他人的感受，乐于助人，在人际关系中常常扮演支持者的角色。你做事认真，注重细节，是值得信赖的伙伴。你重视传统和承诺，对自己的责任非常认真。你温和体贴，善解人意。',
    loveAdvice: '在恋爱中，你会非常体贴和关心伴侣，是很好的照顾者。你会为关系付出很多，但有时可能会过度牺牲自己。建议你在照顾伴侣的同时，也要照顾好自己，学会表达自己的需求。找到一位能够珍惜你的付出，同时又能给你足够关爱的伴侣。',
    careerAdvice: '你适合能够帮助他人并发挥细致能力的职业。推荐职业包括：医疗护理、教育、社会工作、行政管理、人力资源、客户服务、图书管理、健康保健等。你善于照顾他人，但需要注意不要过度承担，学会设定边界。',
    strengthsAnalysis: '【性格优势】1. 温暖体贴，关心他人；2. 可靠负责，值得信赖；3. 细致认真，注重细节；4. 忠诚坚定，重视承诺；5. 善于照顾和支持他人。',
    weaknessesAnalysis: '【成长建议】1. 有时会过度付出，忽略自己；2. 可能会过于固守传统；3. 对批评和否定较为敏感；4. 有时会过于谦虚；5. 需要学会设定健康的边界。',
    analysis: '你是一个安静、友好、有责任感的人。你非常关心他人的感受，乐于助人，在人际关系中常常扮演支持者的角色。你做事认真，注重细节，是值得信赖的伙伴。你重视传统和承诺。',
    suggestion: '建议你在照顾他人的同时，也要注意照顾自己的需求。学会为自己设定边界，才能更好地为他人提供支持。',
    strengths: '关心他人、可靠、细心、忠诚',
    careers: '医疗、教育、社工、行政、护理'
  },
  {
    id: 14,
    testId: 1,
    type: 'ISFP',
    name: '探险家型',
    title: '你是温和而富有创造力的艺术家',
    personalityAnalysis: '你是一个温和、敏感、富有创造力的人。你热爱美和自然，喜欢用自己的方式表达内心的感受。你做事灵活，善于适应，但有时可能会回避冲突。你享受当下的体验，追求内心的平静。你有独特的审美，善于发现生活中的美。',
    loveAdvice: '在恋爱中，你会给对方带来温柔和美好的体验。你重视和谐，善于创造温馨的氛围。建议你在保持和谐的同时，也要学会表达自己的真实想法，不要为了避免冲突而委屈自己。找到一位能够理解你的敏感，同时又能给你安全感的伴侣。',
    careerAdvice: '你适合能够发挥创造力和美感知觉的职业。推荐职业包括：艺术设计、摄影、音乐、舞蹈、自然科学、健康护理、手工艺、烹饪、园艺等。你善于发现和创造美，但需要注意不要过于回避压力，学会面对挑战。',
    strengthsAnalysis: '【性格优势】1. 富有创造力和审美能力；2. 温和友善，富有同理心；3. 灵活适应，不固执；4. 善于发现美和享受生活；5. 动手能力强，善于实践。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于回避冲突和压力；2. 可能会缺乏长远规划；3. 对批评较为敏感；4. 有时会过于被动；5. 需要学会坚持和表达自己。',
    analysis: '你是一个温和、敏感、富有创造力的人。你热爱美和自然，喜欢用自己的方式表达内心的感受。你做事灵活，善于适应，但有时可能会回避冲突。你享受当下的体验，追求内心的平静。',
    suggestion: '建议你在保持和谐的同时，也要学会表达自己的真实想法和需求。适当的自我表达会让你获得更多的理解和支持。',
    strengths: '创造力、审美、灵活性、同理心',
    careers: '艺术、设计、自然科学、健康护理、手工艺'
  },
  {
    id: 15,
    testId: 1,
    type: 'ISTJ',
    name: '物流师型',
    title: '你是踏实可靠的责任承担者',
    personalityAnalysis: '你是一个务实、可靠、有责任感的人。你做事认真，注重细节，善于组织和管理。你重视规则和传统，承诺的事情一定会做到。你是值得信赖的伙伴，在团队中往往是可靠的后盾。你诚实正直，重视信用。',
    loveAdvice: '在恋爱中，你会非常可靠和稳定，是值得依靠的伴侣。你可能会比较传统和务实，有时可能会缺乏浪漫。建议你在保持可靠的同时，也要学会表达情感和创造浪漫。找到一位能够欣赏你的踏实，同时又能给生活带来情趣的伴侣。',
    careerAdvice: '你适合能够发挥可靠性和组织能力的职业。推荐职业包括：行政管理、财务管理、法律、医学、审计、工程技术、公务员、军事等。你做事认真负责，但需要注意不要过于固执，学会接受变化和新的方法。',
    strengthsAnalysis: '【性格优势】1. 可靠负责，值得信赖；2. 务实认真，注重细节；3. 有条理，善于组织；4. 诚实守信，重视承诺；5. 耐心细致，坚持不懈。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于固执，不够灵活；2. 可能会过于固守传统；3. 对新事物的接受需要时间；4. 有时会过于严肃；5. 需要学会放松和享受生活。',
    analysis: '你是一个务实、可靠、有责任感的人。你做事认真，注重细节，善于组织和管理。你重视规则和传统，承诺的事情一定会做到。你是值得信赖的伙伴，在团队中往往是可靠的后盾。',
    suggestion: '建议你在保持可靠性的同时，也要学会灵活变通。尝试接受新的想法和方法，这会让你在变化的环境中更具适应性。',
    strengths: '可靠性、责任感、有条理、诚信',
    careers: '管理、行政、财务、法律、医学'
  },
  {
    id: 16,
    testId: 1,
    type: 'ISTP',
    name: '鉴赏家型',
    title: '你是实用主义的冒险家',
    personalityAnalysis: '你是一个冷静、理性、喜欢动手操作的人。你善于分析问题，找出实际的解决方案。你喜欢探索事物的运作原理，对机械和科技有浓厚的兴趣。你在危机时刻能够保持冷静，灵活应变。你独立务实，不喜欢被束缚。',
    loveAdvice: '在恋爱中，你需要自己的空间和自由。你可能不善于表达情感，但会用实际行动来关心伴侣。建议你学会更多地表达自己的感受，不要让行动代替了言语。找到一位能够理解你对独立的需求，同时又能给你温暖陪伴的伴侣。',
    careerAdvice: '你适合能够发挥动手和解决问题能力的职业。推荐职业包括：工程技术、机械维修、航空航天、医疗急救、软件开发、汽车技师、运动员、建筑等。你善于解决实际问题，但需要注意不要过于回避情感交流，学会与他人建立连接。',
    strengthsAnalysis: '【性格优势】1. 强大的分析和解决问题能力；2. 动手能力强，善于实践；3. 冷静理性，处变不惊；4. 灵活适应，应变能力强；5. 独立务实，不依赖他人。',
    weaknessesAnalysis: '【成长建议】1. 有时会过于独立，回避合作；2. 可能会显得冷漠或不善表达；3. 对长期承诺可能有所犹豫；4. 有时会过于追求刺激；5. 需要学会更多的情感交流。',
    analysis: '你是一个冷静、理性、喜欢动手操作的人。你善于分析问题，找出实际的解决方案。你喜欢探索事物的运作原理，对机械和科技有浓厚的兴趣。你在危机时刻能够保持冷静。',
    suggestion: '建议你在追求独立的同时，也要关注他人的感受和需求。尝试与他人建立更深层次的连接，这会让你的生活更加丰富。',
    strengths: '分析能力、动手能力、冷静、务实',
    careers: '工程、技术、机械、航空、医疗'
  }
];

const phq9Results = [
  {
    id: 20,
    testId: 2,
    minScore: 0,
    maxScore: 4,
    title: '抑郁情绪评估：状态良好',
    analysis: '根据您的回答，您目前没有明显的情绪低落表现，心理状态整体是健康的。',
    suggestion: '继续保持良好的生活习惯，注意工作生活平衡，多做自己喜欢的事情。定期关注自己的心理健康，有需要时可以做一些放松活动。'
  },
  {
    id: 21,
    testId: 2,
    minScore: 5,
    maxScore: 9,
    title: '抑郁情绪评估：轻度情绪波动',
    analysis: '根据您的回答，您最近可能有一些情绪低落的表现，但整体可控。这些感受可能会影响您的心情，但还不至于严重影响日常生活。',
    suggestion: '建议您保持规律的作息，适当增加运动和社交活动，多与家人朋友交流。如果情绪持续低落，可以考虑寻求专业心理支持。'
  },
  {
    id: 22,
    testId: 2,
    minScore: 10,
    maxScore: 14,
    title: '抑郁情绪评估：中度情绪困扰',
    analysis: '根据您的回答，您最近可能感受到较多的情绪压力，这些感受可能会影响您的工作和社交状态，需要引起重视。',
    suggestion: '建议您多关注自己的情绪健康，与信任的人交流感受，必要时寻求专业心理支持。保持规律的作息，适度的运动有助于改善情绪状态。'
  },
  {
    id: 23,
    testId: 2,
    minScore: 15,
    maxScore: 19,
    title: '抑郁情绪评估：中重度情绪困扰',
    analysis: '根据您的回答，您最近的情绪状态可能不太好，已经明显影响到您的日常生活和工作。',
    suggestion: '强烈建议您寻求专业心理支持，与专业人士交流您的感受。多与家人朋友相处，必要时请他们陪伴您寻求帮助。'
  },
  {
    id: 24,
    testId: 2,
    minScore: 20,
    maxScore: 27,
    title: '抑郁情绪评估：重度情绪困扰',
    analysis: '根据您的回答，您最近可能感受到非常大的情绪压力，已经严重影响到您的日常生活和工作。',
    suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。请多与家人朋友相处，告诉他们您的感受，必要时请他们陪伴您寻求专业帮助。'
  }
];

const funResults = [
  {
    id: 30,
    testId: 3,
    type: 'A',
    name: '社交型',
    title: '你是天生的人际连接者',
    analysis: '你是一个热情、友好、喜欢与人交往的人。你善于交朋友，在社交场合如鱼得水。你喜欢帮助他人，是朋友中的"润滑剂"。你的存在让周围的人感到温暖和快乐。',
    suggestion: '建议你在享受社交的同时，也学会享受独处。给自己一些安静的时间来反思和充电，这会让你更好地平衡社交需求和个人成长。'
  },
  {
    id: 31,
    testId: 3,
    type: 'B',
    name: '思考型',
    title: '你是深度的思考者',
    analysis: '你是一个理性、好奇、喜欢钻研的人。你善于分析问题，追求逻辑和真相。你喜欢学习新知识，在思想的海洋中探索是你的乐趣。',
    suggestion: '建议你在思考的同时，也多关注情感和人际关系。将你的思考分享给他人，会让你收获更多理解和共鸣。'
  },
  {
    id: 32,
    testId: 3,
    type: 'C',
    name: '计划型',
    title: '你是天生的组织者',
    analysis: '你是一个务实、有条理、喜欢计划的人。你善于管理时间和资源，追求效率和秩序。你做事稳重可靠，是朋友和同事可以依赖的对象。',
    suggestion: '建议你在计划的同时，也学会灵活应变。有时候随性而为可能会有意想不到的收获，尝试接受一些不确定性。'
  },
  {
    id: 33,
    testId: 3,
    type: 'D',
    name: '自由型',
    title: '你是自由的灵魂',
    analysis: '你是一个随性、自由、富有创意的人。你不喜欢被束缚，追求心灵的解放。你有独特的审美和创造力，喜欢按照自己的节奏生活。',
    suggestion: '建议你在追求自由的同时，也要学会承担责任。有时候一些约束是必要的，这能帮助你更好地实现自己的目标。'
  }
];

const enneagramResults = [
  {
    id: 40,
    testId: 4,
    type: '1',
    name: '完美型',
    title: '你是追求卓越的改革者',
    analysis: '你是一个有原则、有理想的人。你对自己和他人都有很高的期望，追求完美和正确。你善于发现问题并提出改进建议，是天然的改革者。你有强烈的道德感，诚实正直。',
    suggestion: '建议你对他人多一份宽容，接受"不完美"也可以是美好的。学会放松对自己的严格要求，给自己犯错的空间。'
  },
  {
    id: 41,
    testId: 4,
    type: '2',
    name: '助人型',
    title: '你是温暖体贴的给予者',
    analysis: '你是一个热情、无私、善于关心他人的人。你喜欢帮助别人，从中获得价值感和归属感。你有强烈的同理心，能够敏锐地察觉他人的需求。是朋友和家人最信赖的依靠。',
    suggestion: '建议你在帮助他人的同时，也要关注自己的需求。学会说"不"，避免过度付出导致倦怠。'
  },
  {
    id: 42,
    testId: 4,
    type: '3',
    name: '成就型',
    title: '你是充满动力的成功追求者',
    analysis: '你是一个有目标、有竞争力、渴望成功的人。你适应力强，善于变通，总能达成目标。你喜欢被认可和赞赏，追求卓越表现。是职场上的佼佼者。',
    suggestion: '建议你在追求成功的同时，也要反思自己真正想要的是什么。学会欣赏过程而非仅仅关注结果。'
  },
  {
    id: 43,
    testId: 4,
    type: '4',
    name: '自我型',
    title: '你是独特而富有创意的梦想家',
    analysis: '你是一个敏感、富有想象力、追求独特的人。你关注内心深处的情感，渴望真实和自我表达。你有艺术气质，善于发现生活中的美和深度。',
    suggestion: '建议你在追求独特的同时，也尝试融入群体。学会欣赏平凡中的不平凡。'
  },
  {
    id: 44,
    testId: 4,
    type: '5',
    name: '探索型',
    title: '你是深邃的观察者和思考者',
    analysis: '你是一个理性、好奇、渴望知识的人。你喜欢深入研究，理解事物的本质。你独立自主，不需要太多社交。善于分析和解决问题。',
    suggestion: '建议你在追求知识的同时，也注重人际交往和情感表达。将你的见解分享给他人，会产生更大的价值。'
  },
  {
    id: 45,
    testId: 4,
    type: '6',
    name: '忠诚型',
    title: '你是值得信赖的守护者',
    analysis: '你是一个忠诚、负责任、有安全感的人。你善于预见风险，保持警惕。你遵守承诺，是朋友和团队中最可靠的成员。你重视归属感和安全保障。',
    suggestion: '建议你在保持警惕的同时，也学会信任他人。尝试接受不确定性，培养内心的安全感。'
  },
  {
    id: 46,
    testId: 4,
    type: '7',
    name: '享乐型',
    title: '你是乐观积极的冒险家',
    analysis: '你是一个热情、乐观、热爱生活的人。你喜欢新鲜事物，追求快乐和自由。你有丰富的想象力，善于发现机会。总能给周围的人带来正能量。',
    suggestion: '建议你在追求快乐的同时，也学会面对困难和承诺。尝试专注于一件事，避免过度分散精力。'
  },
  {
    id: 47,
    testId: 4,
    type: '8',
    name: '领袖型',
    title: '你是强势而保护型的支配者',
    analysis: '你是一个自信、果断、有影响力的人。你喜欢掌控局面，保护弱势群体。你有强大的意志力，敢于面对挑战和冲突。是天生的领导者和保护者。',
    suggestion: '建议你在展现力量的同时，也学会倾听他人的声音。尝试柔和一些，接受他人的帮助。'
  },
  {
    id: 48,
    testId: 4,
    type: '9',
    name: '和平型',
    title: '你是温和友善的和平缔造者',
    analysis: '你是一个平静、和善、富有同理心的人。你善于调解冲突，维护和谐的人际关系。你有耐心，能够接纳不同的观点。是团队中的润滑剂。',
    suggestion: '建议你在追求和平的同时，也要关注自己的需求和感受。学会表达不同的意见，不要总是迎合他人。'
  }
];

const oceanResults = [
  {
    id: 50,
    testId: 5,
    minScore: 20,
    maxScore: 25,
    dimension: 'E',
    title: '外向性：极强外向',
    analysis: '你是一个极度外向的人，喜欢与人交往，充满活力。你喜欢成为关注的中心，善于社交，容易结交新朋友。在群体活动中你会感到更加兴奋和有动力。',
    suggestion: '尝试给自己一些独处的时间，这有助于你更好地反思和成长。'
  },
  {
    id: 51,
    testId: 5,
    minScore: 15,
    maxScore: 19,
    dimension: 'E',
    title: '外向性：外向',
    analysis: '你是一个外向的人，喜欢与人互动。你善于社交，喜欢参加聚会和活动。从与他人的交往中获得能量和动力。',
    suggestion: '保持你活跃的社交生活，同时培养独处的能力。'
  },
  {
    id: 52,
    testId: 5,
    minScore: 10,
    maxScore: 14,
    dimension: 'E',
    title: '外向性：平衡',
    analysis: '你是一个平衡型的人，既能享受社交也能享受独处。你会根据情境和个人状态灵活调整社交程度。',
    suggestion: '继续保持这种平衡，了解什么时候需要社交，什么时候需要独处。'
  },
  {
    id: 53,
    testId: 5,
    minScore: 5,
    maxScore: 9,
    dimension: 'E',
    title: '外向性：内向',
    analysis: '你是一个内向的人，更喜欢安静的环境和独处。你从内省和独处中获得能量，但也能在必要 时进行社交。',
    suggestion: '尊重自己的内向倾向，同时适度参与社交活动。'
  },
  {
    id: 54,
    testId: 5,
    minScore: 20,
    maxScore: 25,
    dimension: 'N',
    title: '神经质：极低神经质',
    analysis: '你是一个情绪非常稳定的人，很少感到焦虑或情绪波动。你能很好地应对压力，保持冷静和理性。',
    suggestion: '你的情绪稳定性是你的优势，但也注意关注自己和他人的情感需求。'
  },
  {
    id: 55,
    testId: 5,
    minScore: 15,
    maxScore: 19,
    dimension: 'N',
    title: '神经质：情绪稳定',
    analysis: '你是一个情绪稳定的人，能较好地应对生活中的压力和挑战。虽然偶尔会感到焦虑，但总体上情绪波动不大。',
    suggestion: '继续保持健康的生活方式，如运动和充足的睡眠。'
  },
  {
    id: 56,
    testId: 5,
    minScore: 10,
    maxScore: 14,
    dimension: 'N',
    title: '神经质：中等',
    analysis: '你有一定的情绪波动，这是正常的心理反应。你会感到焦虑或沮丧，但能够通过各种方式调节自己的情绪。',
    suggestion: '学习更多情绪管理技巧，如冥想或心理咨询。'
  },
  {
    id: 57,
    testId: 5,
    minScore: 5,
    maxScore: 9,
    dimension: 'N',
    title: '神经质：较高神经质',
    analysis: '你比较敏感，容易感到焦虑和担忧。你可能会因为小事情而情绪波动，但你的敏感也让你更有同理心。',
    suggestion: '建议学习放松技巧，如深呼吸和正念冥想。必要时寻求专业帮助。'
  },
  {
    id: 58,
    testId: 5,
    minScore: 20,
    maxScore: 25,
    dimension: 'O',
    title: '开放性：极高开放性',
    analysis: '你是一个极具想象力和好奇心的人。你喜欢新事物和复杂的想法，对艺术和文化有浓厚的兴趣。你思维开放，善于接受不同的观点。',
    suggestion: '继续保持你的创造力和开放思维，将你的想象力转化为实际行动。'
  },
  {
    id: 59,
    testId: 5,
    minScore: 15,
    maxScore: 19,
    dimension: 'O',
    title: '开放性：高开放性',
    analysis: '你是一个思维开放的人，喜欢探索新想法。你有丰富的想象力，对艺术和美学有一定的欣赏力。你愿意尝试新的体验和方法。',
    suggestion: '继续培养你的创造力和好奇心，这会让你的生活更加丰富多彩。'
  },
  {
    id: 60,
    testId: 5,
    minScore: 10,
    maxScore: 14,
    dimension: 'O',
    title: '开放性：中等',
    analysis: '你是一个平衡型的人，既脚踏实地又保持开放。你能够接受新想法，但也会考虑实际可行性。你的思维方式既有创意又务实。',
    suggestion: '继续保持这种平衡，在创新和务实之间找到最佳点。'
  },
  {
    id: 61,
    testId: 5,
    minScore: 5,
    maxScore: 9,
    dimension: 'O',
    title: '开放性：传统',
    analysis: '你是一个务实、传统的人，更喜欢熟悉的事物和方式。你注重实际效果，对新想法持谨慎态度。你的稳定性是你的一大优势。',
    suggestion: '适度开放心态，尝试一些新事物可能会有惊喜。'
  },
  {
    id: 62,
    testId: 5,
    minScore: 20,
    maxScore: 25,
    dimension: 'A',
    title: '宜人性：极高宜人',
    analysis: '你是一个非常有爱心、善解人意的人。你信任他人，乐于助人，总是愿意站在别人的角度思考问题。你是很好的倾听者和朋友。',
    suggestion: '学会保护自己，不要过度付出。适度的自我保护是必要的。'
  },
  {
    id: 63,
    testId: 5,
    minScore: 15,
    maxScore: 19,
    dimension: 'A',
    title: '宜人性：高宜人',
    analysis: '你是一个友善、体贴的人，有良好的合作精神。你关心他人，善于处理人际关系。是一个值得信赖的朋友和同事。',
    suggestion: '继续保持你的善良，同时学会说"不"。'
  },
  {
    id: 64,
    testId: 5,
    minScore: 10,
    maxScore: 14,
    dimension: 'A',
    title: '宜人性：中等',
    analysis: '你是一个平衡型的人，既有自己的原则也能体谅他人。你能够在坚持自己和理解他人之间找到平衡。',
    suggestion: '继续培养你的同理心，同时保持自己的原则。'
  },
  {
    id: 65,
    testId: 5,
    minScore: 5,
    maxScore: 9,
    dimension: 'A',
    title: '宜人性：独立',
    analysis: '你是一个有主见、相对独立的人。你更注重实际利益，在人际交往中保持一定的距离。你的独立性是你的优势，但有时可能会显得冷漠。',
    suggestion: '适度培养同理心，加强人际连接会让你的生活更加丰富。'
  },
  {
    id: 66,
    testId: 5,
    minScore: 20,
    maxScore: 25,
    dimension: 'C',
    title: '尽责性：极高尽责',
    analysis: '你是一个极其负责任、有组织、有纪律的人。你工作勤奋，注重细节，总是按时完成任务。你是团队中最可靠的成员。',
    suggestion: '学会放松，接受不完美。过度要求自己可能会导致压力过大。'
  },
  {
    id: 67,
    testId: 5,
    minScore: 15,
    maxScore: 19,
    dimension: 'C',
    title: '尽责性：高尽责',
    analysis: '你是一个有责任心、有条理的人。你能够自律，完成自己的承诺。你注重工作效率和质量，是可靠的合作伙伴。',
    suggestion: '继续保持你的责任感，同时注意工作生活平衡。'
  },
  {
    id: 68,
    testId: 5,
    minScore: 10,
    maxScore: 14,
    dimension: 'C',
    title: '尽责性：中等',
    analysis: '你是一个平衡型的人，既有责任感又能灵活变通。你能够完成任务，但在时间管理上还有提升空间。',
    suggestion: '尝试使用一些时间管理工具，提高工作效率。'
  },
  {
    id: 69,
    testId: 5,
    minScore: 5,
    maxScore: 9,
    dimension: 'C',
    title: '尽责性：随意',
    analysis: '你是一个相对随意、灵活的人。你不喜欢被束缚，更喜欢自由地安排自己的时间和生活。你的适应能力很强。',
    suggestion: '适度培养责任感和条理性，这有助于你在生活和工作中取得更大的成就。'
  }
];

const discResults = [
  {
    id: 70,
    testId: 6,
    type: 'D',
    name: '支配型（领袖型）',
    title: '你是一个敢于行动的领导者',
    analysis: '你是一个有魄力、有决心、喜欢掌控局面的人。你果断直接，追求结果，不怕面对困难和冲突。你是天生的领导者，善于激励和推动他人。',
    suggestion: '建议你在展现领导力的同时，也学会倾听他人的意见。多关注团队成员的情绪和需求，你的独断可能会让一些人感到压力。学会适当放权，会让你的团队更加高效。',
    strengths: '自信、果断、领导力、执行力、决策力',
    careers: '企业管理、创业、销售、执法、政治'
  },
  {
    id: 71,
    testId: 6,
    type: 'I',
    name: '影响型（社交型）',
    title: '你是富有感染力的激励者',
    analysis: '你是一个热情、外向、善于交际的人。你喜欢成为关注的中心，善于用言语和情感影响他人。你的乐观和热情能够感染周围的人，是天生的激励者。',
    suggestion: '建议你在发挥影响力的同时，也要学会倾听和专注。在表达想法之前先理解他人的立场，学会接受建设性的批评。',
    strengths: '沟通能力、热情、影响力、乐观、人际交往',
    careers: '销售、市场营销、公关、教育、演艺'
  },
  {
    id: 72,
    testId: 6,
    type: 'S',
    name: '稳定型（支持型）',
    title: '你是值得信赖的守护者',
    analysis: '你是一个忠诚、可靠、有耐心的人。你重视稳定和安全感，善于支持他人。你做事踏实，注重细节，是团队中不可或缺的力量。你温和友善，人际关系和谐。',
    suggestion: '建议你在保持稳定性的同时，也勇于表达自己的观点和需求。学会说"不"，不要总是牺牲自己来满足他人。尝试接受变化，这会让你更加适应环境。',
    strengths: '忠诚、可靠、耐心、稳定、支持力',
    careers: '行政、人力资源、医疗、教育、社会工作'
  },
  {
    id: 73,
    testId: 6,
    type: 'C',
    name: '谨慎型（分析型）',
    title: '你是精确严谨的专业人士',
    analysis: '你是一个精确、有条理、注重细节的人。你善于分析问题，追求准确性和完美。你做事谨慎，注重规则和流程，是质量控制方面的专家。你的逻辑思维能力强。',
    suggestion: '建议你在追求精确的同时，也要学会灵活变通。过度追求完美可能会影响效率，有时候"足够好"就足够了。学会信任他人的工作，不要事事亲力亲为。',
    strengths: '精确、有条理、分析能力、专业、严谨',
    careers: '会计、金融、技术、法律、科研'
  }
];

const pdpResults = [
  {
    id: 80,
    testId: 7,
    type: '老虎',
    name: '支配型老虎',
    title: '你是有魄力的领袖者',
    analysis: '你是一个充满自信、敢于冒险、追求成就的人。你有强烈的领导欲望，喜欢掌控局面和做决策。你直接果断，行动迅速，是天生的领袖者。你喜欢挑战，享受竞争带来的刺激。',
    suggestion: '建议你在发挥领导力的同时，也要学会倾听团队成员的声音。尝试控制自己的急躁情绪，给自己和他人更多耐心。学会授权，不要事事亲力亲为。',
    strengths: '自信、果断、领导力、行动力、竞争力',
    careers: '企业管理、创业、投资、执法、政治'
  },
  {
    id: 81,
    testId: 7,
    type: '孔雀',
    name: '表达型孔雀',
    title: '你是魅力四射的社交明星',
    analysis: '你是一个热情洋溢、善于表达、喜欢成为焦点的人。你有很强的交际能力，能够轻松地与他人建立联系。你的乐观和幽默感染着周围的人，是派对的灵魂和团队的润滑剂。',
    suggestion: '建议你在发挥社交天赋的同时，也要学会专注和倾听。在表达之前先理解情况，不要急于表现。学会接受他人的反馈和建议。',
    strengths: '沟通能力、热情、影响力、乐观、社交技巧',
    careers: '销售、市场营销、公关、演艺、教育'
  },
  {
    id: 82,
    testId: 7,
    type: '考拉',
    name: '耐心型考拉',
    title: '你是温暖可靠的守护者',
    analysis: '你是一个忠诚、可靠、有耐心的人。你重视稳定和安全感，善于支持他人。你做事踏实稳定，注重承诺，是团队中最可信赖的成员。你温和友善，擅长维护和谐的人际关系。',
    suggestion: '建议你在保持耐心的同时，也要勇于表达自己的需求和观点。学会说"不"，不要总是牺牲自己来维持和平。尝试接受变化和挑战，这会让你成长。',
    strengths: '忠诚、可靠、耐心、稳定、善解人意',
    careers: '行政、人力资源、医疗、教育、社工'
  },
  {
    id: 83,
    testId: 7,
    type: '猫头鹰',
    name: '精确型猫头鹰',
    title: '你是严谨细致的专业者',
    analysis: '你是一个精确、有条理、追求完美的人。你善于分析问题，注重细节和质量。你做事谨慎，认真负责，不喜欢冒险。你是天生的问题解决者，擅长用逻辑和数据解决问题。',
    suggestion: '建议你在追求精确的同时，也要学会灵活变通。过度追求完美可能会导致拖延和压力。尝试放松标准，接受"足够好"的解决方案。学会信任他人的判断。',
    strengths: '精确、有条理、分析力、专业、严谨',
    careers: '会计、金融、技术、法律、科研、医疗'
  }
];

const epqResults = [
  {
    id: 90,
    testId: 8,
    type: 'E',
    name: '外向型',
    title: '你是典型外向型人格',
    analysis: '你是一个外向、开朗、善于社交的人。你喜欢与人交往，在群体活动中充满活力。你倾向于关注外部世界，容易适应新环境。',
    suggestion: '继续保持你活跃的社交生活，但也要学会享受独处的时间来反思和充电。'
  },
  {
    id: 91,
    testId: 8,
    type: 'I',
    name: '内向型',
    title: '你是典型内向型人格',
    analysis: '你是一个内敛、沉静、善于思考的人。你喜欢独处，在小圈子中更自在。你倾向于关注内心世界，有丰富的内心生活。',
    suggestion: '尊重你的内向倾向，但也不要完全回避社交，适当的社交有助于拓展视野。'
  },
  {
    id: 92,
    testId: 8,
    type: 'N',
    name: '情绪稳定型',
    title: '你情绪稳定，心态平和',
    analysis: '你是一个情绪稳定、不易焦虑的人。你能够较好地应对压力，保持冷静和理性。',
    suggestion: '你的情绪稳定性是你的优势，但也注意关注自己和他人的情感需求。'
  },
  {
    id: 93,
    testId: 8,
    type: 'P',
    name: '精神质偏高',
    title: '你可能有一些精神质特征',
    analysis: '你可能比较独立、有创意，但也可能表现出一些固执或不合群的特点。',
    suggestion: '建议发展同理心，学会理解他人的感受和观点。'
  }
];

const sixteenPFResults = [
  {
    id: 100,
    testId: 9,
    type: 'A',
    name: '乐群性',
    score: 'high',
    title: '你热情外向，乐于社交',
    analysis: '你开朗、友好、善于与人交往。你喜欢参与社交活动，容易与人建立联系。',
    suggestion: '你的社交能力是你的优势，但也要学会在必要时独处思考。'
  },
  {
    id: 101,
    testId: 9,
    type: 'C',
    name: '稳定性',
    score: 'high',
    title: '你情绪稳定，适应力强',
    analysis: '你情绪稳定，能够冷静面对压力和挑战。你有较强的自我控制能力。',
    suggestion: '继续保持这种稳定性，但也要关注他人的情感需求。'
  },
  {
    id: 102,
    testId: 9,
    type: 'E',
    name: '恃强性',
    score: 'high',
    title: '你自信独立，有主见',
    analysis: '你自信、有主见，喜欢指挥和领导。你有较强的竞争意识和成就动机。',
    suggestion: '建议在发挥领导力的同时，也要倾听他人的意见。'
  },
  {
    id: 103,
    testId: 9,
    type: 'F',
    name: '活泼性',
    score: 'high',
    title: '你轻松愉快，乐观开朗',
    analysis: '你乐观、轻松、有幽默感。你喜欢社交场合，乐于与人交流。',
    suggestion: '你的乐观态度有助于团队氛围，但也要学会处理严肃事务。'
  },
  {
    id: 104,
    testId: 9,
    type: 'G',
    name: '有恒性',
    score: 'high',
    title: '你责任心强，有恒负责',
    analysis: '你责任心强，做事有始有终。你遵守规则，重视承诺。',
    suggestion: '继续保持你的责任感，但也要学会灵活变通。'
  },
  {
    id: 105,
    testId: 9,
    type: 'H',
    name: '敢为性',
    score: 'high',
    title: '你冒险敢为，勇敢果断',
    analysis: '你大胆、勇敢、敢于冒险。你在社交场合能够自如表现。',
    suggestion: '你的勇气是你的优势，但要在行动前考虑后果。'
  },
  {
    id: 106,
    testId: 9,
    type: 'I',
    name: '敏感性',
    score: 'high',
    title: '你敏感细腻，富有同理心',
    analysis: '你敏感、富有想象力，有较强的同理心。你重视情感和审美体验。',
    suggestion: '你的敏感性是你的优势，但也要学会处理批评和挫折。'
  },
  {
    id: 107,
    testId: 9,
    type: 'L',
    name: '怀疑性',
    score: 'low',
    title: '你信任他人，易于相处',
    analysis: '你信任他人，善于与人和谐相处。你不太怀疑别人的动机。',
    suggestion: '你的信任态度有助于建立良好关系，但也要保持适度的警惕。'
  },
  {
    id: 108,
    testId: 9,
    type: 'M',
    name: '幻想性',
    score: 'high',
    title: '你富有想象，创意无限',
    analysis: '你富有想象力，思维活跃，有创意。你不满足于现状，喜欢探索可能性。',
    suggestion: '你的想象力是你的优势，但也要注重实际行动。'
  },
  {
    id: 109,
    testId: 9,
    type: 'N',
    name: '世故性',
    score: 'high',
    title: '你精明世故，洞察人心',
    analysis: '你精明、善于社交，能够客观分析问题。你了解人情世故，处理事务老练。',
    suggestion: '你的世故有助于社交，但也要保持真诚和单纯。'
  },
  {
    id: 110,
    testId: 9,
    type: 'O',
    name: '忧虑性',
    score: 'low',
    title: '你冷静沉着，自信乐观',
    analysis: '你冷静、自信、不易忧虑。你能够客观看待问题，不易受情绪影响。',
    suggestion: '你的冷静是你的优势，但也要关注他人的担忧。'
  },
  {
    id: 111,
    testId: 9,
    type: 'Q1',
    name: '实验性',
    score: 'high',
    title: '你思想开放，勇于创新',
    analysis: '你思想开放，喜欢尝试新事物。你不拘泥于传统，愿意接受新观念。',
    suggestion: '你的开放思想有助于创新，但也要尊重传统和规则。'
  },
  {
    id: 112,
    testId: 9,
    type: 'Q2',
    name: '独立性',
    score: 'high',
    title: '你独立自主，自立自强',
    analysis: '你独立、有主见，不依赖他人。你能够独立解决问题，做事果断。',
    suggestion: '你的独立性是你的优势，但也要学会团队合作。'
  },
  {
    id: 113,
    testId: 9,
    type: 'Q3',
    name: '自律性',
    score: 'high',
    title: '你自律严谨，言行一致',
    analysis: '你自律、有毅力，做事有计划。你能够控制自己的情绪和行为。',
    suggestion: '继续保持你的自律，但也要学会放松和灵活。'
  },
  {
    id: 114,
    testId: 9,
    type: 'Q4',
    name: '紧张性',
    score: 'low',
    title: '你心态平和，从容不迫',
    analysis: '你心态平和，不易紧张和焦虑。你能够冷静应对压力。',
    suggestion: '你的从容是你的优势，但也要保持适度的紧迫感。'
  }
];

const hollandResults = [
  {
    id: 120,
    testId: 10,
    type: 'R',
    name: '现实型',
    title: '你是务实的动手者',
    analysis: '你是一个务实、动手能力强的人。你喜欢实际操作和具体的工作任务。你善于使用工具和机械，喜欢户外活动。',
    suggestion: '建议选择技术性、操作性强的工作，如工程、技术、农业等。'
  },
  {
    id: 121,
    testId: 10,
    type: 'I',
    name: '研究型',
    title: '你是爱思考的研究者',
    analysis: '你是一个喜欢思考、善于分析的人。你对科学和学术研究有浓厚兴趣，喜欢解决复杂问题。',
    suggestion: '建议选择研究型、学术型的工作，如科研、教育、技术开发等。'
  },
  {
    id: 122,
    testId: 10,
    type: 'A',
    name: '艺术型',
    title: '你是富有创意的艺术家',
    analysis: '你是一个富有想象力、追求个性的人。你对艺术和创意表达有浓厚兴趣，喜欢自由创作。',
    suggestion: '建议选择艺术性、创意性的工作，如设计、艺术、写作、音乐等。'
  },
  {
    id: 123,
    testId: 10,
    type: 'S',
    name: '社会型',
    title: '你是热心的服务者',
    analysis: '你是一个热情、有同理心的人。你喜欢帮助他人，善于与人沟通和建立关系。',
    suggestion: '建议选择服务型、教育型的工作，如教育、医疗、社会工作、人力资源等。'
  },
  {
    id: 124,
    testId: 10,
    type: 'E',
    name: '企业型',
    title: '你是自信的领导者',
    analysis: '你是一个有影响力、喜欢领导他人的人。你有较强的说服力和组织能力，追求成就和权力。',
    suggestion: '建议选择管理型、销售型的工作，如企业管理、创业、销售、政治等。'
  },
  {
    id: 125,
    testId: 10,
    type: 'C',
    name: '常规型',
    title: '你是严谨的执行者',
    analysis: '你是一个务实、有条理、注重细节的人。你喜欢规范和秩序，擅长处理数据。',
    suggestion: '建议选择事务型、规整型的工作，如财务、行政、法律、数据分析等。'
  }
];

const jungResults = [
  {
    id: 130,
    testId: 11,
    type: 'INTJ',
    name: '建筑师型',
    title: '你是独立思考的战略家',
    analysis: '你是一个思维敏捷、逻辑性强的人。你善于制定长期战略，追求完美和效率。你独立思考，有主见。',
    suggestion: '建议选择需要战略思维和专业能力的领域，如科研、技术、金融等。'
  },
  {
    id: 131,
    testId: 11,
    type: 'INTP',
    name: '逻辑学家型',
    title: '你是热爱思考的探索者',
    analysis: '你是一个热爱思考、追求真理的人。你对逻辑和理论有浓厚兴趣，善于分析复杂问题。',
    suggestion: '建议选择学术研究、技术开发等需要深度思考的领域。'
  },
  {
    id: 132,
    testId: 11,
    type: 'ENTJ',
    name: '指挥官型',
    title: '你是果断自信的领导者',
    analysis: '你是一个天生具有领导才能的人。你思维敏捷，决策果断，善于从宏观角度分析问题。',
    suggestion: '建议选择管理、创业、法律等需要领导力的领域。'
  },
  {
    id: 133,
    testId: 11,
    type: 'ENTP',
    name: '辩论家型',
    title: '你是聪明好奇的创新者',
    analysis: '你是一个思维敏捷、好奇心强的人。你喜欢辩论和讨论各种观点，善于发现新的可能性。',
    suggestion: '建议选择需要创新能力和沟通能力的领域，如咨询、创业等。'
  },
  {
    id: 134,
    testId: 11,
    type: 'INFJ',
    name: '提倡者型',
    title: '你是富有洞察力的理想主义者',
    analysis: '你是一个思维深刻、富有洞察力的人。你有强烈的价值观和理想，对帮助他人充满热情。',
    suggestion: '建议选择心理咨询、社会工作、教育等帮助他人的领域。'
  },
  {
    id: 135,
    testId: 11,
    type: 'INFP',
    name: '调停者型',
    title: '你是理想主义的思想家',
    analysis: '你是一个浪漫、理想化、富有同理心的人。你重视内心的价值观，追求真实的自我表达。',
    suggestion: '建议选择写作、艺术、咨询等需要创意和同理心的领域。'
  },
  {
    id: 136,
    testId: 11,
    type: 'ENFJ',
    name: '主人公型',
    title: '你是温暖且有号召力的领导者',
    analysis: '你是一个充满热情、善于表达的人。你有很强的人际交往能力，能够激励他人实现共同目标。',
    suggestion: '建议选择教育、人力资源、公关等需要人际影响力的领域。'
  },
  {
    id: 137,
    testId: 11,
    type: 'ENFP',
    name: '竞选者型',
    title: '你是充满热情的创新者',
    analysis: '你是一个自由、热情、富有想象力的人。你思维活跃，创意无限，喜欢激励他人。',
    suggestion: '建议选择市场营销、创意行业、旅游等需要热情和创意的领域。'
  }
];

const sdsResults = [
  { id: 50, testId: 12, minScore: 25, maxScore: 53, name: '状态良好', title: '抑郁情绪评估：状态良好', analysis: '根据您的回答，您目前没有明显的情绪低落表现，心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，注意工作生活平衡，定期关注自己的心理健康。' },
  { id: 51, testId: 12, minScore: 53, maxScore: 63, name: '轻度情绪波动', title: '抑郁情绪评估：轻度情绪波动', analysis: '根据您的回答，您最近可能有一些情绪低落的表现，但整体可控。这些感受可能会影响您的心情。', suggestion: '建议您保持规律的作息，适当增加运动和社交活动，多与家人朋友交流，必要时寻求专业心理支持。' },
  { id: 52, testId: 12, minScore: 63, maxScore: 72, name: '中度情绪困扰', title: '抑郁情绪评估：中度情绪困扰', analysis: '根据您的回答，您最近可能感受到较多的情绪压力，这些感受可能会影响您的工作和社交状态。', suggestion: '建议您多关注自己的情绪健康，与信任的人交流感受，必要时寻求专业心理支持。保持规律的作息，适度的运动有助于改善情绪状态。' },
  { id: 53, testId: 12, minScore: 72, maxScore: 100, name: '重度情绪困扰', title: '抑郁情绪评估：重度情绪困扰', analysis: '根据您的回答，您最近的情绪状态可能不太好，已经明显影响到您的日常生活。', suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。多与家人朋友相处，告诉他们您的感受，必要时请他们陪伴您寻求帮助。' }
];

const sasResults = [
  { id: 60, testId: 13, minScore: 25, maxScore: 50, name: '状态良好', title: '焦虑情绪评估：状态良好', analysis: '根据您的回答，您目前没有明显的焦虑表现，心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，学会放松技巧，定期关注自己的心理健康。' },
  { id: 61, testId: 13, minScore: 50, maxScore: 60, name: '轻度情绪波动', title: '焦虑情绪评估：轻度情绪波动', analysis: '根据您的回答，您最近可能有一些紧张焦虑的表现，但整体可控。这些感受可能会影响您的心情。', suggestion: '建议您学习放松技巧，适当增加运动，保持规律的作息，多与家人朋友交流。' },
  { id: 62, testId: 13, minScore: 60, maxScore: 70, name: '中度情绪困扰', title: '焦虑情绪评估：中度情绪困扰', analysis: '根据您的回答，您最近可能感受到较多的焦虑压力，这些感受可能会影响您的日常生活。', suggestion: '建议您多关注自己的情绪健康，学习放松技巧，必要时寻求专业心理支持。保持规律的作息，适度的运动有助于缓解焦虑。' },
  { id: 63, testId: 13, minScore: 70, maxScore: 100, name: '重度情绪困扰', title: '焦虑情绪评估：重度情绪困扰', analysis: '根据您的回答，您最近的焦虑情绪可能比较严重，已经明显影响到您的日常生活。', suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。多与家人朋友相处，告诉他们您的感受，必要时请他们陪伴您寻求帮助。' }
];

const dass21Results = [
  { id: 70, testId: 14, minScore: 0, maxScore: 0, name: '状态良好', title: '心理状态评估：状态良好', analysis: '根据您的回答，您目前没有明显的情绪困扰，心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，注意工作生活平衡，定期关注自己的心理健康。' },
  { id: 71, testId: 14, minScore: 1, maxScore: 7, name: '轻度', title: '心理状态评估：轻度情绪波动', analysis: '根据您的回答，您最近可能有一些情绪上的困扰，包括偶尔的低落、紧张或压力感。', suggestion: '建议您保持规律的作息，适当增加运动和社交活动，多做自己喜欢的事情放松心情。' },
  { id: 72, testId: 14, minScore: 8, maxScore: 13, name: '中度', title: '心理状态评估：中度情绪困扰', analysis: '根据您的回答，您最近可能感受到较多的情绪压力，这些感受可能会影响您的日常生活和工作。', suggestion: '建议您多关注自己的情绪健康，与信任的人交流感受，必要时寻求专业心理支持。' },
  { id: 73, testId: 14, minScore: 14, maxScore: 20, name: '重度', title: '心理状态评估：重度情绪困扰', analysis: '根据您的回答，您最近的情绪状态可能不太好，已经明显影响到您的日常生活。', suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。多与家人朋友相处，告诉他们您的感受。' },
  { id: 74, testId: 14, minScore: 21, maxScore: 100, name: '极重度', title: '心理状态评估：极重度情绪困扰', analysis: '根据您的回答，您最近的情绪压力非常大，已经严重影响到您的日常生活，需要及时关注。', suggestion: '请务必尽快寻求专业心理支持，多与家人朋友相处，告诉他们您的感受，必要时请他们陪伴您寻求帮助。' }
];

const bdiResults = [
  { id: 80, testId: 15, minScore: 0, maxScore: 13, name: '状态良好', title: '抑郁情绪评估：状态良好', analysis: '根据您的回答，您目前没有明显的情绪低落表现，心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，定期关注自己的心理健康。' },
  { id: 81, testId: 15, minScore: 14, maxScore: 19, name: '轻度情绪波动', title: '抑郁情绪评估：轻度情绪波动', analysis: '根据您的回答，您最近可能有一些情绪低落的表现，但整体可控。', suggestion: '建议您保持规律的作息，适当增加运动和社交活动，多与家人朋友交流。' },
  { id: 82, testId: 15, minScore: 20, maxScore: 28, name: '中度情绪困扰', title: '抑郁情绪评估：中度情绪困扰', analysis: '根据您的回答，您最近可能感受到较多的情绪压力，这些感受可能会影响您的日常生活。', suggestion: '建议您多关注自己的情绪健康，与信任的人交流感受，必要时寻求专业心理支持。' },
  { id: 83, testId: 15, minScore: 29, maxScore: 63, name: '重度情绪困扰', title: '抑郁情绪评估：重度情绪困扰', analysis: '根据您的回答，您最近的情绪状态可能不太好，已经明显影响到您的日常生活。', suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。多与家人朋友相处，告诉他们您的感受，必要时请他们陪伴您寻求帮助。' }
];

const hamaResults = [
  { id: 90, testId: 16, minScore: 0, maxScore: 7, name: '状态良好', title: '焦虑情绪评估：状态良好', analysis: '根据您的回答，您目前没有明显的焦虑表现，心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，定期关注自己的心理健康。' },
  { id: 91, testId: 16, minScore: 8, maxScore: 14, name: '轻度情绪波动', title: '焦虑情绪评估：轻度情绪波动', analysis: '根据您的回答，您最近可能有一些紧张焦虑的表现，但整体可控。', suggestion: '建议您学习放松技巧，适当增加运动，保持规律的作息。' },
  { id: 92, testId: 16, minScore: 15, maxScore: 21, name: '中度情绪困扰', title: '焦虑情绪评估：中度情绪困扰', analysis: '根据您的回答，您最近可能感受到较多的焦虑压力，这些感受可能会影响您的日常生活。', suggestion: '建议您多关注自己的情绪健康，必要时寻求专业心理支持。' },
  { id: 93, testId: 16, minScore: 22, maxScore: 56, name: '重度情绪困扰', title: '焦虑情绪评估：重度情绪困扰', analysis: '根据您的回答，您最近的焦虑情绪可能比较严重，已经明显影响到您的日常生活。', suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。多与家人朋友相处，告诉他们您的感受。' }
];

const hamdResults = [
  { id: 100, testId: 17, minScore: 0, maxScore: 7, name: '状态良好', title: '抑郁情绪评估：状态良好', analysis: '根据您的回答，您目前没有明显的情绪低落表现，心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，定期关注自己的心理健康。' },
  { id: 101, testId: 17, minScore: 8, maxScore: 17, name: '轻度情绪波动', title: '抑郁情绪评估：轻度情绪波动', analysis: '根据您的回答，您最近可能有一些情绪低落的表现，但整体可控。', suggestion: '建议您保持规律的作息，适当增加运动和社交活动，多与家人朋友交流。' },
  { id: 102, testId: 17, minScore: 18, maxScore: 24, name: '中度情绪困扰', title: '抑郁情绪评估：中度情绪困扰', analysis: '根据您的回答，您最近可能感受到较多的情绪压力，这些感受可能会影响您的日常生活。', suggestion: '建议您多关注自己的情绪健康，与信任的人交流感受，必要时寻求专业心理支持。' },
  { id: 103, testId: 17, minScore: 25, maxScore: 68, name: '重度情绪困扰', title: '抑郁情绪评估：重度情绪困扰', analysis: '根据您的回答，您最近的情绪状态可能不太好，已经明显影响到您的日常生活。', suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。多与家人朋友相处，告诉他们您的感受，必要时请他们陪伴您寻求帮助。' }
];

const scl90Results = [
  { id: 110, testId: 18, minScore: 0, maxScore: 40, name: '状态良好', title: '心理状态评估：状态良好', analysis: '根据您的回答，您目前没有明显的情绪困扰，心理健康状况整体是良好的。', suggestion: '继续保持良好的生活习惯，定期关注自己的心理健康。' },
  { id: 111, testId: 18, minScore: 40, maxScore: 100, name: '轻度', title: '心理状态评估：轻度情绪波动', analysis: '根据您的回答，您最近可能有一些情绪上的困扰，偶尔会感到压力或不适，但整体可控。', suggestion: '建议您保持规律的作息，适当增加运动，学会放松技巧，多做自己喜欢的事情。' },
  { id: 112, testId: 18, minScore: 100, maxScore: 160, name: '中度', title: '心理状态评估：中度情绪困扰', analysis: '根据您的回答，您最近可能感受到较多的情绪压力，这些感受可能会影响您的日常生活和社交状态。', suggestion: '建议您多关注自己的情绪健康，与信任的人交流感受，必要时寻求专业心理支持。' },
  { id: 113, testId: 18, minScore: 160, maxScore: 450, name: '重度', title: '心理状态评估：重度情绪困扰', analysis: '根据您的回答，您最近的情绪压力非常大，已经明显影响到您的日常生活和社交状态。', suggestion: '请务必重视自己的情绪健康，尽快寻求专业心理支持。多与家人朋友相处，告诉他们您的感受，必要时请他们陪伴您寻求帮助。' }
];

const constellationResults = [
  { id: 114, testId: 19, type: 'fire', name: '火象星座特质', title: '你像狮子座一样充满热情', analysis: '你充满自信和热情，喜欢成为焦点。你性格乐观开朗，勇于追求自己的目标。', suggestion: '保持你的热情，但也学会倾听他人的意见。' },
  { id: 115, testId: 19, type: 'wind', name: '风象星座特质', title: '你像双子座一样灵活机智', analysis: '你善于社交，思维灵活，喜欢新鲜事物。你适应性强，能快速融入各种环境。', suggestion: '继续保持你的好奇心，但也要学会专注和坚持。' },
  { id: 116, testId: 19, type: 'water', name: '水象星座特质', title: '你像双鱼座一样敏感温柔', analysis: '你情感丰富，富有同理心，善于感知他人的情绪。你内心细腻，有艺术家的气质。', suggestion: '保持你的温柔，但也要学会保护自己的情感。' },
  { id: 117, testId: 19, type: 'earth', name: '土象星座特质', title: '你像金牛座一样稳重踏实', analysis: '你性格稳重，做事踏实，注重实际。你有耐心，能够一步一个脚印地实现目标。', suggestion: '保持你的稳重，偶尔也可以尝试一些新的冒险。' }
];

const careerResults = [
  { id: 118, testId: 20, type: 'creative', name: '创新型', title: '你适合创意类工作', analysis: '你富有创意，喜欢挑战新事物。你适合从事设计、策划、艺术创作等需要创意的工作。', suggestion: '可以多尝试创意相关的工作，发挥你的想象力。' },
  { id: 119, testId: 20, type: 'manage', name: '管理型', title: '你适合管理类工作', analysis: '你有领导能力，善于组织协调。你适合从事管理、销售、运营等需要领导力的工作。', suggestion: '可以多培养自己的管理能力，寻找有发展空间的平台。' },
  { id: 120, testId: 20, type: 'tech', name: '技术型', title: '你适合技术类工作', analysis: '你喜欢钻研，逻辑思维强。你适合从事技术研发、数据分析、编程等需要专业技能的工作。', suggestion: '可以深入学习某项专业技能，成为领域专家。' },
  { id: 121, testId: 20, type: 'service', name: '服务型', title: '你适合服务类工作', analysis: '你有同理心，善于与人沟通。你适合从事教育、咨询、医护等帮助他人的工作。', suggestion: '可以选择能帮助他人的工作，实现你的价值。' }
];

const relationshipResults = [
  { id: 122, testId: 21, type: 'social', name: '社交达人', title: '你是天生的社交高手', analysis: '你热情开朗，善于与人打交道，在社交场合总是如鱼得水。你能很快和陌生人成为朋友。', suggestion: '继续发挥你的社交优势，也要注意维系老朋友的关系。' },
  { id: 123, testId: 21, type: 'listener', name: '温柔倾听者', title: '你是很好的倾听者', analysis: '你温和耐心，善于倾听他人，是朋友们信赖的倾诉对象。你善于感知他人的情绪。', suggestion: '你的温柔是你的优势，也要记得照顾自己的情绪。' },
  { id: 124, testId: 21, type: 'easygoing', name: '随缘社交者', title: '你喜欢顺其自然的社交', analysis: '你不刻意社交，但遇到志同道合的人会很投缘。你重视人际关系的质量而非数量。', suggestion: '保持你的随缘心态，遇到喜欢的人也要主动一点。' },
  { id: 125, testId: 21, type: 'alone', name: '独处爱好者', title: '你更享受独处时光', analysis: '你性格偏内向，喜欢独处，享受自己的空间。你对人际关系更看重深度而非广度。', suggestion: '独处是很好的充电方式，适当的社交也会让你有收获。' }
];

function calculateConstellationResult(answers) {
  let fire = 0, wind = 0, water = 0, earth = 0;
  const constellationQuestions = mockQuestions.filter(q => q.testId === 19).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = constellationQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        if (option.score === 1) fire++;
        else if (option.score === 2) wind++;
        else if (option.score === 3) water++;
        else if (option.score === 4) earth++;
      }
    }
  }
  let maxType = 'fire';
  let result = constellationResults[0];
  let maxCount = fire;
  if (wind > maxCount) { maxType = 'wind'; result = constellationResults[1]; maxCount = wind; }
  if (water > maxCount) { maxType = 'water'; result = constellationResults[2]; maxCount = water; }
  if (earth > maxCount) { maxType = 'earth'; result = constellationResults[3]; maxCount = earth; }
  return { type: maxType, result: result, score: { fire, wind, water, earth } };
}

function calculateCareerResult(answers) {
  let creative = 0, manage = 0, tech = 0, service = 0;
  const careerQuestions = mockQuestions.filter(q => q.testId === 20).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = careerQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        if (option.score === 1) creative++;
        else if (option.score === 2) manage++;
        else if (option.score === 3) tech++;
        else if (option.score === 4) service++;
      }
    }
  }
  let maxType = 'creative';
  let result = careerResults[0];
  let maxCount = creative;
  if (manage > maxCount) { maxType = 'manage'; result = careerResults[1]; maxCount = manage; }
  if (tech > maxCount) { maxType = 'tech'; result = careerResults[2]; maxCount = tech; }
  if (service > maxCount) { maxType = 'service'; result = careerResults[3]; maxCount = service; }
  return { type: maxType, result: result, score: { creative, manage, tech, service } };
}

function calculateRelationshipResult(answers) {
  let social = 0, listener = 0, easygoing = 0, alone = 0;
  const relationQuestions = mockQuestions.filter(q => q.testId === 21).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = relationQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        if (option.score === 1) social++;
        else if (option.score === 2) listener++;
        else if (option.score === 3) easygoing++;
        else if (option.score === 4) alone++;
      }
    }
  }
  let maxType = 'social';
  let result = relationshipResults[0];
  let maxCount = social;
  if (listener > maxCount) { maxType = 'listener'; result = relationshipResults[1]; maxCount = listener; }
  if (easygoing > maxCount) { maxType = 'easygoing'; result = relationshipResults[2]; maxCount = easygoing; }
  if (alone > maxCount) { maxType = 'alone'; result = relationshipResults[3]; maxCount = alone; }
  return { type: maxType, result: result, score: { social, listener, easygoing, alone } };
}

function calculateEPQResult(answers) {
  let E = 0, N = 0, P = 0, L = 0;
  const epqQuestions = mockQuestions.filter(q => q.testId === 8).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = epqQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        if (option.score === 'E') E++;
        else if (option.score === 'N') N++;
        else if (option.score === 'P') P++;
        else if (option.score === 'L') L++;
      }
    }
  }

  let type = 'E';
  let result = epqResults[0];
  if (N > E) {
    type = 'N';
    result = epqResults[2];
  }

  return {
    type: type,
    result: result,
    score: { E, N, P, L }
  };
}

function calculate16PFResult(answers) {
  const factors = {
    A: 0, C: 0, E: 0, F: 0, G: 0, H: 0, I: 0, L: 0,
    M: 0, N: 0, O: 0, Q1: 0, Q2: 0, Q3: 0, Q4: 0
  };
  const pf16Questions = mockQuestions.filter(q => q.testId === 9).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = pf16Questions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option && option.score) {
        factors[option.score]++;
      }
    }
  }

  const maxFactor = Object.keys(factors).reduce((a, b) => factors[a] > factors[b] ? a : b, 'A');
  const result = sixteenPFResults.find(r => r.type === maxFactor) || sixteenPFResults[0];

  return {
    type: maxFactor,
    result: result,
    score: factors
  };
}

function calculateHollandResult(answers) {
  const types = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const hollandQuestions = mockQuestions.filter(q => q.testId === 10).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = hollandQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option && option.score) {
        types[option.score]++;
      }
    }
  }

  let maxType = 'R';
  let maxCount = 0;
  for (const type in types) {
    if (types[type] > maxCount) {
      maxCount = types[type];
      maxType = type;
    }
  }

  const result = hollandResults.find(r => r.type === maxType) || hollandResults[0];

  return {
    type: maxType,
    result: result,
    score: types
  };
}

function calculateJungResult(answers) {
  let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
  const jungQuestions = mockQuestions.filter(q => q.testId === 11).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = jungQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option && option.score) {
        const score = option.score;
        if (score === 'E') E++;
        else if (score === 'I') I++;
        else if (score === 'S') S++;
        else if (score === 'N') N++;
        else if (score === 'T') T++;
        else if (score === 'F') F++;
        else if (score === 'J') J++;
        else if (score === 'P') P++;
      }
    }
  }

  let jungType = '';
  jungType += E >= I ? 'E' : 'I';
  jungType += S >= N ? 'S' : 'N';
  jungType += T >= F ? 'T' : 'F';
  jungType += J >= P ? 'J' : 'P';

  const result = jungResults.find(r => r.type === jungType) || jungResults[0];

  return {
    type: jungType,
    result: result,
    score: { E, I, S, N, T, F, J, P }
  };
}

function calculateSDSResult(answers) {
  const sdsQuestions = mockQuestions.filter(q => q.testId === 12).sort((a, b) => a.sortOrder - b.sortOrder);
  let totalScore = 0;

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = sdsQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
    }
  }

  const standardScore = Math.round((totalScore - 20) * 1.25);

  let result = sdsResults[0];
  for (let i = sdsResults.length - 1; i >= 0; i--) {
    if (standardScore >= sdsResults[i].minScore) {
      result = sdsResults[i];
      break;
    }
  }

  return {
    totalScore: standardScore,
    result: result,
    score: standardScore
  };
}

function calculateSASResult(answers) {
  let totalScore = 0;

  // 获取所有SAS测试的问题，并按顺序排序
  const sasQuestions = mockQuestions
    .filter(q => q.testId === 13)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // 按顺序匹配答案和问题
  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    if (i < sasQuestions.length) {
      const question = sasQuestions[i];
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
    }
  }

  const standardScore = Math.round((totalScore - 20) * 1.25);

  let result = sasResults[0];
  for (let i = sasResults.length - 1; i >= 0; i--) {
    if (standardScore >= sasResults[i].minScore) {
      result = sasResults[i];
      break;
    }
  }

  return {
    totalScore: standardScore,
    result: result,
    score: standardScore
  };
}

function calculateDASS21Result(answers) {
  let totalScore = 0;

  // 获取所有DASS-21测试的问题，并按顺序排序
  const dass21Questions = mockQuestions
    .filter(q => q.testId === 14)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // 按顺序匹配答案和问题
  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    if (i < dass21Questions.length) {
      const question = dass21Questions[i];
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
    }
  }

  let result = dass21Results[0];
  if (totalScore >= 21) result = dass21Results[4];
  else if (totalScore >= 14) result = dass21Results[3];
  else if (totalScore >= 8) result = dass21Results[2];
  else if (totalScore >= 1) result = dass21Results[1];

  return {
    totalScore: totalScore,
    result: result,
    score: totalScore
  };
}

function calculateBDIResult(answers) {
  let totalScore = 0;

  // 获取所有BDI测试的问题，并按顺序排序
  const bdiQuestions = mockQuestions
    .filter(q => q.testId === 15)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // 按顺序匹配答案和问题
  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    if (i < bdiQuestions.length) {
      const question = bdiQuestions[i];
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
    }
  }

  let result = bdiResults[0];
  for (let i = bdiResults.length - 1; i >= 0; i--) {
    if (totalScore >= bdiResults[i].minScore) {
      result = bdiResults[i];
      break;
    }
  }

  return {
    totalScore: totalScore,
    result: result,
    score: totalScore
  };
}

function calculateHAMAResult(answers) {
  let totalScore = 0;

  // 获取所有HAMA测试的问题，并按顺序排序
  const hamaQuestions = mockQuestions
    .filter(q => q.testId === 16)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // 按顺序匹配答案和问题
  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    if (i < hamaQuestions.length) {
      const question = hamaQuestions[i];
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
    }
  }

  let result = hamaResults[0];
  for (let i = hamaResults.length - 1; i >= 0; i--) {
    if (totalScore >= hamaResults[i].minScore) {
      result = hamaResults[i];
      break;
    }
  }

  return {
    totalScore: totalScore,
    result: result,
    score: totalScore
  };
}

function calculateHAMDResult(answers) {
  let totalScore = 0;

  // 获取所有HAMD测试的问题，并按顺序排序
  const hamdQuestions = mockQuestions
    .filter(q => q.testId === 17)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // 按顺序匹配答案和问题
  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    if (i < hamdQuestions.length) {
      const question = hamdQuestions[i];
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
    }
  }

  let result = hamdResults[0];
  for (let i = hamdResults.length - 1; i >= 0; i--) {
    if (totalScore >= hamdResults[i].minScore) {
      result = hamdResults[i];
      break;
    }
  }

  return {
    totalScore: totalScore,
    result: result,
    score: totalScore
  };
}

function calculateSCL90Result(answers) {
  let totalScore = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  
  const scl90Questions = mockQuestions
    .filter(q => q.testId === 18)
    .sort((a, b) => a.sortOrder - b.sortOrder);
  
  const factorScores = {
    somatization: 0,
    obsessive: 0,
    interpersonal: 0,
    depression: 0,
    anxiety: 0,
    hostility: 0,
    phobic: 0,
    paranoid: 0,
    psychotic: 0,
    other: 0
  };
  
  const factorCounts = {
    somatization: 12,
    obsessive: 10,
    interpersonal: 9,
    depression: 13,
    anxiety: 10,
    hostility: 6,
    phobic: 7,
    paranoid: 6,
    psychotic: 10,
    other: 7
  };
  
  const factorQuestions = {
    somatization: [1, 4, 12, 27, 40, 42, 48, 49, 52, 53, 56, 58],
    obsessive: [3, 9, 10, 28, 38, 45, 46, 51, 55, 65],
    interpersonal: [6, 21, 34, 36, 37, 41, 61, 69, 73],
    depression: [5, 14, 15, 20, 22, 26, 29, 30, 31, 32, 54, 71, 79],
    anxiety: [2, 17, 23, 33, 39, 57, 72, 78, 80, 86],
    hostility: [11, 24, 63, 67, 74, 81],
    phobic: [13, 25, 47, 50, 70, 75, 82],
    paranoid: [8, 18, 43, 68, 76, 83],
    psychotic: [7, 16, 35, 62, 77, 84, 85, 87, 88, 90],
    other: [19, 44, 59, 60, 64, 66, 89]
  };
  
  const factorAnswers = {};
  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    if (i < scl90Questions.length) {
      const question = scl90Questions[i];
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        const score = option.score;
        totalScore += score;
        
        if (score >= 2) positiveCount++;
        else negativeCount++;
        
        const questionNumber = i + 1;
        for (const [factor, questions] of Object.entries(factorQuestions)) {
          if (questions.includes(questionNumber)) {
            factorScores[factor] += score;
            break;
          }
        }
      }
    }
  }
  
  const factorAverages = {};
  for (const [factor, score] of Object.entries(factorScores)) {
    factorAverages[factor] = Math.round((score / factorCounts[factor]) * 10) / 10;
  }
  
  const totalAverage = Math.round((totalScore / 90) * 10) / 10;
  const positiveAverage = positiveCount > 0 ? Math.round(((totalScore - negativeCount) / positiveCount) * 10) / 10 : 0;
  
  let result = scl90Results[0];
  if (totalScore >= 160) result = scl90Results[3];
  else if (totalScore >= 100) result = scl90Results[2];
  else if (totalScore >= 40) result = scl90Results[1];
  
  return {
    totalScore: totalScore,
    totalAverage: totalAverage,
    positiveCount: positiveCount,
    negativeCount: negativeCount,
    positiveAverage: positiveAverage,
    factorScores: factorScores,
    factorAverages: factorAverages,
    result: result,
    score: totalScore
  };
}

function getQuestionsByTestId(testId) {
  return mockQuestions.filter(q => q.testId === testId);
}

function getMBTIQuestions(testId) {
  return mockQuestions.filter(q => q.testId === testId);
}

function calculateMBTIResult(answers, testId = 1) {
  let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;

  const questions = getMBTIQuestions(testId);

  for (let i = 0; i < questions.length && i < answers.length; i++) {
    const answerId = answers[i];
    const question = questions[i];
    const option = question.options.find(o => o.id === answerId);

    if (option) {
      const score = option.score;
      if (score === 'E') E++;
      else if (score === 'I') I++;
      else if (score === 'S') S++;
      else if (score === 'N') N++;
      else if (score === 'T') T++;
      else if (score === 'F') F++;
      else if (score === 'J') J++;
      else if (score === 'P') P++;
    }
  }

  let mbtiType = '';
  mbtiType += E >= I ? 'E' : 'I';
  mbtiType += S >= N ? 'S' : 'N';
  mbtiType += T >= F ? 'T' : 'F';
  mbtiType += J >= P ? 'J' : 'P';

  const result = mbtiResults.find(r => r.type === mbtiType) || mbtiResults[0];

  return {
    type: mbtiType,
    result: result,
    score: { E, I, S, N, T, F, J, P }
  };
}

function calculatePHQ9Result(answers) {
  let totalScore = 0;

  // 获取所有PHQ-9的问题，并按顺序排序
  const phq9Questions = mockQuestions
    .filter(q => q.testId === 2)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // 按顺序匹配答案和问题
  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    if (i < phq9Questions.length) {
      const question = phq9Questions[i];
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
    }
  }

  let result = phq9Results[0];
  for (let i = phq9Results.length - 1; i >= 0; i--) {
    if (totalScore >= phq9Results[i].minScore) {
      result = phq9Results[i];
      break;
    }
  }

  return {
    totalScore: totalScore,
    result: result,
    score: totalScore
  };
}

function calculateFunResult(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  const funQuestions = mockQuestions.filter(q => q.testId === 3).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = funQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        counts[option.score]++;
      }
    }
  }

  let maxType = 'A';
  let maxCount = 0;
  for (const type in counts) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      maxType = type;
    }
  }

  const result = funResults.find(r => r.type === maxType) || funResults[0];

  return {
    type: maxType,
    result: result,
    score: counts
  };
}

function calculateEnneagramResult(answers) {
  const counts = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 };
  const enneagramQuestions = mockQuestions.filter(q => q.testId === 4).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = enneagramQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        counts[option.score]++;
      }
    }
  }

  let maxType = '1';
  let maxCount = 0;
  for (const type in counts) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      maxType = type;
    }
  }

  const result = enneagramResults.find(r => r.type === maxType) || enneagramResults[0];

  return {
    type: maxType,
    result: result,
    score: counts
  };
}

function calculateOCEANResult(answers) {
  const dimensions = {
    E: 0, N: 0, O: 0, A: 0, C: 0
  };
  const oceanQuestions = mockQuestions.filter(q => q.testId === 5).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = oceanQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option && question.dimension) {
        const dim = question.dimension;
        if (dimensions.hasOwnProperty(dim)) {
          dimensions[dim] += option.score;
        }
      }
    }
  }

  const results = [];
  for (const dim in dimensions) {
    const score = dimensions[dim];
    const result = oceanResults.find(r => r.dimension === dim && score >= r.minScore && score <= r.maxScore);
    results.push({
      dimension: dim,
      score: score,
      analysis: result || oceanResults.find(r => r.dimension === dim)
    });
  }

  const mainType = results.reduce((max, r) => r.score > max.score ? r : max, results[0]);

  return {
    type: mainType.dimension,
    result: mainType.analysis,
    score: dimensions,
    allResults: results
  };
}

function calculateDISCResult(answers) {
  const counts = { D: 0, I: 0, S: 0, C: 0 };
  const discQuestions = mockQuestions.filter(q => q.testId === 6).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = discQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        counts[option.score]++;
      }
    }
  }

  let maxType = 'D';
  let maxCount = 0;
  for (const type in counts) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      maxType = type;
    }
  }

  const result = discResults.find(r => r.type === maxType) || discResults[0];

  return {
    type: maxType,
    result: result,
    score: counts
  };
}

function calculatePDPResult(answers) {
  const counts = { '老虎': 0, '孔雀': 0, '考拉': 0, '猫头鹰': 0 };
  const pdpQuestions = mockQuestions.filter(q => q.testId === 7).sort((a, b) => a.sortOrder - b.sortOrder);

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const question = pdpQuestions[i];
    if (question) {
      const option = question.options.find(o => o.id === answerId);
      if (option) {
        counts[option.score]++;
      }
    }
  }

  let maxType = '老虎';
  let maxCount = 0;
  for (const type in counts) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      maxType = type;
    }
  }

  const result = pdpResults.find(r => r.type === maxType) || pdpResults[0];

  return {
    type: maxType,
    result: result,
    score: counts
  };
}

function calculateResult(testId, answers) {
  // 直接使用原来的计算函数，确保计算逻辑正确
  if (testId === 1 || testId === 22) return calculateMBTIResult(answers, testId);
  if (testId === 2) return calculatePHQ9Result(answers);
  if (testId === 3) return calculateFunResult(answers);
  if (testId === 4) return calculateEnneagramResult(answers);
  if (testId === 5) return calculateOCEANResult(answers);
  if (testId === 6) return calculateDISCResult(answers);
  if (testId === 7) return calculatePDPResult(answers);
  if (testId === 8) return calculateEPQResult(answers);
  if (testId === 9) return calculate16PFResult(answers);
  if (testId === 10) return calculateHollandResult(answers);
  if (testId === 11) return calculateJungResult(answers);
  if (testId === 12) return calculateSDSResult(answers);
  if (testId === 13) return calculateSASResult(answers);
  if (testId === 14) return calculateDASS21Result(answers);
  if (testId === 15) return calculateBDIResult(answers);
  if (testId === 16) return calculateHAMAResult(answers);
  if (testId === 17) return calculateHAMDResult(answers);
  if (testId === 18) return calculateSCL90Result(answers);
  if (testId === 19) return calculateConstellationResult(answers);
  if (testId === 20) return calculateCareerResult(answers);
  if (testId === 21) return calculateRelationshipResult(answers);
  return { type: mbtiResults[0].type, name: mbtiResults[0].name };
}

module.exports = {
  mockCategories,
  mockTests,
  mockQuestions,
  mbtiResults,
  phq9Results,
  funResults,
  enneagramResults,
  oceanResults,
  discResults,
  pdpResults,
  epqResults,
  sixteenPFResults,
  hollandResults,
  jungResults,
  sdsResults,
  sasResults,
  dass21Results,
  bdiResults,
  hamaResults,
  hamdResults,
  scl90Results,
  constellationResults,
  careerResults,
  relationshipResults,
  getQuestionsByTestId,
  calculateResult,
  calculateMBTIResult,
  calculatePHQ9Result,
  calculateFunResult,
  calculateEnneagramResult,
  calculateOCEANResult,
  calculateDISCResult,
  calculatePDPResult,
  calculateEPQResult,
  calculate16PFResult,
  calculateHollandResult,
  calculateJungResult,
  calculateSDSResult,
  calculateSASResult,
  calculateDASS21Result,
  calculateBDIResult,
  calculateHAMAResult,
  calculateHAMDResult,
  calculateSCL90Result,
  calculateConstellationResult,
  calculateCareerResult,
  calculateRelationshipResult
};
