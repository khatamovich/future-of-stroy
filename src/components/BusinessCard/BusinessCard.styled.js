import styled from "styled-components";

const StyledBusinessCard = styled.div`
  margin-left: 15%;
  background: rgba(35, 35, 35, 0.75);
  padding: 2em;
  border: 2px solid var(--color-light-primary);
  border-radius: var(--radius-primary);
  width: 32.5vw;
  max-width: 56rem;
  transform: translateY(-8.7rem);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
    flex-wrap: wrap;
  }

  footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    transition: var(--transition-primary);
    line-height: 2;

    &:hover {
      opacity: 0.75;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    transform: none;
    margin: 3vh 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 1.25em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 85%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}) {
    width: 100%;
  }
`;

export const CompanyName = styled.h3`
  font-size: 2rem;
  font-weight: 400;

  span {
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
`;

export const PhoneNumber = styled.a`
  display: flex;
  align-items: center;
`;

export const Address = styled.address`
  line-height: 1.6;
  font-size: 1.35rem;
  margin-bottom: 1.5em;
  max-width: 45ch;
`;

export const Icon = styled.i`
  width: 2.5rem;
  margin-right: 0.5em;
  margin-top: 0.3rem;
  fill: var(--color-light-primary);
`;

export const Socials = styled.div`
  color: var(--color-light-primary);
  fill: var(--color-light-primary);
  align-self: flex-end;
  display: flex;
  gap: 1em;

  a {
    font-size: 2.5rem;
    color: inherit;
    fill: inherit;
  }
`;

export default StyledBusinessCard;