import Button from 'react-bootstrap/Button';
const Furthercontent2 = () => {
    return(
    <div style={{ padding:"3em 10em",display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:"#2660a4"}}>
        
        <div style={{display:"flex",alignItems:"center",gap:"2em"}}>
        <img src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg" height="250px"/>
        <p style={{color:"white"}}>
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