<script lang="tsx" setup>
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Breadcrumb } from 'antd-v';
import { h } from 'vue';
</script>
<template>
  <Breadcrumb
    :dropdown-props="{}"
    :items="[
      {
        href: '',
        title: HomeOutlined,
      },
      {
        href: '',
        title: [h(UserOutlined), h('span', {}, 'Application List')],
      },
      {
        title: 'Application',
      },
    ]"
  />
</template>
