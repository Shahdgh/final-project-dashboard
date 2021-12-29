import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"

function EmployeeEditModal(props) {
  const { show, setShow, employee } = props
  const { editEmployee } = useContext(HospitalsContext)
  return (
    <Modal  show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editEmployee(e, employee._id)}>
        <Modal.Header style={{backgroundColor:"#6D3E6F",color:"white"}} closeButton>
          <Modal.Title style={{color:"white"}}>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" defaultValue={employee.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={employee.lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              EmployeeId
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="employeeId" defaultValue={employee.employeeId} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phone" defaultValue={employee.phone} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
             email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={employee.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" defaultValue={employee.avatar} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="password" defaultValue={employee.password} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Job
            </Form.Label>
            <Col md="8">
              <Form.Select type="text" name="job" defaultValue={employee.job}>
                <option value="Doctor">Doctor</option>
                <option value="Nurse">Nurse</option>
                <option value="Advisor">Advisor</option>
                <option value="Recepion">Recepion</option>
                <option value="Security">Security</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Employee
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EmployeeEditModal
