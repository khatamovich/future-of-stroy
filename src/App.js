// Provider
import { ThemeProvider } from "styled-components";

// importing necessary components
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Watch from "./components/Watch";
import Gallery from "./components/Gallery";

// importing data
import { images } from "./images";

const theme = {
  breakpoints: {
    extraLarge: "1200px",
    large: "1000px",
    medium: "860px",
    small: "768px",
    extraSmall: "520px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <About />
        <Services />
        <Gallery images={images} />
        <Watch />
      </Layout>
    </ThemeProvider>
  );
};

export default App;