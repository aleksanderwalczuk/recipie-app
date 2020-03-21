import React, {useState} from "react";
import style from './main.module.css'
require('dotenv').config();


const Recipie = props => {
    const [displayModal, setDisplayModal] = useState(false)
    // console.log(props.modalData)

    const Modal = props => {
        console.log(props)
        return (
            <div
                className={style.modalContainer}
                style={{display: displayModal ? 'flex':'none'}}
            >
                <h3>Ingredients:</h3>
                <ul className={style.modalListContainer}>
                    {displayModal ? props.items.map((el, idx) => {
                        return (<li
                            key={idx}
                            className={style.modalListItem}
                        >
                            {el.text}
                        </li>)
                    })
                        : ''}
                </ul>
            </div>
        )
    }

    return (
        <>
            <div className={style.recipe}>
                <h2 className={style.recipeHeading}>{props.title}</h2>
                <p>Calories: {props.calories}</p>
                <img src={props.img} alt={props.label} className={style.recipeImg}/>
                <button
                    className={style.btnDescription}
                    onClick={()=> setDisplayModal(!displayModal)}
                >
                    check ingredients
                </button>
                <Modal showModal={displayModal} items={props.modalData}/>
            </div>
        </>
    )
}


export default Recipie