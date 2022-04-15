import { ThemeProvider } from "@mui/material";
import Sidebar from "../src/components/Sidebar";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ThemeProvider>
  );
}

export default MyApp;
