import StyledServices, {
  Content,
  ListOfServices,
  Service,
} from "./Services.styled";

//importing necessary components
import Section from "../Section";

//importing images
import SimpleRoom from "../../assets/images/site/simple-room.jpg";
import EuroStyleRoom from "../../assets/images/site/euro-style-room.jpg";
import HiTechRoom from "../../assets/images/site/hi-tech-room.jpg";

const Services = () => {
  return (
    <StyledServices className={"services"}>
      <Section>
        <Content>
          <header>
            <h2>Виды услуг и их стоимость</h2>
            <p>
              Качественный, профессиональный ремонт квартир, офисов, магазинов и
              ТД любой сложности. Создаем дизайнерские проекты на ремонт, весь
              спектр ремонтных работ в новостройках.
            </p>
          </header>

          <ListOfServices>
            <Service>
              <img src={SimpleRoom} alt="Картинка обычного ремонта" />

              <div className="service-body">
                <h3>Стандартный ремонт</h3>
                <p>
                  Качественный, профессиональный ремонт квартир, офисов,
                  магазинов и ТД любой сложности. Создаем дизайнерские проекты
                  на ремонт, весь спектр ремонтных работ в новостройках.
                </p>

                <div className="price-container">
                  от <span className="price">$100.00</span>
                </div>

                <span className="service-body__number">01</span>
              </div>
            </Service>

            <Service>
              <img src={EuroStyleRoom} alt="Картинка обычного ремонта" />

              <div className="service-body">
                <h3>Евро ремонт</h3>
                <p>
                  Качественный, профессиональный ремонт квартир, офисов,
                  магазинов и ТД любой сложности. Создаем дизайнерские проекты
                  на ремонт, весь спектр ремонтных работ в новостройках.
                </p>

                <div className="price-container">
                  от <span className="price">$100.00</span>
                </div>

                <span className="service-body__number">02</span>
              </div>
            </Service>

            <Service>
              <img src={HiTechRoom} alt="Картинка обычного ремонта" />

              <div className="service-body">
                <h3>Ремонт в стиле Hi Tech</h3>
                <p>
                  Качественный, профессиональный ремонт квартир, офисов,
                  магазинов и ТД любой сложности. Создаем дизайнерские проекты
                  на ремонт, весь спектр ремонтных работ в новостройках.
                </p>

                <div className="price-container">
                  от <span className="price">$100.00</span>
                </div>

                <span className="service-body__number">03</span>
              </div>
            </Service>
          </ListOfServices>
        </Content>
      </Section>
    </StyledServices>
  );
};

export default Services;
