import "./App.css";
import { Login } from "./Components/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignUp } from "./Components/SignUp";

function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Login />;
        <SignUp />
      </ThemeProvider>
    </>
  );
}

export default App;
