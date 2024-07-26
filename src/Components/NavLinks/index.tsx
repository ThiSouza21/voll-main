import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkFor = styled(NavLink)`
  background-color: #0b3b60;
  color: #fff;
  width: auto;
  padding: 1em 1.2em;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
`;

interface Props {
  children: React.ReactNode;
  to: string;
}

export function NavLinks({ to, children }: Props) {
  return <LinkFor to={to}>{children}</LinkFor>;
}
