<script lang="tsx">
import { Table, type TableColumnsType } from 'antd-v';
import { computed, defineComponent, ref } from 'vue';

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

const dataSource = Array.from({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

export default defineComponent({
  setup() {
    const selectedRowKeys = ref([]);

    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      selectedRowKeys.value = newSelectedRowKeys;
    };

    const rowSelection = computed(() => ({
      selectedRowKeys: selectedRowKeys.value,
      onChange: onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: (changeableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            selectedRowKeys.value = newSelectedRowKeys;
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: (changeableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            selectedRowKeys.value = newSelectedRowKeys;
          },
        },
      ],
    }));
    return () => <Table rowSelection={rowSelection.value} columns={columns} dataSource={dataSource} />;
  },
});
</script>
