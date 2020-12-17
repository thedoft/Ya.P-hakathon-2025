import React from 'react';

export default function Form() {
  
  function handleSubmit(evt) {
    evt.preventDefault();
    alert('Ваше обращение отправлено!');
  }

  return (
    <form className="form" action="#" onSubmit={handleSubmit}>
      <input className="form__input" placeholder="Введите адрес" required />

      <select className="form__select">
        <option value="">Введите название обращения</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <textarea className="form__textarea"
        placeholder="Введите название обращения
          Пожалуйста, придерживайтесь правила 1 обращение — 1 идея.
          В противном случае обращение будет отклонено"
        required
      />

      <div className="form__file-container">
        <button className="form__file-button" type="button">Добавить файл</button>
        <p className="form__file-text">Можно добавить до 5 файлов. Общий объем не более 1 Гб</p>
      </div>

      <p className="form__text">Кому направлено обращение?</p>

      <div className="form__radio-container">
        <input className="form__radio" type="radio" name="where" id="gov" checked />
        <label for="gov">Ведомству</label>
        <input className="form__radio" type="radio" name="where" id="people" />
        <label for="people">Людям</label>
      </div>

      <button className="form__submit-button">Создать обращение</button>
    </form>
  )
}
