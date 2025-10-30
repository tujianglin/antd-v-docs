<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Image, InputNumber } from 'antd-v';

export default defineComponent({
  setup() {
    const open = ref(false);
    const scaleStep = ref(0.5);
    return () => (
      <>
        <div>
          scaleStep: <InputNumber min={0.1} max={5} v-model:value={scaleStep.value} step={0.1} />
        </div>
        <br />
        <Button type="primary" onClick={() => (open.value = true)}>
          show image preview
        </Button>
        <Image
          width={200}
          style={{ display: 'none' }}
          alt="basic image"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          preview={{
            open,
            scaleStep,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            onOpenChange: (value) => {
              open.value = value;
            },
          }}
        />
      </>
    );
  },
});
</script>
<style lang="less" scoped></style>
