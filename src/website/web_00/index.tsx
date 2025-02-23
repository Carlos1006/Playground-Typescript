import { FC, useLayoutEffect, useState } from "react";
import css from "./styles/main.module.scss";
import Header from "./components/Header";
import Center0 from "./components/Center0";
import Center1 from "./components/Center1";
import Footer from "./components/Footer";
import Gt0l0 from "./components/GT0L0";
import Gt0l1 from "./components/GT0L1";
import Gt1l0 from "./components/GT1L0";
import St1r1 from "./components/ST1R1";
import Gt2r0 from "./components/GT2R0";
import St0r0 from "./components/ST0R0";
import Background from "./components/Background";
import "./styles/main.scss";
import Gt0l2 from "./components/GT0L2";
import useAppContext from "../../hooks/useAppContext";
import { MODE } from "./constants";
import { IHomeContext, ThemeMode } from "./types";
import HomeContext from "./context/homeContext";

const Web00: FC = () => {
  const { setShowMenu } = useAppContext();
  const [themeMode, setThemeMode] = useState<ThemeMode>(MODE.DARK);

  useLayoutEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);

  useLayoutEffect(() => {
    const themeMode = localStorage.getItem("themeMode") as ThemeMode;
    if (themeMode) {
      setThemeMode(themeMode);
    }
  }, []);

  const setAndPersistThemeMode = (mode: ThemeMode): void => {
    localStorage.setItem("themeMode", mode);
    setThemeMode(mode);
  };

  const homeContext: IHomeContext = {
    themeMode,
    setThemeMode,
    setAndPersistThemeMode,
  };

  return (
    <HomeContext.Provider value={homeContext}>
      <main className={`${css.main} ${css.light}`}>
        <Background />
        <div className={css.wrapper} data-mode={themeMode}>
          <Header />
          <Gt0l0 />
          <Gt0l1 />
          <Gt0l2 />
          <Gt1l0 />
          <St0r0 />
          <St1r1 />
          <Center0 />
          <Center1 />
          <Gt2r0 />
          <Footer />
        </div>
      </main>
    </HomeContext.Provider>
  );
};

export default Web00;
