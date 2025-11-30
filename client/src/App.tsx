import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Favourites from './pages/Saved';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/favourites' element={<Favourites />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
