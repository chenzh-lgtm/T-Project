const mysql = require('mysql2/promise');
const fs = require('fs');

// 数据库配置
const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'MBTI',
  charset: 'utf8mb4'
};

// 直接加载 mock-data.js 文件内容并提取数据
function loadMockData() {
  const filePath = './data/mock-data.js';
  const content = fs.readFileSync(filePath, 'utf8');

  // 提取 mockCategories
  const categoriesMatch = content.match(/const mockCategories = (\[[\s\S]*?\]);/);
  let categories = [];
  if (categoriesMatch) {
    categories = eval(categoriesMatch[1]);
  }

  // 提取 mockTests
  const testsMatch = content.match(/const mockTests = (\[[\s\S]*?\]);/);
  let tests = [];
  if (testsMatch) {
    tests = eval(testsMatch[1]);
  }

  // 提取 mockQuestions
  const questionsMatch = content.match(/const mockQuestions = (\[[\s\S]*?\]);/);
  let questions = [];
  if (questionsMatch) {
    questions = eval(questionsMatch[1]);
  }

  // 提取 mbtiResults
  const mbtiMatch = content.match(/const mbtiResults = (\[[\s\S]*?\]);/);
  let mbtiResults = [];
  if (mbtiMatch) {
    mbtiResults = eval(mbtiMatch[1]);
  }

  // 提取 phq9Results
  const phq9Match = content.match(/const phq9Results = (\[[\s\S]*?\]);/);
  let phq9Results = [];
  if (phq9Match) {
    phq9Results = eval(phq9Match[1]);
  }

  // 提取 funResults
  const funMatch = content.match(/const funResults = (\[[\s\S]*?\]);/);
  let funResults = [];
  if (funMatch) {
    funResults = eval(funMatch[1]);
  }

  // 提取 enneagramResults
  const enneagramMatch = content.match(/const enneagramResults = (\[[\s\S]*?\]);/);
  let enneagramResults = [];
  if (enneagramMatch) {
    enneagramResults = eval(enneagramMatch[1]);
  }

  // 提取 oceanResults
  const oceanMatch = content.match(/const oceanResults = (\[[\s\S]*?\]);/);
  let oceanResults = [];
  if (oceanMatch) {
    oceanResults = eval(oceanMatch[1]);
  }

  // 提取 discResults
  const discMatch = content.match(/const discResults = (\[[\s\S]*?\]);/);
  let discResults = [];
  if (discMatch) {
    discResults = eval(discMatch[1]);
  }

  // 提取 pdpResults
  const pdpMatch = content.match(/const pdpResults = (\[[\s\S]*?\]);/);
  let pdpResults = [];
  if (pdpMatch) {
    pdpResults = eval(pdpMatch[1]);
  }

  // 提取 epqResults
  const epqMatch = content.match(/const epqResults = (\[[\s\S]*?\]);/);
  let epqResults = [];
  if (epqMatch) {
    epqResults = eval(epqMatch[1]);
  }

  // 提取 sixteenPFResults
  const sixteenPFMatch = content.match(/const sixteenPFResults = (\[[\s\S]*?\]);/);
  let sixteenPFResults = [];
  if (sixteenPFMatch) {
    sixteenPFResults = eval(sixteenPFMatch[1]);
  }

  // 提取 hollandResults
  const hollandMatch = content.match(/const hollandResults = (\[[\s\S]*?\]);/);
  let hollandResults = [];
  if (hollandMatch) {
    hollandResults = eval(hollandMatch[1]);
  }

  // 提取 jungResults
  const jungMatch = content.match(/const jungResults = (\[[\s\S]*?\]);/);
  let jungResults = [];
  if (jungMatch) {
    jungResults = eval(jungMatch[1]);
  }

  return {
    categories,
    tests,
    questions,
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
    jungResults
  };
}

// 导入分类数据
async function importCategories(pool, categories) {
  console.log(`\n导入 ${categories.length} 个分类...`);

  for (const cat of categories) {
    try {
      await pool.query(`
        INSERT INTO test_categories (id, name, description, icon, sort_order, status)
        VALUES (?, ?, ?, ?, ?, 1)
        ON DUPLICATE KEY UPDATE
          name = VALUES(name),
          description = VALUES(description),
          icon = VALUES(icon),
          sort_order = VALUES(sort_order)
      `, [cat.id, cat.name, cat.description || '', cat.icon || '', cat.sortOrder || 0]);
      console.log(`  ✓ 分类: ${cat.name}`);
    } catch (error) {
      console.error(`  ✗ 分类 ${cat.name} 导入失败:`, error.message);
    }
  }
}

