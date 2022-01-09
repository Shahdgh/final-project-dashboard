import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"

function DietitianEditModal(props) {
  const { show, setShow, dietitian } = props
  const { editDietitian } = useContext(HospitalsContext)
  return (
    <Modal  show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editDietitian(e, dietitian._id)}>
        <Modal.Header style={{backgroundColor:"#202F1C",color:"white"}} closeButton>
          <Modal.Title style={{color:"white"}}>Edit Dietitian</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" defaultValue={dietitian.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={dietitian.lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              EmployeeId
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="employeeId" defaultValue={dietitian.employeeId} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phone" defaultValue={dietitian.phone} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
             email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={dietitian.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" defaultValue={dietitian.avatar} />
            </Col>
          </Form.Group>
     
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Dietitian
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DietitianEditModal
