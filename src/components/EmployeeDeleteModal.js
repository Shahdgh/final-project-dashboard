import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
function EmployeeDeleteModal(props) {
  const { deleteEmployee } = useContext(HospitalsContext)
  const { show, setShow, employeeId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header style={{backgroundColor:"#6D3E6F",color:"white"}} closeButton>
        <Modal.Title style={{color:"white"}}>Delete Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Emplyee ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteEmployee(employeeId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EmployeeDeleteModal