// 导入测试项目数据
async function importTests(pool, tests) {
  console.log(`\n导入 ${tests.length} 个测试项目...`);

  for (const test of tests) {
    try {
      await pool.query(`
        INSERT INTO tests (id, category_id, name, description, cover_image, estimated_time, status)
        VALUES (?, ?, ?, ?, ?, ?, 1)
        ON DUPLICATE KEY UPDATE
          category_id = VALUES(category_id),
          name = VALUES(name),
          description = VALUES(description),
          cover_image = VALUES(cover_image),
          estimated_time = VALUES(estimated_time)
      `, [test.id, test.categoryId, test.name, test.description || '', test.coverImage || '', test.estimatedTime || 0]);
      console.log(`  ✓ 测试: ${test.name}`);
    } catch (error) {
      console.error(`  ✗ 测试 ${test.name} 导入失败:`, error.message);
    }
  }
}

// 导入题目和选项数据
async function importQuestions(pool, questions) {
  console.log(`\n导入 ${questions.length} 道题目和选项...`);

  let imported = 0;
  let failed = 0;

  for (const q of questions) {
    try {
      await pool.query(`
        INSERT INTO questions (id, test_id, content, type, sort_order, dimension)
        VALUES (?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          test_id = VALUES(test_id),
          content = VALUES(content),
          type = VALUES(type),
          sort_order = VALUES(sort_order),
          dimension = VALUES(dimension)
      `, [q.id, q.testId, q.content, q.type || 1, q.sortOrder || 0, q.dimension || null]);
      imported++;

      // 导入选项
      if (q.options && q.options.length > 0) {
        for (const opt of q.options) {
          try {
            await pool.query(`
              INSERT INTO options (id, question_id, content, score, sort_order)
              VALUES (?, ?, ?, ?, ?)
              ON DUPLICATE KEY UPDATE
                question_id = VALUES(question_id),
                content = VALUES(content),
                score = VALUES(score),
                sort_order = VALUES(sort_order)
            `, [opt.id, q.id, opt.content, opt.score || 0, opt.sortOrder || 0]);
          } catch (optError) {
            // 忽略选项导入错误
          }
        }
      }

      if (imported % 100 === 0) {
        console.log(`  已导入 ${imported} 道题目...`);
      }
    } catch (error) {
      failed++;
      if (failed <= 10) {
        console.error(`  ✗ 题目 ${q.id} 导入失败:`, error.message);
      }
    }
  }

  console.log(`  题目导入完成: ${imported} 成功, ${failed} 失败`);
}

