import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MasterComponent from "./Routes/MainRoute";
import { BrowserRouter } from 'react-router-dom';


function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MasterComponent />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
