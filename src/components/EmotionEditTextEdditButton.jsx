import React, { Component } from "react";
/**The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. */

class EmotionTextButton extends Component {
    render() {
        const { onClick, className } = this.props;
        return (<>
        </>);
    }
}

/**
 * 
 * 2) Добавить возможность писать текстовое описание к каждому настроению и редактировать его позже. 
При добавлении эмоции пользователь может ввести текст (например: «Хороший день, всё получилось»). Текст сохраняется вместе с эмоцией. У каждой записи должна быть кнопка «Редактировать».
При редактировании: текст можно изменить и изменения сохраняются в состоянии и localStorage.
 * 
 */