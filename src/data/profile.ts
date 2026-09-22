// 个人资料：技能栈分组 + 联系方式（供首页、页脚及后续关于页复用）

export interface SkillGroup {
  name: string
  skills: string[]
  /** 标记为正在学习/转型方向的分组 */
  learning?: boolean
}

export const skillGroups: SkillGroup[] = [
  {
    name: '前端基础',
    skills: ['Vue 3', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass']
  },
  {
    name: '框架与库',
    skills: ['Vue Router', 'Pinia', 'Element Plus', 'Vant']
  },
  {
    name: '数据可视化',
    skills: ['ECharts', '可视化大屏', 'GeoJSON 地图', '图表组件封装']
  },
  {
    name: '工程化与部署',
    skills: ['Vite', 'Git', 'GitHub Actions', 'Cloudflare Pages', 'npm']
  }
  // 后端学习分组暂不展示，恢复时重新加入即可：
  // {
  //   name: '后端 · 学习中',
  //   learning: true,
  //   skills: ['Node.js', 'NestJS', 'JWT 鉴权', 'RESTful API']
  // }
]

// 邮箱拆分为两段存储、渲染时拼接，轻度规避爬虫直接从 HTML 收集
export const emailUser = 'ziws123'
export const emailDomain = '126.com'
export const email = `${emailUser}@${emailDomain}`
