import './App.css'
import AppNavbar from '../App-Navbar/App-Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import Titre from '../Titre/Titre'
import TodoList from '../TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <header className="mb-5">
        <AppNavbar></AppNavbar>
      </header>

      <main>
        <Container>
          <Row>
            <Col>
              <Titre text="Application TodoList" />
              <TodoList />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
export default App
