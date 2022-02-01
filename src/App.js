import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AllPreviews from "./Components/PreviewBlogs/AllPreviews";
import BlogCategoryScience from "./Components/BlogCategory/BlogCategories/BlogCategoryScience";
import BlogCategoryCommunity from "./Components/BlogCategory/BlogCategories/BlogCategoryCommunity";
import Footer from "./Components/Footer/Footer";

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
        <BlogCategoryScience />
        <BlogCategoryCommunity />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
