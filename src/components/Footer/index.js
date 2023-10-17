import StyledFooter, {
  Content,
  Navigation,
  Links,
  Contacts,
  Email,
  Company,
  Socials,
} from "./Footer.styled";

//importing necessary components
import Section from "../Section";
import { Link as Scroll } from "react-scroll";

//importing svg icons
import { CallMeSVG } from "../../assets/svg/call-me-svg";
import { MailSVG } from "../../assets/svg/mail-svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => (
  <StyledFooter className={"contacts"}>
    <Section>
      <Content className="content-1">
        <Contacts>
          <h3>Контакты</h3>

          <address>Республика Узбекистан, г. Ташкент</address>

          <div className="phones">
            <div className="phones__item">
              <CallMeSVG />
              <a href="tel:+998974708979">
                +(998)97 470-89-79 | Виталий Павлович
              </a>
            </div>
          </div>

          <Email>
            <MailSVG />

            <a href="mailto:consult@future-of-stroy.uz">
              consult@future-of-stroy.uz
            </a>
          </Email>
        </Contacts>

        <Navigation>
          <h3>Меню сайта</h3>

          <Links>
            <Scroll to={"banner"} spy={true} smooth={true}>
              Главная
            </Scroll>
            <Scroll to={"about"} spy={true} smooth={true}>
              О компании
            </Scroll>
            <Scroll to={"services"} spy={true} smooth={true}>
              Услуги
            </Scroll>
            <Scroll to={"gallery"} spy={true} smooth={true}>
              Портфолио
            </Scroll>
            <Scroll to={"contacts"} spy={true} smooth={true}>
              Контакты
            </Scroll>
          </Links>
        </Navigation>

        <Company>
          <h3>Future Of Stroy</h3>

          <p>
            Future Of Stroy - это команда профессионалов, которые занимаются
            евро-ремонтом квартир, офисов, и домов в Узбекистане.
          </p>

          <Socials>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/futureofstroy?igshid=YmMyMTA2M2Y="
            >
              <FaInstagram />
            </a>

            <a target="_blank" rel="noreferrer" href="https://telegram.org">
              <FaTelegram />
            </a>

            <a target="_blank" rel="noreferrer" href="https://facebook.com">
              <FaFacebook />
            </a>
          </Socials>
        </Company>
      </Content>
    </Section>

    <Section>
      <Content className="content-2">
        <p className="copy">
          &copy; Future Of Stroy - {new Date().getFullYear()} | все права
          защищены.
        </p>

        <div className="'developed-by">
          <p>
            Разработан -{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://webpark.uz"
              className="dev-website"
            >
              webpark.uz
            </a>
          </p>
        </div>
      </Content>
    </Section>
  </StyledFooter>
);

export default Footer;
