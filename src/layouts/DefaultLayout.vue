<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Reading } from '@element-plus/icons-vue'

const route = useRoute()

const navItems = [
  { name: 'home', label: '首页', path: '/' },
  { name: 'projects', label: '项目', path: '/projects' }
]

const currentName = computed(() => route.name as string)
const year = new Date().getFullYear()
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="container header-inner">
        <router-link to="/" class="logo">
          <el-icon :size="24" color="#3b82f6"><Reading /></el-icon>
          <span>Yellow's Blog</span>
        </router-link>
        <nav class="nav">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="nav-link"
            :class="{ active: currentName === item.name }"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>
    </header>

    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <span>© {{ year }} Yellow's Blog</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
  color: var(--text-primary);
}

.nav {
  display: flex;
  gap: 28px;
}

.nav-link {
  font-size: 15px;
  color: var(--text-secondary);
  transition: color 0.2s;
  position: relative;
  padding: 4px 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--brand-color);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: var(--brand-color);
  border-radius: 2px;
}

.main {
  flex: 1;
}

.footer {
  border-top: 1px solid var(--border-color);
  background: #fff;
}

.footer-inner {
  padding: 20px 24px;
  color: var(--text-secondary);
  font-size: 13px;
  text-align: center;
}

@media (max-width: 640px) {
  .header-inner {
    height: 56px;
  }
  .logo span {
    display: none;
  }
  .nav {
    gap: 18px;
  }
  .nav-link {
    font-size: 14px;
  }
}
</style>
