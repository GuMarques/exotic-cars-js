import { FC } from "react";
import { NavbarContainer } from "./styles";
import { Logo, SearchBox } from "../index";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
  return (
    <NavbarContainer>
      <Logo />
      <SearchBox />
      {/* <Buttons /> */}
    </NavbarContainer>
  );
};

export default Navbar;
