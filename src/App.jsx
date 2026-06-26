import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <main className='conteudo-principal'>
          <Routes>
            <Route path='/' element={<Work />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;