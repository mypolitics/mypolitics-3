import styled from "styled-components";
import NextImage from 'next/image';

export const Image = styled(NextImage)<{ xl: boolean }>`
  display: block;
  height: ${({ xl }) => (xl ? 3 : 2)}rem;
  width: ${({ xl }) => (xl ? 3 : 2)}rem;
  border-radius: 0.25rem;
  object-fit: cover;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  vertical-align: middle;

  &:hover {
    transform: scale(1.25);
  }
`;
