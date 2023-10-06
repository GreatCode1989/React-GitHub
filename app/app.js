import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from 'react-query';

const theme = extendTheme({});
const queryClient = new QueryClient(); 

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;

