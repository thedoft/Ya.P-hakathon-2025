import React from 'react';
import Select from 'react-select';

export default function Form() {
  const options = [
    { value : 'Название 1', label : 'Название 1' },
    { value : 'Название 2', label : 'Название 2' }
  ];

  const customStyles = {
    option: (provided) => ({
      ...provided,
    }),
    container: (provided) => ({
      ...provided,
      width: '100%',
      marginBottom: 36,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#c4c4c4',
      opacity: .6,
      minHeight: 56,
      borderRadius: 15
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#000',
      opacity: .4
    })
  }

  const [checked, setChecked] = React.useState('gov');

  function handleChange(evt) {
    setChecked(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    alert('Ваше обращение отправлено!');
  }

  return (
    <form className="form" action="#" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="address">Адрес обращения<span className="form__require-accent">*</span></label>
      <input id="#address" className="form__input form__input_type_text" placeholder="Введите адрес" required />

      <label className="form__label" htmlFor="title">Тема обращения<span className="form__require-accent">*</span></label>
      <Select id="title"
        styles={customStyles}
        options={options}
        placeholder='Выберите тип обращения'
        required />

      <label className="form__label" htmlFor="text">Текст обращения<span className="form__require-accent">*</span></label>
      <textarea id="text" className="form__input form__input_type_textarea"
        rows='5'
        placeholder="Введите текст обращения.
Пожалуйста, придерживайтесь правила 1 обращение — 1 идея.
В противном случае обращение будет отклонено."
        required
      />

      <div className="form__file-container">
        <button className="form__file-button" type="button">Добавить файл</button>
        <p className="form__file-text">Можно добавить до 5 файлов. Общий объем не более 1 Гб</p>
      </div>

      <p className="form__text">Кому направлено обращение?<span className="form__require-accent">*</span></p>

      <div className="form__radio-container">
        <input className="form__input form__input_type_radio" type="radio" name="where" id="gov" value="gov" checked={checked === 'gov'} onChange={handleChange} />
        <label className="form__label form__label_type_radio" htmlFor="gov">Ведомству</label>
        <input className="form__input form__input_type_radio" type="radio" name="where" id="people" value="people" checked={checked === 'people'} onChange={handleChange} />
        <label className="form__label form__label_type_radio" htmlFor="people">Людям</label>
      </div>

      <button className="form__submit-button">Создать обращение</button>
    </form>
  )
}
