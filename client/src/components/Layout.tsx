import styled from "styled-components";

const Container = styled.div`
  width: min(100%, 520px);
  margin: 20px auto;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #1f2937;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);

  & > h1 {
    margin: 0;
    padding: 18px 18px 8px;
    font-size: 1.4rem;
    font-weight: 700;
    color: #111827;
  }
`;

const Content = styled.main`
  padding: 12px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: stretch;

  & > p {
    max-width: 45ch;
  }
`;

export function Layout(props: { title?: string; children: React.ReactNode }) {
  return (
    <Container>
      {props.title && <h1>{props.title}</h1>}
      <Content>{props.children}</Content>
    </Container>
  );
}
