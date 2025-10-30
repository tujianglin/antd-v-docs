<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Modal, Space } from 'antd-v';
export default defineComponent({
  setup() {
    const [modal, ContextHolder] = Modal.useModal();
    const open = ref(false);

    const showModal = () => {
      open.value = true;
    };
    const handleOk = () => {
      open.value = false;
    };

    const handleCancel = () => {
      open.value = false;
    };
    return () => (
      <>
        <ContextHolder></ContextHolder>
        <Space>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Button
            type="primary"
            onClick={() => {
              modal.confirm({
                title: 'Confirm',
                content: 'Bla bla ...',
                footer: ({ extra: { CancelBtn, OkBtn } }) => (
                  <>
                    <Button>Custom Button</Button>
                    <CancelBtn />
                    <OkBtn />
                  </>
                ),
              });
            }}
          >
            Open Modal Confirm
          </Button>
        </Space>
        <Modal
          open={open.value}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={({ extra: { CancelBtn, OkBtn } }) => (
            <>
              <Button>Custom Button</Button>
              <CancelBtn />
              <OkBtn />
            </>
          )}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  },
});
</script>
<style lang="less" scoped></style>
