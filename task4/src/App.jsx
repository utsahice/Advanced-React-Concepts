import { React } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarClass from './navbar';
import CardDemo from './card';


function App() {

  return (
    <>
    <Router>
      <NavbarClass/>
      <Routes>
          <Route path="/" element={<CardDemo />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
