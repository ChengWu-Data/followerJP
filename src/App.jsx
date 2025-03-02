import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { base, lightTheme, darkTheme } from "./themes/themes";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import GlobalStyles from "./styles/Global/GlobalStyles";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";
import Navigation from './components/Navigation/Navigation';
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

  // 音乐播放状态
  const [isPlaying, setIsPlaying] = useState(false);

  // 初始化音乐
  useEffect(() => {
    const audio = document.getElementById("bgm");
    if (audio) {
      // 尝试自动播放（可能需要用户交互）
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  // 用户交互后播放音乐
  const handleUserInteraction = () => {
    const audio = document.getElementById("bgm");
    if (audio && !isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      {/* 背景音乐 */}
      <audio id="bgm" loop>
        <source src="https://chengwu-data.github.io/followerJP/hogaku.mp3" type="audio/mpeg" />

        Your browser does not support the audio element.
      </audio>

      {/* 监听用户交互 */}
      <div onClick={handleUserInteraction} style={{ width: "100%", height: "100%" }}>
        <Navigation />
        <Sidebar />
        <main>
          <Hero />
          <About />
          <Projects />
          <ProjectGallery />
          <Reflections />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
