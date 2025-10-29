<script lang="tsx">
import { Grid, Tag } from 'antd-v';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const { useBreakpoint } = Grid;

    const screens = useBreakpoint();

    return () => (
      <>
        Current break point:{' '}
        {Object.entries(screens.value)
          .filter((screen) => !!screen[1])
          .map((screen) => (
            <Tag color="blue" key={screen[0]}>
              {screen[0]}
            </Tag>
          ))}
      </>
    );
  },
});
</script>
