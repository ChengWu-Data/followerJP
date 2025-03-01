import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // ✅ 用 HashRouter 代替 BrowserRouter
import { base, lightTheme, darkTheme } from "./themes/themes";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import GlobalStyles from "./styles/Global/GlobalStyles";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";
import Navigation from "./components/Navigation/Navigation";
import ProjectGallery from "./components/AdditionalProjects/ProjectGallery";
import { useGlobalContext } from "./Context/Context";
import Footer from "./components/Footer/Footer";
import Reflections from "./components/Reflections"; // ✅ 新增 Reflections 组件

function App() {
  const { theme } = useGlobalContext();
  const lightMode = { ...lightTheme };
  const darkMode = { ...darkTheme };

  const currentTheme = {
    ...base,
    ...(theme === "light" ? lightMode : darkMode),
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router>
        <Navigation />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <About />
              <Projects />
              <ProjectGallery />
            </>} />
            <Route path="/reflections" element={<Reflections />} /> {/* ✅ 添加新页面 */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

