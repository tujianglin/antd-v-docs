<script lang="ts" setup>
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Breadcrumb, Layout, Menu } from 'antd-v';
import { ref } from 'vue';
const selectedKeys1 = ref<string[]>(['2']);
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
</script>
<template>
  <Layout>
    <Layout.Header class="flex items-center">
      <div class="demo-logo"></div>
      <Menu v-model:selected-keys="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
    <Layout>
      <Layout.Sider width="200" style="background: #fff">
        <Menu
          v-model:selected-keys="selectedKeys2"
          v-model:open-keys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <Menu.SubMenu key="sub1">
            <template #title>
              <span>
                <UserOutlined />
                subnav 1
              </span>
            </template>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2">
            <template #title>
              <span>
                <LaptopOutlined />
                subnav 2
              </span>
            </template>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub3">
            <template #title>
              <span>
                <NotificationOutlined />
                subnav 3
              </span>
            </template>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
      <Layout style="padding: 0 24px 24px">
        <Breadcrumb style="margin: 16px 0" :items="[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]" />
        <Layout.Content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"> Content </Layout.Content>
      </Layout>
    </Layout>
  </Layout>
</template>
<style scoped>
.demo-logo {
  width: 120px;
  min-width: 120px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  margin-inline-end: 24px;
}
</style>
