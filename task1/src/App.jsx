import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import Home from './Home';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
