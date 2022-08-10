import i1 from "../../image/nprintech.jpg"
const Furthercontent1 = ({content,image}) => {
    return(
    <div  className="Furthercontent1">
        
        <div className="container">
        <p style={{textAlign:"left"}}>
        <h3 style={{textAlign:"left"}}>Testimonials</h3>
        What Exhibitor's Said... <br></br>
        <br></br>
        {content}
        <br></br>
        <br></br>
        </p>
        {/* <img src={image} height="250px"/> */}
        </div>
        </div>
    );
}
export default Furthercontent1;