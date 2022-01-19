import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import Titre from '../Titre/Titre'

export default function TodoList(props) {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])

  let displayTodos = todos.map((item, indice) => {
    return <ListGroup.Item key={indice}>{item}</ListGroup.Item>
  })

  function add() {
    let todo = inputTodo.trim()
    if (todo.length === 0) return null

    let tmp = [...todos]
    tmp.push(todo)
    setTodos(tmp)
    setInputTodo('')
    return null
  }

  return (
    <div className="mb-4">
      <Titre text={props.titre} />
      <form
        onSubmit={e => {
          e.preventDefault()
          add()
        }}
      >
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Saisir une tache"
            value={inputTodo}
            onChange={e => setInputTodo(e.target.value)}
            required
          />
          <Button variant="primary" onClick={add}>
            Ajouter
          </Button>
        </InputGroup>
      </form>

      <ListGroup variant="flush">{displayTodos}</ListGroup>
      {todos.length > 0 && (
        <Button
          className="btn-sm"
          variant="danger"
          onClick={() => setTodos([])}
        >
          Tout supprimer
        </Button>
      )}
    </div>
  )
}
