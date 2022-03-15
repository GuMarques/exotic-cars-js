import { Link as a } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(a)`
  text-decoration: none;
  color: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #313136;
    text-decoration: none;
  }
`;
