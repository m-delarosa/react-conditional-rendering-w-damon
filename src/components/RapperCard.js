import React from 'react'

export default function RapperCard(props) {
    // CONST {name, rating, bestAlbum}

    return (
        <li className={props.rapper.rating < 10 ? "rapper-card" : "gold-rapper rapper-card"}>
            <h2>{props.rapper.name.length >= 5 ? props.rapper.name : props.rapper.name.toUpperCase()}</h2>
            <p>{props.rapper.rating}</p>
            <p>{props.rapper.best_album ? props.rapper.best_album : "This rapper is too bad to have a best album."}</p>
        </li>
    )
}