import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
