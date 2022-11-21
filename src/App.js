import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
