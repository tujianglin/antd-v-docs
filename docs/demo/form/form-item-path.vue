<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { computed, defineComponent, inject, provide, ref, type InjectionKey, type Ref } from 'vue';
import { Button, Form, Input } from 'antd-v';

const MyFormItemContext: InjectionKey<Ref<(string | number)[]>> = Symbol('MyFormItemContext');

function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = defineComponent({
  props: ['prefix'],
  setup(props, { slots }) {
    const prefixPath = inject(MyFormItemContext, ref([]));
    const concatPath = computed(() => [...prefixPath.value, ...toArr(props.prefix)]);
    provide(MyFormItemContext, concatPath);
    return () => <>{slots.default?.()}</>;
  },
});

const MyFormItem = defineComponent({
  props: ['name', 'label'],
  setup(props, { attrs, slots }) {
    const prefixPath = inject(MyFormItemContext, ref([]));
    const concatName = computed(() => {
      if (props.name === undefined) {
        return undefined;
      }
      return [...prefixPath.value, ...toArr(props.name)];
    });
    return () => (
      <Form.Item {...attrs} name={concatName.value} label={props.label}>
        {slots.default?.()}
      </Form.Item>
    );
  },
});

export default defineComponent({
  setup() {
    const onFinish = (value: object) => {
      console.log('Form submitted:', JSON.stringify(value, null, 2));
    };
    return () => (
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={['user']}>
          <MyFormItemGroup prefix={['name']}>
            <MyFormItem name="firstName" label="First Name">
              <Input />
            </MyFormItem>
            <MyFormItem name="lastName" label="Last Name">
              <Input />
            </MyFormItem>
          </MyFormItemGroup>

          <MyFormItem name="age" label="Age">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
