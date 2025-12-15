import React, { Component } from "react";
import EmotionListItem from "./EmotionListItem";
import "../App.css";
 /**
  * 1) Добавить возможность удалять отдельную запись о настроении из дневника. У каждой записи в списке эмоций должна появиться кнопка «Удалить». 
 При нажатии на кнопку:
 запись удаляется из списка; 
 состояние приложения обновляется; 
 данные в localStorage также обновляются.
 Если список становится пустым - отображается сообщение: «Вы ещё не выбрали ни одной эмоции». 
  */
/**
 * 2) Добавить возможность писать текстовое описание к каждому настроению и редактировать его позже. 
При добавлении эмоции пользователь может ввести текст (например: «Хороший день, всё получилось»). Текст сохраняется вместе с эмоцией. У каждой записи должна быть кнопка «Редактировать».
При редактировании: текст можно изменить и изменения сохраняются в состоянии и localStorage.
 */

class EmotionList extends Component {
  render() {
    if (this.props.emotions.length === 0) {
      return <p>You haven't selected any emotions yet.</p>;//we already have this line
    }
 
    return (
      <div>
        <h2 className="emotion-list-title">Your emotion diary:</h2>
        <ul className="emotion-list">
          {this.props.emotions.map((item, index) => (
            <EmotionListItem 
            key={index} 
            index = {index} 
            emotion={item} 
            onDelete={this.props.onDelete} />
          ))}
        </ul>
      </div>
    );
  }
}
 
export default EmotionList;