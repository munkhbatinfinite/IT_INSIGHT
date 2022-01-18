import { Layout } from "antd";
import { Header, Footer } from "@/components";

const { Content } = Layout;
export function MainLayout({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
