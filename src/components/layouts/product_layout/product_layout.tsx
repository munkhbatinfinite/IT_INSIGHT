import { Layout } from "antd";
import { Header, Footer } from "@/components";
import { SideMenu } from "./side_menu";
const { Sider, Content } = Layout;
export function ProductLayout({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Layout style={{ height: "100vh" }}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <SideMenu />
        </Sider>
        <Content style={{ height: "100" }}>
          <Component {...pageProps} />
        </Content>
      </Layout>
      <Footer />
    </div>
  );
}
