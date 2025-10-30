<script lang="tsx">
import { defineComponent } from 'vue';
import { App, Button, Space } from 'antd-v';
export default defineComponent({
  setup() {
    // Sub page
    const MyPage = () => {
      const { message, notification } = App.useApp();

      const showMessage = () => {
        message.success('Success!');
      };

      const showNotification = () => {
        notification.info({
          title: 'Notification',
          description: 'Hello, Ant Design!!',
        });
      };

      return (
        <Space wrap>
          <Button type="primary" onClick={showMessage}>
            Message for only one
          </Button>
          <Button type="primary" onClick={showNotification}>
            Notification for bottomLeft
          </Button>
        </Space>
      );
    };

    return () => (
      <App message={{ maxCount: 1 }} notification={{ placement: 'bottomLeft' }}>
        <MyPage />
      </App>
    );
  },
});
</script>
