<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, ConfigProvider, DatePicker, Divider, Input, Radio, Select, Space, Tabs } from 'antd-v';
import type { ConfigProviderProps } from 'antd-v';
export default defineComponent({
  setup() {
    type SizeType = ConfigProviderProps['componentSize'];

    const componentSize = ref<SizeType>('small');

    return () => (
      <>
        <Radio.Group
          v-model:value={componentSize.value}
          optionType="button"
          options={[
            { label: 'Small', value: 'small' },
            { label: 'Middle', value: 'middle' },
            { label: 'Large', value: 'large' },
          ]}
        ></Radio.Group>
        <Divider />
        <ConfigProvider componentSize={componentSize.value}>
          <Space size={[0, 16]} style={{ width: '100%' }} vertical>
            <Input />
            <Tabs
              activeKey="1"
              items={[
                {
                  label: 'Tab 1',
                  key: '1',
                  children: 'Content of Tab Pane 1',
                },
                {
                  label: 'Tab 2',
                  key: '2',
                  children: 'Content of Tab Pane 2',
                },
                {
                  label: 'Tab 3',
                  key: '3',
                  children: 'Content of Tab Pane 3',
                },
              ]}
            />
            <Input.Search allowClear />
            <Input.TextArea allowClear />
            <Select value="demo" options={[{ value: 'demo' }]} />
            <DatePicker />
            <DatePicker.RangePicker />
            <Button>Button</Button>
          </Space>
        </ConfigProvider>
      </>
    );
  },
});
</script>
