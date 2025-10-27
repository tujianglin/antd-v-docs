<script lang="tsx" setup>
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
  SettingOutlined,
  SyncOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue';
import { Button, type ButtonProps } from 'antd-v';
import clsx from 'clsx';
import { computed, h, useAttrs } from 'vue';

defineOptions({ name: 'WmButton', inheritAttrs: false, compatConfig: { MODE: 3 } });

const props = defineProps<
  ButtonProps & {
    cType?: 'add' | 'delete' | 'setting' | 'edit' | 'view' | 'reset' | 'upload' | 'download' | 'close' | 'save';
    text?: boolean;
  }
>();

const IconMap = {
  add: PlusOutlined,
  delete: DeleteOutlined,
  setting: SettingOutlined,
  edit: EditOutlined,
  view: EyeOutlined,
  reset: SyncOutlined,
  upload: UploadOutlined,
  download: DownloadOutlined,
  close: CloseOutlined,
  save: CheckOutlined,
};

const attrs = useAttrs() as { click?: () => void };

const getBindValues = computed(() => {
  return {
    ...props,
    ...attrs,
    type: props.text ? 'text' : props.type,
    icon: props?.cType ? h(IconMap[props.cType]) : props.icon,
  } as any;
});
</script>
<template>
  <Button v-bind="getBindValues" :class="clsx({ 'btn-text': type === 'text' })">
    <slot></slot>
  </Button>
</template>

<style>
.ant-btn-text > .anticon + span {
  margin-inline-start: 4px;
}

.ant-btn-text > span + .anticon {
  margin-inline-start: 4px;
}
</style>

<style lang="scss" scoped>
.ant-btn {
  &:disabled {
    opacity: 0.5;
    border-color: var(--color);
    color: var(--color);
    background: transparent;
  }

  &-default {
    border-color: var(--color);
    color: var(--color);
  }

  &-primary {
    box-shadow: none !important;

    &:disabled {
      background: var(--color) !important;
      color: #fff !important;
    }
  }

  &-text {
    height: auto;
    padding: 0;
    line-height: 18px;
    height: 18px;

    .anticon + span {
      margin-inline-start: 4px;
    }

    &:disabled {
      border: transparent;
      color: var(--text);
    }

    &:hover {
      background: transparent;
      color: var(--color) !important;
    }

    &.btn-text {
      color: var(--color) !important;

      &:disabled {
        border: transparent !important;
      }
      &:hover {
        background: transparent;
        color: var(--primary-400) !important;
      }
    }

    &.ant-btn-dangerous {
      color: var(--text);

      &:hover {
        color: var(--color-red-400) !important;
        background: transparent;
      }

      .btn-text & {
        &:hover {
          color: var(--color) !important;
        }
      }
    }
  }
}
</style>
