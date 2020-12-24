import React from 'react';

export default function Popup(props) {
  const popup = React.useRef();

	const handleClose = () => {
		props.onClose();
	}

  const handleLayoutClick = () => {
    props.onLayout(popup.current);
  }

	React.useEffect(() => {
    props.isOpen && document.addEventListener('keyup', props.onEscape);

    return () => {
      document.removeEventListener('keyup', props.onEscape);
    };
  }, [props]);


	return (
		<div ref={popup} className={`popup ${props.isOpen ? 'popup_visible' : ''}`} onClick={handleLayoutClick} >
			<div className="popup__block">
				<button className="button button_type_close" aria-label="Закрыть" type="button" onClick={handleClose}></button>
				{props.children}
			</div>
		</div>
	)
}
