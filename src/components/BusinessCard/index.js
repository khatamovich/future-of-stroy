import StyledBusinessCard, {
  CompanyName,
  Email,
  PhoneNumber,
  Address,
  Icon,
  Socials,
} from "./BusinessCard.styled";

// importing svg icons
import { CallMeSVG } from "../../assets/svg/call-me-svg";
import { MailSVG } from "../../assets/svg/mail-svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const BusinessCard = () => (
  <StyledBusinessCard>
    <header>
      <CompanyName>
        Future of <span>stroy</span>
      </CompanyName>

      <Email href="mailto:info@webpark.uz">
        <Icon>
          <MailSVG />
        </Icon>
        info@fos.uz
      </Email>
    </header>

    <Address>Республика Узбекистан, г. Ташкент</Address>

    <footer>
      <PhoneNumber href="tel:+998974708979">
        <Icon>
          <CallMeSVG />
        </Icon>
        +(998)97 470-89-79
      </PhoneNumber>

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
    </footer>
  </StyledBusinessCard>
);

export default BusinessCard;
