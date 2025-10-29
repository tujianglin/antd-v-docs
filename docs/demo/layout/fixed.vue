<script lang="ts" setup>
import { Breadcrumb, Layout, Menu } from 'antd-v';
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['2']);
</script>
<template>
  <Layout>
    <Layout.Header :style="{ zIndex: 1, width: '100%' }">
      <div class="logo"></div>
      <Menu v-model:selected-keys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
    <Layout.Content :style="{ padding: '0 50px', marginTop: '64px' }">
      <Breadcrumb :style="{ margin: '16px 0' }" :items="[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]" />
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">Content</div>
    </Layout.Content>
    <Layout.Footer :style="{ textAlign: 'center' }"> Ant Design ©2018 Created by Ant UED </Layout.Footer>
  </Layout>
</template>
