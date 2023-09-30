import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const MAX_TEXT = 50;

const NewNote = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("e", e);
  };

  const charLeft = MAX_TEXT - newNote.title.length;
  return (
    <Form onSubmit={handleOnSubmit} className="p-3">
      <h3>Buat catatan</h3>
      <div className="d-flex justify-content-end">
        <div>Sisa karakter: {charLeft}</div>
      </div>
      <Form.Group className="mb-3" controlId="noteForm.titleInput">
        <Form.Label>Judul</Form.Label>
        <Form.Control type="text" placeholder="Judul catatan" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="noteForm.noteInput">
        <Form.Label>Catatan</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Tulis catatanmu disini..."
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100">
        Simpan
      </Button>
    </Form>
  );
};

export default NewNote;
