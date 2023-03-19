import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { DEFAULT_BG_COLOR } from "@/configs/constants";
import store from "@/store";
import { Provider } from "react-redux";
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: DEFAULT_BG_COLOR,
      },
    }),
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
