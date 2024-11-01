import classes from './Note.module.css';


const Note = (props) => {
    const clickHandler = () => {
        props.setNoteActive(props.id, !props.note.active);
    }

    const closeHandler = (e) => {
        props.killMe(props.id);
        e.stopPropagation();
    };

    const classNames = `${classes.Note}${props.note.active ? '': ` ${classes.inactive}`}`;

    return (
        <div className={classNames} onClick={clickHandler}>
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
