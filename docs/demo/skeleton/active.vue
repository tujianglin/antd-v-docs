<script lang="tsx">
import { Skeleton } from 'antd-v';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => <Skeleton active />;
  },
});
</script>
<style lang="less" scoped></style>
