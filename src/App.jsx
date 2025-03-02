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
      // 静音自动播放（绕过浏览器自动播放限制）
      audio.muted = true;
      audio.play();

      // 用户交互后取消静音并播放音乐
      const handleUserInteraction = () => {
        audio.muted = false;
        audio.play();
        setIsPlaying(true);
        document.removeEventListener("click", handleUserInteraction); // 移除事件监听器
      };

      // 监听用户点击事件
      document.addEventListener("click", handleUserInteraction);
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      {/* 背景音乐 */}
      <audio id="bgm" loop>
        <source src="https://chengwu-data.github.io/followerJP/hogaku.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* 页面内容 */}
      <div style={{ width: "100%", height: "100%" }}>
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
