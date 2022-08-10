import{ Card,Button }from 'react-bootstrap';
import carrd1 from "../../image/image_todayasia.png"
import carrd2 from "../../image/phototodayindia.png"
import carrd3 from "../../image/nprintech.jpg"
import carrd4 from "../../image/Sign-today.jpg"
const Ourservices = () => {
    return (
        <div style={{backgroundColor:"#2660a4",padding:"3 em"}} className="servicecontainer">
            <h2 style={{ textAlign: "center",color:"white"}}>FORTHCOMING EVENTS</h2>
            <div className="servicesimages">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={carrd1} />
                    <Card.Body>
                        <Card.Title>Chennai Trade Centre</Card.Title>
                        <Card.Text>
                            At Chennai <br></br>
                            22, 23, 24 JULY 2022
                        </Card.Text>
                        <Button variant="primary">Register</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={carrd2} />
                    <Card.Body>
                        <Card.Title>Shagun Farms</Card.Title>
                        <Card.Text>
                            At Raipur, Chhattisgarh <br></br>
                            03, 04, 05 SEPTEMBER 2022
                        </Card.Text>
                        <Button variant="primary">Register</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={carrd3} />
                    <Card.Body>
                        <Card.Title>Chennai Trade Centre</Card.Title>
                        <Card.Text>
                            At Chennai <br></br>
                            11, 12, 13 NOVEMBER 2022
                        </Card.Text>
                        <Button variant="primary">Register</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={carrd4} />
                    <Card.Body>
                        <Card.Title>Chennai Trade Centre</Card.Title>
                        <Card.Text>
                            At Chennai <br></br>
                            11, 12, 13 NOVEMBER 2022
                        </Card.Text>
                        <Button variant="primary">Register</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Ourservices;