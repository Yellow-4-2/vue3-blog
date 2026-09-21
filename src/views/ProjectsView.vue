<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const allTags = computed(() => {
  const set = new Set<string>()
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
  return Array.from(set)
})

const selectedTag = ref<string>('')

const filteredProjects = computed(() => {
  if (!selectedTag.value) return projects
  return projects.filter((p) => p.tags.includes(selectedTag.value))
})
</script>

<template>
  <section class="container page">
    <header class="page-header">
      <h1 class="section-title">项目</h1>
      <p class="section-subtitle">
        这里收录了我做过的一些项目，点击卡片可查看详情。
      </p>
    </header>

    <div class="filter-bar">
      <el-tag
        :type="selectedTag === '' ? 'primary' : 'info'"
        :effect="selectedTag === '' ? 'dark' : 'plain'"
        class="filter-tag"
        @click="selectedTag = ''"
      >
        全部
      </el-tag>
      <el-tag
        v-for="tag in allTags"
        :key="tag"
        :type="selectedTag === tag ? 'primary' : 'info'"
        :effect="selectedTag === tag ? 'dark' : 'plain'"
        class="filter-tag"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </el-tag>
    </div>

    <el-row :gutter="24" v-if="filteredProjects.length">
      <el-col
        v-for="project in filteredProjects"
        :key="project.id"
        :xs="24"
        :sm="12"
        :lg="8"
      >
        <ProjectCard :project="project" class="grid-item" />
      </el-col>
    </el-row>

    <el-empty v-else description="该筛选条件下暂无项目" />
  </section>
</template>

<style scoped>
.page-header {
  margin-bottom: 24px;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.filter-tag {
  cursor: pointer;
  user-select: none;
  transition: transform 0.15s;
}

.filter-tag:hover {
  transform: translateY(-1px);
}

.grid-item {
  margin-bottom: 24px;
}
</style>
