import Carousel from 'react-bootstrap/Carousel';

function Corosel() {

  return (
    <>
    <style type="text/css">
    {`
    .d-block{
        width:650px;
  height:700px;
    } 


    `}
    </style>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/6.jpg"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/7.jpg"
          alt="Third slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/8.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fifth  slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Corosel;