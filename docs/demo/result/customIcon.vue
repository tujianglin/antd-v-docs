<script lang="tsx">
import { SmileOutlined } from '@ant-design/icons-vue';
import { Button, Result } from 'antd-v';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return () => (
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    );
  },
});
</script>
