import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Col, Form, Modal,Row} from "react-bootstrap"

function TypeEditModal(props) {
  const { show, setShow, type } = props
  const { editType } = useContext(HospitalsContext)
  return (
    <Modal  show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editType(e, type._id)}>
        <Modal.Header style={{backgroundColor:"#202F1C",color:"white"}} closeButton>
          <Modal.Title style={{color:"white"}}>Edit Dietitian</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
               Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="name" type="text" defaultValue={type.name} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={type.image} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Type
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TypeEditModal