import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import Image from 'next/image';

export const Wrapper = styled.div`
  ${breakpoint("xs", "md")`
    margin-bottom: 25vw;
  `};

  ${breakpoint("md")`
    max-height: 768px;
  `};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.75rem;

  ${breakpoint("xs", "md")`
    margin-bottom: 12.5vw;
  `};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.2;
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0px 0px 32px rgba(0, 80, 98, 0.33);
  }

  ${breakpoint("md")`
    font-size: 2rem;
  `};

  ${breakpoint("lg")`
    font-size: 3rem;
  `};
`;

export const SubTitle = styled.h2`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.light};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  max-width: 80%;

  ${breakpoint("md")`
    font-size: 1.25rem;
    max-width: 50%;
  `};

  ${breakpoint("lg")`
    font-size: 1.5rem;
    max-width: 66%;
  `};
`;

export const ButtonsWrapper = styled.div`
  display: inline;
  margin-top: 0.75rem;
  margin-bottom: -0.5rem;

  & > button,
  & > a {
    display: inline-block;
    margin-bottom: 0.5rem;

    &:first-child {
      margin-right: 1rem;
    }
  }
`;

export const IllustrationWrapper = styled.div`
    filter: drop-shadow(0px 0px 64px rgba(0, 42, 51, 0.33));

     ${breakpoint("md")`
        padding-left: 4rem;
    `};

          ${breakpoint("xs", "md")`
    position: absolute;
    bottom: -25vw;
    left: 50%;
        width: 75vw;
           height: 50vw;
    transform: translateX(-50%);
  `};


    @media only screen and (min-width: 1660px) {
        margin-right: -12rem;
    }
`;

export const Illustration = styled(Image)`
  image-rendering: -webkit-optimize-contrast;
`;
