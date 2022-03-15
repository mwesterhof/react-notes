import classes from './NoteForm.module.css';
import { useEffect, useRef } from 'react';

const NoteForm = (props) => {
    const titleRef = useRef();
    const messageRef = useRef();

    useEffect(() => {
        titleRef.current.focus();
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            title: titleRef.current.value,
            message: messageRef.current.value,
            active: true
        };
        props.newNoteHandler(newNote);
        titleRef.current.value = '';
        messageRef.current.value = '';
    };

    return (
        <div className={classes.NoteForm}>
            <h3>new note:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title</label>
                <br />
                <input type="text" id="title" required ref={titleRef} />
                <br />
                <label htmlFor="message">message</label>
                <br />
                <textarea rows="5" cols="30" id="message" required ref={messageRef} />
                <br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default NoteForm;
