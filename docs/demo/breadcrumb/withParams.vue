<script lang="tsx" setup>
import { Breadcrumb } from 'antd-v';
</script>
<template>
  <Breadcrumb
    :items="[
      {
        title: 'Users',
      },
      {
        title: ':id',
        href: '',
      },
    ]"
    :params="{ id: 1 }"
  />
</template>
