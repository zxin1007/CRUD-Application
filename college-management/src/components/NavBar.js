import { Navbar, Nav, Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Campus Listing</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/campuses">Campuses</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
