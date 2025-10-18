import Todo from './Todo.jsx'
import FormInput from './TextInput.jsx'
import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validate = (val) => {
    setError(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val) ? '' : 'Invalid email')
  }

  return (
    <div>
      <h2>Task 8</h2>
      <Todo />
      <hr />
      <FormInput
        label='Email'
        name='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          validate(e.target.value)
        }}
        onBlur={(e) => validate(e.target.value)}
        error={error}
      />
    </div>
  )
}
