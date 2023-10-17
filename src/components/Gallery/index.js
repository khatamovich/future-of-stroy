import StyledGallery, { Content, Images, ImageWrapper } from "./Gallery.styled";
import { useState, useEffect } from "react";
//importing necessary components
import Section from "../Section";

//Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

//React icons
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [slicedImages, setSlicedImages] = useState([]);
  const [visible, setVisible] = useState(8);

  const loadMoreImages = () => {
    if (visible === images.length - 1) return;

    setVisible((prevState) => prevState + images.length);
  };

  const loadLessImages = () => setVisible((prevState) => (prevState = 8));

  useEffect(() => {
    setSlicedImages(images?.slice(0, visible));
  }, [images, visible]);

  const renderImages = (images) => {
    return images.map(({ id, src }, index) => (
      <ImageWrapper
        onClick={() => setCurrentImageIndex(index)}
        key={`image-${id}`}
      >
        <img src={src} alt={`pic-${id}`} />
      </ImageWrapper>
    ));
  };

  return (
    <StyledGallery className={"gallery"}>
      <Section>
        <Content>
          <h2>Фотография наших работ</h2>

          <p>
            Предстаавляем вам фотографии наших работ для ознакомления. В случай
            заинтересованности оставьте заявку на сайте или позвоните нам для
            обсуждения ваших проектов.
          </p>

          <Images>{renderImages(slicedImages)}</Images>

          <button
            className="images-count-controller"
            onClick={visible >= images.length ? loadLessImages : loadMoreImages}
          >
            {visible >= images.length ? (
              <MdExpandLess title="Показать меньше фотографии" />
            ) : (
              <MdExpandMore title="Показать все фотографии" />
            )}
          </button>
        </Content>
      </Section>

      <Lightbox
        open={currentImageIndex >= 0}
        close={() => setCurrentImageIndex(-1)}
        slides={images}
        index={currentImageIndex}
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </StyledGallery>
  );
};

export default Gallery;
