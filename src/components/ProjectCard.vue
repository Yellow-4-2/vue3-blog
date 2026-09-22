<script setup lang="ts">
import type { Project } from '@/types'
import { Calendar, View, Link } from '@element-plus/icons-vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="project-card">
    <!-- 封面：有外链直接打开线上站点，否则进详情页 -->
    <a
      v-if="project.externalUrl"
      :href="project.externalUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="cover"
    >
      <el-image :src="project.cover" fit="cover" lazy class="cover-img">
        <template #error>
          <div class="cover-fallback">{{ project.title.charAt(0) }}</div>
        </template>
        <template #placeholder>
          <div class="cover-placeholder">加载中…</div>
        </template>
      </el-image>
      <span class="cover-hint">在线预览 ↗</span>
    </a>
    <router-link
      v-else
      :to="{ name: 'project-detail', params: { id: project.id } }"
      class="cover"
    >
      <el-image :src="project.cover" fit="cover" lazy class="cover-img">
        <template #error>
          <div class="cover-fallback">{{ project.title.charAt(0) }}</div>
        </template>
        <template #placeholder>
          <div class="cover-placeholder">加载中…</div>
        </template>
      </el-image>
      <span class="cover-hint">查看详情 →</span>
    </router-link>

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

      <div class="footer">
        <div class="meta">
          <el-icon><Calendar /></el-icon>
          <span>{{ project.createdAt }}</span>
        </div>
        <div class="actions">
          <router-link
            :to="{ name: 'project-detail', params: { id: project.id } }"
            class="action"
            title="查看项目详情"
          >
            <el-icon><View /></el-icon>
            <span>详情</span>
          </router-link>
          <a
            v-if="project.externalUrl"
            :href="project.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="action"
            title="打开线上站点"
          >
            <el-icon><Link /></el-icon>
            <span>预览</span>
          </a>
          <a
            v-if="project.repoUrl"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="action"
            title="查看 GitHub 源码"
          >
            <svg class="github-icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              />
            </svg>
            <span>源码</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
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
  position: relative;
  display: block;
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

.cover:hover .cover-img {
  transform: scale(1.04);
}

.cover-hint {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  font-size: 12px;
  color: #fff;
  background: rgba(15, 23, 42, 0.62);
  border-radius: 999px;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: none;
}

.cover:hover .cover-hint {
  opacity: 1;
  transform: translateY(0);
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
  padding: 16px 18px 14px;
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

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px dashed var(--border-color);
}

.meta {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 12px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.action {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.action:hover {
  color: var(--brand-color);
}

.github-icon {
  display: block;
}
</style>
