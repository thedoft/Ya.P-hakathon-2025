import React from 'react';
import Select, { components } from 'react-select';

import { useInput } from '../hooks/useInput';

import Button from './Button';

import img from '../images/card-img-big.png';
import caretDown from '../images/caretDown.svg';

export default function Form(props) {
  const selectOptions = [
    { value : 'Транспорт', label : 'Транспорт' },
    { value : 'Жилье', label : 'Жилье' },
    { value : 'Освещение', label : 'Освещение' },
    { value : 'Отопление', label : 'Отопление' },
    { value : 'Мусор', label : 'Мусор' },
  ];

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={caretDown} alt="caretDown" />
      </components.DropdownIndicator>
    )
  }

  const selectStyles = {
    singleValue: (provided) => ({
      ...provided,
      color: '#000'
    }),
    menu:(provided) => ({
      ...provided,
      zIndex: 2
    }),
    container: (provided) => ({
      ...provided,
      width: '100%',
      marginBottom: 9,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#c4c4c4',
      minHeight: 56,
      borderRadius: 15,
      boxShadow: state.isFocused ? '#7F9E81 0 0 0 1px' : 'none',
      borderColor: state.isFocused ? '#7F9E81' : '#c4c4c4',
      opacity: .6,
      '&:hover' : {
        boxShadow: state.isFocused && '#7F9E81 0 0 0 1px',
        borderColor: state.isFocused && '#7F9E81',
      }
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#000',
      opacity: .4
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 24,
    }),
		indicatorContainer: (provided) => ({
			...provided,
			backgroundColor: '#7F9E81'
    }),
  }

  const [checked, setChecked] = React.useState('gov');
  const [selectValue, setSelectValue] = React.useState('');
  
  const { value: address, bind: bindAddress, reset: resetAddress } = useInput('');
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
  const { value: text, bind: bindText, reset: resetText } = useInput('');


  function handleRadioChange(evt) {
    setChecked(evt.target.value);
  }

  function HandleSelectChange(inputValue) {
    setSelectValue(inputValue);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const card = {
      img: img,
      theme: selectValue.value,
      address,
      title,
      text,
      status: 'В работе'
    };

    props.onSubmit(card);

    resetAddress('');
    setSelectValue('');
    resetTitle('');
    resetText('');
  }

  return (
    <form className="form" action="#" onSubmit={handleSubmit} id="form">
      <label className="form__label" htmlFor="address">Адрес, где необходимо провести работу по обращению<span className="form__require-accent">*</span></label>
      <input {...bindAddress} id="#address" className="form__input form__input_type_text" placeholder="Введите адрес" required />

      <label className="form__label" htmlFor="title">Тема обращения<span className="form__require-accent">*</span></label>
      <Select id="title"
        components={{ DropdownIndicator }}
        styles={selectStyles}
        options={selectOptions}
        placeholder='Выберите тип обращения'
        value={selectValue}
        onChange={HandleSelectChange}
        required />

      <label className="form__label" htmlFor="title">Название обращение<span className="form__require-accent">*</span></label>
      <input {...bindTitle} id="#title" className="form__input form__input_type_text" placeholder="Введите название обращения" required />

      <label className="form__label" htmlFor="text">Текст обращения<span className="form__require-accent">*</span></label>
      <textarea id="text" className="form__input form__input_type_textarea"
        rows='5'
        placeholder="Введите текст обращения.
Пожалуйста, придерживайтесь правила 1 обращение — 1 идея.
В противном случае обращение будет отклонено."
        {...bindText}
        required
      />

      <div className="form__file-container">
        <div className="form__file-button">
          <label htmlFor="file" className="form__label form__label_type_file">Добавить файл</label>
          <input type="file" className="form__input form__input_type_file" id="file" />
        </div>
        <p className="form__file-text">Можно добавить до 5 файлов. Общий объем не более 1 Гб</p>
      </div>

      <p className="form__text">Кому направлено обращение?<span className="form__require-accent">*</span></p>

      <div className="form__radio-container">
        <input className="form__input form__input_type_radio" type="radio" name="where" id="gov" value="gov" checked={checked === 'gov'} onChange={handleRadioChange} />
        <label className="form__label form__label_type_radio" htmlFor="gov">Ведомству</label>
        <input className="form__input form__input_type_radio" type="radio" name="where" id="people" value="people" checked={checked === 'people'} onChange={handleRadioChange} />
        <label className="form__label form__label_type_radio" htmlFor="people">Людям</label>
      </div>

      <Button type="submit" class="form__submit-button" text="Создать обращение" />
    </form>
  )
}
