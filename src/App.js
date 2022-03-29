import { useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import './App.css';
import Cardgroup from './components/Cardgroup/Cardgroup';



function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <h1>Hello from React Bootstrap... Quite a piece...</h1>

      <Cardgroup></Cardgroup>



      <Button variant="danger">React Boot</Button>
      <Button variant="warning">React Boot</Button>
      <br></br>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <br></br>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div >

  )
}






export default App;
