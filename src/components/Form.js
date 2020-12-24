import React from 'react';
import Select from 'react-select';

import Button from './Button';

import img from '../images/card-img-big.png';

export default function Form(props) {
  const selectOptions = [
    { value : 'Название 1', label : 'Название 1' },
    { value : 'Название 2', label : 'Название 2' }
  ];

  const customStyles = {
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
      marginBottom: 36,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#c4c4c4',
      opacity: .6,
      minHeight: 56,
      borderRadius: 15,
      boxShadow: state.isFocused ? '#7F9E81 0 0 0 1px' : 'none',
      borderColor: state.isFocused ? '#7F9E81' : '#c4c4c4',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#000',
      opacity: .4
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 24
    })
  }

  const [checked, setChecked] = React.useState('gov');
  const [address, setAddress] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const [text, setText] = React.useState('');

  function handleRadioChange(evt) {
    setChecked(evt.target.value);
  }

  function handleAddressChange(evt) {
    setAddress(evt.target.value);
  }

  function HandleSelectChange(inputValue) {
    setSelectValue(inputValue);
  }

  function handleTextChange(evt) {
    setText(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const card = {
      img: img,
      title: selectValue.value,
      text,
      address,
    };

    props.onSubmit(card);

    setAddress('');
    setSelectValue('');
    setText('');
  }

  return (
    <form className="form" action="#" onSubmit={handleSubmit} id="form">
      <label className="form__label" htmlFor="address">Адрес, где необходимо реализовать обращение<span className="form__require-accent">*</span></label>
      <input value={address} onChange={handleAddressChange} id="#address" className="form__input form__input_type_text" placeholder="Введите адрес" required />

      <label className="form__label" htmlFor="title">Тема обращения<span className="form__require-accent">*</span></label>
      <Select id="title"
        styles={customStyles}
        options={selectOptions}
        placeholder='Выберите тип обращения'
        value={selectValue}
        onChange={HandleSelectChange}
        required />

      <label className="form__label" htmlFor="text">Текст обращения<span className="form__require-accent">*</span></label>
      <textarea id="text" className="form__input form__input_type_textarea"
        rows='5'
        placeholder="Введите текст обращения.
Пожалуйста, придерживайтесь правила 1 обращение — 1 идея.
В противном случае обращение будет отклонено."
        value={text}
        onChange={handleTextChange}
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
