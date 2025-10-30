<script lang="tsx" setup>
import { Pagination } from 'antd-v';
</script>
<template>
  <Pagination simple :current="2" :total="50" />
  <br />
  <Pagination :simple="{ readOnly: true }" :current="2" :total="50" />
  <br />
  <Pagination disabled simple :current="2" :total="50" />
</template>
