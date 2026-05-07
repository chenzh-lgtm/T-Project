
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'mock-data.js');
const content = fs.readFileSync(filePath, 'utf8');

// 备份原文件
fs.writeFileSync(filePath + '.backup_mental_health', content);

// 添加测试项目到mockTests数组
const testsToAdd = `
  {
    id: 12,
    categoryId: 2,
    name: 'SDS抑郁自评量表',
    description: 'Zung氏抑郁自评量表，评估您的抑郁状态',
    coverImage: '/images/test-sds.png',
    emoji: '💙',
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
    emoji: '💛',
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
    emoji: '💜',
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
    emoji: '💚',
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
    emoji: '❤️',
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
    emoji: '💗',
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
  }
`;

let newContent = content.replace(
  /(\s+\{[\s\S]+?id: 11[\s\S]+?\}\s+)\];(\s+const mockQuestions)/,
  '$1' + testsToAdd + '];$2'
);

// 添加SDS和SAS题目
const sdsQuestions = `
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
  { id: 540, testId: 13, content: '我做噩梦', type: 3, sortOrder: 20, options: [{ id: 5401, content: '没有或很少时间', score: 1 }, { id: 5402, content: '小部分时间', score: 2 }, { id: 5403, content: '相当多时间', score: 3 }, { id: 5404, content: '绝大部分或全部时间', score: 4 }] }
`;

newContent = newContent.replace(
  /(\{ id: 478[\s\S]+?\}\s+)\];(\s+const mbtiResults)/,
  '$1' + sdsQuestions + '];$2'
);

