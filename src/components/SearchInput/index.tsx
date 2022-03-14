import { FC, useRef, useState } from "react";
import {
  HrInput,
  InputContainer,
  InputOutContainter,
  PinContainer,
  TextInput,
} from "./styles";
import pin from "../../assets/icons/ph_map-pin-fill.svg";
import { Animate } from "react-simple-animate";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = (props) => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <InputOutContainter
      onMouseEnter={() => setPlayAnimation(true)}
      onMouseLeave={() =>
        !isOnFocus ? setPlayAnimation((prevState) => !prevState) : null
      }
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => {
        setIsOnFocus(false);
        setPlayAnimation((prevState) => !prevState);
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <PinContainer src={pin} />
      <InputContainer>
        <TextInput
          ref={inputRef}
          id="searchInput"
          type="text"
          placeholder="North Carolina, NC 90025"
        />
        <Animate
          play={playAnimation}
          start={{ width: "0%" }}
          end={{ width: "100%" }}
          duration={0.6}
          easeType="cubic-bezier(0.85, 0, 0.15, 1)"
        >
          <HrInput />
        </Animate>
      </InputContainer>
    </InputOutContainter>
  );
};

export default SearchInput;
