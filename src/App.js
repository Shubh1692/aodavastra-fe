import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MasterComponent from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";
import Address from "./Components/Address";

const font = "'Poppins', sans-serif";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A484BD",
      },

      secondary: {
        main: "#A484BD",
      },
    },
    typography: {
      fontFamily: font,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Address />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
