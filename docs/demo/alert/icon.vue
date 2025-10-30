<script lang="tsx" setup>
import { Alert } from 'antd-v';
import {} from 'vue';
</script>
<template>
  <Alert title="Success Tips" type="success" show-icon />
  <br />
  <Alert title="Informational Notes" type="info" show-icon />
  <br />
  <Alert title="Warning" type="warning" show-icon closable />
  <br />
  <Alert title="Error" type="error" show-icon />
  <br />
  <Alert
    title="Success Tips"
    description="Detailed description and advice about successful copywriting."
    type="success"
    show-icon
  />
  <br />
  <Alert
    title="Informational Notes"
    description="Additional description and information about copywriting."
    type="info"
    show-icon
  />
  <br />
  <Alert title="Warning" description="This is a warning notice about copywriting." type="warning" show-icon closable />
  <br />
  <Alert title="Error" description="This is an error message about copywriting." type="error" show-icon />
</template>
