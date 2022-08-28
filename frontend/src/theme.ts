import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `STARWARS, sans-serif`,
  },
  styles: {
    global: {
      body: {
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        margin: 0,
        color: "white",
        backgroundColor: "gray.700",
      },
    },
  },
});

export default theme;
