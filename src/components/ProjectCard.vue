<script setup lang="ts">
import type { Project } from '@/types'
import { Calendar } from '@element-plus/icons-vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <router-link
    :to="{ name: 'project-detail', params: { id: project.id } }"
    class="project-card"
  >
    <div class="cover">
      <el-image :src="project.cover" fit="cover" lazy class="cover-img">
        <template #error>
          <div class="cover-fallback">{{ project.title.charAt(0) }}</div>
        </template>
        <template #placeholder>
          <div class="cover-placeholder">加载中…</div>
        </template>
      </el-image>
    </div>
    <div class="body">
      <h3 class="title">{{ project.title }}</h3>
      <p class="desc">{{ project.description }}</p>
      <div class="tags">
        <el-tag
          v-for="tag in project.tags"
          :key="tag"
          size="small"
          effect="plain"
          round
        >
          {{ tag }}
        </el-tag>
      </div>
      <div class="meta">
        <el-icon><Calendar /></el-icon>
        <span>{{ project.createdAt }}</span>
      </div>
    </div>
    <span class="view-link">查看详情 →</span>
  </router-link>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: transparent;
}

.cover {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #eef2f7;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
}

.project-card:hover .cover-img {
  transform: scale(1.04);
}

.cover-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6, #6aa3f9);
}

.cover-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 13px;
}

.body {
  padding: 16px 18px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.title {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
}

.desc {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 12px;
  margin-top: auto;
  padding-top: 8px;
}

.view-link {
  position: absolute;
  right: 14px;
  bottom: 12px;
  font-size: 12px;
  color: var(--brand-color);
  opacity: 0;
  transition: opacity 0.2s;
}

.project-card:hover .view-link {
  opacity: 1;
}
</style>
