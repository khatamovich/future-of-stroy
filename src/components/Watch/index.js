import StyledWatch, {
  Content,
  VideoContainer,
  Main,
  Icon,
} from "./Watch.styled";

import { useState } from "react";

//importing necessary components
import Section from "../Section";
import Modal from "../Modal";

//importing images
import VideoPoster from "../../assets/images/site/hi-tech-room.jpg";

//importing svg icons
import { PlaySVG } from "../../assets/svg/play-icon-svg";
import constructionVideo from "../../assets/videos/construction.mp4";

const Watch = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <StyledWatch>
      <Section>
        <Content>
          <VideoContainer>
            <img src={VideoPoster} alt="Постер для видео" />
            <Icon onClick={handleOpenModal}>
              <PlaySVG />
            </Icon>
          </VideoContainer>

          <Main>
            <h2>Посмотрите видео нашей работы</h2>
          </Main>
        </Content>
      </Section>

      <Modal
        controller={{
          isOpen: isModalOpen,
          handleOpen: handleOpenModal,
          handleClose: handleCloseModal,
        }}
      >
        <video controls data-video-src="true">
          <source src={constructionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </StyledWatch>
  );
};

export default Watch;
