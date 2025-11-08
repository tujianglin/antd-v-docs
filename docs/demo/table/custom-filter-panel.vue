<script lang="tsx">
import { Button, Input, Space, Table, type InputRef, type TableColumnsType, type TableColumnType } from 'antd-v';
import { SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
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
    const searchText = ref('');
    const searchedColumn = ref('');
    const searchInput = ref<InputRef>(null);

    const handleSearch = (selectedKeys: string[], confirm: any, dataIndex: DataIndex) => {
      confirm();
      searchText.value = selectedKeys[0];
      searchedColumn.value = dataIndex;
    };

    const handleReset = (clearFilters: () => void) => {
      clearFilters();
      searchText.value = '';
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => {
        return (
          <div style={{ padding: '8px' }} onKeydown={(e) => e.stopPropagation()}>
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys.value[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressenter={() => handleSearch(selectedKeys.value as string[], confirm, dataIndex)}
              style={{ marginBottom: '8px', display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys.value as string[], confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: '90px' }}
              >
                Search
              </Button>
              <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: '90px' }}>
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  searchText.value = (selectedKeys.value as string[])[0];
                  searchedColumn.value = dataIndex;
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        );
      },
      filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      filterDropdownProps: {
        onOpenChange(open) {
          if (open) {
            setTimeout(() => searchInput.value?.select(), 100);
          }
        },
      },
      render: (text) => (searchedColumn.value === dataIndex ? text : text),
    });

    const columns: TableColumnsType<DataType> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...getColumnSearchProps('name'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '20%',
        ...getColumnSearchProps('age'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ...getColumnSearchProps('address'),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
    ];

    return () => <Table columns={columns} dataSource={data} />;
  },
});
</script>
