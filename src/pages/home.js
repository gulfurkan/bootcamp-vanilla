import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../context/NoteContext.js'
import {NoteButton} from '../constants/styles'

export default function Home() {
    const context = React.useContext(NoteContext)

    return (
        <>
            <input style={{ width: '80%' }} onChange={context.hanleChange} value={context.note} />
            <button onClick={() => context.handleClick()}>Add note</button>
            {context.data.map((item) => {
                return (
                    <>
                        <br></br>
                        <NoteButton to={item.path}>{item.txt}</NoteButton>
                        <button onClick={() => context.deletenote(item.id)}>delete</button>
                    </>
                );
            })}

        </>
    )
}
