/**
 * MBTI数据库检查脚本
 * 用于查询和验证数据库中的数据
 */

const mysql = require('mysql2/promise');

// 数据库配置（与server.js保持一致）
const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'MBTI',
  charset: 'utf8mb4'
};

/**
 * 打印分隔线
 */
function printSeparator(title = '') {
  console.log('\n' + '='.repeat(60));
  if (title) {
    console.log(`  ${title}`);
    console.log('='.repeat(60));
  }
}

/**
 * 打印表格数据
 */
function printTable(data, columns = null) {
  if (!data || data.length === 0) {
    console.log('  (无数据)');
    return;
  }

  // 获取所有列名
  const keys = columns || Object.keys(data[0]);
  
  // 计算每列的最大宽度
  const widths = keys.map(key => {
    let max = key.length;
    data.forEach(row => {
      const val = String(row[key] ?? '');
      if (val.length > max) max = val.length;
    });
    return Math.min(max, 40); // 限制最大宽度为40
  });

  // 打印表头
  const header = keys.map((key, i) => key.padEnd(widths[i])).join(' | ');
  console.log('  ' + header);
  console.log('  ' + '-'.repeat(header.length));

  // 打印数据行
  data.forEach(row => {
    const line = keys.map((key, i) => {
      const val = String(row[key] ?? '');
      return val.padEnd(widths[i]);
    }).join(' | ');
    console.log('  ' + line);
  });
}

/**
 * 主函数
 */
async function main() {
  let connection;

  try {
    console.log('正在连接数据库...');
    connection = await mysql.createConnection(dbConfig);
    console.log('数据库连接成功!\n');

    // 1. 查询测试分类
    printSeparator('测试分类');
    const [categories] = await connection.execute(
      'SELECT id, name, description, sort_order, status FROM test_categories ORDER BY id'
    );
    printTable(categories);

    // 2. 查询测试项目
    printSeparator('测试项目');
    const [tests] = await connection.execute(
      'SELECT id, category_id, name, description, estimated_time, status FROM tests ORDER BY id'
    );
    printTable(tests);

    // 3. 查询题目数量统计
    printSeparator('题目数量统计');
    const [questionStats] = await connection.execute(`
      SELECT 
        t.name as '测试名称',
        COUNT(q.id) as '题目数量',
        t.estimated_time as '预计时长(分钟)'
      FROM tests t
      LEFT JOIN questions q ON t.id = q.test_id
      GROUP BY t.id, t.name, t.estimated_time
      ORDER BY t.id
    `);
    printTable(questionStats);

    // 4. 查询选项数量统计
    printSeparator('选项数量统计');
    const [optionStats] = await connection.execute(`
      SELECT 
        t.name as '测试名称',
        COUNT(DISTINCT q.id) as '题目数量',
        COUNT(o.id) as '选项数量'
      FROM tests t
      LEFT JOIN questions q ON t.id = q.test_id
      LEFT JOIN options o ON q.id = o.question_id
      GROUP BY t.id, t.name
      ORDER BY t.id
    `);
    printTable(optionStats);

    // 5. 查询结果模板统计
    printSeparator('结果模板统计');
    const [templateStats] = await connection.execute(`
      SELECT 
        t.name as '测试名称',
        COUNT(rt.id) as '结果模板数量'
      FROM tests t
      LEFT JOIN result_templates rt ON t.id = rt.test_id
      GROUP BY t.id, t.name
      ORDER BY t.id
    `);
    printTable(templateStats);

    // 6. 抽样检查心理健康测试题目
    printSeparator('抽样检查心理健康测试题目');
    const [sampleQuestions] = await connection.execute(`
      SELECT 
        t.name as '测试',
        q.content as '题目内容',
        q.type as '题型'
      FROM tests t
      JOIN questions q ON t.id = q.test_id
      WHERE t.category_id = 2
      ORDER BY t.id, q.sort_order
      LIMIT 20
    `);
    printTable(sampleQuestions);

    // 7. 抽样检查结果模板
    printSeparator('抽样检查结果模板');
    const [sampleTemplates] = await connection.execute(`
      SELECT 
        t.name as '测试',
        rt.name as '名称',
        rt.title as '标题',
        rt.min_score as '最低分',
        rt.max_score as '最高分'
      FROM tests t
      JOIN result_templates rt ON t.id = rt.test_id
      WHERE t.category_id = 2
      ORDER BY t.id, rt.id
      LIMIT 20
    `);
    printTable(sampleTemplates);

    // 8. 查询管理员账号
    printSeparator('管理员账号');
    const [admins] = await connection.execute(
      'SELECT id, username, role, status FROM admins'
    );
    printTable(admins);

    // 9. 数据库统计汇总
    printSeparator('数据库统计汇总');
    const [summary] = await connection.execute(`
      SELECT 
        (SELECT COUNT(*) FROM test_categories) as '分类总数',
        (SELECT COUNT(*) FROM tests) as '测试总数',
        (SELECT COUNT(*) FROM questions) as '题目总数',
        (SELECT COUNT(*) FROM options) as '选项总数',
        (SELECT COUNT(*) FROM result_templates) as '结果模板总数',
        (SELECT COUNT(*) FROM admins) as '管理员总数'
    `);
    printTable(summary);

    printSeparator('检查完成');
    console.log('所有查询执行完毕!');

  } catch (error) {
    console.error('\n错误:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('提示: 请确保MySQL服务已启动，并且配置信息正确');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('提示: 数据库用户名或密码错误，请检查配置');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.log('提示: 数据库不存在，请先运行建表脚本创建数据库');
    }
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// 执行主函数
main();
