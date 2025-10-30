<script lang="tsx">
import { Collapse, Divider } from 'antd-v';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    return () => (
      <>
        <Divider titlePlacement="start">Default Size</Divider>
        <Collapse items={[{ key: '1', label: 'This is default size panel header', children: <p>{text}</p> }]} />
        <Divider titlePlacement="start">Small Size</Divider>
        <Collapse size="small" items={[{ key: '1', label: 'This is small size panel header', children: <p>{text}</p> }]} />
        <Divider titlePlacement="start">Large Size</Divider>
        <Collapse size="large" items={[{ key: '1', label: 'This is large size panel header', children: <p>{text}</p> }]} />
      </>
    );
  },
});
</script>
