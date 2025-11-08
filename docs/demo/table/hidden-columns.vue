<script lang="tsx">
import { Checkbox, Divider, Table, type TableColumnsType } from 'antd-v';
import { defineComponent, ref } from 'vue';

interface DataType {
  key: any;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

const defaultCheckedList = columns.map((item) => item.key);
export default defineComponent({
  setup() {
    const checkedList = ref(defaultCheckedList);

    return () => {
      const options = columns.map(({ key, title }) => ({
        label: title,
        value: key,
      }));

      const newColumns = columns.map((item) => ({
        ...item,
        hidden: !checkedList.value.includes(item.key as string),
      }));
      return (
        <>
          <Divider>Columns displayed</Divider>
          <Checkbox.Group v-model:value={checkedList.value} options={options} />
          <Table columns={newColumns} dataSource={data} style={{ marginTop: 24 }} />
        </>
      );
    };
  },
});
</script>
