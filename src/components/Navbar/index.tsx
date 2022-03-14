import { FC, useEffect, useState } from "react";
import menu from "../../assets/icons/menu.svg";
import {
  IconContainer,
  LogoContainer,
  MenuButton,
  NavbarContainer,
} from "./styles";
import { Logo, SearchBox, SignUpButton, LoginButton } from "../index";
import SideMenu from "../SideMenu";
import { useAnimate } from "react-simple-animate";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  const setSideMenuWidth = () => {
    if (screenSize.dynamicWidth / 2 > 328.33) {
      return 328.33;
    } else {
      return screenSize.dynamicWidth / 1.2;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    if (menuOpened && screenSize.dynamicWidth > 991.99) {
      setMenuOpened(false);
    }

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const { play, isPlaying, style } = useAnimate({
    start: { left: -328.33 },
    end: { left: 0 },
    duration: 0.3,
    easeType: "cubic-bezier(0.34, 1.3, 0.64, 1)",
  });

  useEffect(() => {
    if (menuOpened) {
      play(!isPlaying);
    }
  }, [menuOpened]);

  const playAnimation = () => {
    if (menuOpened) {
      play(!isPlaying);
      setTimeout(() => {
        setMenuOpened((prevState) => !prevState);
      }, 300);
    } else {
      setMenuOpened((prevState) => !prevState);
    }
  };
  return (
    <NavbarContainer>
      {screenSize.dynamicWidth < 991.99 && (
        <MenuButton onClick={playAnimation}>
          <IconContainer src={menu} />
        </MenuButton>
      )}
      {menuOpened && <SideMenu windowWidth={328.33} style={style} />}
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {screenSize.dynamicWidth > 991.99 && (
        <>
          <SearchBox />
          <SignUpButton />
          <LoginButton />
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
