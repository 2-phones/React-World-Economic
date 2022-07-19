import { Button,Navbar,Container,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping,faUser,faEarth } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  const navigate = useNavigate();

    return (
      <>
      <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Main</Navbar.Brand>
            <Nav.Link onClick={ () => {navigate('/contrylist')} }>Country List</Nav.Link>
            <Nav.Link onClick={ () => {navigate('/economy')} }>Economy</Nav.Link>
            <Nav className="me-auto">
            </Nav>
                <FontAwesomeIcon className="cartIcon" size='2x' icon={faUser} />
          </Container>
        </Navbar>
      </>
    )
  }


  export default Header;