import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Titre from '../Titre/Titre'

export default function TodoList(props) {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [todosFilter, setTodosFilter] = useState([])
  const search = props.search

  let displayTodos = todosFilter.map((item, indice) => {
    return (
      <ListGroup.Item key={indice}>
        {item}
        <Button
          className="btn btn-sm float-end"
          variant="outline-danger"
          onClick={() => deleteTodo(item)}
        >
          Supprimer
        </Button>
      </ListGroup.Item>
    )
  })

  useEffect(() => {
    setTodosFilter(todos)
    if (search.length > 0) {
      let lowerSearch = search.toLowerCase()
      let res = todos.filter(item => {
        let lowerItem = item.toLowerCase()
        if (lowerItem.indexOf(lowerSearch) > -1) return item
        return null
      })
      setTodosFilter(res)
    }
  }, [search, todos])

  function add() {
    let todo = inputTodo.trim()
    if (todo.length === 0) return null

    let tmp = [...todos]
    tmp.push(todo)
    setTodos(tmp)
    setInputTodo('')
    return null
  }

  function deleteTodo(todo) {
    let tmp = [...todos]
    let i = todos.indexOf(todo)
    if (i > -1) {
      tmp.splice(i, 1)
      setTodos(tmp)
    }
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
          className="btn-sm float-start"
          variant="outline-secondary"
          onClick={() => setTodos([])}
        >
          Tout effacer
        </Button>
      )}
    </div>
  )
}
