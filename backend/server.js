const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'MBTI',
  charset: 'utf8mb4'
};

const pool = mysql.createPool(dbConfig);

async function initDatabase() {
  try {
    console.log('检查数据库连接...');
    await pool.getConnection();
    console.log('数据库连接成功');
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS test_reports (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(100) DEFAULT 'test_user',
        test_id INT NOT NULL,
        test_name VARCHAR(200) NOT NULL,
        mbti_type VARCHAR(10),
        fun_type VARCHAR(10),
        disc_type VARCHAR(10),
        pdp_type VARCHAR(20),
        enneagram_type VARCHAR(10),
        jung_type VARCHAR(10),
        total_score INT DEFAULT 0,
        title VARCHAR(500),
        analysis TEXT,
        suggestion TEXT,
        strengths VARCHAR(1000),
        careers VARCHAR(1000),
        result_data TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_user_id (user_id),
        INDEX idx_test_id (test_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // 检查并添加缺失的列
    const [columns] = await pool.query("SHOW COLUMNS FROM test_reports LIKE 'disc_type'");
    if (columns.length === 0) {
      await pool.query("ALTER TABLE test_reports ADD COLUMN disc_type VARCHAR(10) DEFAULT NULL AFTER fun_type");
      await pool.query("ALTER TABLE test_reports ADD COLUMN pdp_type VARCHAR(20) DEFAULT NULL AFTER disc_type");
      await pool.query("ALTER TABLE test_reports ADD COLUMN enneagram_type VARCHAR(10) DEFAULT NULL AFTER pdp_type");
      await pool.query("ALTER TABLE test_reports ADD COLUMN jung_type VARCHAR(10) DEFAULT NULL AFTER enneagram_type");
      console.log("已添加新的类型字段到数据库");
    }
    console.log('报告表已就绪');
    
  } catch (error) {
    console.error('初始化失败:', error);
  }
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '服务正常运行' });
});

app.post('/api/reports', async (req, res) => {
  try {
    const report = req.body;
    console.log('保存报告:', report);
    
    const result = await pool.query(`
      INSERT INTO test_reports (
        user_id, test_id, test_name, mbti_type, fun_type, disc_type,
        pdp_type, enneagram_type, jung_type, total_score, title,
        analysis, suggestion, strengths, careers, result_data
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      report.userId || 'test_user',
      report.testId,
      report.testName,
      report.mbtiType || null,
      report.funType || null,
      report.disc_type || null,
      report.pdp_type || null,
      report.enneagram_type || null,
      report.jung_type || null,
      report.totalScore || 0,
      report.title,
      report.analysis,
      report.suggestion,
      report.strengths,
      report.careers,
      JSON.stringify(report.resultData)
    ]);
    
    const reportId = result[0].insertId;
    res.json({
      success: true,
      message: '报告保存成功',
      data: { reportId }
    });
    
  } catch (error) {
    console.error('保存报告失败:', error);
    res.status(500).json({
      success: false,
      message: '保存报告失败',
      error: error.message
    });
  }
});

app.get('/api/reports', async (req, res) => {
  try {
    const userId = req.query.userId || 'test_user';
    const [reports] = await pool.query(`
      SELECT id, test_id, test_name, mbti_type, fun_type, disc_type,
             pdp_type, enneagram_type, jung_type, total_score, title, created_at
      FROM test_reports
      WHERE user_id = ?
      ORDER BY created_at DESC
    `, [userId]);
    
    res.json({
      success: true,
      data: reports
    });
    
  } catch (error) {
    console.error('获取报告列表失败:', error);
    res.status(500).json({
      success: false,
      message: '获取报告失败',
      error: error.message
    });
  }
});

app.get('/api/reports/:id', async (req, res) => {
  try {
    const reportId = req.params.id;
    const [reports] = await pool.query(`
      SELECT * FROM test_reports WHERE id = ?
    `, [reportId]);
    
    if (reports.length === 0) {
      return res.status(404).json({
        success: false,
        message: '报告不存在'
      });
    }
    
    const report = reports[0];
    try {
      report.resultData = JSON.parse(report.result_data);
    } catch (e) {
      report.resultData = null;
    }
    delete report.result_data;
    
    res.json({
      success: true,
      data: report
    });
    
  } catch (error) {
    console.error('获取报告详情失败:', error);
    res.status(500).json({
      success: false,
      message: '获取报告详情失败',
      error: error.message
    });
  }
});

app.delete('/api/reports/:id', async (req, res) => {
  try {
    const reportId = req.params.id;
    await pool.query('DELETE FROM test_reports WHERE id = ?', [reportId]);
    
    res.json({
      success: true,
      message: '报告已删除'
    });
    
  } catch (error) {
    console.error('删除报告失败:', error);
    res.status(500).json({
      success: false,
      message: '删除失败',
      error: error.message
    });
  }
});

app.get('/api/tests', async (req, res) => {
  try {
    const [tests] = await pool.query('SELECT * FROM tests');
    const [categories] = await pool.query('SELECT * FROM test_categories');
    const [questions] = await pool.query('SELECT * FROM questions');
    const [options] = await pool.query('SELECT * FROM options');
    const [templates] = await pool.query('SELECT * FROM result_templates');
    
    res.json({
      success: true,
      data: {
        tests,
        categories,
        questions,
        options,
        templates
      }
    });
  } catch (error) {
    console.error('获取测试数据失败:', error);
    res.status(500).json({
      success: false,
      message: '获取数据失败'
    });
  }
});

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`后端服务已启动: http://localhost:${PORT}`);
  });
});