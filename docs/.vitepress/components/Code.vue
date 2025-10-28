<script setup lang="tsx">
import { CodeSandboxOutlined, CopyOutlined } from '@ant-design/icons-vue';
import { message } from 'antd-v';
import { createHighlighter, type Highlighter } from 'shiki';
import type { Component } from 'vue';
import { computed, markRaw, nextTick, onMounted, ref } from 'vue';

const props = defineProps<{
  src: string;
  desc?: string;
  version?: string;
}>();

const showCode = ref(false);
const demoComponent = ref<Component | null>(null);
const codeContent = ref('');
const highlightedCode = ref('');
const isLoading = ref(true);
const error = ref<string>('');
const previewRef = ref<HTMLElement | null>(null);
const componentId = ref(`demo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
let highlighter: Highlighter | null = null;

// ✅ 关键修复：预加载所有 demo 文件和源码（构建时会被打包）
const demoModules = import.meta.glob('../../demo/**/*.vue', { eager: true });
const rawModules = import.meta.glob('../../demo/**/*.vue', { as: 'raw', eager: true });

// 主题切换
const isDark = computed(() => {
  if (typeof window !== 'undefined') {
    const html = document.documentElement;
    return html.classList.contains('dark') || html.getAttribute('data-theme') === 'dark';
  }
  return false;
});

const toggleCode = () => (showCode.value = !showCode.value);

const copyCode = async () => {
  if (!codeContent.value) return;
  try {
    await navigator.clipboard.writeText(codeContent.value);
    message.success('代码已复制到剪贴板！');
  } catch {
    message.error('复制失败');
  }
};

// 代码高亮
const highlightCode = async (code: string) => {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['vue', 'typescript', 'javascript'],
    });
  }
  const theme = isDark.value ? 'github-dark' : 'github-light';
  highlightedCode.value = highlighter.codeToHtml(code, { lang: 'vue', theme });
};

// 加载组件与源码（使用 glob 替代动态 import）
onMounted(async () => {
  try {
    isLoading.value = true;
    const path = `../../demo/${props.src}`;

    const demo = demoModules[path] as any;
    const source = rawModules[path] as string;

    if (!demo) throw new Error(`未找到组件 ${props.src}`);

    demoComponent.value = markRaw(demo.default);
    codeContent.value = source || '';

    await highlightCode(source);

    isLoading.value = false;

    // 滚动到当前 demo
    if (typeof window !== 'undefined' && window.location.hash === `#${componentId.value}`) {
      nextTick(() => {
        const el = document.getElementById(componentId.value);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  } catch (err) {
    console.error('加载组件失败:', err);
    error.value = `无法加载组件: ${props.src}`;
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="code-demo-wrapper" :id="componentId">
    <!-- 预览 -->
    <div ref="previewRef" class="code-demo-preview">
      <component :is="demoComponent" v-if="demoComponent" />
      <div v-else-if="error" class="code-demo-error">{{ error }}</div>
    </div>

    <!-- 工具栏 -->
    <div class="code-demo-toolbar">
      <span class="toolbar-title">{{ desc }}</span>
      <div class="toolbar-actions">
        <button class="toolbar-btn" :class="{ active: showCode }" @click="toggleCode" :title="showCode ? '隐藏代码' : '显示代码'">
          <CodeSandboxOutlined />
        </button>
        <button class="toolbar-btn" @click="copyCode" :disabled="!showCode" title="复制代码">
          <CopyOutlined />
        </button>
      </div>
    </div>

    <!-- 源码展示 -->
    <Transition name="fade">
      <div v-show="showCode" class="code-demo-code">
        <div v-if="highlightedCode" v-html="highlightedCode" class="highlight-wrapper"></div>
        <pre v-else><code class="language-vue">{{ codeContent }}</code></pre>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.code-demo-wrapper {
  margin: 24px 0;
  border: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02);
}

.code-demo-preview {
  padding: 24px;
}

.code-demo-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(5, 5, 5, 0.06);
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
}

.toolbar-title {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.toolbar-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.88);
}

.toolbar-btn.active {
  color: #1677ff;
  background: rgba(22, 119, 255, 0.06);
}

.toolbar-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.code-demo-code {
  border-top: 1px solid rgba(5, 5, 5, 0.06);
  background: #f6f8fa;
  max-height: 600px;
  overflow: auto;
}

.highlight-wrapper pre {
  margin: 0;
  padding: 16px;
  background: #f6f8fa;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
