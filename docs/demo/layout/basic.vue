<script lang="tsx">
import { CSSProperties, defineComponent } from 'vue';
import { Flex, Layout } from 'antd-v';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: '64px',
  paddingInline: '48px',
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: '120px',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: '8px',
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

export default defineComponent({
  setup() {
    return () => (
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>

        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Layout>
            <Sider width="25%" style={siderStyle}>
              Sider
            </Sider>
            <Content style={contentStyle}>Content</Content>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>

        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Layout>
            <Content style={contentStyle}>Content</Content>
            <Sider width="25%" style={siderStyle}>
              Sider
            </Sider>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>

        <Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            Sider
          </Sider>
          <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Flex>
    );
  },
});
</script>
