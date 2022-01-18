import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/ant_theme.less";
import { MainLayout, ProductLayout } from "@/components";
import { UserProvider } from "@/global";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <UserProvider>
      {router.pathname.startsWith("/products") ? (
        <ProductLayout Component={Component} pageProps={pageProps} />
      ) : (
        <MainLayout Component={Component} pageProps={pageProps} />
      )}
    </UserProvider>
  );
}

export default MyApp;
