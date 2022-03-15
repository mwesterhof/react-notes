import Layout from './Layout';

import Note from '../components/Note';
import NoteForm from '../components/NoteForm';

import classes from './NotesPage.module.css';

import useStorageState from '../utils/Storage';



const NotesPage = () => {
    const [notes, setNotes] = useStorageState([], 'notes')
    const newNoteHandler = (note) => {
        setNotes(old => old.concat([note]));
    };
    const killNote = (id) => {
        setNotes(old => {
            var copied = [...notes];
            copied.splice(id, 1);
            return copied;
        });
    };

    const setNoteActive = (i, active) => {
        setNotes(old => {
            var copied = [...notes];
            copied[i].active = active;
            return copied;
        });
    };

    return (
        <Layout pageTitle="Notes">
            <div className={classes.NoteContainer}>
                {notes.map((note, i) => <Note setNoteActive={setNoteActive} killMe={killNote} id={i} key={i} note={note} />)}
            </div>
            <NoteForm newNoteHandler={newNoteHandler} />
        </Layout>
    );
};

export default NotesPage;
