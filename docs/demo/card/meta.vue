<script lang="tsx">
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Avatar, Card } from 'antd-v';
import { defineComponent } from 'vue';

const { Meta } = Card;

export default defineComponent({
  setup() {
    return () => (
      <Card
        style={{ width: '300px' }}
        cover={<img draggable={false} alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined />, <EditOutlined />, <EllipsisOutlined />]}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    );
  },
});
</script>
