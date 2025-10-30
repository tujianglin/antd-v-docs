<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { DotChartOutlined } from '@ant-design/icons-vue';
import { Flex, Divider, Radio, Skeleton, Space, Switch } from 'antd-v';
export default defineComponent({
  setup() {
    type SizeType = 'default' | 'small' | 'large';
    type ButtonShapeType = 'circle' | 'square' | 'round' | 'default';
    type AvatarShapeType = 'circle' | 'square';

    const active = ref(false);
    const block = ref(false);
    const size = ref<SizeType>('default');
    const buttonShape = ref<ButtonShapeType>('default');
    const avatarShape = ref<AvatarShapeType>('circle');

    return () => (
      <Flex gap="middle" vertical>
        <Space>
          <Skeleton.Button active={active.value} size={size.value} shape={buttonShape.value} block={block.value} />
          <Skeleton.Avatar active={active.value} size={size.value} shape={avatarShape.value} />
          <Skeleton.Input active={active.value} size={size.value} />
        </Space>
        <Skeleton.Button active={active.value} size={size.value} shape={buttonShape.value} block={block.value} />
        <Skeleton.Input active={active.value} size={size.value} block={block.value} />
        <Space>
          <Skeleton.Image active={active.value} />
          <Skeleton.Node active={active.value} style={{ width: '160px' }} />
          <Skeleton.Node active={active.value}>
            <DotChartOutlined style={{ fontSize: '40px', color: '#bfbfbf' }} />
          </Skeleton.Node>
        </Space>
        <Divider />
        <Space size={16} wrap>
          <Switch v-model:value={active.value} />
          <Switch v-model:value={block.value} />
          <Radio.Group
            optionType="button"
            v-model:value={size.value}
            options={[
              { label: 'Default', value: 'default' },
              { label: 'Large', value: 'large' },
              { label: 'Small', value: 'small' },
            ]}
          ></Radio.Group>
          <Radio.Group
            optionType="button"
            v-model:value={buttonShape.value}
            options={[
              { label: 'Default', value: 'default' },
              { label: 'Square', value: 'square' },
              { label: 'Round', value: 'round' },
              { label: 'Circle', value: 'circle' },
            ]}
          ></Radio.Group>
          <Radio.Group
            optionType="button"
            v-model:value={avatarShape}
            options={[
              { label: 'Square', value: 'square' },
              { label: 'Circle', value: 'circle' },
            ]}
          ></Radio.Group>
        </Space>
      </Flex>
    );
  },
});
</script>
