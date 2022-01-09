import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function PatientViewModal(props) {
  const { show, setShow, patient } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header style={{backgroundColor:"#202F1C",color:"white"}}closeButton>
        <Modal.Title >View Patient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Full Name:</strong> {patient.firstName} {patient.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>File Number:</strong> {patient.fileNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>avatar:</strong>{" "}
            <img src={patient.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>BloodType:</strong> {patient.bloodType}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {patient.email}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Disease:</strong> {patient.disease}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
            <strong>Phone:</strong> {patient.phone}
          </ListGroup.Item>
        <ListGroup.Item>
            <strong>Age:</strong> {patient.age}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Height:</strong> {patient.height}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Weight:</strong> {patient.weight}
          </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PatientViewModal