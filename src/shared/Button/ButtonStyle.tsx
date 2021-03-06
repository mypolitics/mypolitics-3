import styled, { css, keyframes } from "styled-components";
import { StyleProps } from "./ButtonTypes";
import { getBackgrounds, sizes } from "./ButtonUtils";

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 0.75em;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;

export const Container = styled.button<StyleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border: 0;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "auto")};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &[href]:hover {
    text-decoration: none;
  }

  ${({ size }) => sizes[size]}

  ${({ background, theme, showShadow, pulsating }) => {
    const backgrounds = getBackgrounds(theme, { showShadow, pulsating });
    return backgrounds[background];
  }}
`;
