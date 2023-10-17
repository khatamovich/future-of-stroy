import styled from "styled-components";

const StyledModal = styled.div``;

export const Backdrop = styled.div`
  background: rgba(55, 55, 55, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 70rem;
  min-height: 45rem;
  padding: 2em;
  background: rgba(25, 25, 25, 0.95);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 90%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: block;
  top: -4rem;
  right: -4rem;
  color: var(--color-light-secondary);
  background: none;
  z-index: 99999;
  cursor: pointer;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0.75;
    transition: var(--transition-primary);
    fill: var(--color-light-secondary);
  }

  &:hover svg {
    opacity: 0.5;
    transform: scale(1.1) translateY(-0.25rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    right: 0;
  }
`;

export default StyledModal;