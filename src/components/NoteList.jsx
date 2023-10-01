import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { showFormattedDate } from "../utils";

const NoteList = ({ data = [], filterNotes, setAllNotes }) => {
  const handleOnSwitch = (id, archived = true) => {
    const _notes = filterNotes?.map((note) =>
      note.id === id ? { ...note, archived } : note
    );
    setAllNotes(_notes);
  };

  const handleOnRemove = (id, title) => {
    if (confirm(`Hapus catatan: ${title}?`)) {
      const _notes = filterNotes.filter((note) => note.id !== id);
      setAllNotes(_notes);
    }
  };

  return (
    <ListGroup variant="flush">
      {data.map((d) => (
        <ListGroup.Item key={d.id}>
          <div>
            <h5>{d.title}</h5>
            <small>{showFormattedDate(d.createdAt)}</small>
            <p>{d.body}</p>
          </div>
          <div className="d-flex justify-content-end">
            <ButtonGroup>
              <Button
                variant="outline-danger"
                onClick={() => handleOnRemove(d.id, d.title)}
              >
                Hapus
              </Button>
              {d.archived ? (
                <Button
                  variant="primary"
                  onClick={() => handleOnSwitch(d.id, false)}
                >
                  Pindahkan
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  onClick={() => handleOnSwitch(d.id)}
                >
                  Arsipkan
                </Button>
              )}
            </ButtonGroup>
          </div>
        </ListGroup.Item>
      ))}
      {data.length === 0 && (
        <div className="w-100 p-6 text-center">
          <p className="fst-italic">Tidak ada catatan</p>
        </div>
      )}
    </ListGroup>
  );
};

export default NoteList;
