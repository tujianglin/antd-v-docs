<script setup lang="tsx">
import { Select, Tag } from 'antd-v';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

const tagRender = (props: any) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginInlineEnd: '4px',
      }}
    >
      {label}
    </Tag>
  );
};
</script>

<template>
  <Select mode="multiple" :tag-render="tagRender" :value="['gold', 'cyan']" style="width: 100%" :options="options" />
</template>
