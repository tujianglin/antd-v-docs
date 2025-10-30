<script lang="tsx">
import { Button, Result } from 'antd-v';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  },
});
</script>
