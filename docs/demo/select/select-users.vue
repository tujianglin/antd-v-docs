<script lang="tsx" setup>
import { Select, Spin } from 'antd-v';
import { debounce } from 'lodash-es';
import { h, reactive, watch } from 'vue';
let lastFetchId = 0;

const state = reactive({
  data: [],
  value: [],
  fetching: false,
});

const debounceFetcher = debounce((value) => {
  console.log('fetching user', value);
  lastFetchId += 1;
  const fetchId = lastFetchId;
  state.data = [];
  state.fetching = true;
  fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) => {
      if (fetchId !== lastFetchId) {
        // for fetch callback order
        return;
      }
      const data = body.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      }));
      state.data = data;
      state.fetching = false;
    });
}, 300);

watch(state.value, () => {
  state.data = [];
  state.fetching = false;
});
</script>
<template>
  <Select
    v-model:value="state.value"
    mode="multiple"
    label-in-value
    placeholder="Select users"
    style="width: 100%"
    :filter-option="false"
    :options="state.data"
    :show-search="{ filterOption: false, onSearch: debounceFetcher }"
    :not-found-content="state.fetching ? h(Spin, { size: 'small' }) : 'No results found'"
  />
</template>
