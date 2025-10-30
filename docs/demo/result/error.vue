<script lang="tsx">
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { Button, Result, Typography } from 'antd-v';
import { defineComponent } from 'vue';

const { Paragraph, Text } = Typography;
export default defineComponent({
  setup() {
    return () => (
      <Result
        status="error"
        title="Submission Failed"
        subTitle="Please check and modify the following information before resubmitting."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      >
        <div class="desc">
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
              }}
            >
              The content you submitted has the following error:
            </Text>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined class="site-result-demo-error-icon" /> Your account has been frozen. <a>Thaw immediately &gt;</a>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined class="site-result-demo-error-icon" /> Your account is not yet eligible to apply.{' '}
            <a>Apply Unlock &gt;</a>
          </Paragraph>
        </div>
      </Result>
    );
  },
});
</script>
