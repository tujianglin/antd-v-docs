<script lang="tsx">
import { Button, Drawer, Radio, Space, type DrawerProps, type RadioChangeEvent } from 'antd-v';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const open = ref(false);
    const placement = ref<DrawerProps['placement']>('right');

    const onChange = (e: RadioChangeEvent) => {
      placement.value = e.target.value;
    };
    return () => (
      <>
        <Space style={{ marginBottom: '16px' }}>
          <Radio.Group
            value={placement.value}
            onChange={onChange}
            options={['top', 'right', 'bottom', 'left'].map((pos) => ({
              label: pos,
              value: pos,
            }))}
          />
          <Button type="primary" onClick={() => (open.value = true)}>
            Open Drawer
          </Button>
        </Space>
        <Drawer
          title="Resizable Drawer"
          placement={placement.value}
          onClose={() => (open.value = false)}
          open={open.value}
          key={placement.value}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  },
});
</script>
