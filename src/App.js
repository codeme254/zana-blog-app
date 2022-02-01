import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AllPreviews from "./Components/PreviewBlogs/AllPreviews";

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
        <Home />
        <AllPreviews />
      </div>
    </ThemeProvider>
  );
}

export default App;
