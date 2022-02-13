import React, { useEffect, useState } from "react";
import "./App.css";
import { Menu } from "./features/Menu/Menu";
import { Content } from "./features/Content";
import { Footer } from "./features/Footer/Footer";
import { useAppDispatch } from "./app/hooks";
import { setIsMobile } from "./features/mobileDetect";
import { isMobile } from "react-device-detect";

function App() {
  const [isDark, setIsDark] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let width = window.innerWidth;
    dispatch(setIsMobile(isMobile && width < 768));
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [setIsDark, dispatch]);

  return (
    <div
      className={`App ${
        isDark ? `dark` : ``
      }  scroll-smooth text-gray-600 dark:text-gray-300 dark:bg-gray-600`}
    >
      <Menu isDark={isDark} setIsDark={setIsDark} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
