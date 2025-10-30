<script lang="tsx">
import { Button, Result } from 'antd-v';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <Result
        title="Your operation has been executed"
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
