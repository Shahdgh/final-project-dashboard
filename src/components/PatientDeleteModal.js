import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
function PatientDeleteModal(props) {
  const { deletePatient } = useContext(HospitalsContext)
  const { show, setShow, patientId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header style={{backgroundColor:"#202F1C",color:"white"}} closeButton>
        <Modal.Title style={{color:"white"}}>Delete Patient</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Patient ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletePatient(patientId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PatientDeleteModal