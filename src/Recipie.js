import React from "react";
import style from './main.module.css'

const Recipie = props => {
    return (
        <div className={style.recipe}>
            <h2 className={style.recipeHeading}>{props.title}</h2>
            <p>Calories: {props.calories}</p>
            <img src={props.img} alt={props.label} className={style.recipeImg}/>
        </div>
    )
}

export default Recipie