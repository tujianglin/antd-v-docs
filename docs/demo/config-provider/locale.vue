<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { EllipsisOutlined } from '@ant-design/icons-vue';
import type { RadioChangeEvent, TourProps, UploadFile } from 'antd-v';
import {
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Divider,
  Image,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Popconfirm,
  QRCode,
  Radio,
  Select,
  Space,
  theme,
  TimePicker,
  Tour,
  Transfer,
  Upload,
} from 'antd-v';
import dayjs from 'dayjs';
import enUS from 'antd-v/locale/en_US';
import zhCN from 'antd-v/locale/zh_CN';
import 'dayjs/locale/zh-cn';

dayjs.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;

const Page = defineComponent({
  setup() {
    const { token } = theme.useToken();

    const open = ref(false);
    const tourOpen = ref(false);
    const tourRefs = ref<HTMLElement[]>([]);

    const showModal = () => {
      open.value = true;
    };

    const hideModal = () => {
      open.value = false;
    };

    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };

    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };

    const steps: TourProps['steps'] = [
      {
        title: 'Upload File',
        description: 'Put your files here.',
        target: () => tourRefs.value[0],
      },
      {
        title: 'Save',
        description: 'Save your changes.',
        target: () => tourRefs.value[1],
      },
      {
        title: 'Other Actions',
        description: 'Click to see other actions.',
        target: () => tourRefs.value[2],
      },
    ];

    const fileList: UploadFile[] = [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        percent: 50,
        name: 'image.png',
        status: 'uploading',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'error',
      },
    ];

    return () => (
      <Space
        vertical
        size={[0, 16]}
        style={{ width: '100%', paddingTop: '16px', borderTop: `1px solid ${token.value.colorBorder}` }}
      >
        <Pagination current={1} total={50} showSizeChanger />
        <Space wrap>
          <Select showSearch style={{ width: '200px' }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker />
        </Space>
        <Space wrap>
          <Button type="primary" onClick={showModal}>
            Show Modal
          </Button>
          <Button onClick={info}>Show info</Button>
          <Button onClick={confirm}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </Popconfirm>
        </Space>
        <Transfer dataSource={[]} showSearch targetKeys={[]} />
        <div style={{ width: '320px', border: `1px solid ${token.value.colorBorder}`, borderRadius: 8 }}>
          <Calendar fullscreen={false} value={dayjs()} />
        </div>
        <Input width={200} />
        <InputNumber width={200} />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Modal title="Locale Modal" open={open.value} onCancel={hideModal}>
          <p>Locale Modal</p>
        </Modal>
        <Space wrap size={80}>
          <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
          <Image width={160} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Space>
        <Upload listType="picture-card" fileList={fileList} />
        <Divider titlePlacement="start">Tour</Divider>
        <Button type="primary" onClick={() => (tourOpen.value = true)}>
          Begin Tour
        </Button>
        <Space>
          <Button
            ref={(node: any) => {
              node && tourRefs.value.splice(0, 0, node);
            }}
          >
            {' '}
            Upload
          </Button>
          <Button
            ref={(node: any) => {
              node && tourRefs.value.splice(1, 0, node);
            }}
            type="primary"
          >
            Save
          </Button>
          <Button
            ref={(node: any) => {
              node && tourRefs.value.splice(2, 0, node);
            }}
            icon={<EllipsisOutlined />}
          />
        </Space>
        <Tour open={tourOpen.value} steps={steps} onClose={() => (tourOpen.value = false)} />
      </Space>
    );
  },
});

export default defineComponent({
  setup() {
    const locale = ref('enUS');

    const changeLocale = (e: RadioChangeEvent) => {
      const localeValue = e.target.value;
      console.log(localeValue);
      if (!localeValue) {
        dayjs.locale('en');
      } else {
        dayjs.locale('zh-cn');
      }
    };

    return () => (
      <>
        <div style={{ marginBottom: '16px' }}>
          <span style={{ marginInlineEnd: '16px' }}>Change locale of components:</span>
          <Radio.Group
            optionType="button"
            v-model:value={locale.value}
            onChange={changeLocale}
            options={[
              { label: 'English', value: 'enUS' },
              { label: '中文', value: 'zhCN' },
            ]}
          ></Radio.Group>
        </div>
        <ConfigProvider locale={locale.value === 'zhCN' ? zhCN : enUS}>
          <Page />
        </ConfigProvider>
      </>
    );
  },
});
</script>
