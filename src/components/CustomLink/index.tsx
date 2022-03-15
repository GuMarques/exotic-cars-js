import { FC } from "react";
import { Link } from "./styles";
import { LinkProps } from "react-router-dom";

interface CustomLinkProps {}

const CustomLink: FC<LinkProps> = (props) => {
  return <Link {...props}>{props.children}</Link>;
};

export default CustomLink;
