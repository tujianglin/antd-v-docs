<script lang="tsx" setup>
import { Splitter } from '#/packages';
</script>
<template>
  <div class="text-primary size-full p-2">
    <Splitter lazy bar-size="10" root-class-name="bg-[red]" layout="vertical">
      <Splitter.Panel collapsible> 1 </Splitter.Panel>
      <Splitter.Panel> 2 </Splitter.Panel>
    </Splitter>
  </div>
</template>
