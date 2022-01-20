import './App.css'
import AppNavbar from '../App-Navbar/App-Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TodoList from '../TodoList/TodoList'
import { useState, useEffect } from 'react'

function App() {
  const [liste, setListe] = useState([])
  const [search, setSearch] = useState('')

  let displayListe = liste.map((todoInfos, indice) => {
    const id = todoInfos.id
    return (
      <Col md={4} key={'todo-' + id}>
        <TodoList
          todoInfos={todoInfos}
          search={search}
          liste={liste}
          setListe={setListe}
        />
        <div className="d-grid gap-2 mt-5">
          <Button
            variant="outline-danger"
            size="lg"
            onClick={() => deleteListItem(indice)}
          >
            Supprimer la liste
          </Button>
        </div>
      </Col>
    )
  })

  function add() {
    let titre = window.prompt("Veuillez saisir l'intitulé de votre TodoList")
    if (titre !== null && titre.trim().length > 0) {
      let tmp = [...liste]
      let id = Date.now()
      let obj = { id, titre, todos: [] }
      tmp.push(obj)
      setListe(tmp)
    }
  }

  function deleteListItem(i) {
    let tmp = [...liste]
    tmp.splice(i, 1)
    setListe(tmp)
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
