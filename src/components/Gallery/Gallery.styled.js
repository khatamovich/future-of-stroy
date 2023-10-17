import styled from "styled-components";

export const StyledGallery = styled.div`
  .images-count-controller {
    margin-top: 2rem;
    background: transparent;
    color: var(--color-light-primary);
    fill: var(--color-light-primary);
    cursor: pointer;
    font-size: 5rem;
  }
`;

export const Content = styled.div`
  padding: 5vh 0;

  h2 {
    font-size: 7.5rem;
    color: var(--color-light-secondary);
    margin-bottom: 0.5em;
  }

  p {
    max-width: 50ch;
    color: var(--color-light-secondary);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    padding-top: 0;

    h2 {
      font-size: clamp(4.5rem, 5vw, 7.5rem);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding-top: 0;

    h2 {
      font-size: clamp(3.2rem, 5vw, 7.5rem);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}) {
    text-align: center;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5rem -2.5rem -2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: calc((100% / 4) - 5rem);
  height: 30rem;
  margin: 2.5rem;
  overflow: hidden;
  cursor: pointer;
  border: 1rem solid rgba(75, 75, 75, 0.75);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  &:hover img {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 500ms ease-in-out;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    width: calc((100% / 3) - 5rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 5rem 0 0;
    min-height: 55rem;
    width: 100%;
  }
`;

export default StyledGallery;