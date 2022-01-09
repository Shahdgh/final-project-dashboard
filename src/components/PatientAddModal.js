import HospitalsContext from "../utils/HospitalsContext";
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
function PatientAddModal(props) {
    const { show, setShow } = props
  const { addPatient } = useContext(HospitalsContext)
 
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addPatient}>
        <Modal.Header style={{backgroundColor:"#202F1C",color:"white"}}closeButton white>
          <Modal.Title style={{color:"white"}}>Add Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              file Number
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="fileNumber" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phone" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Disease
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="disease" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email"  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar"  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Blood Type
            </Form.Label>
            <Col md="8">
              <Form.Select  height="20%" type="text" name="bloodType">
                <option value="a+">A+</option>
                <option value="AB+">AB +</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="AB-">AB -</option>
                <option value="O-">O-</option>
                <option value="B-">B-</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Age
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="age"  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Height
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="height"  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Weight
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="weight"  />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant=""style={{backgroundColor:"#202F1C",color:"white"}} type="submit" onClick={() => setShow(false)}>
            Add Patient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal> );
}

export default PatientAddModal;