// 添加结果模板
const resultTemplates = `
const sdsResults = [
  { id: 50, testId: 12, minScore: 25, maxScore: 53, name: '正常', title: '您的抑郁状态正常', analysis: '根据您的回答，您目前没有明显的抑郁症状。您的心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，注意工作生活平衡，定期关注自己的心理健康。' },
  { id: 51, testId: 12, minScore: 53, maxScore: 63, name: '轻度抑郁', title: '您有轻度抑郁症状', analysis: '根据您的回答，您目前有轻度的抑郁症状。这些症状可能会影响您的心情，但整体可控。', suggestion: '建议您保持规律的作息，适当增加运动和社交活动，必要时寻求心理咨询帮助。' },
  { id: 52, testId: 12, minScore: 63, maxScore: 72, name: '中度抑郁', title: '您有中度抑郁症状', analysis: '根据您的回答，您目前有中度的抑郁症状。这些症状可能会影响您的日常生活和工作。', suggestion: '建议您尽快寻求专业的心理咨询或治疗。同时，保持规律的作息，适度的运动。' },
  { id: 53, testId: 12, minScore: 72, maxScore: 100, name: '重度抑郁', title: '您有重度抑郁症状', analysis: '根据您的回答，您目前有重度的抑郁症状。这些症状已经严重影响到您的日常生活。', suggestion: '请立即联系专业的心理或精神科医生。您的症状可能需要药物治疗和心理治疗相结合。' }
];

const sasResults = [
  { id: 60, testId: 13, minScore: 25, maxScore: 50, name: '正常', title: '您的焦虑状态正常', analysis: '根据您的回答，您目前没有明显的焦虑症状。您的心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，学会放松技巧，定期关注自己的心理健康。' },
  { id: 61, testId: 13, minScore: 50, maxScore: 60, name: '轻度焦虑', title: '您有轻度焦虑症状', analysis: '根据您的回答，您目前有轻度的焦虑症状。这些症状可能会影响您的心情，但整体可控。', suggestion: '建议您学习放松技巧，适当增加运动，保持规律的作息。' },
  { id: 62, testId: 13, minScore: 60, maxScore: 70, name: '中度焦虑', title: '您有中度焦虑症状', analysis: '根据您的回答，您目前有中度的焦虑症状。这些症状可能会影响您的日常生活。', suggestion: '建议您尽快寻求专业的心理咨询或治疗。同时，学习放松技巧。' },
  { id: 63, testId: 13, minScore: 70, maxScore: 100, name: '重度焦虑', title: '您有重度焦虑症状', analysis: '根据您的回答，您目前有重度的焦虑症状。这些症状已经严重影响到您的日常生活。', suggestion: '请立即联系专业的心理或精神科医生。您的症状可能需要专业的治疗。' }
];

const dass21Results = [
  { id: 70, testId: 14, name: '正常', title: '您的心理健康状态正常', analysis: '根据您的回答，您目前没有明显的抑郁、焦虑或压力症状。您的心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，注意工作生活平衡。' },
  { id: 71, testId: 14, name: '轻度', title: '您有轻度心理困扰', analysis: '根据您的回答，您目前有轻度的抑郁、焦虑或压力症状。这些症状可能会影响您的心情。', suggestion: '建议您保持规律的作息，适当增加运动和社交活动。' },
  { id: 72, testId: 14, name: '中度', title: '您有中度心理困扰', analysis: '根据您的回答，您目前有中度的抑郁、焦虑或压力症状。这些症状可能会影响您的日常生活。', suggestion: '建议您尽快寻求专业的心理咨询或治疗。' },
  { id: 73, testId: 14, name: '重度', title: '您有重度心理困扰', analysis: '根据您的回答，您目前有重度的抑郁、焦虑或压力症状。这些症状已经严重影响到您的日常生活。', suggestion: '请立即联系专业的心理或精神科医生。' },
  { id: 74, testId: 14, name: '极重度', title: '您有极重度心理困扰', analysis: '根据您的回答，您目前有极重度的抑郁、焦虑或压力症状。这些症状已经严重影响到您的日常生活，需要立即干预。', suggestion: '请立即联系专业的心理或精神科医生，您需要专业的治疗。' }
];

const bdiResults = [
  { id: 80, testId: 15, minScore: 0, maxScore: 13, name: '正常', title: '您的抑郁状态正常', analysis: '根据您的回答，您目前没有明显的抑郁症状。您的心理状态整体是健康的。', suggestion: '继续保持良好的生活习惯，定期关注自己的心理健康。' },
  { id: 81, testId: 15, minScore: 14, maxScore: 19, name: '轻度抑郁', title: '您有轻度抑郁症状', analysis: '根据您的回答，您目前有轻度的抑郁症状。', suggestion: '建议您保持规律的作息，适当增加运动和社交活动。' },
  { id: 82, testId: 15, minScore: 20, maxScore: 28, name: '中度抑郁', title: '您有中度抑郁症状', analysis: '根据您的回答，您目前有中度的抑郁症状。', suggestion: '建议您尽快寻求专业的心理咨询或治疗。' },
  { id: 83, testId: 15, minScore: 29, maxScore: 63, name: '重度抑郁', title: '您有重度抑郁症状', analysis: '根据您的回答，您目前有重度的抑郁症状。', suggestion: '请立即联系专业的心理或精神科医生。' }
];

const hamaResults = [
  { id: 90, testId: 16, minScore: 0, maxScore: 7, name: '正常', title: '您的焦虑状态正常', analysis: '根据您的回答，您目前没有明显的焦虑症状。', suggestion: '继续保持良好的生活习惯。' },
  { id: 91, testId: 16, minScore: 8, maxScore: 14, name: '轻度焦虑', title: '您有轻度焦虑症状', analysis: '根据您的回答，您目前有轻度的焦虑症状。', suggestion: '建议您学习放松技巧。' },
  { id: 92, testId: 16, minScore: 15, maxScore: 21, name: '中度焦虑', title: '您有中度焦虑症状', analysis: '根据您的回答，您目前有中度的焦虑症状。', suggestion: '建议您寻求专业的心理咨询。' },
  { id: 93, testId: 16, minScore: 22, maxScore: 56, name: '重度焦虑', title: '您有重度焦虑症状', analysis: '根据您的回答，您目前有重度的焦虑症状。', suggestion: '请立即联系专业的心理或精神科医生。' }
];

const hamdResults = [
  { id: 100, testId: 17, minScore: 0, maxScore: 7, name: '正常', title: '您的抑郁状态正常', analysis: '根据您的回答，您目前没有明显的抑郁症状。', suggestion: '继续保持良好的生活习惯。' },
  { id: 101, testId: 17, minScore: 8, maxScore: 17, name: '轻度抑郁', title: '您有轻度抑郁症状', analysis: '根据您的回答，您目前有轻度的抑郁症状。', suggestion: '建议您保持规律的作息。' },
  { id: 102, testId: 17, minScore: 18, maxScore: 24, name: '中度抑郁', title: '您有中度抑郁症状', analysis: '根据您的回答，您目前有中度的抑郁症状。', suggestion: '建议您寻求专业的心理咨询。' },
  { id: 103, testId: 17, minScore: 25, maxScore: 68, name: '重度抑郁', title: '您有重度抑郁症状', analysis: '根据您的回答，您目前有重度的抑郁症状。', suggestion: '请立即联系专业的心理或精神科医生。' }
];

const scl90Results = [
  { id: 110, testId: 18, name: '正常', title: '您的心理健康状况良好', analysis: '根据您的回答，您目前没有明显的心理症状。您的心理健康状况整体是良好的。', suggestion: '继续保持良好的生活习惯，定期关注自己的心理健康。' },
  { id: 111, testId: 18, name: '轻度', title: '您有轻度心理困扰', analysis: '根据您的回答，您目前有一些轻度的心理困扰。这些困扰可能会影响您的心情，但整体可控。', suggestion: '建议您保持规律的作息，适当增加运动，学会放松技巧。' },
  { id: 112, testId: 18, name: '中度', title: '您有中度心理困扰', analysis: '根据您的回答，您目前有中度的心理困扰。这些困扰可能会影响您的日常生活和社会功能。', suggestion: '建议您尽快寻求专业的心理咨询或治疗。' },
  { id: 113, testId: 18, name: '重度', title: '您有重度心理困扰', analysis: '根据您的回答，您目前有重度的心理困扰。这些困扰已经严重影响到您的日常生活和社会功能。', suggestion: '请立即联系专业的心理或精神科医生。您的症状需要专业的治疗。' }
];
`;

