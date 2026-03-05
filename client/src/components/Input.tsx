import styled from "styled-components";

export const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  color: #111827;
  background: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 120ms ease, box-shadow 120ms ease;

  &:hover,
  &:active,
  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px #bfdbfe;
  }
`;
