import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <section className="slider container mb-3">
      <Carousel>
        <Carousel.Item className="slide">
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/curso-react-flex.appspot.com/o/silider%2Fslider1.jpg?alt=media&token=89a7f9c3-db1a-4175-b3d4-8f247d889caf"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/curso-react-flex.appspot.com/o/silider%2Fslider2.jpg?alt=media&token=1319dbf3-f7b6-4810-b88e-9ff2df8198a6"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/curso-react-flex.appspot.com/o/silider%2Fslider3.jpg?alt=media&token=4aaa003f-5fe8-41a3-b0f9-38cbc4471e2f"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
