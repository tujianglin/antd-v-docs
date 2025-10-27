<script setup lang="ts">
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

// 获取当前主题
const isDark = computed(() => {
  if (typeof window !== 'undefined') {
    const html = document.documentElement;
    return html.classList.contains('dark') || html.getAttribute('data-theme') === 'dark';
  }
  return false;
});

// 切换代码显示
const toggleCode = () => {
  showCode.value = !showCode.value;
};

// 复制代码
const copyCode = async () => {
  if (codeContent.value) {
    try {
      await navigator.clipboard.writeText(codeContent.value);
      message.success('代码已复制到剪贴板！');
    } catch {
      message.error('复制失败');
    }
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
  const tokens = highlighter.codeToHtml(code, {
    lang: 'vue',
    theme,
  });

  highlightedCode.value = tokens;
};

// 加载组件和代码
onMounted(async () => {
  try {
    isLoading.value = true;

    // 加载组件
    const dynamicModule = await import(/* @vite-ignore */ `../../demo/${props.src}`);
    demoComponent.value = markRaw(dynamicModule.default);
    // 加载源代码 - 通过 Vite 的原始文件导入
    const codeModule = await import(/* @vite-ignore */ `../../demo/${props.src}?raw`);
    const sourceCode = codeModule.default || codeModule;
    codeContent.value = sourceCode;

    // 高亮代码
    await highlightCode(sourceCode);

    isLoading.value = false;

    // 检查 hash 并滚动到对应位置
    if (typeof window !== 'undefined' && window.location.hash === `#${componentId.value}`) {
      nextTick(() => {
        const element = document.getElementById(componentId.value);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
    <!-- 预览区域 -->
    <div ref="previewRef" class="code-demo-preview">
      <component :is="demoComponent" v-if="demoComponent" />
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

    <!-- 代码区域 -->
    <Transition name="fade">
      <div v-show="showCode" class="code-demo-code">
        <!-- eslint-disable-next-line vue/no-v-html -->
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
  background: #ffffff;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02);
}

.code-demo-title {
  padding: 16px 24px;
  background: #ffffff;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
}

.code-demo-title :deep(h1),
.code-demo-title :deep(h2),
.code-demo-title :deep(h3),
.code-demo-title :deep(h4),
.code-demo-title :deep(h5),
.code-demo-title :deep(h6) {
  margin: 0;
  margin-bottom: 0;
  font-weight: 500;
}

.code-demo-title :deep(h3) {
  font-size: 16px;
}

.code-demo-preview {
  padding: 24px;
  background: #ffffff;
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

.code-demo-toolbar .toolbar-title {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);
  line-height: 22px;
}

.code-demo-toolbar .toolbar-actions {
  display: flex;
  gap: 8px;
}

.code-demo-toolbar .toolbar-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.code-demo-toolbar .toolbar-btn > * {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.code-demo-toolbar .toolbar-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.88);
}

.code-demo-toolbar .toolbar-btn.active {
  color: #1677ff;
}

.code-demo-toolbar .toolbar-btn.active:hover {
  background: rgba(22, 119, 255, 0.06);
}

.code-demo-toolbar .toolbar-btn:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

.code-demo-code {
  border-top: 1px solid rgba(5, 5, 5, 0.06);
  background: #f6f8fa;
  max-height: 600px;
  overflow: auto;
}

.code-demo-code pre {
  margin: 0;
  background: #f6f8fa;
}

.code-demo-code code {
  font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace;
  font-size: 14px;
  line-height: 1.5714285714285714;
}

.highlight-wrapper {
  font-size: 14px;
  line-height: 1.5714285714285714;
  overflow-x: auto;
}

.highlight-wrapper pre {
  margin: 0;
  padding: 16px;
  background: #f6f8fa;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style>
/* Shiki 代码高亮样式 */
.highlight-wrapper {
  margin: 0;
}

.highlight-wrapper pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace;
  font-size: 14px;
  line-height: 1.5714285714285714;
  background: #f6f8fa;
}

.highlight-wrapper code {
  font-family: inherit;
  font-size: inherit;
}

/* 确保代码高亮在暗色和亮色主题下都正常显示 */
.vp-doc [data-theme='dark'] .highlight-wrapper,
[data-theme='dark'] .highlight-wrapper {
  color-scheme: dark;
}

.vp-doc [data-theme='light'] .highlight-wrapper,
[data-theme='light'] .highlight-wrapper {
  color-scheme: light;
}
</style>
