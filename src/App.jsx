import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './routes';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header setSearchQuery={setSearchQuery} /> { }
      <Router searchQuery={searchQuery} /> { }
      <Footer />
    </>
  );
}

export default App;
