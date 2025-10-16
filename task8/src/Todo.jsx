import { useState } from 'react'

export default function Todo() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const add = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    setItems((prev) => [...prev, trimmed])
    setText('')
  }

  return (
    <div>
      <h2 data-testid="title">My To-Do List</h2>
      <input data-testid="todo-input" aria-label="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button data-testid="add-button" onClick={add}>Add</button>
      <ul>
        {items.map((t, i) => (
          <li key={`${t}-${i}`} data-testid="task">{t}</li>
        ))}
      </ul>
    </div>
  )
}


