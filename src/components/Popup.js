import React from 'react';

export default function Popup(props) {

	const close = () => {
		props.isClosePopupLogin(false);
	}


	React.useEffect(() => {
    props.isOpenLogin && document.addEventListener('keyup', props.onEscape);

    return () => {
      document.removeEventListener('keyup', props.onEscape);
    };
  }, [props]);

	
	return (
		
		<div className={`popup ${props.isOpenLogin ? 'popup_visible' : ''}`} id={props.id}>
			<div className="popup__block">
				<button className="button button_type_close" aria-label="Закрыть" type="button" onClick={close}></button>
				{props.form(props.id)}
			</div>
		</div>
	)
}
