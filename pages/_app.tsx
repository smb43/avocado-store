import Layout from "@components/layout/Layout";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  // providers -- context/providers, theme, data
  // layout
  //props adionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
