<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons-vue';
import { Divider, Flex, Tag } from 'antd-v';
export default defineComponent({
  setup() {
    const checked = ref<Array<boolean>>([true, false, false, false]);

    const handleChange = (index: number, value: boolean) => {
      const newChecked = [...checked.value];
      newChecked[index] = value;
      checked.value = newChecked;
    };

    return () => (
      <>
        <Divider titlePlacement="start">Tag with icon</Divider>
        <Flex gap="4px 0" wrap align="center">
          <Tag icon={<TwitterOutlined />} color="#55acee">
            Twitter
          </Tag>
          <Tag icon={<YoutubeOutlined />} color="#cd201f">
            Youtube
          </Tag>
          <Tag icon={<FacebookOutlined />} color="#3b5999">
            Facebook
          </Tag>
          <Tag icon={<LinkedinOutlined />} color="#55acee">
            LinkedIn
          </Tag>
        </Flex>
        <Divider titlePlacement="start">CheckableTag with icon</Divider>
        <Flex gap="4px 0" wrap align="center">
          <Tag.CheckableTag
            icon={<TwitterOutlined />}
            checked={checked.value[0]}
            onChange={(checked) => handleChange(0, checked)}
          >
            Twitter
          </Tag.CheckableTag>
          <Tag.CheckableTag
            icon={<YoutubeOutlined />}
            checked={checked.value[1]}
            onChange={(checked) => handleChange(1, checked)}
          >
            Youtube
          </Tag.CheckableTag>
          <Tag.CheckableTag
            icon={<FacebookOutlined />}
            checked={checked.value[2]}
            onChange={(checked) => handleChange(2, checked)}
          >
            Facebook
          </Tag.CheckableTag>
          <Tag.CheckableTag
            icon={<LinkedinOutlined />}
            checked={checked.value[3]}
            onChange={(checked) => handleChange(3, checked)}
          >
            LinkedIn
          </Tag.CheckableTag>
        </Flex>
      </>
    );
  },
});
</script>
<style lang="less" scoped></style>
