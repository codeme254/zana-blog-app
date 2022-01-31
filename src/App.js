import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";

const zanaTheme = {
  colors: {
    subhead: "crimson",
    white: "#fff",
    whiteLight1: "#ddd",
    whiteLight2: "#ccc",
    greyLight: "#333",
    greyDark: "#111",
  },
};

function App() {
  return (
    <ThemeProvider theme={zanaTheme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
