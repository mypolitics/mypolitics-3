import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import Image from 'next/image';

export const BackgroundImage = styled(Image)`
  object-fit: cover;
display: block;
  z-index: -1;

  ${breakpoint("xxl")`
    border-bottom-left-radius: 128px;
    border-bottom-right-radius: 128px;
  `};
`;

export const Overlay = styled.div`
  background: linear-gradient(135deg, #002a33 0%, rgba(0, 42, 51, 0) 100%);
  margin-left: -1px;
  position: absolute;
  left: 50%;
  z-index: 0;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;

  ${breakpoint("xxl")`
    border-bottom-left-radius: 128px;
    border-bottom-right-radius: 128px;
  `};
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  margin: 0 1rem;
  position: relative;

  ${breakpoint("md")`
    margin: 0 1.5rem;
  `};

  ${breakpoint("lg")`
    margin: 0 3rem;
  `};
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 90vh;
  position: relative;

  ${breakpoint("md")`
    height: max(75vh, 48rem);
    &, ${Inner}, ${Overlay}, ${BackgroundImage} {
      max-height: 768px;
    };
  `};
`;

export const Wrapper = styled.div`
display: flex;
  width: 100%;
  height: 100%;
    justify-content: center;
  position: absolute;
    max-width: ${({theme}) => theme.breakpoints.xxl}px;
`;
