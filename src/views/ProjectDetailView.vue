<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Link, Calendar, View as ViewIcon } from '@element-plus/icons-vue'
import { getProjectById } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const projectId = computed(() => Number(route.params.id))
const project = computed(() => getProjectById(projectId.value))

function goBack() {
  router.push({ name: 'projects' })
}
</script>

<template>
  <div>
    <section class="container page" v-if="project">
      <el-button text @click="goBack" class="back-btn">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回项目列表</span>
      </el-button>

      <article class="detail">
        <div class="cover">
          <el-image :src="project.cover" fit="cover" class="cover-img">
            <template #error>
              <div class="cover-fallback">{{ project.title.charAt(0) }}</div>
            </template>
          </el-image>
        </div>

        <h1 class="title">{{ project.title }}</h1>

        <div class="meta">
          <span class="meta-item">
            <el-icon><Calendar /></el-icon>
            {{ project.createdAt }}
          </span>
          <span class="meta-item" v-if="project.demoUrl">
            <el-icon><Link /></el-icon>
            <a :href="project.demoUrl" target="_blank" rel="noopener">在线演示</a>
          </span>
          <span class="meta-item" v-if="project.repoUrl">
            <el-icon><ViewIcon /></el-icon>
            <a :href="project.repoUrl" target="_blank" rel="noopener">源代码</a>
          </span>
        </div>

        <div class="tags">
          <el-tag
            v-for="tag in project.tags"
            :key="tag"
            effect="plain"
            round
          >
            {{ tag }}
          </el-tag>
        </div>

        <p class="desc">{{ project.description }}</p>

        <el-divider />

        <div class="content">
          <h2 class="content-title">项目详情</h2>
          <p
            v-for="(paragraph, idx) in project.content.split('\n').filter(Boolean)"
            :key="idx"
            class="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="actions">
          <el-button v-if="project.repoUrl" type="primary" tag="a" :href="project.repoUrl" target="_blank">
            访问仓库
          </el-button>
          <el-button v-if="project.demoUrl" tag="a" :href="project.demoUrl" target="_blank">
            在线体验
          </el-button>
          <el-button @click="goBack">返回列表</el-button>
        </div>
      </article>
    </section>

    <section class="container page" v-else>
      <el-result icon="warning" title="项目不存在" sub-title="找不到该 ID 对应的项目">
        <template #extra>
          <el-button type="primary" @click="goBack">返回项目列表</el-button>
        </template>
      </el-result>
    </section>
  </div>
</template>

<style scoped>
.back-btn {
  margin-bottom: 16px;
  padding-left: 0;
  color: var(--brand-color);
}

.detail {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  padding: 0 0 32px;
}

.cover {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #eef2f7;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
}

.cover-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6, #6aa3f9);
}

.title {
  margin: 24px 32px 12px;
  font-size: 32px;
  font-weight: 800;
  color: var(--text-primary);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 32px;
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 16px;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.meta-item a {
  color: var(--brand-color);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 32px;
  margin-bottom: 16px;
}

.desc {
  padding: 0 32px;
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0 0 8px;
}

.content {
  padding: 0 32px;
}

.content-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 16px;
  color: var(--text-primary);
}

.paragraph {
  margin: 0 0 16px;
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.85;
}

.actions {
  padding: 0 32px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}

@media (max-width: 640px) {
  .title,
  .meta,
  .tags,
  .desc,
  .content,
  .actions {
    padding-left: 20px;
    padding-right: 20px;
  }
  .title {
    font-size: 24px;
  }
}
</style>
