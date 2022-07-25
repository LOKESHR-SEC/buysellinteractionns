import Button from 'react-bootstrap/Button';
const Furthercontent1 = () => {
    return(
    <div style={{ padding:"3em 10em",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        
        <div style={{display:"flex",alignItems:"center",gap:"2em"}}>
        <p>
        <h3 style={{textAlign:"left"}}>Further content</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </p>
        <img src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg" height="250px"/>
        </div>
        <Button variant="outline-primary" size="lg" style={{alignSelf:"center"}}>Learn more</Button>
        </div>
    );
}
export default Furthercontent1;