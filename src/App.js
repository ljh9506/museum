import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Studio from './pages/Studio';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <Route path='/' component={Home} exact />
        <Route path='/studio' component={Studio} exact />
        <Route path='/studio/:id' component={Detail} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
