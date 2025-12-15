import React, { Component } from "react";
import Header from "./components/Header";
import EmotionButton from "./components/EmotionButton";
import EmotionList from "./components/EmotionList";
import Footer from "./components/Footer";
import "./App.css";
/**
 * 2) Добавить возможность писать текстовое описание к каждому настроению и редактировать его позже. 
При добавлении эмоции пользователь может ввести текст (например: «Хороший день, всё получилось»). Текст сохраняется вместе с эмоцией. У каждой записи должна быть кнопка «Редактировать».
При редактировании: текст можно изменить и изменения сохраняются в состоянии и localStorage.
 */


const EMOTIONS = [
  { name: "Joy", color: "#FFD700" },
  { name: "Sadness", color: "#527fadff" },
  { name: "Anger", color: "#FF4500" },
  { name: "Calmness", color: "#32CD32" },
  { name: "Surprise", color: "#8A2BE2" },
];

class App extends Component {
  constructor(props) {
    super(props);
    const savedEmotions = JSON.parse(localStorage.getItem("emotions")) || [];
    this.state = {
      currentEmotion: null,
      emotions: savedEmotions,
    };
  }

  handleEmotionSelect = (emotion) => {
    this.setState((prevState) => {
      const newEntry = {
        name: emotion.name,
        color: emotion.color,
        date: new Date().toLocaleString(),
      };
      const updatedEmotions = [...prevState.emotions, newEntry];
      localStorage.setItem("emotions", JSON.stringify(updatedEmotions));
      return {
        currentEmotion: emotion,
        emotions: updatedEmotions,
      };
    });
  };
  //need think a but more
  handleDeleteEmotion = (index) => {
    this.setState((prevState) => {
      //remove item of deleted index
      const updatedEmotions = prevState.emotions.filter((_, i) => i !== index);

      //upd localSt
      localStorage.setItem("emotions", JSON.stringify(updatedEmotions));

      //need to check upd emotions and currentEmotion
      //to do - clean up to look shorter
      //use ternar operator
      //later
      let lastEmotion;
      if (updatedEmotions.length > 0) {
        lastEmotion = updatedEmotions[updatedEmotions.length - 1];
      }
      else {
        lastEmotion = null;
      }

      return {
        emotions: updatedEmotions,
        currentEmotion: lastEmotion
      };
    });
  }
  render() {
    const { currentEmotion, emotions } = this.state;

    const appStyle = {
      backgroundColor: currentEmotion ? currentEmotion.color : "#f0f0f0",
    };

    return (
      <div className="app-container" style={appStyle}>
        <Header title="Emotional diary" />

        <div className="content">
          <div className="emotion-buttons">
            {EMOTIONS.map((emotion) => (
              <EmotionButton
                key={emotion.name}
                emotion={emotion}
                onSelect={this.handleEmotionSelect}
              />
            ))}
          </div>

          <div className="emotion-list-container">
            <EmotionList
              emotions={emotions}
              onDelete={this.handleDeleteEmotion} />
          </div>
        </div>

        <Footer emotions={emotions} />
      </div>
    );
  }
}

export default App;