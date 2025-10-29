<script lang="ts" setup>
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Breadcrumb, Layout, Menu } from 'antd-v';
import { ref } from 'vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
</script>
<template>
  <Layout style="min-height: 300px">
    <Layout.Sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"></div>
      <Menu v-model:selected-keys="selectedKeys" theme="dark" mode="inline">
        <Menu.Item key="1">
          <PieChartOutlined />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <DesktopOutlined />
          <span>Option 2</span>
        </Menu.Item>
        <Menu.SubMenu key="sub1">
          <template #title>
            <span>
              <UserOutlined />
              <span>User</span>
            </span>
          </template>
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2">
          <template #title>
            <span>
              <TeamOutlined />
              <span>Team</span>
            </span>
          </template>
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="9">
          <FileOutlined />
          <span>File</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
    <Layout>
      <Layout.Header style="background: #fff; padding: 0" />
      <Layout.Content style="margin: 0 16px">
        <Breadcrumb style="margin: 16px 0" :items="[{ title: 'User' }, { title: 'Bill' }]" />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">Bill is a cat.</div>
      </Layout.Content>
      <Layout.Footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </Layout.Footer>
    </Layout>
  </Layout>
</template>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}
</style>
