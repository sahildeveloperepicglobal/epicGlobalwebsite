import "styles/globals.scss";
import type { AppProps } from "next/app";
import GlobalLayout from "layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </div>
  );
}

export default MyApp;
