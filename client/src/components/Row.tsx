import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
