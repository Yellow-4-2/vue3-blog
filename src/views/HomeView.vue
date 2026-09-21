<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const recentProjects = computed(() => [...projects].slice(0, 3))
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <h1 class="hero-title">你好，我是 Yellow。</h1>
        <p class="hero-sub">
          一名前端开发者。
          这里记录我做过的项目。
        </p>
        <div class="hero-actions">
          <router-link to="/projects">
            <el-button type="primary" round>
              查看项目
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </router-link>
        </div>
      </div>
    </section>

    <section class="container page">
      <div class="section-header">
        <div>
          <h2 class="section-title">最近项目</h2>
          <p class="section-subtitle">这些是我近期做完或仍在迭代的项目</p>
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

.badge {
  background: #fff;
  border: 1px solid var(--border-color);
  color: var(--brand-color);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
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

.more-link {
  color: var(--brand-color);
  font-size: 14px;
  font-weight: 500;
}

.grid-item {
  margin-bottom: 24px;
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
