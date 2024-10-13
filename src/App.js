import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './pages/main';
import Categories from './pages/categories';
import Category from './pages/category';
import Footer from './components/footer';
import { fetchCategories } from './redux/thunks';
import { fetchProducts } from './redux/thunks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
