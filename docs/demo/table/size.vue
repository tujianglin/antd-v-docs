<script lang="tsx">
import { Divider, Table, type TableColumnsType } from 'antd-v';
import { defineComponent } from 'vue';

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
];

export default defineComponent({
  setup() {
    return () => (
      <>
        <Divider>Middle size table</Divider>
        <Table columns={columns} dataSource={data} size="middle" />
        <Divider>Small size table</Divider>
        <Table columns={columns} dataSource={data} size="small" />
      </>
    );
  },
});
</script>
