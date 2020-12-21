import React from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

import Logo from './Logo';
import Button from './Button';

export default function Header(props) {

	const options =[
		{ value : 'Москва', label : 'Москва' },
		{ value : 'Санкт-Петербург', label : 'Санкт-Петербург'}
	];

	const customStyles = {
    container: (provided) => ({
      ...provided,
      minWidth: 150
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#7F9E81',
      opacity: .7,
			maxHeight: 30,
			border : 0,
			color: '#000',
			width: 138
		}),

		indicatorSeparator: (provided) => ({
			...provided,
			backgroundColor: '#7F9E81'
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

  return (
    <header className="header">
			<div className="header__wraper">
				<Logo />
				<div className="location">
					<Select id="title"
						styles={customStyles}
						options={options}
						placeholder='Ваш город'
						required />
				</div>

				<div className="search">
					<input type="text" className="header__input" placeholder="Поиск" />
					<button className="search__button" aria-label="Поиск" type="button"></button>
				</div>

				<nav className="header__nav">
					<ul className="menu-list menu-list_logout">
						<li className="menu-list__item">
							<NavLink exact to="/" className="menu-list__link" activeClassName="menu-list_current">Главная</NavLink>
						</li>
						<li className="menu-list__item">
							<NavLink to="/initiatives" className="menu-list__link" activeClassName="menu-list_current">Обращения</NavLink>
						</li>
						<li className="menu-list__item">
							<NavLink to="/news" className="menu-list__link" activeClassName="menu-list_current">Новости</NavLink>
						</li>
					</ul>
				</nav>

				<div className="header__sign-wrapper">
          <Button type="button" class="header__sign-button" onClick={props.isOpenPopupLogin} text="Войти" />
					<a href="####" className="header__sign-link">Зарегистрироваться</a>
				</div>
			</div>
    </header>
  )
}
