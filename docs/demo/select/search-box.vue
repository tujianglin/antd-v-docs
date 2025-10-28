<script setup lang="tsx">
import { Select } from 'antd-v';
import { h, ref } from 'vue';

let timeout: ReturnType<typeof setTimeout> | null;
let currentValue: string;

const toURLSearchParams = <T extends Record<string, any>>(record: T) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(record)) {
    params.append(key, value);
  }
  return params;
};

const fetchData = (value: string, callback: (data: { value: string; text: string }[]) => void) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  const params = toURLSearchParams({ code: 'utf-8', q: value });

  const fake = () => {
    fetch(`https://suggest.taobao.com/sug?${params.toString()}`)
      .then((response) => response.json())
      .then(({ result }) => {
        if (currentValue === value) {
          const data = result.map((item: any) => ({ value: item[0], text: item[0] }));
          callback(data);
        }
      });
  };
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([]);
  }
};

const SearchInput = (props: { placeholder: string; style: Record<string, any> }) => {
  const data = ref<any[]>([]);
  const value = ref<string>();

  const handleSearch = (newValue: string) => {
    fetchData(newValue, (dataValue) => {
      data.value = dataValue;
    });
  };

  const handleChange = (newValue: string) => {
    value.value = newValue;
  };

  return h(Select, {
    showSearch: { filterOption: false, onSearch: handleSearch },
    modelValue: value.value,
    'onUpdate:modelValue': handleChange,
    placeholder: props.placeholder,
    style: props.style,
    defaultActiveFirstOption: false,
    suffixIcon: null,
    notFoundContent: null,
    options: (data.value || []).map((d) => ({
      value: d.value,
      label: d.text,
    })),
  });
};
</script>

<template>
  <SearchInput placeholder="input search text" style="width: 200px" />
</template>
