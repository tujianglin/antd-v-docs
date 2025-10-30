<script lang="tsx">
import { Button, Result } from 'antd-v';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  },
});
</script>
