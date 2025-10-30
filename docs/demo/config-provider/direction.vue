<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent, ref } from 'vue';
import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined,
} from '@ant-design/icons-vue';
import type { ConfigProviderProps, RadioChangeEvent } from 'antd-v';
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Space,
  Steps,
  Switch,
  Tree,
  TreeSelect,
} from 'antd-v';

type DirectionType = ConfigProviderProps['direction'];

const { Search } = Input;

const cascaderOptions = [
  {
    value: 'tehran',
    label: 'تهران',
    children: [
      {
        value: 'tehran-c',
        label: 'تهران',
        children: [
          {
            value: 'saadat-abad',
            label: 'سعادت آباد',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: 'اردبیل',
    children: [
      {
        value: 'ardabil-c',
        label: 'اردبیل',
        children: [
          {
            value: 'pirmadar',
            label: 'پیرمادر',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: 'گیلان',
    children: [
      {
        value: 'rasht',
        label: 'رشت',
        children: [
          {
            value: 'district-3',
            label: 'منطقه ۳',
          },
        ],
      },
    ],
  },
];

type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';

const Page = defineComponent({
  props: ['placement'],
  setup(props) {
    const currentStep = ref(0);
    const modalOpen = ref(false);
    const badgeCount = ref(5);
    const showBadge = ref(true);

    const selectBefore = (
      <Select
        value="Http://"
        style={{ width: '90px' }}
        options={[
          { value: 'Http://', label: 'Http://' },
          { value: 'Https://', label: 'Https://' },
        ]}
      ></Select>
    );

    const selectAfter = (
      <Select
        value=".com"
        style={{ width: '80px' }}
        options={[
          { value: '.com', label: '.com' },
          { value: '.jp', label: '.jp' },
          { value: '.cn', label: '.cn' },
          { value: '.org', label: '.org' },
        ]}
      ></Select>
    );

    // ==== Cascader ====
    const cascaderFilter = (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));

    const onCascaderChange = (value: any) => {
      console.log(value);
    };
    // ==== End Cascader ====

    // ==== Modal ====
    const showModal = () => {
      modalOpen.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      modalOpen.value = false;
    };

    const handleCancel = (e: MouseEvent) => {
      console.log(e);
      modalOpen.value = false;
    };

    // ==== End Modal ====
    const onStepsChange = (newCurrentStep: number) => {
      console.log('onChange:', newCurrentStep);
      currentStep.value = newCurrentStep;
    };

    // ==== Badge ====
    const increaseBadge = () => {
      badgeCount.value = badgeCount.value + 1;
    };

    const declineBadge = () => {
      badgeCount.value = badgeCount.value - 1 < 0 ? 0 : badgeCount.value - 1;
    };

    // ==== End Badge ====

    return () => (
      <div class="direction-components">
        <Row>
          <Col span={24}>
            <Divider titlePlacement="start">Cascader example</Divider>
            <Cascader
              suffixIcon={<SearchIcon />}
              options={cascaderOptions}
              onChange={onCascaderChange}
              placeholder="یک مورد انتخاب کنید"
              placement={props.placement}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;With search:&nbsp;&nbsp;
            <Cascader
              suffixIcon={<SmileOutlined />}
              options={cascaderOptions}
              onChange={onCascaderChange}
              placeholder="Select an item"
              placement={props.placement}
              showSearch={{ filter: cascaderFilter }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12}>
            <Divider titlePlacement="start">Switch example</Divider>
            &nbsp;&nbsp;
            <Switch value />
            &nbsp;&nbsp;
            <Switch loading value />
            &nbsp;&nbsp;
            <Switch size="small" loading />
          </Col>
          <Col span={12}>
            <Divider titlePlacement="start">Radio Group example</Divider>
            <Radio.Group
              value="c"
              buttonStyle="solid"
              optionType="button"
              options={[
                { label: 'تهران', value: 'a' },
                { label: 'مشهد', value: 'b' },
                { label: 'کرج', value: 'c' },
                { label: 'اصفهان', value: 'd' },
              ]}
            ></Radio.Group>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12}>
            <Divider titlePlacement="start">Button example</Divider>
            <div class="button-demo">
              <Button type="primary" icon={<DownloadOutlined />} />
              <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
              <Button type="primary" shape="round" icon={<DownloadOutlined />} />
              <Button type="primary" shape="round" icon={<DownloadOutlined />}>
                Download
              </Button>
              <Button type="primary" icon={<DownloadOutlined />}>
                Download
              </Button>
              <br />
              <Space.Compact>
                <Button type="primary">
                  <LeftOutlined />
                  Backward
                </Button>
                <Button type="primary">
                  Forward
                  <RightOutlined />
                </Button>
              </Space.Compact>
              <Button type="primary" loading>
                Loading
              </Button>
              <Button type="primary" size="small" loading>
                Loading
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <Divider titlePlacement="start">Tree example</Divider>
            <Tree
              showLine
              checkable
              expandedKeys={['0-0-0', '0-0-1']}
              selectedKeys={['0-0-0', '0-0-1']}
              checkedKeys={['0-0-0', '0-0-1']}
              treeData={[
                {
                  title: 'parent 1',
                  key: '0-0',
                  children: [
                    {
                      title: 'leaf 1',
                      key: '0-0-0',
                      disabled: true,
                    },
                    {
                      title: 'leaf 2',
                      key: '0-0-1',
                    },
                  ],
                },
              ]}
            ></Tree>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <Divider titlePlacement="start">Input (Input Group) example</Divider>
            <Space.Compact size="large">
              <Row gutter={8}>
                <Col span={5}>
                  <Input value="0571" />
                </Col>
                <Col span={8}>
                  <Input value="26888888" />
                </Col>
              </Row>
            </Space.Compact>
            <br />
            <Space.Compact>
              <Input style={{ width: '20%' }} value="0571" />
              <Input style={{ width: '30%' }} value="26888888" />
            </Space.Compact>
            <br />
            <Space.Compact>
              <Select
                value="Option1"
                options={[
                  { value: 'Option1', label: 'Option1' },
                  { value: 'Option2', label: 'Option2' },
                ]}
              ></Select>
              <Input style={{ width: '50%' }} value="input content" />
              <InputNumber />
            </Space.Compact>
            <br />
            <Search placeholder="input search text" enterButton="Search" size="large" />
            <br />
            <br />
            <div style={{ marginBottom: '16px' }}>
              <Input addonBefore={selectBefore} addonAfter={selectAfter} value="mysite" />
            </div>
            <br />
            <Row>
              <Col span={12}>
                <Divider titlePlacement="start">Select example</Divider>
                <Space wrap>
                  <Select
                    mode="multiple"
                    value="مورچه"
                    style={{ width: '120px' }}
                    options={[
                      { value: 'مورچه', label: 'مورچه' },
                      { value: 'محسن', label: 'محسن' },
                      { value: 'محمد', label: 'محمد' },
                    ]}
                  ></Select>
                  <Select
                    value="مورچه"
                    style={{ width: '120px' }}
                    disabled
                    options={[{ value: 'مورچه', label: 'مورچه' }]}
                  ></Select>
                  <Select
                    value="مورچه"
                    style={{ width: '120px' }}
                    loading
                    options={[{ value: 'مورچه', label: 'مورچه' }]}
                  ></Select>
                  <Select
                    showSearch
                    style={{ width: '200px' }}
                    placeholder="Select a person"
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'tom', label: 'Tom' },
                    ]}
                  ></Select>
                </Space>
              </Col>
              <Col span={12}>
                <Divider titlePlacement="start">TreeSelect example</Divider>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  styles={{
                    popup: {
                      root: { maxHeight: 400, overflow: 'auto' },
                    },
                  }}
                  placeholder="Please select"
                  allowClear
                  treeDefaultExpandAll
                  treeData={[
                    {
                      title: 'Node1',
                      value: '0-0',
                      children: [
                        {
                          title: 'Child Node1',
                          value: '0-0-1',
                        },
                        {
                          title: 'Child Node2',
                          value: '0-0-2',
                        },
                      ],
                    },
                  ]}
                ></TreeSelect>
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={24}>
                <Divider titlePlacement="start">Modal example</Divider>
                <Button type="primary" onClick={showModal}>
                  Open Modal
                </Button>
                <Modal title="پنچره ساده" open={modalOpen.value} onOk={handleOk} onCancel={handleCancel}>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </Modal>
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={24}>
                <Divider titlePlacement="start">Steps example</Divider>
                <Steps
                  current={currentStep.value}
                  items={[
                    {
                      title: 'Finished',
                      subTitle: 'This is a description.',
                    },
                    {
                      title: 'In Progress',
                      subTitle: 'This is a description.',
                    },
                    {
                      title: 'Waiting',
                      subTitle: 'This is a description.',
                    },
                  ]}
                />
                <br />
                <Steps
                  current={currentStep.value}
                  onChange={onStepsChange}
                  items={[
                    {
                      title: 'Step 1',
                      subTitle: 'This is a description.',
                    },
                    {
                      title: 'Step 2',
                      subTitle: 'This is a description.',
                    },
                    {
                      title: 'Step 3',
                      subTitle: 'This is a description.',
                    },
                  ]}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={12}>
                <Divider titlePlacement="start">Rate example</Divider>
                <Rate value={2.5} />
                <br />
                <strong>* Note:</strong> Half star not implemented in RTL direction, it will be supported after
                <a href="https://github.com/react-component/rate" target="_blank" rel="noreferrer">
                  rc-rate
                </a>
                implement rtl support.
              </Col>
              <Col span={12}>
                <Divider titlePlacement="start">Badge example</Divider>
                <Badge count={badgeCount}>
                  <a href="#" class="head-example" />
                </Badge>
                <Space.Compact>
                  <Button onClick={declineBadge}>
                    <MinusOutlined />
                  </Button>
                  <Button onClick={increaseBadge}>
                    <PlusOutlined />
                  </Button>
                </Space.Compact>
                <div style={{ marginTop: '12px' }}>
                  <Badge dot={showBadge.value}>
                    <a href="#" class="head-example" />
                  </Badge>
                  <Switch v-model:value={showBadge.value} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col span={24}>
            <Divider titlePlacement="start">Pagination example</Divider>
            <Pagination showSizeChanger current={3} total={500} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <Divider titlePlacement="start">Grid System example</Divider>
            <div class="grid-demo">
              <div class="code-box-demo">
                <p>
                  <strong>* Note:</strong> Every calculation in RTL grid system is from right side (offset, push, etc.)
                </p>
                <Row>
                  <Col span={8}>col-8</Col>
                  <Col span={8} offset={8}>
                    col-8
                  </Col>
                </Row>
                <Row>
                  <Col span={6} offset={6}>
                    col-6 col-offset-6
                  </Col>
                  <Col span={6} offset={6}>
                    col-6 col-offset-6
                  </Col>
                </Row>
                <Row>
                  <Col span={12} offset={6}>
                    col-12 col-offset-6
                  </Col>
                </Row>
                <Row>
                  <Col span={18} push={6}>
                    col-18 col-push-6
                  </Col>
                  <Col span={6} pull={18}>
                    col-6 col-pull-18
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  },
});
export default defineComponent({
  setup() {
    const direction = ref<DirectionType>('ltr');
    const placement = ref<Placement>('bottomLeft');

    const changeDirection = (e: RadioChangeEvent) => {
      const directionValue = e.target.value;
      direction.value = directionValue;
      placement.value = directionValue === 'rtl' ? 'bottomRight' : 'bottomLeft';
    };

    return () => (
      <>
        <div style={{ marginBottom: '16px' }}>
          <span style={{ marginInlineEnd: '16px' }}>Change direction of components:</span>
          <Radio.Group
            value="ltr"
            onChange={changeDirection}
            optionType="button"
            options={[
              { label: 'LTR', value: 'ltr' },
              { label: 'RTL', value: 'rtl' },
            ]}
          ></Radio.Group>
        </div>
        <ConfigProvider direction={direction.value}>
          <Page placement={placement.value} />
        </ConfigProvider>
      </>
    );
  },
});
</script>
