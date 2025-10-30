<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Modal } from 'antd-v';
export default defineComponent({
  setup() {
    const modal1Open = ref(false);
    const modal2Open = ref(false);

    return () => (
      <>
        <Button type="primary" onClick={() => (modal1Open.value = true)}>
          Display a modal dialog at 20px to Top
        </Button>
        <Modal
          title="20px to Top"
          style={{ top: '20px' }}
          open={modal1Open.value}
          onOk={() => (modal1Open.value = false)}
          onCancel={() => (modal1Open.value = false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <br />
        <br />
        <Button type="primary" onClick={() => (modal2Open.value = true)}>
          Vertically centered modal dialog
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          open={modal2Open.value}
          onOk={() => (modal2Open.value = false)}
          onCancel={() => (modal2Open.value = false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </>
    );
  },
});
</script>
