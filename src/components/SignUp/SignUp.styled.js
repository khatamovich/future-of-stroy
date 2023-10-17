import styled from "styled-components";

export const StyledSignUp = styled.div`
  align-self: center;

  form {
    position: relative;
    color: var(--color-light-tertiary);
    width: 25vw;
    max-width: 40rem;
    background: rgba(25, 25, 25, 0.95);
    border-radius: var(--radius-primary);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.25);
    padding: 1em;
    border: 2px solid var(--color-light-primary);
    overflow: hidden;

    [type="submit"] {
      font-weight: 500;
      letter-spacing: 1px;
      cursor: pointer;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;

      &:hover ~ p {
        opacity: 1;
        transform: translateY(0);
        transition: var(--transition-primary);
      }
    }

    p {
      font-size: 1.4rem;
      text-align: center;
      opacity: 0;
      transform: translateY(100%);
      transition: var(--transition-primary) ease-in-out;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    align-self: flex-start;

    form {
      width: 40vw;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;

    form {
      width: 70%;
      margin-left: auto;
      margin-top: -75vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 35%;
  padding: 1.5em;
  background: rgb(55, 55, 55);
  position: absolute;
  bottom: 0;
  left: 0;
  color: var(--color-light-primary);
  border: 2px solid var(--color-light-primary);
`;

export default StyledSignUp;
