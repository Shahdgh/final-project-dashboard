import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
function TypeDeleteModal(props) {
  const { deleteType } = useContext(HospitalsContext)
  const { show, setShow,typeId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header style={{backgroundColor:"#202F1C",color:"white"}} closeButton>
        <Modal.Title style={{color:"white"}}>Delete Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Menue ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteType(typeId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TypeDeleteModal