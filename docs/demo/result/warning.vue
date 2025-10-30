<script lang="tsx">
import { Button, Result } from 'antd-v';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    );
  },
});
</script>
