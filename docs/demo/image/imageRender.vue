<script lang="tsx">
import { Image } from 'antd-v';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return () => (
      <Image
        width={200}
        alt="basic image"
        preview={{
          imageRender: () => (
            <video
              muted
              width="100%"
              controls
              src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
            />
          ),
          actionsRender: () => null,
        }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    );
  },
});
</script>
