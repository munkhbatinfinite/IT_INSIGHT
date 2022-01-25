import { Layout } from "antd";
import { Header, Footer } from "@/components";

export function MainLayout({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
