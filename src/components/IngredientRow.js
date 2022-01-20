import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FcEditImage, FcDeleteRow } from "react-icons/fc"
import IngredientEditModal from "./IngredientEditModal"
import IngredientDeleteModal from "./IngredientDeleteModal"

function IngredientRow(props) {
  const { ingredient } = props
  const [editShow, setEditShow] = useState(false)

  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <>
      <tr style={{ fontSize: "13px", fontWeight: "600", textAlign: "center", paddingTop: "200px" }}>
        <td style={{ paddingTop: "50px" }}>{ingredient._id}</td>
        <td style={{ paddingTop: "50px" }}>{ingredient.name}</td>
        <td style={{ paddingTop: "50px" }}>{ingredient.description}</td>
        <td style={{ paddingTop: "50px" }}>{ingredient.calories}</td>

        <td>
          <img src={ingredient.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>

        <td>
          {ingredient.types.map(type => (
            <p>{type.name}</p>
          ))}
        </td>
        <td>
          <Button
            variant=""
            style={{ fontSize: "30px", fontWeight: "800" }}
            className="me-2"
            onClick={() => setEditShow(true)}
          >
            <FcEditImage />
          </Button>

          <Button style={{ fontSize: "25px", fontWeight: "bold" }} variant="" onClick={() => setDeleteShow(true)}>
            <FcDeleteRow />
          </Button>
        </td>

        <IngredientEditModal show={editShow} setShow={setEditShow} ingredient={ingredient} />
        <IngredientDeleteModal show={deleteShow} setShow={setDeleteShow} ingredientId={ingredient._id} />
      </tr>
    </>
  )
}

export default IngredientRow
