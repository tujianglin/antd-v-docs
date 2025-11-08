<script lang="tsx">
import { Table, type TableProps } from 'antd-v';
import { computed, defineComponent, onMounted, ref } from 'vue';

type ColumnsType<T extends object = object> = TableProps<T>['columns'];

type TablePaginationConfig = Exclude<TableProps['pagination'], boolean>;

interface DataType {
  name: string;
  gender: string;
  email: string;
  id: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: any;
  sortOrder?: any;
  filters?: Parameters<TableProps['onChange']>[1];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const isNonNullable = <T,>(val: T): val is NonNullable<T> => {
  return val !== undefined && val !== null;
};

const toURLSearchParams = <T extends Record<PropertyKey, any>>(record: T) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(record)) {
    params.append(key, value);
  }
  return params;
};

const getRandomuserParams = (params: TableParams) => {
  const { pagination, filters, sortField, sortOrder, ...restParams } = params;
  const result: Record<string, any> = {};

  // https://github.com/mockapi-io/docs/wiki/Code-examples#pagination
  result.limit = pagination?.pageSize;
  result.page = pagination?.current;

  // https://github.com/mockapi-io/docs/wiki/Code-examples#filtering
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (isNonNullable(value)) {
        result[key] = value;
      }
    });
  }

  // https://github.com/mockapi-io/docs/wiki/Code-examples#sorting
  if (sortField) {
    result.orderby = sortField;
    result.order = sortOrder === 'ascend' ? 'asc' : 'desc';
  }

  // 处理其他参数
  Object.entries(restParams).forEach(([key, value]) => {
    if (isNonNullable(value)) {
      result[key] = value;
    }
  });

  return result;
};

export default defineComponent({
  setup() {
    const data = ref<DataType[]>();
    const loading = ref(false);
    const tableParams = ref<TableParams>({
      pagination: {
        current: 1,
        pageSize: 10,
      },
    });

    const params = computed(() => toURLSearchParams(getRandomuserParams(tableParams.value)));

    const fetchData = () => {
      loading.value = true;
      fetch(`https://660d2bd96ddfa2943b33731c.mockapi.io/api/users?${params.value.toString()}`)
        .then((res) => res.json())
        .then((res) => {
          data.value = Array.isArray(res) ? res : [];
          loading.value = false;
          tableParams.value = {
            ...tableParams.value,
            pagination: {
              ...tableParams.value.pagination,
              total: 100,
              // 100 is mock data, you should read it from server
              // total: data.totalCount,
            },
          };
        });
    };

    onMounted(() => {
      fetchData();
    });

    const handleTableChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
      tableParams.value = {
        pagination,
        filters,
        sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
        sortField: Array.isArray(sorter) ? undefined : sorter.field,
      };
      fetchData();

      // `dataSource` is useless since `pageSize` changed
      if (pagination.pageSize !== tableParams.value.pagination?.pageSize) {
        data.value = [];
      }
    };

    return () => (
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data.value}
        pagination={tableParams.value.pagination}
        loading={loading.value}
        onChange={handleTableChange}
      />
    );
  },
});
</script>
