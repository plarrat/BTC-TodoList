import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

export default function AppNavbar(props) {
  const setSearch = props.setSearch
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">App-Todo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Rechercher une todo"
              className="me-2"
              value={props.search}
              onChange={e => {
                setSearch(e.target.value)
              }}
            />
            <Button variant="secondary">Rehercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
