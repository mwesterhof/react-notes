import classes from './Note.module.css';
import { useState } from 'react';


const Note = (props) => {
    const clickHandler = () => {
        props.setNoteActive(props.id, !props.note.active);
    }

    const closeHandler = (e) => {
        props.killMe(props.id);
        e.stopPropagation();
    };

    return (
        <div className={classes.Note} onClick={clickHandler}>
            <h2>
                {props.note.active ? props.note.title : <strike>{props.note.title}</strike>}
            </h2>
            <p>
                {props.note.active ? props.note.message : <strike>{props.note.message}</strike>}
            </p>
            <button onClick={closeHandler}>X</button>
        </div>
    );
};

export default Note;
