const mysql = require('mysql2/promise');
const { 
  mockCategories, mockTests, mockQuestions, mbtiResults, phq9Results, funResults, enneagramResults, oceanResults, discResults, pdpResults, epqResults, sixteenPFResults, hollandResults, jungResults, sdsResults, sasResults, dass21Results, bdiResults, hamaResults, hamdResults, scl90Results, constellationResults, careerResults, relationshipResults } = require('./data/mock-data.js');

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  multipleStatements: true
};

async function initDatabase() {
  const connection = await mysql.createConnection(dbConfig);
  
  try {
    console.log('正在创建数据库...');
    await connection.query(`DROP DATABASE IF EXISTS MBTI;`);
    await connection.query(`CREATE DATABASE MBTI CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    console.log('数据库创建成功！\n');
    
    console.log('正在使用数据库...');
    await connection.query('USE MBTI;');
    console.log('数据库切换成功！\n');
    
    return connection;
  } catch (error) {
    console.error('数据库初始化失败:', error);
    throw error;
  }
}

async function createTables(connection) {
  console.log('正在创建数据表...\n');
  
  const createTablesSql = `
    CREATE TABLE IF NOT EXISTS test_categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL COMMENT '分类名称',
      description TEXT COMMENT '分类描述',
      icon VARCHAR(255) COMMENT '图标路径',
      sort_order INT DEFAULT 0 COMMENT '排序',
      status TINYINT DEFAULT 1 COMMENT '状态:0禁用1启用',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_status (status),
      INDEX idx_sort (sort_order)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='测试分类表';

    CREATE TABLE IF NOT EXISTS tests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      category_id INT NOT NULL COMMENT '分类ID',
      name VARCHAR(200) NOT NULL COMMENT '测试名称',
      description TEXT COMMENT '测试描述',
      cover_image VARCHAR(255) COMMENT '封面图',
      estimated_time INT DEFAULT 5 COMMENT '预计时长(分钟)',
      question_count INT DEFAULT 0 COMMENT '题目数量',
      status TINYINT DEFAULT 1 COMMENT '状态:0禁用1启用',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES test_categories(id),
      INDEX idx_category (category_id),
      INDEX idx_status (status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='测试项目表';

    CREATE TABLE IF NOT EXISTS questions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      test_id INT NOT NULL COMMENT '测试ID',
      content TEXT NOT NULL COMMENT '题目内容',
      type TINYINT DEFAULT 1 COMMENT '题型:1单选2多选3量表',
      sort_order INT DEFAULT 0 COMMENT '排序',
      dimension VARCHAR(50) COMMENT '维度(MBTI专用)',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (test_id) REFERENCES tests(id),
      INDEX idx_test (test_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='题目表';

    CREATE TABLE IF NOT EXISTS options (
      id INT AUTO_INCREMENT PRIMARY KEY,
      question_id INT NOT NULL COMMENT '题目ID',
      content TEXT NOT NULL COMMENT '选项内容',
      score VARCHAR(50) COMMENT '分值',
      sort_order INT DEFAULT 0 COMMENT '排序',
      FOREIGN KEY (question_id) REFERENCES questions(id),
      INDEX idx_question (question_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='选项表';

    CREATE TABLE IF NOT EXISTS result_templates (
      id INT AUTO_INCREMENT PRIMARY KEY,
      test_id INT NOT NULL COMMENT '测试ID',
      type VARCHAR(50) COMMENT '类型',
      name VARCHAR(100) COMMENT '名称',
      min_score INT COMMENT '最低分值',
      max_score INT COMMENT '最高分值',
      title VARCHAR(200) COMMENT '结果标题',
      analysis TEXT COMMENT '分析内容',
      suggestion TEXT COMMENT '建议内容',
      strengths TEXT COMMENT '优势',
      careers TEXT COMMENT '适合领域',
      FOREIGN KEY (test_id) REFERENCES tests(id),
      INDEX idx_test (test_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='结果模板表';

    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      openid VARCHAR(100) COMMENT '微信OpenID',
      nickname VARCHAR(100) COMMENT '昵称',
      avatar VARCHAR(255) COMMENT '头像',
      gender TINYINT COMMENT '性别',
      region VARCHAR(200) COMMENT '地区',
      status TINYINT DEFAULT 1 COMMENT '状态',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY uk_openid (openid)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

    CREATE TABLE IF NOT EXISTS test_records (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT COMMENT '用户ID',
      test_id INT NOT NULL COMMENT '测试ID',
      answers TEXT COMMENT '答题记录(JSON)',
      total_score INT COMMENT '总分',
      result_template_id INT COMMENT '结果模板ID',
      completed_at TIMESTAMP COMMENT '完成时间',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (test_id) REFERENCES tests(id),
      FOREIGN KEY (result_template_id) REFERENCES result_templates(id),
      INDEX idx_user (user_id),
      INDEX idx_test (test_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='测试记录表';

    CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
      password VARCHAR(255) NOT NULL COMMENT '密码',
      role VARCHAR(50) DEFAULT 'admin' COMMENT '角色',
      status TINYINT DEFAULT 1 COMMENT '状态',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_username (username)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理员表';
  `;
  
  await connection.query(createTablesSql);
  console.log('所有数据表创建成功！\n');
}

async function insertData(connection) {
  console.log('开始插入数据...\n');
  
  // 插入分类
  console.log('正在插入测试分类...');
  for (const category of mockCategories) {
    const [result] = await connection.query(
      'INSERT INTO test_categories (name, description, icon, sort_order) VALUES (?, ?, ?, ?)',
      [category.name, category.description, category.icon, category.sortOrder || 0]
    );
    category.dbId = result.insertId;
  }
  console.log('测试分类插入完成！\n');
  
  // 插入测试
  console.log('正在插入测试项目...');
  const categoryMap = new Map(mockCategories.map(c => [c.id, c.dbId]));
  
  for (const test of mockTests) {
    const dbCategoryId = categoryMap.get(test.categoryId);
    const [result] = await connection.query(
      'INSERT INTO tests (name, description, cover_image, estimated_time, question_count, category_id) VALUES (?, ?, ?, ?, ?, ?)',
      [test.name, test.description, test.coverImage, test.estimatedTime, test.questionCount, dbCategoryId]
    );
    test.dbId = result.insertId;
  }
  console.log('测试项目插入完成！\n');
  
  // 插入题目和选项
  console.log('正在插入题目和选项...');
  const testMap = new Map(mockTests.map(t => [t.id, t.dbId]));
  const questionMap = new Map();
  let optionIdCounter = 1;
  
  for (const question of mockQuestions) {
    const dbTestId = testMap.get(question.testId);
    const [result] = await connection.query(
      'INSERT INTO questions (test_id, content, type, sort_order, dimension) VALUES (?, ?, ?, ?, ?)',
      [dbTestId, question.content, question.type, question.sortOrder || 0, question.dimension || null]
    );
    const dbQuestionId = result.insertId;
    questionMap.set(question.id, dbQuestionId);
    
    // 插入选项
    if (question.options && question.options.length > 0) {
      for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        await connection.query(
          'INSERT INTO options (question_id, content, score, sort_order) VALUES (?, ?, ?, ?)',
          [dbQuestionId, option.content, String(option.score), i + 1]
        );
      }
    }
  }
  console.log('题目和选项插入完成！\n');
  
  // 插入结果模板
  console.log('正在插入结果模板...');
  const allResults = [
    ...mbtiResults, 
    ...phq9Results, 
    ...funResults, 
    ...enneagramResults, 
    ...oceanResults, 
    ...discResults, 
    ...pdpResults, 
    ...epqResults, 
    ...sixteenPFResults, 
    ...hollandResults, 
    ...jungResults, 
    ...sdsResults, 
    ...sasResults, 
    ...dass21Results, 
    ...bdiResults, 
    ...hamaResults, 
    ...hamdResults, 
    ...scl90Results, 
    ...constellationResults, 
    ...careerResults, 
    ...relationshipResults
  ];
  
  for (const result of allResults) {
    const dbTestId = testMap.get(result.testId);
    if (dbTestId) {
      await connection.query(
        'INSERT INTO result_templates (test_id, type, name, min_score, max_score, title, analysis, suggestion, strengths, careers) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          dbTestId,
          result.type || null,
          result.name || null,
          result.minScore || 0,
          result.maxScore || 999999,
          result.title || null,
          result.analysis || null,
          result.suggestion || null,
          result.strengths || null,
          result.careers || null
        ]
      );
    }
  }
  console.log('结果模板插入完成！\n');
  
  // 插入管理员账号
  console.log('正在插入管理员账号...');
  const adminPasswordHash = '0cc175b9c0f1b6a831c399e269772661'; // MD5 of 'amin'
  await connection.query(
    'INSERT INTO admins (username, password, role) VALUES (?, ?, ?)',
    ['admin', adminPasswordHash, 'super_admin']
  );
  console.log('管理员账号插入成功！\n');
}

async function main() {
  console.log('========================================');
  console.log('开始数据库数据初始化...');
  console.log('========================================\n');
  
  let connection;
  
  try {
    connection = await initDatabase();
    await createTables(connection);
    await insertData(connection);
    
    console.log('========================================');
    console.log('🎉 数据初始化完成！');
    console.log('========================================\n');
    console.log('数据库: MBTI');
    console.log('管理员账号: admin');
    console.log('管理员密码: amin');
    console.log('\n数据已全部成功写入数据库！\n');
    
  } catch (error) {
    console.error('数据初始化失败:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

main();