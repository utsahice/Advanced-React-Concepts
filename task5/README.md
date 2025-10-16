## Task 5: React memo, useMemo, useCallback – Identify and avoid re-renders

This folder now contains a minimal app focused on memoization patterns to prevent unnecessary re-renders.

### Files
- `src/App.jsx`: Demo using `React.memo`, `useMemo`, and `useCallback`.
- `src/main.jsx`: Entry point.
- `src/App.css`: Minimal styles.

### Run
```bash
npm install
npm run dev
```

### Use React DevTools to identify re-renders
1. Install React DevTools extension.
2. Open DevTools → Components tab.
3. Toggle “Highlight updates when components render”.
4. Interact with the app:
   - Click “Increment parent counter”.
   - Toggle “Highlight even numbers”.

Expected with memoization:
- Incrementing the counter should NOT re-render `ExpensiveList` (props unchanged).
- Toggling the checkbox SHOULD re-render `ExpensiveList` (prop changed).
- `CounterButton` stays stable because it’s memoized and receives a stable callback.

### Why and when to optimize
- Optimize when profiling shows wasted renders or slow interactions.
- Use `React.memo` when output only depends on props.
- Use `useMemo` for derived arrays/objects/expensive computations to keep references stable.
- Use `useCallback` for callback props passed to memoized children.
- Measure first; memoization has overhead.