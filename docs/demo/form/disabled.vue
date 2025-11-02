<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  Transfer,
  Tree,
  TreeSelect,
  Upload,
} from 'antd-v';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default defineComponent({
  setup() {
    const componentDisabled = ref(true);
    return () => (
      <>
        <Checkbox v-model:checked={componentDisabled.value}>Form disabled</Checkbox>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          disabled={componentDisabled.value}
          style={{ maxWidth: '600px' }}
        >
          <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item label="Radio">
            <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select options={[{ value: 'demo', label: 'Demo' }]}></Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect treeData={[{ title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }]} />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="RangePicker">
            <RangePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="TextArea">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: '8px' }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
          <Form.Item label="Slider">
            <Slider />
          </Form.Item>
          <Form.Item label="ColorPicker">
            <ColorPicker />
          </Form.Item>
          <Form.Item label="Rate">
            <Rate />
          </Form.Item>
          <Form.Item label="Mentions">
            <Mentions value="@afc163" />
          </Form.Item>
          <Form.Item label="Transfer">
            <Transfer
              dataSource={Array.from({ length: 20 }, (_, i) => ({
                key: i.toString(),
                title: `Content ${i + 1}`,
                description: `Description of content ${i + 1}`,
              }))}
              targetKeys={['1', '3', '5']}
              render={(item) => item.title}
            />
          </Form.Item>
          <Form.Item label="Tree">
            <Tree
              checkable
              expandedKeys={['0-0', '0-1']}
              selectedKeys={['0-0-0', '0-1-0']}
              checkedKeys={['0-0-0-0', '0-1-0']}
              treeData={[
                {
                  title: 'Parent 1',
                  key: '0-0',
                  children: [
                    {
                      title: 'Child 1-1',
                      key: '0-0-0',
                      children: [
                        {
                          title: 'Grandchild 1-1-1',
                          key: '0-0-0-0',
                        },
                      ],
                    },
                    {
                      title: 'Child 1-2',
                      key: '0-0-1',
                    },
                  ],
                },
                {
                  title: 'Parent 2',
                  key: '0-1',
                  children: [
                    {
                      title: 'Child 2-1',
                      key: '0-1-0',
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
        </Form>
      </>
    );
  },
});
</script>
<style lang="less" scoped></style>
