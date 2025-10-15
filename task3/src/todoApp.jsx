import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './todos';

function TodoApp() {
  const [input, setInput] = useState('');
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Redux To-Do App</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul >
        {tasks.map(task => (
          <li key={task.id} >
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))} style={{ marginLeft: 10 }}>
                DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
