<!-- eslint-disable vue/one-component-per-file -->
<script setup lang="tsx">
import { defineComponent, ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { DatePicker, Dropdown, Space } from 'antd-v';
import dayjs from 'dayjs';

const DatePickerDemo = defineComponent({
  name: 'DatePickerDemo',
  setup() {
    const visible = ref(false);
    const panelVisible = ref(false);
    const date = ref(dayjs());

    const menuItems = [
      {
        key: 'today',
        label: 'Today',
        onClick() {
          date.value = dayjs();
          visible.value = false;
        },
      },
      {
        key: 'tomorrow',
        label: 'Tomorrow',
        onClick() {
          date.value = dayjs().add(1, 'day');
          visible.value = false;
        },
      },
      {
        key: 'custom-date',
        label: (
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div>Customize</div>
            <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', zIndex: 1 }}>
              <DatePicker
                open={panelVisible.value}
                styles={{
                  root: {
                    pointerEvents: 'none',
                    opacity: 0,
                    position: 'absolute',
                    bottom: -12,
                    insetInlineStart: 0,
                  },
                }}
                onChange={(newDate: any) => {
                  date.value = newDate;
                  visible.value = false;
                  panelVisible.value = false;
                }}
              />
            </div>
          </div>
        ),
      },
    ];

    return () => (
      <Dropdown
        arrow
        open={visible.value}
        trigger={['click']}
        destroyOnHidden
        onOpenChange={(open: boolean) => {
          visible.value = open;
          if (!open) {
            panelVisible.value = false;
          }
        }}
        menu={{ items: menuItems }}
      >
        <Space>
          <span>{date.value?.format('YYYY-MM-DD')}</span>
          <DownOutlined />
        </Space>
      </Dropdown>
    );
  },
});

const RangePickerDemo = defineComponent({
  name: 'RangePickerDemo',
  setup() {
    const visible = ref(false);
    const panelVisible = ref(false);
    const dates = ref([dayjs(), dayjs().add(1, 'day')]);

    const menuItems = [
      {
        key: '7',
        label: '7 days',
        onClick() {
          dates.value = [dayjs(), dayjs().add(7, 'day')];
          visible.value = false;
        },
      },
      {
        key: '30',
        label: '30 days',
        onClick() {
          dates.value = [dayjs(), dayjs().add(30, 'day')];
          visible.value = false;
        },
      },
    ];

    return () => (
      <Dropdown
        arrow
        open={visible.value}
        trigger={['click']}
        destroyOnHidden
        onOpenChange={(open: boolean) => {
          visible.value = open;
          if (!open) {
            panelVisible.value = false;
          }
        }}
        menu={{ items: menuItems }}
      >
        <Space>
          <span>
            {dates.value ? `${dates.value[0].format('YYYY-MM-DD')} ~ ${dates.value[1].format('YYYY-MM-DD')}` : 'Select range'}
          </span>
          <DownOutlined />
        </Space>
      </Dropdown>
    );
  },
});
</script>

<template>
  <div style="display: flex; gap: 20%">
    <div>
      <div style="margin-bottom: 12px">DatePicker</div>
      <DatePickerDemo />
    </div>

    <div>
      <div style="margin-bottom: 12px">RangePicker</div>
      <RangePickerDemo />
    </div>
  </div>
</template>
