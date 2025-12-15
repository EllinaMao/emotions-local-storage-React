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