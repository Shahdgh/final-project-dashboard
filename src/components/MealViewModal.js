import { useContext } from "react";
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext";

function MealViewModal(props) {
   
      const { show, setShow, meal } = props
      const {ingredients}= useContext(HospitalsContext)
      const client = meal.employee || meal.patient || meal.patientCompanion
  return (<>
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header style={{backgroundColor:"#6D3E6F",color:"white"}}closeButton>
        <Modal.Title >View Meals</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
     
          <ListGroup.Item>
            <strong>Requester Information:</strong> <p>{client.firstName} {client.lastName} </p>
        <p>{client.disease}  </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Comment:</strong> {meal.comment ? <p>{meal.comment}</p> : <p>--</p>}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Stauts:</strong> {meal.status}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Ingredient:</strong>{" "}
            {meal.ingredients.map(
            ingredient => (
           
            <img src={ingredient.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} /> 
            )
          )}
          </ListGroup.Item>
          
       
        </ListGroup>
   
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
</>);
}
export default MealViewModal;




