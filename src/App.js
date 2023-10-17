
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DrawerComponent from './components/common/drawer';
export default function App() {
  return (
    <>
      <Router>
        <DrawerComponent />
      </Router>
    </>
  )
}