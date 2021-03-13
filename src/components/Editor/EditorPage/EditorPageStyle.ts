import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { transparentize } from 'polished';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};

  ${breakpoint("md")`
    grid-gap: 3rem;
    padding: 3rem;
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;

  ${breakpoint("md")`
    font-size: 1.5rem;
  `}

  & > div {
    display: flex;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  width: auto;
  display: flex;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: inherit;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;

  ${breakpoint("xs", "md")`
    display: none;
  `}
`;

export const MobileInfo = styled.div`
  background: ${({ theme }) => transparentize(0.9, theme.colors.red)};
  color: ${({ theme }) => theme.colors.red};
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;

  ${breakpoint("md")`
    display: none;
  `}
`;