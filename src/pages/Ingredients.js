import React from "react"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact"
import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Button } from "react-bootstrap"
import { FcAddDatabase } from "react-icons/fc"
import IngredientRow from "../components/IngredientRow"
import IngredientAddModal from "../components/IngredientAddModal"

function Ingredients() {
  const { ingredients } = useContext(HospitalsContext)
  const [show, setShow] = useState(false)

  if (!ingredients) return <p> loding..</p>
  const data = () => {
    return {}
  }
  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "0px", textAlign: "center" }}>
        Ingredients List{" "}
        <Button
          style={{ marginLeft: "40px", marginBottom: "10px", fontSize: "40px" }}
          onClick={() => setShow(true)}
          variant=""
        >
          <FcAddDatabase />{" "}
        </Button>
      </h1>

      <CDBContainer>
        <CDBTable striped bordered hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} materialSearch={true}>
          <tr
            style={{
              textAlign: "center",
              tableLayout: "sticky",
              backgroundColor: "#202F1C",
              color: "white",
              padding: "0px",
            }}
          >
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "15%" }}> Name </th>
            <th style={{ width: "15%" }}>description</th>
            <th style={{ width: "10%" }}>Calories</th>
            <th style={{ width: "30%" }}>image</th>
            <th style={{ width: "10%" }}>Types</th>
            <th style={{ width: "35%" }}>Actions</th>
          </tr>

          <CDBTableBody style={{ textAlign: "center" }}>
            {ingredients.map(ingredient => (
              <IngredientRow key={ingredient._id} ingredient={ingredient} />
            ))}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
      <IngredientAddModal show={show} setShow={setShow} />
    </>
  )
}
export default Ingredients
