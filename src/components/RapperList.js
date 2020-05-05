import React from 'react'
import RapperCard from './RapperCard'

export default function RapperList(props) {

    function showRappers() {
        return props.rappers.map(function (rapper) {
            return <RapperCard rapper={rapper} />
        })
    }

    return (
        <ul className="rapper-list">
            {showRappers()}
        </ul>
    )

}