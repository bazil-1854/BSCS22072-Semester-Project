import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; 

function App() {
  const [category, setCategory] = useState('');
  return (
    <Router>
      <Navbar setCategory={setCategory} />
      <Home category={category} />
    </Router>
  );
}

export default App;
