import Button from 'react-bootstrap/Button';
import i1 from "../../image/nprintech.jpg"
const Furthercontent1 = () => {
    return(
    <div  className="Furthercontent1">
        
        <div className="container">
        <p style={{textAlign:"left"}}>
        <h3 style={{textAlign:"left"}}>Testimonials</h3>
        What Exhibitor's Said... <br></br>
        <br></br>
        Panasonic is launching a new Video Camera in November this year in India. We are using this show to create awareness about our new model. Good Show!
        <br></br>Hiramori , PANASONIC INDIA PVT LTD
        <br></br>
        <br></br>

        We are in the video and broadcast market. Great potential in India as people are migrating to HD. Overwhelming response at Broadcast Today. Overall its been a great show
        <br></br>Johnny Ng, CANON SINGAPORE PTE LTD
        <br></br>
        <br></br>
        The Image Today expo organized by Buysell is the biggest exhibition ever to be held in Sri Lanka for the photo & digital imaging industry. As a leader in the photo industry, we are happy to be the Golden Sponsors for the sixth consecutive year. We find it to be a very successful event.
        <br></br>S. Nimal, HAYLEYS � FUJIFILM, Sri Lanka
        </p>
        <img src={i1} height="250px"/>
        </div>
        <Button variant="outline-primary" size="lg" style={{alignSelf:"center"}}>Learn more</Button>
        </div>
    );
}
export default Furthercontent1;