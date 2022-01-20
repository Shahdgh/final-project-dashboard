import { Button, Form, Modal, Col, Row } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
function TypeAddModal(props) {
  const { show, setShow } = props
  const { addType } = useContext(HospitalsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addType}>
        <Modal.Header style={{ backgroundColor: "#202F1C", color: "white" }} closeButton>
          <Modal.Title>Add Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name:
            </Form.Label>
            <Col md="9">
              <Form.Control type="text" name="name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant=""
            style={{ backgroundColor: "#202F1C", color: "white" }}
            type="submit"
            onClick={() => setShow(false)}
          >
            Add Type
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TypeAddModal
