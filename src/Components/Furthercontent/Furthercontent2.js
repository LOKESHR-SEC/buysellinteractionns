import Button from 'react-bootstrap/Button';
import acl from "../../image/logo.jpg"
const Furthercontent2 = () => {
    return(
    <div className='Our Exhibitions'>
        
        <div className="container">
        <img src={acl} height="250px"/>
        <p style={{color:"white",textAlign:"right"}}>
        <h3 style={{textAlign:"right",color:"white"}}>Further content2</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </p>
        </div>
        <Button variant="outline-light" size="lg" style={{alignSelf:"center"}}>Learn more</Button>
        </div>
    );
}
export default Furthercontent2;