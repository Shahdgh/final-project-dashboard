import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FcViewDetails } from "react-icons/fc"
import MealViewModal from "./MealViewModal"

function MealRow(props) {
  const { meal } = props
  const [viewShow, setViewShow] = useState(false)
  const client = meal.employee || meal.patient || meal.patientCompanion


  return (
    <>
      <tr style={{ fontSize: "13px", fontWeight: "600", textAlign: "center", paddingTop: "200px" }}>
        <td style={{ paddingTop: "50px" }}>{meal._id}</td>
        <td style={{ paddingTop: "50px" }}>
        <p>{client.firstName} {client.lastName} </p>
        <p>{client.disease}  </p>
        </td>
        
        {meal.comment ? <td>{meal.comment}</td> : <td>--</td>}
        <td style={{ paddingTop: "50px" }}>{meal.status}</td>
          
        <td>
          {meal.ingredients.map(
            ingredient => (
            //   <p>{ingredient.name}</p>
              <img src={ingredient.image} style={{ objectFit: "contain", height: "50px", width: "50%" }} />  )
          )}
        </td>
        <td>
          <Button
            style={{ fontSize: "25px", fontWeight: "800" }}
            variant=""
            className="me-2"
            onClick={() => setViewShow(true)}
          >
            <FcViewDetails />
          </Button>
        </td>
        <MealViewModal show={viewShow} setShow={setViewShow} meal={meal} />
      </tr>
    </>
  )
}

export default MealRow
