import React, { useState, useEffect } from 'react';
import '../NoteList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote) {
      const note = {
        content: newNote,
        timestamp: new Date().toLocaleString()
      };

      setNotes([...notes, note]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Força a exibição da mensagem de confirmação

      // Mensagem de confirmação personalizada
      const confirmationMessage =
        'Tem certeza de que deseja sair? Suas alterações não serão salvas.';

      return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const calculateTextareaRows = () => {
      const noteLines = newNote.split('\n').length;
      const minRows = 4;
      const maxRows = 10;
      const rows = Math.min(Math.max(noteLines, minRows), maxRows);
      return rows;
    };

    const textarea = document.querySelector('.note-list textarea');
    if (textarea) {
      textarea.rows = calculateTextareaRows();
    }
  }, [newNote]);

  return (
    <div className="note-list">
      <h1>Tarefas</h1>
      <textarea
        value={newNote}
        onChange={handleNoteChange}
        placeholder="Adicionar nota"
        rows={4}
      />
      <button id="button" className="btn btn-dark" onClick={addNote}>
        Adicionar
      </button>

      {notes.map((note, index) => (
        <div key={index} className="note-item">
          <p>{note.content}</p>
          <p>{note.timestamp}</p>
          <div className="note-item-footer">
            <h6>Concluido</h6>
            <input type='radio'></input>
            </div>
            <button onClick={() => deleteNote(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;








