// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        background: mode(
          "linear-gradient(147deg, #FFFFFF 0%, #FFFFFF 50%, #2c3e50 84%)",
          "linear-gradient(147deg, #000000 0%, #000000 50%, #2c3e50 84%)"
        )(props),
      },
    }),
  },
});

export default theme;
