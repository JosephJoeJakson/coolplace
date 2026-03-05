import styled from "styled-components";

export const Button = styled.button`
  flex: 1;
  border-radius: 8px;
  padding: 10px 12px;
  border: 1px solid #1d4ed8;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease;

  &:hover {
    background: #1d4ed8;
    border-color: #1e40af;
  }

  &:active {
    background: #1e40af;
  }

  &:disabled {
    background: #93c5fd;
    border-color: #93c5fd;
    cursor: not-allowed;
  }
`;
