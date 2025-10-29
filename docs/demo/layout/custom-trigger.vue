<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons-vue';
import { Button, Layout, Menu, theme } from 'antd-v';
export default defineComponent({
  setup() {
    const { Header, Sider, Content } = Layout;

    const collapsed = ref(false);
    const { token } = theme.useToken();

    return () => (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed.value}>
          <div class="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: token.value.colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed.value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => (collapsed.value = !collapsed.value)}
              style={{
                fontSize: '16px',
                width: '64px',
                height: '64px',
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: '24px',
              minHeight: '280px',
              background: token.value.colorBgContainer,
              borderRadius: `${token.value.borderRadiusLG}px`,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  },
});
</script>
