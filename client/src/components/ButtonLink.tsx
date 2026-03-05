import styled from "styled-components";
import { Link } from "react-router";

export const ButtonLink = styled(Link)`
  display: block;
  flex: 1;
  text-align: center;
  border-radius: 8px;
  padding: 10px 12px;
  border: 1px solid #1d4ed8;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 120ms ease, border-color 120ms ease;

  &:hover {
    background: #1d4ed8;
    border-color: #1e40af;
  }

  &:active {
    background: #1e40af;
  }
`;
