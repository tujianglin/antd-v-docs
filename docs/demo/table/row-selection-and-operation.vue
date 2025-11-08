<script lang="tsx">
import { Button, Flex, Table, type TableColumnsType } from 'antd-v';
import { computed, defineComponent, ref } from 'vue';

interface DataType {
  key: any;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

export default defineComponent({
  setup() {
    const selectedRowKeys = ref([]);
    const loading = ref(false);

    const start = () => {
      loading.value = true;
      // ajax request after empty completing
      setTimeout(() => {
        selectedRowKeys.value = [];
        loading.value = false;
      }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      selectedRowKeys.value = newSelectedRowKeys;
    };

    const rowSelection = computed(() => ({
      selectedRowKeys: selectedRowKeys.value,
      onChange: onSelectChange,
    }));

    const hasSelected = computed(() => selectedRowKeys.value.length > 0);
    return () => (
      <Flex gap="middle" vertical>
        <Flex align="center" gap="middle">
          <Button type="primary" onClick={start} disabled={!hasSelected.value} loading={loading.value}>
            Reload
          </Button>
          {hasSelected.value ? `Selected ${selectedRowKeys.value.length} items` : null}
        </Flex>
        <Table rowSelection={rowSelection.value} columns={columns} dataSource={dataSource} />
      </Flex>
    );
  },
});
</script>
