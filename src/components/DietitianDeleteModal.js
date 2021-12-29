import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
function DietitianDeleteModal(props) {
  const { deleteDietitian } = useContext(HospitalsContext)
  const { show, setShow, dietitianId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header style={{backgroundColor:"#6D3E6F",color:"white"}} closeButton>
        <Modal.Title>Delete Dietitian</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this DietitianId ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteDietitian(dietitianId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DietitianDeleteModal