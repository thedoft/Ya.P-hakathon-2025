import React from 'react';
import Select from 'react-select';


export default function Header() {

	const options =[
		{ value : 'Москва', label : 'Москва' },
		{ value : 'Санкт-Петербург', label : 'Санкт-Петербург'}
	];

	const customStyles = {
    option: (provided) => ({
      ...provided,
    }),
    container: (provided) => ({
      ...provided,
      minWidth: 150
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#c4c4c4',
      opacity: .7,
			maxHeight: 30,
			border : 0,
			color: '#000',
			width: 138
		}),

		indicatorContainer: (provided) => ({
			...provided,
			fill : 'black',
		}),
		

		singleValue: (provided) => ({
			...provided,
			color : '#000',
			textOverflow : 'ellipsis',
			whiteSpace : 'nowrap',
			overflow : 'hidden'
		}),

    placeholder: (provided) => ({
      ...provided,
			opacity: .4,
			color : '#000',
			textOverflow : 'ellipsis',
			whiteSpace : 'nowrap',
			overflow : 'hidden'
    })
  }

  function handleClick() {
    alert('Здесь будет форма авторизации');
  }

  return (
    <header className="header">
			<div className="header__wraper">
				<img src="/static/media/logo.daf1334c.svg" alt="#" className="logo" />
				<div className="location">
					<Select id="title"
						styles={customStyles}
						options={options}
						placeholder='- Ваш город -'
						required />
				</div>

				<div class="search">
					<input type="text" className="header__input" placeholder="Поиск" />
					<button class="search__button" aria-label="Поиск" type="button"></button>
				</div>

				<nav className="header__nav">
					<ul className="menu-list menu-list_logout">
						<li className="menu-list__item">
							<a href="/" className="menu-list__link menu-list_current">Главная</a>
						</li>
						<li className="menu-list__item">
							<a href="#ask" className="menu-list__link">Обращения</a>
						</li>
						<li className="menu-list__item">
							<a href="#news" className="menu-list__link">Новости</a>
						</li>						
					</ul>
				</nav>

				<div className="header__sign-wrapper">
					<button type="button" className="header__sign-button" onClick={handleClick}>Войти</button>
					<a href="####" className="header__sign-link">Зарегистрироваться</a>
				</div>
			</div>
    </header>
  )
}
