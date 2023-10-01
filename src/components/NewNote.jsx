import React, { useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";

const MAX_TEXT = 50;

const NewNote = ({ filterNotes, setAllNotes }) => {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (newNote.title.trim().length) {
      const _notes = [
        {
          id: new Date(),
          createdAt: new Date().toISOString(),
          archived: false,
          ...newNote,
        },
        ...filterNotes,
      ];
      setAllNotes(_notes);
      setNewNote({
        title: "",
        body: "",
      });
    }
  };

  const charLeft = useMemo(() => {
    return MAX_TEXT - newNote.title.length;
  }, [newNote, MAX_TEXT]);
  return (
    <Form onSubmit={handleOnSubmit} className="p-3">
      <h3>Buat catatan</h3>
      <div className="d-flex justify-content-end">
        <div>Sisa karakter: {charLeft}</div>
      </div>
      <Form.Group className="mb-3" controlId="noteForm.titleInput">
        <Form.Label>
          Judul <span className="text-danger">*</span>{" "}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Judul catatan"
          value={newNote.title}
          onChange={(e) => {
            setNewNote({
              title: e.target.value.substring(0, 50),
              body: newNote.body,
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="noteForm.noteInput">
        <Form.Label>Catatan</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Tulis catatanmu disini..."
          value={newNote.body}
          onChange={(e) =>
            setNewNote({
              body: e.target.value,
              title: newNote.title,
            })
          }
        />
      </Form.Group>
      <small>Keterangan:</small>
      <p>
        <span className="text-danger">{"* ) "}</span>Wajib diisi
      </p>
      <Button type="submit" variant="primary" className="w-100">
        Simpan
      </Button>
    </Form>
  );
};

export default NewNote;
