import React, { useState } from 'react';
import '../NoteList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addNote = () => {
    if (newNote && startTime) {
      const note = {
        content: newNote,
        startTime: startTime,
        endTime: endTime ? endTime : null,
        timestamp: new Date().toLocaleString()
      };

      const column = notes.length % 2 === 0 ? 0 : 1;
      const updatedNotes = [...notes];

      if (editIndex !== -1) {
        // Editar nota existente
        updatedNotes[editIndex] = { ...note, column };
      } else {
        // Adicionar nova nota
        updatedNotes.push({ ...note, column });
      }

      setNotes(updatedNotes);
      setNewNote('');
      setStartTime('');
      setEndTime('');
      setEditIndex(-1);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    const note = notes[index];
    setNewNote(note.content);
    setStartTime(note.startTime);
    setEndTime(note.endTime || '');
    setEditIndex(index);
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);
    setStartTime(currentTime);
  };

  const handleRadioChange = () => {
    const currentTime = new Date().toLocaleTimeString();
    setEndTime(currentTime);
  };

  return (
    <div className="container">
      <h1>Tarefas</h1>
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="start-time">Início:</label>
          <input
            type="text"
            id="start-time"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
            placeholder="HH:MM"
          />
          <button className="btn btn-primary" onClick={getCurrentTime}>
            Buscar Hora Atual
          </button>
        </div>
        <div className="col-md-4">
          <label htmlFor="end-time">Fim:</label>
          <input
            type="text"
            id="end-time"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
            placeholder="HH:MM"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <textarea
            value={newNote}
            onChange={handleNoteChange}
            placeholder="Adicionar nota"
            rows={4}
          />
        </div>
        <div className="col-md-6 d-flex align-items-end">
          <button className="btn btn-dark" onClick={addNote}>
            {editIndex !== -1 ? 'Editar' : 'Adicionar'}
          </button>
        </div>
      </div>
      <div className="row">
        {notes.map((note, index) => (
          <div key={index} className={`col-md-6 note-item note-column-${note.column}`}>
            <div className="note-content">
              <p>{note.content}</p>
              <p>Inicio: {note.startTime}</p>
              {note.endTime !== null && <p>Fim: {note.endTime}</p>}
              <p>{note.timestamp}</p>
            </div>
            <div className="note-item-footer">
              <h6>Concluído</h6>
              <input type="radio" onChange={handleRadioChange} />
            </div>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => editNote(index)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteNote(index)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
