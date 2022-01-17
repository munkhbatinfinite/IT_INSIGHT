import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
export function ProductLayout({ Component, pageProps }) {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
