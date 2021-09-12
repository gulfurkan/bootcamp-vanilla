import React from 'react'
import { useParams } from 'react-router'
import NoteContext from '../context/NoteContext.js'
export default function Notes() {
    const context = React.useContext(NoteContext)
    let {id} = useParams();

    const text = context.data.find((item) => item.id == id);

    console.log(id);

    return (
        <div>
            {text["txt"]}
        </div>
    )
}