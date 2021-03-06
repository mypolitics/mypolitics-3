import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 1rem);
  padding: 1.5rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;

  ${breakpoint("md")`
    width: calc(100% - 6rem);
    padding: 2rem;
  `}
`;

export const Logo = styled.img`
  height: 1.5rem;
  width: auto;
  display: block;

  ${breakpoint("md")`
    height: 2rem;
  `}
`;

export const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primaryDarken};
  width: calc(100% - 1rem);
  margin: auto;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    background: ${({ theme }) =>
      transparentize(0.9, theme.colors.backgroundLighten)};
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }

  ${breakpoint("xs", "sm")`
    flex-direction: column;
    
    span {
      margin-left: 0;
      margin-top: 0.5rem;
    }
  `}

  ${breakpoint("md")`
    width: calc(100% - 6rem);
  `}
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.75rem;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  ${breakpoint("md")`
    grid-gap: 1.5rem;
    padding: 3rem;
  `}

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms;
  }
`;

export const FormQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border-radius: 0.5rem;
  line-height: 1.4;

  ${breakpoint("md")`
    padding: 4rem;
    font-size: 1.25rem;
  `}
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.5;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  width: 100%;
  margin-top: 1rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  text-align: center;

  ${breakpoint("sm")`
    font-size: 1.1rem;
  `};

  ${breakpoint("md")`
    font-size: 1.25rem;
  `};
`;
