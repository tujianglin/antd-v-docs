<script lang="ts" setup>
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons-vue';
import { Layout, Menu } from 'antd-v';
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['4']);
</script>
<template>
  <Layout has-sider class="h-[400px]">
    <Layout.Sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
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
          <BarChartOutlined />
          <span class="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <CloudOutlined />
          <span class="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <AppstoreOutlined />
          <span class="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <TeamOutlined />
          <span class="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <ShopOutlined />
          <span class="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
    <Layout :style="{ marginLeft: '200px', overflow: 'auto' }">
      <Layout.Header :style="{ background: '#fff', padding: 0 }" />
      <Layout.Content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Layout.Content>
      <Layout.Footer :style="{ textAlign: 'center' }"> Ant Design ©2018 Created by Ant UED </Layout.Footer>
    </Layout>
  </Layout>
</template>
