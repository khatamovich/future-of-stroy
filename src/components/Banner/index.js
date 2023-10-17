import StyledBanner, {
  Content,
  Row,
  Main,
  List,
  Icon,
  ScrollBottom,
} from "./Banner.styled";

// importing necessary components
import Section from "../Section";
import SignUp from "../SignUp";
import BusinessCard from "../BusinessCard";
import { Link as Scroll } from "react-scroll";

// importing svg icons
import { MeasureSVG } from "../../assets/svg/measure-svg";
import { HouseKeySVG } from "../../assets/svg/house-key-svg";
import { WarrantySVG } from "../../assets/svg/warranty-svg";
import { MouseSVG } from "../../assets/svg/mouse-svg";

const Banner = () => (
  <StyledBanner className="banner">
    <Section>
      <Content>
        <Main>
          <h1>
            Ремонт квартир
            <span>future of stroy</span>
          </h1>

          <p>
            Качественный, профессиональный ремонт квартир, офисов, магазинов и
            ТД любой сложности. Создаем дизайнерские проекты на ремонт, весь
            спектр ремонтных работ в новостройках под ключ. Капитальный ремонт
            вторички. Отделочные материалы по оптовым ценам.
          </p>

          <Scroll to={"gallery"} smooth={true} spy={true} role="button">
            Проделанные работы
          </Scroll>

          <Row>
            <List>
              <li>
                <Icon>
                  <MeasureSVG />
                </Icon>
                Бесплатный замер
              </li>
              <li>
                <Icon>
                  <HouseKeySVG />
                </Icon>
                Ремонт под ключ
              </li>
              <li>
                <Icon>
                  <WarrantySVG />
                </Icon>
                Гарантия качества
              </li>
            </List>

            <BusinessCard />
          </Row>
        </Main>

        <SignUp />
      </Content>
    </Section>

    <Scroll to={"about"} spy={true} smooth={true}>
      <ScrollBottom>
        <MouseSVG />
      </ScrollBottom>
    </Scroll>
  </StyledBanner>
);

export default Banner;
