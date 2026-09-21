# Vue3 + TypeScript 个人博客实现方案

## Context
用户（前端转后端的开发者）希望在空目录 `e:\vue\boke` 中从零搭建一个 Vue3 + TypeScript 个人博客，包含首页、关于我、文章列表、项目模块（列表 + 详情独立路由）。后续会接入自己写的后端 API，因此前端数据层需要结构清晰、易于替换为真实接口。

## 技术栈
- Vite 5 + Vue 3 + TypeScript（`npm create vite@latest` 模板 `vue-ts`）
- Vue Router 4（独立路由，详情页 `/projects/:id`）
- Element Plus（按需引入 + 主题定制）
- 静态 mock 数据（TypeScript 类型化，后续可平滑替换为 axios）

## 目录结构
```
e:\vue\boke
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── env.d.ts
└── src
    ├── main.ts                      # 入口：注册 Element Plus、Router
    ├── App.vue                      # 根组件 + <router-view>
    ├── assets/
    │   └── styles/main.css          # 全局样式 + CSS 变量（主题色）
    ├── router/index.ts              # 路由配置（5 个路由）
    ├── types/index.ts               # Project / Article 类型定义
    ├── data/
    │   ├── projects.ts              # 项目 mock 数据
    │   └── articles.ts              # 文章 mock 数据
    ├── layouts/DefaultLayout.vue    # 顶部导航 + 内容区 + 页脚
    ├── components/
    │   ├── ProjectCard.vue          # 项目卡片（缩略图/标题/技术栈/链接）
    │   └── ArticleCard.vue          # 文章卡片
    └── views/
        ├── HomeView.vue             # 首页：简介 + 最近项目摘选
        ├── AboutView.vue            # 关于我：技术栈、联系方式
        ├── ArticlesView.vue         # 文章列表
        ├── ProjectsView.vue         # 项目列表（卡片网格 + 可筛选技术栈）
        └── ProjectDetailView.vue    # 项目详情 /projects/:id
```

## 关键实现点

### 1. 脚手架与依赖
- 使用 `npm create vite@latest . -- --template vue-ts` 在 `e:\vue\boke` 内初始化
- 安装：`vue-router@4 element-plus @element-plus/icons-vue`
- Vite 配置：`@` 别名指向 `src`，Element Plus 按需导入（用 `unplugin-auto-import` + `unplugin-vue-components`，减少手动 import）

### 2. 类型定义（`src/types/index.ts`）
```ts
export interface Project {
  id: number
  title: string
  description: string
  cover: string           // 缩略图 URL
  tags: string[]          // 技术栈
  repoUrl?: string
  demoUrl?: string
  content: string         // Markdown 风格正文（先用纯文本/段落）
  createdAt: string
}
export interface Article {
  id: number
  title: string
  summary: string
  cover: string
  tags: string[]
  createdAt: string
}
```

### 3. 路由（`src/router/index.ts`）
| 路径 | 视图 | 名称 |
|------|------|------|
| `/` | HomeView | home |
| `/about` | AboutView | about |
| `/articles` | ArticlesView | articles |
| `/projects` | ProjectsView | projects |
| `/projects/:id` | ProjectDetailView | project-detail |

详情页在 `ProjectsView` 的卡片点击时 `router.push({ name: 'project-detail', params: { id } })`；`ProjectDetailView` 用 `useRoute` 拿 id，从 `data/projects.ts` 找到对应数据，未找到时跳 404 提示。

### 4. 项目模块
- **ProjectsView**：`el-row` + `el-col` 卡片网格，顶部 `el-select` 或 `el-tag` 筛选技术栈（基于 `tags` 去重）
- **ProjectCard**：封面图（`el-image` lazy）、标题、简介、`el-tag` 技术栈、跳转详情按钮 + 仓库/演示链接
- **ProjectDetailView**：大图、标题、meta、技术栈标签、正文段落、`el-button` 返回列表

### 5. mock 数据
- `src/data/projects.ts`：内置 6 个示例项目（含 vue3、node、typescript 相关标签），方便后续替换为 API
- `src/data/articles.ts`：内置 4 篇示例文章

### 6. 样式与主题
- `src/assets/styles/main.css`：定义 CSS 变量（主色 `--brand-color`、背景、文字、卡片阴影）
- Element Plus 主题色通过 `vite.config.ts` 的 `unplugin-element-plus` 或 CSS 变量覆盖（用 `--el-color-primary`）
- 响应式：移动端单列、桌面端 3 列网格

## 验证步骤
1. `cd e:\vue\boke && npm install`
2. `npm run dev` 启动 Vite 开发服务器
3. 浏览器访问 `http://localhost:5173`，逐项验证：
   - 顶部导航四个链接可切换、当前路由高亮
   - 首页显示个人简介与最近项目
   - `/projects` 列表正常渲染，技术栈筛选生效
   - 点击卡片跳转 `/projects/:id`，详情正确显示
   - 直接在地址栏输入 `/projects/2` 也能正确展示
   - 移动端窗口宽度下卡片为单列
4. `npm run build` 通过 TypeScript 类型检查且产物生成

## 注意事项
- 不引入 Pinia（博客无复杂状态需求，详情页直接从 mock 查询即可）
- 不引入 Markdown 解析库，正文用纯文本段落，后续接入后端再考虑
- 不引入 axios，保持零运行时依赖；后续接 API 时再加
- Element Plus 图标按需引入，避免打包过大
