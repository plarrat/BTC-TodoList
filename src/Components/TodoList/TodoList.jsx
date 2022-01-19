import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import { useState } from 'react'

export default function TodoList() {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])

  let displayTodos = todos.map(item => {
    return <ListGroup.Item>{item}</ListGroup.Item>
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
    <>
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
        <Button variant="danger" onClick={() => setTodos([])}>
          Tout supprimer
        </Button>
      )}
    </>
  )
}
