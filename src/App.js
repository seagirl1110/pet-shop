import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './pages/main';
import Categories from './pages/categories';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
