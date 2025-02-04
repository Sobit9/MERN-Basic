import { Container, Nav, Navbar, NavbarBrand} from "react-bootstrap"

const Header = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
           <NavbarBrand href='#'>Bootstrap
           </NavbarBrand>
           <Navbar.Toggle />
           <Navbar.Collapse />
           <Nav className="ms-auto">
           <Nav.Link href='#'>Home</Nav.Link>
           </Nav>
           </Container>
    </Navbar>
  )
};

export default Header;
