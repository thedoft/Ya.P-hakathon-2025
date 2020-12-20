import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Forms from './components/Forms';

function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/yap-hackathon-2025' : '/'}>
      <Header />
      <Main />
      <Footer />
			<Forms />
    </BrowserRouter>
  );
}

export default App;
