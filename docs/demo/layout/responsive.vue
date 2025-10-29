<script lang="ts" setup>
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons-vue';
import { Layout, Menu } from 'antd-v';
import { ref } from 'vue';
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

const selectedKeys = ref<string[]>(['4']);
</script>
<template>
  <Layout>
    <Layout.Sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
      <div class="logo"></div>
      <Menu v-model:selected-keys="selectedKeys" theme="dark" mode="inline">
        <Menu.Item key="1">
          <UserOutlined />
          <span class="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span class="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span class="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <UserOutlined />
          <span class="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
    <Layout>
      <Layout.Header :style="{ background: '#fff', padding: 0 }" />
      <Layout.Content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div>
      </Layout.Content>
      <Layout.Footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </Layout.Footer>
    </Layout>
  </Layout>
</template>
