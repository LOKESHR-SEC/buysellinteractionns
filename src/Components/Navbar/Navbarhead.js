import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbarhead = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Events</Nav.Link>
                        <Nav.Link href="#pricing">Gallery</Nav.Link>
                        <NavDropdown title="Supporters" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Exhibitors (Past & Present)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Supporting Associations
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Supporting Media
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Portfolio</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbarhead;