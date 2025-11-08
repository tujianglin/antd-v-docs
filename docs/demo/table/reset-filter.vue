<script lang="tsx">
import { Button, Space, Table, type TableColumnsType, type TableProps } from 'antd-v';
import { computed, defineComponent, ref } from 'vue';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

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
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
export default defineComponent({
  setup() {
    const filteredInfo = ref<Filters>({});
    const sortedInfo = ref<Sorts>({});

    const handleChange: OnChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      filteredInfo.value = filters;
      sortedInfo.value = sorter as Sorts;
    };

    const clearFilters = () => {
      filteredInfo.value = {};
    };

    const clearAll = () => {
      filteredInfo.value = {};
      sortedInfo.value = {};
    };

    const setAgeSort = () => {
      sortedInfo.value = {
        order: 'descend',
        columnKey: 'age',
      };
    };

    const columns = computed<TableColumnsType<DataType>>(() => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.value.name || null,
        onFilter: (value, record) => record.name.includes(value as string),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.value.columnKey === 'name' ? sortedInfo.value.order : null,
        ellipsis: true,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.value.columnKey === 'age' ? sortedInfo.value.order : null,
        ellipsis: true,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.value.address || null,
        onFilter: (value, record) => record.address.includes(value as string),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.value.columnKey === 'address' ? sortedInfo.value.order : null,
        ellipsis: true,
      },
    ]);

    return () => (
      <>
        <Space style={{ marginBottom: '16px' }}>
          <Button onClick={setAgeSort}>Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns.value} dataSource={data} onChange={handleChange} />
      </>
    );
  },
});
</script>
