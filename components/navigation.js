import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'next'

export default function Navigation() {
    return (
    <Navbar expand="xl">
    <Navbar.Brand href="/">cupofjoe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <NavDropdown title="Drinks" as={Link} to="/drinks" id="basic-nav-dropdown">
            <NavDropdown.Item href="/drinks/#espresso">Espresso</NavDropdown.Item>
            <NavDropdown.Item href="/drinks/#pourover">Pour Over</NavDropdown.Item>
            <NavDropdown.Item href="/drinks/#others">Others</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Beans" id="basic-nav-dropdown">
            <NavDropdown.Item href="/beans/#arabica">Arabica</NavDropdown.Item>
            <NavDropdown.Item href="/beans/#robusta">Robusta</NavDropdown.Item>
            <NavDropdown.Item href="/beans/#liberica">Liberica</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Tools" id="basic-nav-dropdown">
            <NavDropdown.Item href="/tools/#grinders">Grinders</NavDropdown.Item>
            <NavDropdown.Item href="/tools/#filters">Filters</NavDropdown.Item>
            <NavDropdown.Item href="/tools/#cups">Cups</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/about" className="nav-link-right">About</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
}