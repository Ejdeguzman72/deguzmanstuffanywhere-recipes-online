import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand className="brand-name" href="/">DSA Recipes Online</Navbar.Brand>
          <Nav className="me-auto">
            
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;