import { styled } from "styled-components";
import { data } from "../api/imports";

type TProps = Partial<{
  children: JSX.Element;
}>;

export const Index = (_props?: TProps) => {
  return (
    <Container>
      <List>
        {data.map((e, i) => {
          return (
            <Item key={i}>
              <Card>
                <Title>{e.pattern}</Title>
                <Paragraph>{e.description}</Paragraph>
              </Card>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

const Paragraph = styled.div`
  ${(p) => (p.className = "Paragraph")};
  display: flex;
  font-size: calc(16 * var(--dv));
  @media (max-width: 64rem) {
    font-size: calc(16 * var(--tv));
  }
  @media (max-width: 48rem) {
    font-size: calc(16 * var(--mv));
  }
`;

const Title = styled.strong`
  ${(p) => (p.className = "Title")};
  display: flex;
  font-size: calc(24 * var(--dv));
  @media (max-width: 64rem) {
    font-size: calc(24 * var(--tv));
  }
  @media (max-width: 48rem) {
    font-size: calc(24 * var(--mv));
  }
`;

const Card = styled.div`
  ${(p) => (p.className = "Card")};
  display: flex;
  flex-direction: column;
  gap: calc(16 * var(--dv));
`;

const Item = styled.li`
  ${(p) => (p.className = "Item")};
  display: flex;
  outline: calc(1 * var(--dv)) solid;
  padding: calc(16 * var(--dv));
`;

const List = styled.ul`
  ${(p) => (p.className = "List")};
  display: grid;
  gap: calc(32 * var(--dv));
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: calc(64 * var(--dv));
`;
