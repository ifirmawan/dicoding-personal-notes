import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Navbar,
  InputGroup,
} from "react-bootstrap";
import NewNote from "./NewNote";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import ExpandIcon from "./icons/ExpandIcon";
import SearchIcon from "./icons/SearchIcon";
import ExitFullscreenIcon from "./icons/ExitFullscreenIcon";

const Notes = () => {
  const initNotes = getInitialData();
  const [activeNotes, setActiveNotes] = useState(initNotes);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [fullScreen, setFullscreen] = useState({
    active: false,
    archived: false,
  });

  return (
    <Container fluid>
      <Navbar expand="lg" className="d-flex justify-content-between">
        <Navbar.Brand>Notes</Navbar.Brand>
        <Form>
          <InputGroup>
            <InputGroup.Text>
              <SearchIcon />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Cari catatan" />
          </InputGroup>
        </Form>
      </Navbar>
      <Row>
        <Col xs={8} className="d-flex flex-column vh-100 py-3 bg-body-tertiary">
          <div
            className={
              fullScreen.archived
                ? "d-none"
                : "d-flex pb-3 justify-content-between"
            }
          >
            <div className="w-50">
              <h4>Catatan Aktif</h4>
            </div>
            <div>
              <Button
                type="button"
                variant="link"
                onClick={() =>
                  setFullscreen({ active: !fullScreen.active, archived: false })
                }
              >
                {fullScreen.active ? <ExitFullscreenIcon /> : <ExpandIcon />}
              </Button>
            </div>
          </div>
          <div
            className={`${fullScreen.archived ? "d-none" : ""} flex-row ${
              fullScreen.active ? "h-auto" : "h-50"
            } overflow-auto`}
          >
            <NoteList data={activeNotes} />
          </div>
          <div
            className={
              fullScreen.active
                ? "d-none"
                : "d-flex py-3 justify-content-between"
            }
          >
            <div>
              <h4>Arsip</h4>
            </div>
            <div>
              <Button
                type="button"
                variant="link"
                onClick={() =>
                  setFullscreen({
                    archived: !fullScreen.archived,
                    active: false,
                  })
                }
              >
                {fullScreen.archived ? <ExitFullscreenIcon /> : <ExpandIcon />}
              </Button>
            </div>
          </div>
          <div
            className={`${fullScreen.active ? "d-none" : ""} flex-row ${
              fullScreen.archived ? "h-auto" : "h-50"
            } overflow-auto`}
          >
            <NoteList data={archivedNotes} />
          </div>
        </Col>
        <Col xs={4}>
          <NewNote />
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
