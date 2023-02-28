import Carousel from 'react-bootstrap/Carousel';
import { Component } from 'react';
import bannerImgComputer from '../../assets/banner1.jpg';
import bannerImgPhone from '../../assets/banner2.jpg';
import bannerImgIphone from '../../assets/banner3.jpg';

class Banners extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item style={{ height: '650px' }}>
            <img
              className="d-block w-100"
              src={bannerImgComputer}
              alt="Computer"
            />
            <Carousel.Caption>
              <h3>Інтернет-магазин цифрових товарів</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '600px' }}>
            <img
              src={bannerImgPhone}
              alt="Computer"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Phone</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '600px' }}>
            <img
              className="d-block w-100"
              src={bannerImgComputer}
              alt="Computer"
            />
            <Carousel.Caption>
              <h3>Computer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '600px' }}>
            <img
              className="d-block w-100"
              src={bannerImgIphone}
              alt="Computer"
            />
            <Carousel.Caption>
              <h3>Phone</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Banners;
