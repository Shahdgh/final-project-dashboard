import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"

function PatientEditModal(props) {
  const { show, setShow, patient } = props
  const { editPatient } = useContext(HospitalsContext)
  return (
    <Modal  show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editPatient(e, patient._id)}>
        <Modal.Header style={{backgroundColor:"#6D3E6F",color:"white"}} closeButton>
          <Modal.Title style={{color:"white"}}>Edit Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" defaultValue={patient.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={patient.lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              File Number
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="fileNumber" defaultValue={patient.fileNumber} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phone" defaultValue={patient.phone} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
             email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={patient.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" defaultValue={patient.avatar} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Age
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="age" defaultValue={patient.age} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Disease
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="disease" defaultValue={patient.disease} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Blood Type
            </Form.Label>
            <Col md="8">
              <Form.Select  height="20%" type="bloodType" name="bloodType" defaultValue={patient.bloodType}>
              <option value="A+">A+</option>
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
              Height
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="height" defaultValue={patient.height} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Weight
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="weight" defaultValue={patient.weight} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Patient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PatientEditModal