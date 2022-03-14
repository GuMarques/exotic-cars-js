import { FC } from "react";
import DateContainer from "../DateContainer";
import DatePicker from "../DatePicker";
import LoginButton from "../LoginButton";
import SearchInput from "../SearchInput";
import SignUpButton from "../SignUpButton";
import searchIcon from "../../assets/icons/bx_bx-search.svg";

import {
  ButtonContainer,
  DisplayOrganizer,
  IconContainer,
  ItensContainer,
  MenuContainer,
  SearchButton,
  SearchRow,
} from "./style";

interface SideMenuProps {
  windowWidth: number;
  style?: React.CSSProperties;
}

const SideMenu: FC<SideMenuProps> = (props) => {
  const { windowWidth, style } = props;
  return (
    <MenuContainer width={windowWidth} style={style}>
      <DisplayOrganizer>
        <ItensContainer>
          <DateContainer />
          <DateContainer />
        </ItensContainer>
        <SearchRow>
          <SearchInput />
          <SearchButton>
            <IconContainer src={searchIcon} />
          </SearchButton>
        </SearchRow>
        <ButtonContainer>
          <LoginButton />
          <SignUpButton />
        </ButtonContainer>
      </DisplayOrganizer>
    </MenuContainer>
  );
};

export default SideMenu;