// 导入结果模板
async function importResults(pool, data) {
  // MBTI 结果
  console.log(`\n导入 MBTI 结果模板 (${data.mbtiResults.length} 个)...`);
  for (const r of data.mbtiResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion, strengths, careers)
        VALUES (1, ?, ?, 0, 0, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion),
          strengths = VALUES(strengths),
          careers = VALUES(careers)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion, r.strengths || '', r.careers || '']);
    } catch (error) {
      console.error(`  ✗ MBTI结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ MBTI 结果模板导入完成');

  // PHQ-9 结果
  console.log(`\n导入 PHQ-9 结果模板 (${data.phq9Results.length} 个)...`);
  for (const r of data.phq9Results) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (2, NULL, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          name = VALUES(name),
          min_score = VALUES(min_score),
          max_score = VALUES(max_score),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.name, r.minScore, r.maxScore, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ PHQ-9结果 ${r.name} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ PHQ-9 结果模板导入完成');

  // 趣味测试结果
  console.log(`\n导入趣味测试结果模板 (${data.funResults.length} 个)...`);
  for (const r of data.funResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (3, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ 趣味测试结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ 趣味测试结果模板导入完成');

  // 九型人格结果
  console.log(`\n导入九型人格结果模板 (${data.enneagramResults.length} 个)...`);
  for (const r of data.enneagramResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (4, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ 九型人格结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ 九型人格结果模板导入完成');

  // 大五人格结果
  console.log(`\n导入大五人格结果模板 (${data.oceanResults.length} 个)...`);
  for (const r of data.oceanResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (5, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          min_score = VALUES(min_score),
          max_score = VALUES(max_score),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.dimension, r.name, r.minScore, r.maxScore, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ 大五人格结果 ${r.dimension} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ 大五人格结果模板导入完成');

  // DISC 结果
  console.log(`\n导入DISC结果模板 (${data.discResults.length} 个)...`);
  for (const r of data.discResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (6, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ DISC结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ DISC结果模板导入完成');

  // PDP 结果
  console.log(`\n导入PDP结果模板 (${data.pdpResults.length} 个)...`);
  for (const r of data.pdpResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (7, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ PDP结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ PDP结果模板导入完成');

  // EPQ 结果
  console.log(`\n导入艾森克人格问卷结果模板 (${data.epqResults.length} 个)...`);
  for (const r of data.epqResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (8, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ EPQ结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ 艾森克人格问卷结果模板导入完成');

  // 16PF 结果
  console.log(`\n导入卡特尔16PF结果模板 (${data.sixteenPFResults.length} 个)...`);
  for (const r of data.sixteenPFResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (9, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ 16PF结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ 卡特尔16PF结果模板导入完成');

  // 霍兰德职业兴趣结果
  console.log(`\n导入霍兰德职业兴趣测试结果模板 (${data.hollandResults.length} 个)...`);
  for (const r of data.hollandResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (10, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ 霍兰德结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ 霍兰德职业兴趣测试结果模板导入完成');

  // 荣格性格类型结果
  console.log(`\n导入荣格性格类型测试结果模板 (${data.jungResults.length} 个)...`);
  for (const r of data.jungResults) {
    try {
      await pool.query(`
        INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion)
        VALUES (11, ?, ?, 0, 0, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          type = VALUES(type),
          name = VALUES(name),
          title = VALUES(title),
          analysis = VALUES(analysis),
          suggestion = VALUES(suggestion)
      `, [r.type, r.name, r.title, r.analysis, r.suggestion]);
    } catch (error) {
      console.error(`  ✗ 荣格结果 ${r.type} 导入失败:`, error.message);
    }
  }
  console.log('  ✓ 荣格性格类型测试结果模板导入完成');
}

// 主函数
async function main() {
  console.log('===========================================');
  console.log('  心理诊断小程序 - 数据导入工具 v2');
  console.log('===========================================\n');

  let pool;
  try {
    // 连接数据库
    console.log('正在连接数据库...');
    pool = await mysql.createPool(dbConfig);
    await pool.getConnection();
    console.log('数据库连接成功！\n');

    // 加载 mock 数据
    const mockData = loadMockData();
    console.log('成功加载 mock-data.js');
    console.log(`  - 分类: ${mockData.categories.length} 个`);
    console.log(`  - 测试: ${mockData.tests.length} 个`);
    console.log(`  - 题目: ${mockData.questions.length} 道`);
    console.log(`  - MBTI结果: ${mockData.mbtiResults.length} 个`);
    console.log(`  - PHQ-9结果: ${mockData.phq9Results.length} 个`);
    console.log(`  - 趣味测试结果: ${mockData.funResults.length} 个`);
    console.log(`  - 九型人格结果: ${mockData.enneagramResults.length} 个`);
    console.log(`  - 大五人格结果: ${mockData.oceanResults.length} 个`);
    console.log(`  - DISC结果: ${mockData.discResults.length} 个`);
    console.log(`  - PDP结果: ${mockData.pdpResults.length} 个`);
    console.log(`  - 艾森克结果: ${mockData.epqResults.length} 个`);
    console.log(`  - 16PF结果: ${mockData.sixteenPFResults.length} 个`);
    console.log(`  - 霍兰德结果: ${mockData.hollandResults.length} 个`);
    console.log(`  - 荣格结果: ${mockData.jungResults.length} 个`);

    // 导入数据
    await importCategories(pool, mockData.categories);
    await importTests(pool, mockData.tests);
    await importQuestions(pool, mockData.questions);
    await importResults(pool, mockData);

    console.log('\n===========================================');
    console.log('  ✓ 数据导入完成！');
    console.log('===========================================');

    // 显示统计信息
    console.log('\n数据库统计：');
    const [catCount] = await pool.query('SELECT COUNT(*) as count FROM test_categories');
    const [testCount] = await pool.query('SELECT COUNT(*) as count FROM tests');
    const [qCount] = await pool.query('SELECT COUNT(*) as count FROM questions');
    const [optCount] = await pool.query('SELECT COUNT(*) as count FROM options');
    const [tplCount] = await pool.query('SELECT COUNT(*) as count FROM result_templates');

    console.log(`  - 分类: ${catCount[0].count} 个`);
    console.log(`  - 测试: ${testCount[0].count} 个`);
    console.log(`  - 题目: ${qCount[0].count} 道`);
    console.log(`  - 选项: ${optCount[0].count} 个`);
    console.log(`  - 结果模板: ${tplCount[0].count} 个`);

  } catch (error) {
    console.error('\n✗ 错误:', error.message);
    console.error(error);
    process.exit(1);
  } finally {
    if (pool) {
      await pool.end();
    }
  }
}

main();