import React, {useEffect, useState} from 'react';
import Recipie from "./Recipie";
import './App.css';
import styles from './main.module.css'

function App() {
    const APP_ID = 'c1821ad2'
    const APP_KEY = '5c9b03666e2887fc9b151e365b3b2595'
    const [recipies, setRecipies] = useState([])
    const [query, setQuery] = useState('')
    const [queryFinished, setQueryFinished] = useState('')
    useEffect(() => {
        getRecipes()
    }, [queryFinished]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${queryFinished}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        // const covid = await fetch("https://api.covid19api.com/summary")
        // const covidRes = await covid.json()
        // console.log(covidRes)
        const data = await response.json()
        setRecipies(data.hits)
    }

    function handleInput(e) {
        setQuery(e.target.value)
    }

    function getResults(e) {
        e.preventDefault()
        setQueryFinished(query)
        setQuery('')
    }

    return (
        <div className={"App"}>
            <form className={''} onSubmit={getResults}>
                <input
                    type="text"
                    placeholder={"..."}
                    className={styles.searchBar}
                    onChange={handleInput}
                />
                {/*<button type={"submit"}>ok</button>*/}
            </form>
            <div className={styles.recipeContainer}>
                {recipies.map((el, idx) => {
                    const data = el.recipe
                    return (
                        <Recipie
                            key={idx}
                            title={data.label}
                            img={data.image}
                            calories={data.calories}
                            label={data.label}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App;
