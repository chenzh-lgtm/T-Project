# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a WeChat Mini Program for psychological testing, including MBTI性格测试, PHQ-9抑郁筛查, and various other mental health and personality assessments. The project has a complete frontend UI and business logic, with an optional Node.js/Express backend and MySQL database for persistent storage.

## Common Commands

### Frontend (WeChat Mini Program)
- **Run the project**: Open the root directory in WeChat Developer Tools, use a test AppID, and compile. No build step required - it uses native WeChat Mini Program framework.
- **Fix compilation issues**: If you get base库 download errors, use version 2.19.4 (configured in project.config.json) or other stable versions listed in 编译问题解决.md. Clear cache and reimport if needed.

### Backend
```bash
# Install dependencies (root directory for db init, backend directory for server)
npm install

# Initialize MySQL database (root directory)
npm run init-db

# Start backend server (run from backend/ directory)
cd backend
npm start

# Check database connection (run from backend/ directory)
npm run check-db
```

## High-Level Architecture

### Frontend Structure (Root Directory)
- **Pages**: All functional pages are in `pages/` - follows standard WeChat Mini Program structure (each page has .js, .wxml, .wxss, .json files)
  - `pages/index/` - Home page with test categories and recommendations
  - `pages/test-list/` - Test listing with filtering and search
  - `pages/test-detail/` - Test introduction page with start button
  - `pages/test/` - Answer flow with question navigation
  - `pages/result/` - Test results and analysis display
  - `pages/profile/` - User center with test history and settings
- **Components**: Reusable UI components in `components/` (test-card, question-item, progress-bar)
- **Data**: All mock test data, questions, and result templates are in `data/mock-data.js`
- **Utils**: Helper functions for API calls (`utils/api.js`), local storage (`utils/storage.js`), and common utilities

### Backend Structure (`backend/` Directory)
- Built with Express.js + MySQL 8.0+
- `server.js` - Main API server entry point
- `import-data.js` - Data import utilities
- Database tables: test_categories, tests, questions, options, result_templates, users, test_records, admins (see `init-database.js` for schema)

### Data Flow
- Frontend can run fully standalone with mock data (no backend required for basic functionality)
- When backend is enabled, frontend API calls in `utils/api.js` connect to the Express server for persistent user data and test records

## Important Notes
- Database default config: localhost:3306, user root, password 123456, database name MBTI
- Default admin account: username `admin`, password `amin`
- All test content, questions, and result templates are defined in `data/mock-data.js` - modify this file to add or update tests
- The project uses WeChat Mini Program native framework (no Vue/React wrappers) - all code follows official WeChat Mini Program conventions
