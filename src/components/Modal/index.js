import StyledModal, { Backdrop, Content, CloseButton } from "./Modal.styled";

//importing svg icons
import { CloseSVG } from "../../assets/svg/close-svg";

const Modal = ({ children, controller }) => {
  const { isOpen, handleOpen, handleClose } = controller;

  const handleCloseOnBackdrop = (event) => {
    const { target } = event;

    if (target.hasAttribute("data-video-src")) return;

    handleClose();
  };

  if (!isOpen) return null;

  return (
    <StyledModal>
      <Backdrop onClick={handleCloseOnBackdrop}>
        <Content>
          {children}

          <CloseButton onClick={handleOpen}>
            <CloseSVG />
          </CloseButton>
        </Content>
      </Backdrop>
    </StyledModal>
  );
};

export default Modal;
