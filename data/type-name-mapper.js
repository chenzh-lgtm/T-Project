// 类型名称映射模块 - 集中管理所有测试类型的名称转换
// 修改单个测试类型的名称不会影响其他测试

const {
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
  relationshipResults
} = require('./mock-data.js');

// 类型名称映射配置
const typeNameConfig = {
  mbtiResults: {
    data: mbtiResults,
    typeField: 'type',
    nameField: 'name'
  },
  phq9Results: {
    data: phq9Results,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  funResults: {
    data: funResults,
    typeField: 'type',
    nameField: 'name'
  },
  enneagramResults: {
    data: enneagramResults,
    typeField: 'type',
    nameField: 'name'
  },
  oceanResults: {
    data: oceanResults,
    typeField: 'dimension',
    nameField: 'title',
    isScoreBased: true
  },
  discResults: {
    data: discResults,
    typeField: 'type',
    nameField: 'name'
  },
  pdpResults: {
    data: pdpResults,
    typeField: 'type',
    nameField: 'name'
  },
  epqResults: {
    data: epqResults,
    typeField: 'type',
    nameField: 'name'
  },
  sixteenPFResults: {
    data: sixteenPFResults,
    typeField: 'type',
    nameField: 'name'
  },
  hollandResults: {
    data: hollandResults,
    typeField: 'type',
    nameField: 'name'
  },
  jungResults: {
    data: jungResults,
    typeField: 'type',
    nameField: 'name'
  },
  sdsResults: {
    data: sdsResults,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  sasResults: {
    data: sasResults,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  dass21Results: {
    data: dass21Results,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  bdiResults: {
    data: bdiResults,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  hamaResults: {
    data: hamaResults,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  hamdResults: {
    data: hamdResults,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  scl90Results: {
    data: scl90Results,
    typeField: 'totalScore',
    nameField: 'name',
    isScoreBased: true
  },
  constellationResults: {
    data: constellationResults,
    typeField: 'type',
    nameField: 'name'
  },
  careerResults: {
    data: careerResults,
    typeField: 'type',
    nameField: 'name'
  },
  relationshipResults: {
    data: relationshipResults,
    typeField: 'type',
    nameField: 'name'
  }
};

// 获取类型名称
function getTypeName(resultKey, typeValue) {
  const config = typeNameConfig[resultKey];
  
  if (!config || !typeValue) {
    return typeValue || '未知';
  }
  
  const { data, typeField, nameField, isScoreBased } = config;
  
  if (isScoreBased) {
    // 基于分数范围的匹配
    const numericValue = parseFloat(typeValue);
    if (!isNaN(numericValue)) {
      // 找到匹配的结果（按分数范围从高到低匹配）
      let result = data[0];
      for (let i = data.length - 1; i >= 0; i--) {
        const item = data[i];
        if (item.minScore !== undefined && numericValue >= item.minScore) {
          result = item;
          break;
        }
      }
      return result[nameField] || result.title || result.name || typeValue;
    } else {
      // 如果不是数字（如大五人格的维度字母），则按类型字段匹配
      const result = data.find(item => String(item[typeField]) === String(typeValue));
      if (result) {
        // 如果找到匹配项，返回名称字段或标题字段
        return result[nameField] || result.title || result.name || typeValue;
      }
    }
  }
  
  // 基于类型字段的匹配
  const result = data.find(item => String(item[typeField]) === String(typeValue));
  return result ? (result[nameField] || result.title || result.name || typeValue) : typeValue;
}

// 根据testId获取类型名称
function getTypeNameByTestId(testId, typeValue) {
  const { getResultKey } = require('./test-config.js');
  const resultKey = getResultKey(testId);
  return getTypeName(resultKey, typeValue);
}

// 获取所有结果数据
function getResultData(resultKey) {
  return typeNameConfig[resultKey] ? typeNameConfig[resultKey].data : [];
}

module.exports = {
  getTypeName,
  getTypeNameByTestId,
  getResultData,
  typeNameConfig
};