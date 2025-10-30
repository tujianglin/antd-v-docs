<script lang="tsx">
import { defineComponent } from 'vue';
import { App, Button, Space } from 'antd-v';
export default defineComponent({
  setup() {
    // Sub page
    const MyPage = () => {
      const { message, modal, notification } = App.useApp();

      const showMessage = () => {
        message.success('Success!');
      };

      const showModal = () => {
        modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      };

      const showNotification = () => {
        notification.info({
          title: 'Notification topLeft',
          description: 'Hello, Ant Design!!',
          placement: 'topLeft',
        });
      };

      return (
        <Space wrap>
          <Button type="primary" onClick={showMessage}>
            Open message
          </Button>
          <Button type="primary" onClick={showModal}>
            Open modal
          </Button>
          <Button type="primary" onClick={showNotification}>
            Open notification
          </Button>
        </Space>
      );
    };

    // Entry component
    return () => (
      <App>
        <MyPage />
      </App>
    );
  },
});
</script>
<style lang="less" scoped></style>
