<script lang="tsx">
import { Flex, Space, Tag, Table } from 'antd-v';
import { defineComponent } from 'vue';
interface DataType {
  key: any;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default defineComponent({
  setup() {
    return () => (
      <Table dataSource={data}>
        <Table.ColumnGroup title="Name">
          <Table.Column title="First Name" dataIndex="firstName" key="firstName" />
          <Table.Column title="Last Name" dataIndex="lastName" key="lastName" />
        </Table.ColumnGroup>
        <Table.Column title="Age" dataIndex="age" key="age" />
        <Table.Column title="Address" dataIndex="address" key="address" />
        <Table.Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags: string[]) => (
            <Flex gap="small" align="center" wrap>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </Flex>
          )}
        />
        <Table.Column
          title="Action"
          key="action"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    );
  },
});
</script>
