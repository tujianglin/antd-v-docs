<script lang="tsx">
import { Divider, Radio, Table, type TableColumnsType, type TableProps } from 'antd-v';
import { defineComponent, ref } from 'vue';
interface DataType {
  key: any;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps['rowSelection'] = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
export default defineComponent({
  setup() {
    const selectionType = ref<'checkbox' | 'radio'>('checkbox');
    return () => (
      <div>
        <Radio.Group
          v-model:value={selectionType.value}
          options={[
            { label: 'Checkbox', value: 'checkbox' },
            { label: 'Radio', value: 'radio' },
          ]}
        ></Radio.Group>
        <Divider />
        <Table rowSelection={{ type: selectionType.value, ...rowSelection }} columns={columns} dataSource={data} />
      </div>
    );
  },
});
</script>
