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
  const [volume, setVolume] = useState(0.5); // 默认音量

  // 初始化音量
  useEffect(() => {
    const audio = document.getElementById("bgm");
    if (audio) {
      audio.volume = volume; // 设置初始音量
    }
  }, [volume]);

  // 切换播放/暂停
  const toggleMusic = () => {
    const audio = document.getElementById("bgm");
    if (audio) {
      if (isPlaying) {
        audio.pause(); // 暂停音乐
      } else {
        audio.play(); // 播放音乐
      }
      setIsPlaying(!isPlaying); // 切换播放状态
    }
  };

  // 音量控制
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    const audio = document.getElementById("bgm");
    if (audio) {
      audio.volume = newVolume; // 设置新音量
    }
    setVolume(newVolume);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      {/* 背景音乐 */}
      <audio id="bgm" loop>
        <source src="/followerJP/hogaku.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* 导航栏 */}
      <Navigation />

      {/* 侧边栏 */}
      <Sidebar />

      {/* 主内容 */}
      <main>
        <Hero />
        <About />
        <Projects />
        <ProjectGallery />
        <Reflections />
      </main>

      {/* 页脚 */}
      <Footer />

      {/* 音乐控制按钮 */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}>
        <button onClick={toggleMusic} style={{
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: theme === "light" ? "#333" : "#fff",
          color: theme === "light" ? "#fff" : "#333",
          cursor: "pointer",
        }}>
          {isPlaying ? "Pause BGM" : "Play BGM"}
        </button>

        {/* 音量控制滑块 */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
