import Button from 'react-bootstrap/Button';
const Aboutus = () => {
    return (
        <div style={{ margin:"3em 10em",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        <h3>About Us</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </p>
        <Button variant="outline-primary" size="lg" style={{alignSelf:"center"}}>Learn more</Button>
        </div>
    );
}
export default Aboutus;