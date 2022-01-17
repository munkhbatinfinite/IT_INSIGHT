import { Layout } from "antd";

const { Header, Footer, Content } = Layout;
export function MainLayout({ Component, pageProps }) {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
