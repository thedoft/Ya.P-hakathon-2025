import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Forms from './components/Forms';


function App() {
	const [isOpenPopupLogin, setIsOpenPopupLogin] = React.useState(false);
	const [isOpenPopupRegistration, setIsOpenPopupRegistration] = React.useState(false);
	
	const openPopupMeth = () => {
		setIsOpenPopupLogin(true);
	}

	const closeAllPopups = () => {
		setIsOpenPopupLogin(false);
		setIsOpenPopupRegistration(false);
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
    <>
      <Header 
				isOpenPopupLogin = {openPopupMeth}
				isOpenLogin = {isOpenPopupLogin}
			/>
      <Main />
      <Footer />
			<Forms 
				isClosePopupLogin = {closeAllPopups}
				isOpenLogin = {isOpenPopupLogin}
				onLayout={handleLayoutClick}
				onEscape={handleEscapeClose}
			/>
    </>
  );
}

export default App;
