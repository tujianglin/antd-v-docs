<script lang="tsx">
import { Table, type TableColumnsType } from 'antd-v';
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
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

export default defineComponent({
  setup() {
    const dataSource = Array.from({ length: 100 }).map<DataType>((_, i) => ({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    }));
    return () => <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 50 }} scroll={{ y: 55 * 5 }} />;
  },
});
</script>
