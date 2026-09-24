import type { Project } from '@/types'

// 2 个真实项目。后续接入后端 API 时，将本文件替换为 axios 请求即可。
export const projects: Project[] = [
  {
    id: 10,
    title: '电子商务产品质量抽查协作系统',
    description: '面向电商抽检业务的协作平台，覆盖「任务分配 → 买样 → 物流跟踪 → 检验」全流程，双角色权限 + Excel 批量导入产品链接 + 买样凭证上传。',
    cover: `${import.meta.env.BASE_URL}covers/dianzichoucha.png`,
    tags: ['Vue3', 'TypeScript', 'Element Plus', 'Pinia', 'Vue Router', 'ECharts'],
    repoUrl: 'https://github.com/Yellow-4-2/dianzichoucha',
    externalUrl: 'https://dianzichoucha.pages.dev/',
    content: '面向电子商务产品质量抽检业务的协作平台，覆盖「任务分配 → 买样 → 物流跟踪 → 检验」全流程。\n\n角色与权限：\n- 管理员：全量菜单可见，负责任务分配、目标导入、买样人员管理\n- 抽检人员（兼买样）：仅可见买样与物流跟踪，且只看到分配给自己的样品\n\n核心模块：\n- 分配任务：已有任务表格 + 添加任务弹窗（任务名称/抽检类目/抽检机构/批次数量/买样数量/任务说明），支持下载导入模板与 Excel 批量导入产品链接\n- 分配样品列表：子页面，按任务类目筛选样品，多选样品 + 多选买样人员后开始买样\n- 买样：待买样/运输中页签切换，确认购买进入详情页上传凭证（产品详情截图、买样视频、订单详情截图）\n- 物流跟踪：已购买样品列表，录入物流平台/单号/物流单号截图\n- 数据看板：ECharts 统计图表\n\n技术要点：\n- Excel 导入产品链接（xlsx 解析 + 模板下载 + 平台/价格/必填校验）\n- 接口层一次性组装冗余字段（enrichTask/enrichExecution），避免前端二次请求\n- 路由 meta.roles 控制菜单可见性与访问权限，redirect 按角色分流\n- mock 数据层模拟后端，buyerId 过滤实现抽检人员数据隔离',
    createdAt: '2026-09-24'
  },
  {
    id: 9,
    title: '直播监测系统',
    description: 'AI 驱动的直播间违规内容实时监测平台，支持违规话术识别、关联商品溯源、视频留存取证，Vue3 + ECharts 可视化首页。',
    cover: `${import.meta.env.BASE_URL}covers/zhibojiance.png`,
    tags: ['Vue3', 'TypeScript', 'ECharts', 'Vue Router', 'Vite'],
    repoUrl: 'https://github.com/Yellow-4-2/zhibojiance',
    externalUrl: 'https://zhibojiance.pages.dev/',
    content: '面向直播电商合规场景的 AI 监测系统。\n\n核心功能：\n- 实时追踪在播主播状态，AI 自动识别主播话术中的功效夸大、违禁词、医疗暗示等违规内容\n- 违规记录自动关联商品链接，一键导出违规产品清单\n- 支持直播间视频留存到本地，作为违规取证依据\n\n技术架构：\n- 首页（Hash 路由 /）：4 个 KPI 卡片 + ECharts 三图（近 7 天违规趋势折线、违规类型饼图、主播违规排行柱状）+ 在播主播 / 历史主播 / 重点监测产品列表\n- 监测页（/monitor/:anchorId）：直播视频占位 + AI 违规面板（高/中/低风险分级 + 整改建议）+ 直播间产品清单 + 保存视频按钮\n- 数据层：mock 数据集中管理，预留真实接口接入位',
    createdAt: '2026-09-22'
  },
  {
    id: 8,
    title: '智慧和解平台',
    description: '消费维权在线和解平台，消保委/消费者/入驻企业三种角色，PC 与移动端双 UI 库响应式适配，NestJS + JWT 后端。',
    cover: `${import.meta.env.BASE_URL}covers/zhihui-hejie.png`,
    tags: ['Vue3', 'TypeScript', 'Element Plus', 'Vant', 'NestJS', 'JWT'],
    repoUrl: 'https://github.com/Yellow-4-2/zhihui-hejie',
    externalUrl: 'https://zhihui-hejie.pages.dev/',
    content: '面向浙江省消保委业务场景的在线消费纠纷和解平台，覆盖「发起和解 → 受理 → 和解 → 完成/评价」全流程。\n\n角色与端：\n- 消保委：PC 管理端（Element Plus 深色侧边栏 + 数据看板）与移动端\n- 消费者：手机端发起和解、跟进进度、评价\n- 入驻企业：手机端受理与处理和解请求\n\n技术要点：\n- 一套代码同时适配 PC 与移动：Element Plus 与 Vant 双 UI 库共存，900px 断点由 CSS 媒体查询切换两套模板\n- postcss px-to-vw 方案配合目录级 exclude，避免 PC 样式被转成 vw 导致布局塌陷\n- Pinia + pinia-plugin-persistedstate 管理登录态与和解案件状态流转\n- 后端 NestJS 10 提供 JWT 鉴权、RBAC 角色守卫、用户 CRUD 与 Swagger 文档',
    createdAt: '2026-09-21'
  },
  {
    id: 7,
    title: '数据可视化分析平台',
    description: '基于 ECharts 的数据可视化大屏，集成柱状图、折线图、地图、雷达图、仪表盘等多种图表，实时展示业务指标。',
    cover: `${import.meta.env.BASE_URL}covers/echart.jpg`,
    tags: ['Vue3', 'ECharts', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/Yellow-4-2/echart',
    externalUrl: 'https://data-visualization-dashboard.pages.dev/',
    content: '基于 Vue3 + ECharts 5 的数据可视化分析平台。\n\n核心图表：\n- 月度访问量趋势（柱状图 + 均值标线）\n- 全国活跃用户分布（地图热力）\n- 24 小时流量监控（面积折线图）\n- 收入与支出对比（双 Y 轴折线）\n- 城市设备状态（堆叠柱状图）\n- 渠道来源占比（环形图）\n- 能力评估雷达（雷达图）\n- 设备使用率（仪表盘）\n- 资源使用率（进度条）',
    createdAt: '2026-09-21'
  }
]

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id)
}
