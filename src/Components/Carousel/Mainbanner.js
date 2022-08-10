import Carousel from 'react-bootstrap/Carousel';
import imgg1 from "../../image/canon-tamron.png"
import imgg2 from "../../image/colo-sony.png"
import imgg3 from "../../image/DNP.png"
import imgg4 from "../../image/nippon-godax.png"
import imgg5 from "../../image/sigma-pooja.png"
function Mainbanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={imgg1} className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgg2} className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgg3} className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgg4} className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgg5} className="d-block w-100"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mainbanner;