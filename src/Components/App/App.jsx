import './App.css'
import AppNavbar from '../App-Navbar/App-Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TodoList from '../TodoList/TodoList'
import { useState } from 'react'

function App() {
  const [liste, setListe] = useState([])
  const [search, setSearch] = useState('Va chercher')

  let displayListe = liste.map((item, indice) => {
    return (
      <Col md={4} key={indice}>
        <TodoList titre={item} />
      </Col>
    )
  })

  function add() {
    let titre = window.prompt("Veuillez saisir l'intitulé de votre TodoList")
    if (titre !== null && titre.trim().length > 0) {
      let tmp = [...liste]
      tmp.push(titre)
      setListe(tmp)
    }
  }

  return (
    <div className="App">
      <header className="mb-5">
        <AppNavbar search={search} setSearch={setSearch}></AppNavbar>
      </header>

      <main>
        <Container>
          <Row className="mb-4">
            <Col>
              <Button onClick={add}>Créer une nouvelle liste</Button>
            </Col>
          </Row>

          <Row>{displayListe}</Row>
        </Container>
      </main>
    </div>
  )
}
export default App
