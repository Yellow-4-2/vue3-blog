import type { Project } from '@/types'

// 6 个示例项目。后续接入后端 API 时，将本文件替换为 axios 请求即可。
export const projects: Project[] = [
  {
    id: 7,
    title: '数据可视化分析平台',
    description: '基于 ECharts 的数据可视化大屏，集成柱状图、折线图、地图、雷达图、仪表盘等多种图表，实时展示业务指标。',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dark%20blue%20futuristic%20data%20visualization%20dashboard%20with%20multiple%20charts%20bar%20line%20radar%20gauge%20neon%20glow%20tech%20UI&image_size=landscape_16_9',
    tags: ['Vue3', 'ECharts', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/Yellow-4-2/echart',
    externalUrl: 'https://echart-dpjcnczkf1vu.edgeone.cool/',
    content: '基于 Vue3 + ECharts 5 的数据可视化分析平台。\n\n核心图表：\n- 月度访问量趋势（柱状图 + 均值标线）\n- 全国活跃用户分布（地图热力）\n- 24 小时流量监控（面积折线图）\n- 收入与支出对比（双 Y 轴折线）\n- 城市设备状态（堆叠柱状图）\n- 渠道来源占比（环形图）\n- 能力评估雷达（雷达图）\n- 设备使用率（仪表盘）\n- 资源使用率（进度条）',
    createdAt: '2026-09-21'
  },
  {
    id: 1,
    title: '个人博客系统',
    description: '基于 Vue3 + TypeScript + Element Plus 搭建的个人博客，支持首页、文章列表、项目展示与详情独立路由。',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20personal%20blog%20website%20homepage%20mockup%20blue%20accent%20clean%20ui&image_size=landscape_4_3',
    tags: ['Vue3', 'TypeScript', 'Element Plus', 'Vite'],
    repoUrl: 'https://github.com/yourname/vue3-blog',
    demoUrl: 'https://example.com',
    content: '本项目是一个完整的个人博客前端，包含路由配置、组件化设计、响应式布局与 Element Plus 主题定制。\n\n核心要点：\n- 使用 Vue Router 4 进行路由管理，详情页采用动态路由 /projects/:id。\n- 项目卡片网格采用响应式布局，桌面端 3 列、平板 2 列、移动端单列。\n- 全局 CSS 变量管理主题色，方便后续切换深色模式。\n- 数据层使用 TypeScript 类型化 mock，便于后续平滑接入后端 API。',
    createdAt: '2026-08-12'
  },
  {
    id: 2,
    title: '在线待办清单',
    description: '一个支持本地持久化的待办应用，可添加、编辑、删除、标记完成，按状态过滤展示。',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20todo%20list%20app%20interface%20checkboxes%20soft%20colors&image_size=landscape_4_3',
    tags: ['Vue3', 'Pinia', 'localStorage'],
    repoUrl: 'https://github.com/yourname/todo-app',
    demoUrl: 'https://example.com/todo',
    content: '基于 Vue3 + Pinia 的待办清单应用。\n\n功能亮点：\n- 使用 Pinia 集中管理任务状态，包括添加、删除、勾选完成、编辑文本。\n- 通过 localStorage 实现刷新后数据持久化。\n- 支持按「全部 / 未完成 / 已完成」三种状态过滤。\n- 任务支持优先级标签与截止日期提醒。',
    createdAt: '2026-07-05'
  },
  {
    id: 3,
    title: '天气查询应用',
    description: '调用第三方天气 API，展示当前天气与未来 7 日预报，支持城市搜索与定位。',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=weather%20forecast%20app%20dashboard%20sunny%20blue%20sky%20gradient&image_size=landscape_4_3',
    tags: ['Vue3', 'axios', 'Composition API'],
    repoUrl: 'https://github.com/yourname/weather-app',
    demoUrl: 'https://example.com/weather',
    content: '基于 Vue3 + axios 的天气查询应用。\n\n实现要点：\n- 使用 axios 封装统一请求拦截器，处理 loading 与错误兜底。\n- 通过 Composition API 拆分 useWeather、useCitySearch 两个 composable。\n- 城市搜索带防抖（debounce），减少无效请求。\n- 天气图标使用动态组件按条件渲染，提升视觉表现。',
    createdAt: '2026-06-20'
  },
  {
    id: 4,
    title: '电商后台管理系统',
    description: '覆盖商品、订单、用户、统计等模块的中后台系统，含权限控制与图表可视化。',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20admin%20dashboard%20charts%20tables%20professional%20ui&image_size=landscape_4_3',
    tags: ['Vue3', 'TypeScript', 'Element Plus', 'ECharts'],
    repoUrl: 'https://github.com/yourname/admin-system',
    content: '一套完整的电商后台管理系统。\n\n核心模块：\n- 商品管理：列表分页、分类筛选、上下架批量操作。\n- 订单管理：状态流转、详情查看、导出 Excel。\n- 用户与角色：基于 RBAC 的权限控制，路由级与按钮级鉴权。\n- 数据看板：使用 ECharts 展示 GMV、转化漏斗、热销排行。',
    createdAt: '2026-05-18'
  },
  {
    id: 5,
    title: '实时聊天室',
    description: '基于 Node.js + WebSocket 的多房间实时聊天系统，支持消息广播、在线列表与历史记录。',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20chat%20application%20messenger%20ui%20message%20bubbles&image_size=landscape_4_3',
    tags: ['Node.js', 'WebSocket', 'Vue3'],
    repoUrl: 'https://github.com/yourname/chat-room',
    demoUrl: 'https://example.com/chat',
    content: '前后端分离的实时聊天室。\n\n技术要点：\n- 后端 Node.js + ws 库实现 WebSocket 服务，维护房间与在线用户列表。\n- 前端 Vue3 监听消息推送，自动滚动到底部并显示在线状态。\n- 消息持久化到 SQLite，支持历史记录分页加载。\n- 加入心跳检测与断线重连机制，保证连接稳定性。',
    createdAt: '2026-04-09'
  },
  {
    id: 6,
    title: '在线音乐播放器',
    description: '支持播放列表、歌词同步、播放控制与频谱可视化的 Web 音乐播放器。',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dark%20music%20player%20ui%20album%20art%20play%20controls%20neon&image_size=landscape_4_3',
    tags: ['Vue3', 'HTML5 Audio', 'Canvas'],
    repoUrl: 'https://github.com/yourname/music-player',
    demoUrl: 'https://example.com/music',
    content: '基于 HTML5 Audio + Vue3 的音乐播放器。\n\n功能亮点：\n- 播放列表管理、单曲循环 / 列表循环 / 随机三种播放模式。\n- 使用 Web Audio API + Canvas 绘制实时频谱可视化。\n- 歌词同步滚动，支持点击跳转任意时间点。\n- 全局键盘快捷键支持空格暂停、左右切歌。',
    createdAt: '2026-03-22'
  }
]

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id)
}
