-- ===========================================
-- 微信心理诊断小程序 - 数据库建表语句
-- 数据库名：MBTI
-- 版本：v1.0
-- 日期：2026年5月
-- ===========================================

-- 创建数据库
CREATE DATABASE IF NOT EXISTS MBTI DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE MBTI;

-- ===========================================
-- 1. 测试分类表
-- ===========================================
CREATE TABLE IF NOT EXISTS test_categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '分类ID',
    name VARCHAR(50) NOT NULL COMMENT '分类名称（如：性格测试、心理健康测试、趣味测试）',
    description VARCHAR(500) DEFAULT '' COMMENT '分类描述',
    icon VARCHAR(200) DEFAULT '' COMMENT '分类图标路径',
    sort_order INT DEFAULT 0 COMMENT '排序号（数字越小越靠前）',
    status TINYINT DEFAULT 1 COMMENT '状态（0-禁用，1-启用）',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='测试分类表';

-- ===========================================
-- 2. 测试项目表
-- ===========================================
CREATE TABLE IF NOT EXISTS tests (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '测试ID',
    category_id BIGINT NOT NULL COMMENT '分类ID（关联test_categories表）',
    name VARCHAR(100) NOT NULL COMMENT '测试名称（如：MBTI性格测试）',
    description VARCHAR(1000) DEFAULT '' COMMENT '测试简介',
    cover_image VARCHAR(200) DEFAULT '' COMMENT '测试封面图路径',
    estimated_time INT DEFAULT 0 COMMENT '预计完成时长（分钟）',
    status TINYINT DEFAULT 1 COMMENT '状态（0-禁用，1-启用）',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_category_id (category_id),
    FOREIGN KEY (category_id) REFERENCES test_categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='测试项目表';

-- ===========================================
-- 3. 题目表
-- ===========================================
CREATE TABLE IF NOT EXISTS questions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '题目ID',
    test_id BIGINT NOT NULL COMMENT '测试ID（关联tests表）',
    content TEXT NOT NULL COMMENT '题目内容',
    type TINYINT DEFAULT 1 COMMENT '题型（1-单选，2-多选，3-量表1-5分）',
    sort_order INT DEFAULT 0 COMMENT '排序号',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_test_id (test_id),
    FOREIGN KEY (test_id) REFERENCES tests(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='题目表';

-- ===========================================
-- 4. 选项表
-- ===========================================
CREATE TABLE IF NOT EXISTS options (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '选项ID',
    question_id BIGINT NOT NULL COMMENT '题目ID（关联questions表）',
    content VARCHAR(500) NOT NULL COMMENT '选项内容',
    score INT DEFAULT 0 COMMENT '对应分值（量表题使用）',
    sort_order INT DEFAULT 0 COMMENT '排序号',
    INDEX idx_question_id (question_id),
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='选项表';

-- ===========================================
-- 5. 结果模板表
-- ===========================================
CREATE TABLE IF NOT EXISTS result_templates (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '结果模板ID',
    test_id BIGINT NOT NULL COMMENT '测试ID（关联tests表）',
    name VARCHAR(100) NOT NULL COMMENT '模板名称',
    min_score INT NOT NULL COMMENT '最低分值（包含）',
    max_score INT NOT NULL COMMENT '最高分值（包含）',
    title VARCHAR(200) NOT NULL COMMENT '结果标题',
    analysis TEXT COMMENT '详细分析内容',
    suggestion TEXT COMMENT '专业建议内容',
    INDEX idx_test_id (test_id),
    FOREIGN KEY (test_id) REFERENCES tests(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='结果模板表';

-- ===========================================
-- 6. 用户表（小程序用户）
-- ===========================================
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '用户ID',
    openid VARCHAR(100) NOT NULL UNIQUE COMMENT '微信OpenID',
    nickname VARCHAR(100) DEFAULT '' COMMENT '用户昵称',
    avatar VARCHAR(200) DEFAULT '' COMMENT '头像路径',
    gender TINYINT DEFAULT 0 COMMENT '性别（0-未知，1-男，2-女）',
    region VARCHAR(100) DEFAULT '' COMMENT '地区',
    status TINYINT DEFAULT 1 COMMENT '状态（0-禁用，1-启用）',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_openid (openid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

-- ===========================================
-- 7. 测试记录表
-- ===========================================
CREATE TABLE IF NOT EXISTS test_records (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '记录ID',
    user_id BIGINT NOT NULL COMMENT '用户ID（关联users表）',
    test_id BIGINT NOT NULL COMMENT '测试ID（关联tests表）',
    answers TEXT NOT NULL COMMENT '答题记录（JSON格式）',
    total_score INT DEFAULT 0 COMMENT '总分',
    result_template_id BIGINT COMMENT '匹配的结果模板ID（关联result_templates表）',
    completed_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '完成时间',
    INDEX idx_user_id (user_id),
    INDEX idx_test_id (test_id),
    INDEX idx_completed_at (completed_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (test_id) REFERENCES tests(id) ON DELETE CASCADE,
    FOREIGN KEY (result_template_id) REFERENCES result_templates(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='测试记录表';

-- ===========================================
-- 8. 管理员表（管理后台用户）
-- ===========================================
CREATE TABLE IF NOT EXISTS admins (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '管理员ID',
    username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
    password VARCHAR(32) NOT NULL COMMENT '密码（MD5加密）',
    nickname VARCHAR(50) DEFAULT '' COMMENT '昵称',
    role TINYINT DEFAULT 1 COMMENT '角色（1-超级管理员，2-内容管理员，3-数据管理员，4-只读用户）',
    status TINYINT DEFAULT 1 COMMENT '状态（0-禁用，1-启用）',
    last_login_at DATETIME DEFAULT NULL COMMENT '最后登录时间',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理员表';

-- ===========================================
-- 初始化数据
-- ===========================================

-- 插入测试分类数据
INSERT INTO test_categories (name, description, sort_order, status) VALUES
('性格测试', '了解你的性格特点和行为倾向', 1, 1),
('心理健康测试', '评估你的心理状态和健康水平', 2, 1),
('趣味测试', '轻松有趣的各类小测试', 3, 1);

-- 插入默认管理员账号
-- 用户名：admin，密码：amin（MD5加密后为：0cc175b9c0f1b6a831c399e269772661）
INSERT INTO admins (username, password, nickname, role, status) VALUES
('admin', '0cc175b9c0f1b6a831c399e269772661', '超级管理员', 1, 1);

-- ===========================================
-- 建表完成
-- ===========================================