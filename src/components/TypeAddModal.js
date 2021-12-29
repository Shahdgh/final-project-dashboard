import { Button, Form, Modal,Col ,Row} from "react-bootstrap";
import HospitalsContext from "../utils/HospitalsContext";
import { useContext } from "react"
function TypeAddModal(props) {
    const { show, setShow } = props
  const { addType } = useContext(HospitalsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addType}>
        <Modal.Header style={{backgroundColor:"#6D3E6F",color:"white"}} closeButton>
          <Modal.Title>Add Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Name:
            </Form.Label>
            <Col md="9">
              <Form.Control type="text" name="name"  />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Dietitian
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
     );
}

export default TypeAddModal;