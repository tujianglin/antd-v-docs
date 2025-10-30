<script lang="tsx">
import { Button, message } from 'antd-v';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const [messageApi, ContextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'This is a prompt message with custom className and style',
        class: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    };

    return () => (
      <>
        <ContextHolder></ContextHolder>
        <Button type="primary" onClick={success}>
          Customized style
        </Button>
      </>
    );
  },
});
</script>
<style lang="less" scoped></style>
