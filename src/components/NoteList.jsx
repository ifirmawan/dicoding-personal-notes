import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { showFormattedDate } from "../utils";

const NoteList = ({ data = [] }) => {
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
              <Button variant="outline-danger">Hapus</Button>
              <Button variant="outline-secondary">Arsipkan</Button>
            </ButtonGroup>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default NoteList;
