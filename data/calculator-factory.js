// 测试结果计算器工厂 - 集中管理所有测试的计算逻辑
// 每个测试类型有独立的计算函数，互不影响

const calculatorFactory = {
  // MBTI测试计算
  calculateMBTIResult: (answers, testId = 1) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score) {
        const score = option.score;
        if (score === 'E' || score === 'I') scores[score]++;
        else if (score === 'S' || score === 'N') scores[score]++;
        else if (score === 'T' || score === 'F') scores[score]++;
        else if (score === 'J' || score === 'P') scores[score]++;
      }
    });
    
    const type = (scores.E >= scores.I ? 'E' : 'I') +
                 (scores.S >= scores.N ? 'S' : 'N') +
                 (scores.T >= scores.F ? 'T' : 'F') +
                 (scores.J >= scores.P ? 'J' : 'P');
    
    return { type, score: scores };
  },
  
  // PHQ-9抑郁筛查计算
  calculatePHQ9Result: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // 趣味测试计算
  calculateFunResult: (answers) => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score && counts[option.score] !== undefined) {
        counts[option.score]++;
      }
    });
    
    let maxType = 'A';
    let maxCount = counts.A;
    if (counts.B > maxCount) { maxType = 'B'; maxCount = counts.B; }
    if (counts.C > maxCount) { maxType = 'C'; maxCount = counts.C; }
    if (counts.D > maxCount) { maxType = 'D'; maxCount = counts.D; }
    
    return { type: maxType, score: counts };
  },
  
  // 九型人格计算
  calculateEnneagramResult: (answers) => {
    const counts = {};
    for (let i = 1; i <= 9; i++) {
      counts[i] = 0;
    }
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score) {
        const type = parseInt(option.score);
        if (counts[type] !== undefined) {
          counts[type]++;
        }
      }
    });
    
    let maxType = 1;
    let maxCount = counts[1];
    for (let i = 2; i <= 9; i++) {
      if (counts[i] > maxCount) {
        maxType = i;
        maxCount = counts[i];
      }
    }
    
    return { type: String(maxType), score: counts };
  },
  
  // 大五人格计算
  calculateOCEANResult: (answers) => {
    const scores = { E: 0, N: 0, O: 0, A: 0, C: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score) {
        scores[option.score] = (scores[option.score] || 0) + option.scoreValue;
      }
    });
    
    let maxDimension = 'E';
    let maxScore = scores.E;
    Object.keys(scores).forEach(key => {
      if (scores[key] > maxScore) {
        maxDimension = key;
        maxScore = scores[key];
      }
    });
    
    return { type: maxDimension, score: scores };
  },
  
  // DISC测试计算
  calculateDISCResult: (answers) => {
    const counts = { D: 0, I: 0, S: 0, C: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score && counts[option.score] !== undefined) {
        counts[option.score]++;
      }
    });
    
    let maxType = 'D';
    let maxCount = counts.D;
    if (counts.I > maxCount) { maxType = 'I'; maxCount = counts.I; }
    if (counts.S > maxCount) { maxType = 'S'; maxCount = counts.S; }
    if (counts.C > maxCount) { maxType = 'C'; maxCount = counts.C; }
    
    return { type: maxType, score: counts };
  },
  
  // PDP测试计算
  calculatePDPResult: (answers) => {
    const counts = { D: 0, I: 0, S: 0, C: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score && counts[option.score] !== undefined) {
        counts[option.score]++;
      }
    });
    
    let maxType = 'D';
    let maxCount = counts.D;
    if (counts.I > maxCount) { maxType = 'I'; maxCount = counts.I; }
    if (counts.S > maxCount) { maxType = 'S'; maxCount = counts.S; }
    if (counts.C > maxCount) { maxType = 'C'; maxCount = counts.C; }
    
    return { type: maxType, score: counts };
  },
  
  // 艾森克人格问卷计算
  calculateEPQResult: (answers) => {
    const scores = { E: 0, I: 0, N: 0, P: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score && scores[option.score] !== undefined) {
        scores[option.score]++;
      }
    });
    
    let maxType = 'E';
    let maxScore = scores.E;
    if (scores.I > maxScore) { maxType = 'I'; maxScore = scores.I; }
    if (scores.N > maxScore) { maxType = 'N'; maxScore = scores.N; }
    if (scores.P > maxScore) { maxType = 'P'; maxScore = scores.P; }
    
    return { type: maxType, score: scores };
  },
  
  // 卡特尔16PF计算
  calculate16PFResult: (answers) => {
    const factors = {};
    ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'Q1', 'Q2', 'Q3', 'Q4'].forEach(f => {
      factors[f] = 0;
    });
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score) {
        factors[option.score] = (factors[option.score] || 0) + 1;
      }
    });
    
    let maxFactor = 'A';
    let maxScore = factors.A;
    Object.keys(factors).forEach(key => {
      if (factors[key] > maxScore) {
        maxFactor = key;
        maxScore = factors[key];
      }
    });
    
    return { type: maxFactor, score: factors };
  },
  
  // 霍兰德职业兴趣计算
  calculateHollandResult: (answers) => {
    const counts = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score && counts[option.score] !== undefined) {
        counts[option.score]++;
      }
    });
    
    // 获取前三个最高分数的类型
    const sortedTypes = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    const topThree = sortedTypes.slice(0, 3);
    
    return { type: topThree.join(''), score: counts };
  },
  
  // 荣格类型计算
  calculateJungResult: (answers) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option && option.score) {
        const score = option.score;
        if (scores[score] !== undefined) {
          scores[score]++;
        }
      }
    });
    
    const type = (scores.E >= scores.I ? 'E' : 'I') +
                 (scores.S >= scores.N ? 'S' : 'N') +
                 (scores.T >= scores.F ? 'T' : 'F') +
                 (scores.J >= scores.P ? 'J' : 'P');
    
    return { type, score: scores };
  },
  
  // SDS抑郁自评计算
  calculateSDSResult: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // SAS焦虑自评计算
  calculateSASResult: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // DASS-21计算
  calculateDASS21Result: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // BDI贝克抑郁计算
  calculateBDIResult: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // HAMA焦虑计算
  calculateHAMAResult: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // HAMD抑郁计算
  calculateHAMDResult: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // SCL-90计算
  calculateSCL90Result: (answers) => {
    let totalScore = 0;
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        totalScore += option.score || 0;
      }
    });
    return { totalScore };
  },
  
  // 星座性格测试计算
  calculateConstellationResult: (answers) => {
    let fire = 0, wind = 0, water = 0, earth = 0;
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        if (option.score === 1) fire++;
        else if (option.score === 2) wind++;
        else if (option.score === 3) water++;
        else if (option.score === 4) earth++;
      }
    });
    
    let maxType = 'fire';
    let maxCount = fire;
    if (wind > maxCount) { maxType = 'wind'; maxCount = wind; }
    if (water > maxCount) { maxType = 'water'; maxCount = water; }
    if (earth > maxCount) { maxType = 'earth'; maxCount = earth; }
    
    return { type: maxType, score: { fire, wind, water, earth } };
  },
  
  // 职业倾向测试计算
  calculateCareerResult: (answers) => {
    let creative = 0, manage = 0, tech = 0, service = 0;
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        if (option.score === 1) creative++;
        else if (option.score === 2) manage++;
        else if (option.score === 3) tech++;
        else if (option.score === 4) service++;
      }
    });
    
    let maxType = 'creative';
    let maxCount = creative;
    if (manage > maxCount) { maxType = 'manage'; maxCount = manage; }
    if (tech > maxCount) { maxType = 'tech'; maxCount = tech; }
    if (service > maxCount) { maxType = 'service'; maxCount = service; }
    
    return { type: maxType, score: { creative, manage, tech, service } };
  },
  
  // 人际关系测试计算
  calculateRelationshipResult: (answers) => {
    let social = 0, listener = 0, easygoing = 0, alone = 0;
    
    answers.forEach(answerId => {
      const option = findOptionById(answerId);
      if (option) {
        if (option.score === 1) social++;
        else if (option.score === 2) listener++;
        else if (option.score === 3) easygoing++;
        else if (option.score === 4) alone++;
      }
    });
    
    let maxType = 'social';
    let maxCount = social;
    if (listener > maxCount) { maxType = 'listener'; maxCount = listener; }
    if (easygoing > maxCount) { maxType = 'easygoing'; maxCount = easygoing; }
    if (alone > maxCount) { maxType = 'alone'; maxCount = alone; }
    
    return { type: maxType, score: { social, listener, easygoing, alone } };
  }
};

