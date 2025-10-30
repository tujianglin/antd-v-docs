<script lang="tsx">
import { Button, Result } from 'antd-v';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  },
});
</script>
