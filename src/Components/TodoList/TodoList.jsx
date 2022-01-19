import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Titre from '../Titre/Titre'

export default function TodoList(props) {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [todosFilter, setTodosFilter] = useState([])
  const search = props.search

  let displayTodos = todosFilter.map((item, indice) => {
    return <ListGroup.Item key={indice}>{item}</ListGroup.Item>
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
