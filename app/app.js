import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  colors: {
    primary: {
      50: "#f9fafb",
      100: "#f0f2f5",
      200: "#d7dce1",
    },
    secondary: {
      50: "#edf2f7",
      100: "#dbe4f1",
      200: "#a7c5e7",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      sizes: {
        md: {
          fontSize: "lg",
          px: "4",
          py: "2",
        },
        lg: {
          fontSize: "xl",
          px: "6",
          py: "3",
        },
      },
      variants: {
        primary: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
        secondary: {
          bg: "secondary.500",
          color: "white",
          _hover: {
            bg: "secondary.600",
          },
        },
      },
    },
    Input: {
      sizes: {
        md: {
          fontSize: "md",
          px: "4",
          py: "2",
        },
        lg: {
          fontSize: "lg",
          px: "6",
          py: "3",
        },
      },
      variants: {
        filled: {
          bg: "gray.100",
          _hover: {
            bg: "gray.200",
          },
          _focus: {
            bg: "white",
            borderColor: "primary.300",
          },
        },
        outline: {
          border: "2px solid",
          borderColor: "primary.300",
          _hover: {
            borderColor: "primary.400",
          },
          _focus: {
            borderColor: "primary.500",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
      },
    },
  },
});
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
