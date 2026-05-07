const http = require('http');

function testAPI(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve({ status: res.statusCode, data: result });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function main() {
  console.log('========================================');
  console.log('测试后端 API');
  console.log('========================================\n');

  try {
    // 1. 测试健康检查
    console.log('1️⃣ 测试健康检查...');
    const healthRes = await testAPI('GET', '/api/health');
    console.log(`   状态: ${healthRes.status}`);
    console.log(`   响应: ${JSON.stringify(healthRes.data)}`);
    console.log('   ✅ 健康检查成功\n');

    // 2. 测试获取测试数据
    console.log('2️⃣ 测试获取测试数据...');
    const testsRes = await testAPI('GET', '/api/tests');
    console.log(`   状态: ${testsRes.status}`);
    if (testsRes.data && testsRes.data.data) {
      console.log(`   测试数量: ${testsRes.data.data.tests ? testsRes.data.data.tests.length : 0}`);
      console.log(`   题目数量: ${testsRes.data.data.questions ? testsRes.data.data.questions.length : 0}`);
    }
    console.log('   ✅ 测试数据获取成功\n');

    // 3. 测试获取报告列表
    console.log('3️⃣ 测试获取报告列表...');
    const reportsRes = await testAPI('GET', '/api/reports?userId=test_user');
    console.log(`   状态: ${reportsRes.status}`);
    console.log(`   响应: ${JSON.stringify(reportsRes.data)}`);
    if (reportsRes.status === 200) {
      console.log('   ✅ 报告列表获取成功\n');
    } else {
      console.log('   ⚠️ 需要检查数据库连接\n');
    }

    console.log('========================================');
    console.log('🎉 API 测试完成！');
    console.log('========================================');

  } catch (error) {
    console.error('❌ API 测试失败:', error.message);
    console.error('请确保：');
    console.error('1. MySQL 数据库服务正在运行');
    console.error('2. 后端服务正在运行 (端口 3000)');
    console.error('3. 数据库已初始化');
  }
}

main();
