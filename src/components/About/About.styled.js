import styled from "styled-components";

const StyledAbout = styled.div`
  color: var(--color-light-secondary);
`;

export const Content = styled.div`
  padding: 15vh 0 10vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}) {
    text-align: center;
  }
`;

export const Row = styled.div`
  &:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const List = styled.div`
  width: 30%;
  list-style: none;

  li {
    margin-bottom: 4em;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: clamp(1.75rem, 1vw, 2.2rem);
      line-height: 1.4;
      margin-bottom: 0.75em;
      padding-bottom: 2rem;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 50%;
        height: 0.1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--color-beige);
        border-radius: var(--radius-primary);

        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}) {
          width: 60%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5vh;

    li {
      width: 30%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    li {
      width: 31%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-wrap: wrap;

    li {
      width: 100%;
      margin-bottom: 2em;

      h3 {
        font-size: 2.25rem;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  border: 2.5rem solid rgba(50, 50, 50, 0.9);
  width: 25%;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    width: 35%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
    order: 1;
  }
`;

export const Main = styled.div`
  width: 32.5%;

  h2 {
    font-size: 5.2rem;
    margin-bottom: 0.75em;
  }

  p {
    margin-bottom: 2.5em;
  }

  [role="button"] {
    border: 0.2rem solid var(--color-light-secondary);
    padding: 1.25em 3em;

    &:hover {
      background: var(--color-dark-secondary);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    [role="button"] {
      padding: 0.9em 2em;
      font-weight: 700;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
    margin-bottom: 7.5vh;

    h2 {
      font-size: clamp(3.5rem, 10vw, 4.5rem);
    }
  }
`;

export const CompanyName = styled.span`
  text-transform: capitalize;
  text-decoration: underline;
  font-weight: 500;
`;

export default StyledAbout;