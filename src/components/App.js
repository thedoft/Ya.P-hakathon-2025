import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';

function App() {
	const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);

	const openLoginPopup = () => {
		setIsLoginPopupOpen(true);
	}

	const closeAllPopups = () => {
		setIsLoginPopupOpen(false);
	}

	function handleEscapeClose(evt) {
    evt.key === 'Escape' && closeAllPopups();
	}

	function handleLayoutClick(popup) {
    popup.addEventListener('mousedown', evt => {
      evt.target === evt.currentTarget && closeAllPopups();
    })
  }

  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/yap-hackathon-2025' : '/'}>
      <Header
        onOpen={openLoginPopup}
        isOpen={isLoginPopupOpen}
			/>
      <Main />
      <Footer />
			<Login
        isOpen={isLoginPopupOpen}
				onClose={closeAllPopups}
				onLayout={handleLayoutClick}
				onEscape={handleEscapeClose}
			/>
    </BrowserRouter>
  );
}

export default App;
