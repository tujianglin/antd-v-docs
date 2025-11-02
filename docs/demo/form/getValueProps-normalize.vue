<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, DatePicker, Form, type FormProps } from 'antd-v';

import dayjs from 'dayjs';

const dateTimestamp = dayjs('2024-01-01').valueOf();

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

export default defineComponent({
  setup() {
    return () => (
      <Form
        name="getValueProps"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: '600px' }}
        initialValues={{ date: dateTimestamp }}
        onFinish={onFinish}
        autocomplete="off"
      >
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true }]}
          getValueProps={(value) => ({ value: value && dayjs(Number(value)) })}
          normalize={(value) => value && `${dayjs(value).valueOf()}`}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
