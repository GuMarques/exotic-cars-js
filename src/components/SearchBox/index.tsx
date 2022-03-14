import "flatpickr/dist/themes/material_green.css";
import { FC } from "react";
import Flatpickr from "react-flatpickr";

import searchIcon from "../../assets/icons/bx_bx-search.svg";
import DateContainer from "../DateContainer";
import { IconContainer } from "../DatePicker/styles";
import SearchInput from "../SearchInput";
import { SearchButton, SearchContainer, SearchOuterContainer } from "./styles";

const SearchBox: FC<{}> = (props) => {
  return (
    <SearchOuterContainer>
      <SearchContainer>
        <SearchInput />
        <DateContainer />
        <DateContainer />
        <SearchButton>
          <IconContainer src={searchIcon} />
        </SearchButton>
      </SearchContainer>
    </SearchOuterContainer>
  );
};

export default SearchBox;
