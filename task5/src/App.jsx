import { useState, useMemo, useCallback, memo } from 'react'

const Display = memo(function Display({ value }) {
  return <div>Value: {value}</div>
})

const IncrementButton = memo(function IncrementButton({ onClick }) {
  return <button onClick={onClick}>Increment</button>
})

export default function App() {
  const [count, setCount] = useState(0)

  const derived = useMemo(() => ({ doubled: count * 2 }), [count])

  const increment = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  return (
    <div>
      <h3>Memoization: button and text</h3>
      <IncrementButton onClick={increment} />
      <Display value={derived.doubled} />
    </div>
  )
}
