<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Drawer, Space } from 'antd-v';
export default defineComponent({
  setup() {
    const open = ref(false);

    const onClose = () => {
      open.value = false;
    };

    return () => (
      <Space wrap>
        <Button
          onClick={() => {
            open.value = true;
          }}
        >
          Dimmed mask
        </Button>
        <Drawer title="Drawer blur" placement="right" mask={{ blur: false }} onClose={onClose} open={open.value}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Space>
    );
  },
});
</script>
<style lang="less" scoped></style>