// 辅助函数：通过选项ID查找选项
function findOptionById(optionId) {
  const { mockQuestions } = require('./mock-data.js');
  for (const question of mockQuestions) {
    const option = question.options.find(opt => opt.id === optionId);
    if (option) return option;
  }
  return null;
}

module.exports = {
  calculatorFactory,
  
  // 根据testId获取计算结果
  calculateResult(testId, answers) {
    const { getCalculatorName, getResultKey } = require('./test-config.js');
    const { getResultData } = require('./type-name-mapper.js');
    const calculatorName = getCalculatorName(testId);
    const calculator = calculatorFactory[calculatorName];
    
    if (calculator) {
      // 计算类型和分数
      let rawResult;
      if (calculatorName === 'calculateMBTIResult') {
        rawResult = calculator(answers, testId);
      } else {
        rawResult = calculator(answers);
      }
      
      // 获取对应的结果数据
      const resultKey = getResultKey(testId);
      const resultDataList = getResultData(resultKey);
      
      // 根据计算结果查找完整的结果信息
      let fullResult = {};
      
      if (rawResult.type) {
        // 基于类型字段查找
        fullResult = resultDataList.find(item => String(item.type) === String(rawResult.type)) || {};
      } else if (rawResult.totalScore !== undefined) {
        // 基于分数范围查找（如PHQ-9等量表）
        const score = rawResult.totalScore;
        fullResult = resultDataList.find(item => 
          item.minScore !== undefined && 
          item.maxScore !== undefined &&
          score >= item.minScore && 
          score <= item.maxScore
        ) || resultDataList[0] || {};
      }
      
      // 合并计算结果和完整结果数据
      return {
        ...rawResult,
        ...fullResult,
        score: rawResult.score || rawResult.totalScore
      };
    }
    
    return { type: 'unknown', score: {} };
  },
  
  // 获取所有计算器名称
  getAllCalculatorNames() {
    return Object.keys(calculatorFactory);
  },
  
  // 注册新的计算器
  registerCalculator(name, calculator) {
    if (!calculatorFactory[name]) {
      calculatorFactory[name] = calculator;
      return true;
    }
    return false;
  }
};