newContent = newContent.replace(
  /(const jungResults = \[[\s\S]+?\];)\s*(function calculateEPQResult)/,
  '$1' + resultTemplates + '$2'
);

// 添加计算函数
const calculationFunctions = `
function calculateSDSResult(answers) {
  let totalScore = 0;

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const questionId = 501 + i;
    const question = mockQuestions.find(q => q.id === questionId);
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

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const questionId = 521 + i;
    const question = mockQuestions.find(q => q.id === questionId);
    if (question) {
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

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const option = { score: 0 };
    totalScore += option.score;
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

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const option = { score: 0 };
    totalScore += option.score;
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

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const option = { score: 0 };
    totalScore += option.score;
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

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const option = { score: 0 };
    totalScore += option.score;
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

  for (let i = 0; i < answers.length; i++) {
    const answerId = answers[i];
    const option = { score: 0 };
    totalScore += option.score;
  }

  let result = scl90Results[0];
  if (totalScore >= 160) result = scl90Results[3];
  else if (totalScore >= 100) result = scl90Results[2];
  else if (totalScore >= 40) result = scl90Results[1];

  return {
    totalScore: totalScore,
    result: result,
    score: totalScore
  };
}
`;

newContent = newContent.replace(
  /(function calculateJungResult\([\s\S]+?return \{[\s\S]+?\};)\s*(function calculateResult)/,
  '$1' + calculationFunctions + '$2'
);

// 更新calculateResult函数
const updatedCalculateResult = `
function calculateResult(testId, answers) {
  if (testId === 1) return calculateMBTIResult(answers);
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
  return { result: mbtiResults[0] };
}`;

newContent = newContent.replace(
  /function calculateResult\([\s\S]+?return \{[\s\S]+?\};/,
  updatedCalculateResult
);

// 更新module.exports
const updatedModuleExports = `
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
  calculateSCL90Result
};
`;

newContent = newContent.replace(
  /module\.exports = \{[\s\S]+?\};/,
  updatedModuleExports
);

// 写入新文件
fs.writeFileSync(filePath, newContent);
console.log('心理健康测试类已成功添加！');
