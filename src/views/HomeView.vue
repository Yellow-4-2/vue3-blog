<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, Promotion } from '@element-plus/icons-vue'
import { projects } from '@/data/projects'
import { skillGroups } from '@/data/profile'
import ProjectCard from '@/components/ProjectCard.vue'

const recentProjects = computed(() => [...projects].slice(0, 3))
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <h1 class="hero-title">你好，我是 Yellow。</h1>
        <p class="hero-sub">
          一名前端开发者，正在向全栈 / 后端方向探索。
          这里记录我做过的项目。
        </p>
        <div class="hero-actions">
          <router-link to="/projects">
            <el-button type="primary" round>
              查看项目
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </router-link>
          <!-- 联系我按钮暂不展示
          <el-button tag="a" :href="`mailto:${email}`" round>
            <el-icon class="el-icon--left"><Message /></el-icon>
            联系我
          </el-button>
          -->
        </div>
      </div>
    </section>

    <section class="container page">
      <div class="section-header">
        <div>
          <h2 class="section-title">技能栈</h2>
          <p class="section-subtitle-inline">我日常开发中使用的技术与工具</p>
        </div>
      </div>

      <div class="skills-grid">
        <div
          v-for="group in skillGroups"
          :key="group.name"
          class="skill-card"
          :class="{ 'skill-card--learning': group.learning }"
        >
          <div class="skill-card-head">
            <h3 class="skill-card-title">{{ group.name }}</h3>
            <span v-if="group.learning" class="learning-badge">
              <el-icon><Promotion /></el-icon>
              学习中
            </span>
          </div>
          <div class="skill-tags">
            <el-tag
              v-for="skill in group.skills"
              :key="skill"
              size="default"
              :type="group.learning ? 'warning' : 'info'"
              :effect="group.learning ? 'light' : 'plain'"
              round
            >
              {{ skill }}
            </el-tag>
          </div>
        </div>
      </div>
    </section>

    <section class="container page page--tight">
      <div class="section-header">
        <div>
          <h2 class="section-title">最近项目</h2>
          <p class="section-subtitle-inline">这些是我近期做完或仍在迭代的项目</p>
        </div>
        <router-link to="/projects" class="more-link">查看全部 →</router-link>
      </div>

      <el-row :gutter="24">
        <el-col
          v-for="project in recentProjects"
          :key="project.id"
          :xs="24"
          :sm="12"
          :lg="8"
        >
          <ProjectCard :project="project" class="grid-item" />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #eaf1fe 0%, #f7f8fb 100%);
  border-bottom: 1px solid var(--border-color);
  padding: 80px 0;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 720px;
}

.hero-title {
  margin: 0;
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--text-primary);
}

.hero-sub {
  margin: 0;
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 28px;
}

.section-subtitle-inline {
  color: var(--text-secondary);
  margin: 0;
  font-size: 15px;
}

.more-link {
  color: var(--brand-color);
  font-size: 14px;
  font-weight: 500;
}

.page--tight {
  padding-top: 0;
}

/* 技能栈 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 22px 24px;
  box-shadow: var(--shadow-card);
  transition: transform 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card-hover);
}

.skill-card--learning {
  border-style: dashed;
  border-color: var(--el-color-warning-light-5, #e6a23c);
  background: linear-gradient(135deg, #fffaf0 0%, #ffffff 60%);
}

.skill-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.skill-card-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.learning-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #b88230;
  background: #fdf6ec;
  border: 1px solid #f5dab1;
  border-radius: 999px;
  padding: 2px 10px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.grid-item {
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 56px 0;
  }
  .hero-title {
    font-size: 32px;
  }
  .hero-sub {
    font-size: 14px;
  }
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
