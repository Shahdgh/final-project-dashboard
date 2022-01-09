import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"

function DietitianAddModal(props) {
  const { show, setShow } = props
  const { addDietitian } = useContext(HospitalsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addDietitian}>
        <Modal.Header style={{backgroundColor:"#202F1C",color:"white"}} closeButton>
          <Modal.Title>Add Dietitian</Modal.Title>
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
              EmployeeId
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="employeeId" required />
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
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
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
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="" style={{backgroundColor:"#202F1C",color:"white"}} type="submit" onClick={() => setShow(false)}>
            Add Dietitian
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DietitianAddModal
