import StyledHeader, { Content, Navigation, Link } from "./Header.styled";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

// importing necessary components
import Section from "../Section";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => setIsMobile((state) => !state);
  const disableMobile = () => setIsMobile((state) => (state = false));

  return (
    <StyledHeader>
      <Section>
        <Content>
          <Hamburger toggled={isMobile} toggle={toggleMobile} />

          <Navigation isMobile={isMobile}>
            <ul>
              <li onClick={disableMobile}>
                <Link>
                  <Scroll
                    onClick={disableMobile}
                    to={"banner"}
                    smooth={true}
                    spy={true}
                  >
                    Главная
                  </Scroll>
                </Link>
              </li>
              <li onClick={disableMobile}>
                <Link>
                  <Scroll
                    onClick={disableMobile}
                    to={"about"}
                    smooth={true}
                    spy={true}
                  >
                    О компании
                  </Scroll>
                </Link>
              </li>
              <li onClick={disableMobile}>
                <Link>
                  <Scroll
                    onClick={disableMobile}
                    to={"services"}
                    smooth={true}
                    spy={true}
                  >
                    Услуги
                  </Scroll>
                </Link>
              </li>
              <li onClick={disableMobile}>
                <Link>
                  <Scroll
                    onClick={disableMobile}
                    to={"gallery"}
                    smooth={true}
                    spy={true}
                  >
                    Портфолио
                  </Scroll>
                </Link>
              </li>
              <li onClick={disableMobile}>
                <Link>
                  <Scroll
                    onClick={disableMobile}
                    to={"contacts"}
                    smooth={true}
                    spy={true}
                  >
                    Контакты
                  </Scroll>
                </Link>
              </li>
            </ul>
          </Navigation>
        </Content>
      </Section>
    </StyledHeader>
  );
};

export default Header;